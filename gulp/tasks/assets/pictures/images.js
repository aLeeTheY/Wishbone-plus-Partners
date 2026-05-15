import gulp from 'gulp'
import gulpIf from 'gulp-if'
import gulpNewer from 'gulp-newer'
import browserSync from 'browser-sync'

import { env } from '../../../config/env.js'
import { path } from '../../../config/path.js'
import {
    plumberWithErrorHandler,
    NOTIFICATION_HANDLER_TITLES,
} from '../../../helpers/error-handler.js'

// import Vinyl from 'vinyl'
import sharp from 'sharp'
import through2 from 'through2'
// import sharpOptimizeImages from 'gulp-sharp-optimize-images'

// * --- GOOGLE RESPONSIVE BREAKPOINTS (WIDTHS)
// * -----------------------------------------
const BREAKPOINTS = {
    original: null, // Флаг для обработки оригинального размера
    desktop: 1440,
    laptop: 1024,
    tablet: 768,
    mobile: 320,
}

// * --- PROCESS AND OPTIMIZE WITH SHARP DIRECTLY
// * --------------------------------------------
function processAndOptimizeImages() {
    // Используем обычную функцию, чтобы through2 передал callback
    return through2.obj(function (file, enc, callback) {
        if (file.isNull()) {
            return callback(null, file)
        }
        if (file.isStream()) {
            return callback(new Error('Streaming not supported'))
        }

        // Стрелочная функция автоматически наследует `this` родителя (потока through2).
        // Это решает ошибку ESLint "Unexpected aliasing of 'this'".
        const asyncWork = async () => {
            const ext = file.extname.toLowerCase()

            if (ext === '.gif') {
                this.push(file)
                return
            }

            const metadata = await sharp(file.contents).metadata()
            const originalWidth = metadata.width

            for (const [sizeName, width] of Object.entries(BREAKPOINTS)) {
                if (width && originalWidth && originalWidth <= width) {
                    continue
                }

                const suffix = sizeName === 'original' ? '' : `-${sizeName}`
                const baseName = file.stem + suffix

                let pipeline = sharp(file.contents)
                if (width) {
                    pipeline = pipeline.resize({ width: width, withoutEnlargement: true })
                }

                const formatsToGenerate = [
                    { ext: ext, type: ext.replace('.', '') },
                    { ext: '.webp', type: 'webp' },
                    { ext: '.avif', type: 'avif' },
                ]

                for (const format of formatsToGenerate) {
                    let formatPipeline = pipeline.clone()

                    if (format.type === 'jpg' || format.type === 'jpeg') {
                        formatPipeline = formatPipeline.jpeg({
                            quality: env.buildMode.isDev ? 100 : 80,
                            mozjpeg: env.buildMode.isStaging || env.buildMode.isProd,
                            progressive: true,
                        })
                    } else if (format.type === 'png') {
                        formatPipeline = formatPipeline.png({
                            effort: env.buildMode.isDev ? 1 : 10,
                            quality: env.buildMode.isDev ? 100 : 80,
                            compressionLevel: env.buildMode.isDev ? 0 : 9,
                            palette: true,
                        })
                    } else if (format.type === 'webp') {
                        formatPipeline = formatPipeline.webp({
                            effort: env.buildMode.isDev ? 0 : 6,
                            quality: env.buildMode.isDev ? 100 : 60,
                        })
                    } else if (format.type === 'avif') {
                        formatPipeline = formatPipeline.avif({
                            effort: env.buildMode.isDev ? 0 : 9,
                            quality: env.buildMode.isDev ? 100 : 50,
                            bitdepth: 8,
                        })
                    }

                    const outputBuffer = await formatPipeline.toBuffer()

                    const newFile = file.clone({ contents: false })
                    newFile.contents = outputBuffer
                    newFile.stem = baseName
                    newFile.extname = format.ext

                    // Контекст `this` взят из внешнего through2, линтер больше не ругается
                    this.push(newFile)
                }
            }
        }

        // Запускаем асинхронную работу и связываем результат с callback
        asyncWork()
            .then(() => callback())
            .catch((err) => callback(err))
    })
}
// * --- EXPORT GULP TASK FOR IMAGES (RASTER) FILES
// * ----------------------------------------------
export function images() {
    return (
        gulp
            .src(path.src.images, { encoding: false })
            .pipe(plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.IMAGES))
            .pipe(
                gulpIf(
                    env.buildMode.isStaging || env.buildMode.isProd,
                    gulpNewer(path.build.images),
                ),
            )
            // * генерируем адаптивные копии (они получат суффиксы -mobile, -tablet и т.д.)
            // .pipe(generateResponsiveImages())
            // * генерируем avif/webp и оптимизируем изображения
            // .pipe(
            //     sharpOptimizeImages({
            //         // * format {from}_to_{to}
            //         jpg_to_jpg: {
            //             quality: env.buildMode.isDev ? 100 : 80,
            //             mozjpeg: env.buildMode.isStaging || env.buildMode.isProd,
            //             progressive: true,
            //         },
            //         png_to_png: {
            //             effort: env.buildMode.isDev ? 1 : 10,
            //             quality: env.buildMode.isDev ? 100 : 80,
            //             progressive: true,
            //             compressionLevel: env.buildMode.isDev ? 0 : 9,
            //         },
            //         webp: {
            //             effort: env.buildMode.isDev ? 0 : 6,
            //             quality: env.buildMode.isDev ? 100 : 60,
            //             // lossless: true,
            //             // nearLossless: true,
            //         },
            //         avif: {
            //             effort: env.buildMode.isDev ? 0 : 9,
            //             quality: env.buildMode.isDev ? 100 : 50,
            //             bitdepth: 8,
            //             // lossless: false,
            //         },
            //         // gif: {},
            //     }),
            // )
            // * генерируем адаптивные размеры + конвертируем в форматы + сжимаем
            .pipe(processAndOptimizeImages())
            .pipe(gulp.dest(path.build.images))
            .pipe(browserSync.stream())
    )
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('images', images)
