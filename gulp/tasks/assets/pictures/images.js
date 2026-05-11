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

import sharpOptimizeImages from 'gulp-sharp-optimize-images'

// * --- EXPORT GULP TASK FOR IMAGES (RASTER) FILES
// * ----------------------------------------------
export function images() {
    return gulp
        .src(path.src.images, { encoding: false })
        .pipe(plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.IMAGES))
        .pipe(gulpIf(env.buildMode.isStaging || env.buildMode.isProd, gulpNewer(path.build.images)))
        .pipe(
            sharpOptimizeImages({
                // * format {from}_to_{to}
                jpg_to_jpg: {
                    quality: env.buildMode.isDev ? 100 : 80,
                    mozjpeg: env.buildMode.isStaging || env.buildMode.isProd,
                    progressive: true,
                },
                png_to_png: {
                    effort: env.buildMode.isDev ? 1 : 10,
                    quality: env.buildMode.isDev ? 100 : 80,
                    progressive: true,
                    compressionLevel: env.buildMode.isDev ? 0 : 9,
                },
                webp: {
                    effort: env.buildMode.isDev ? 0 : 6,
                    quality: env.buildMode.isDev ? 100 : 60,
                    // lossless: true,
                    // nearLossless: true,
                },
                avif: {
                    effort: env.buildMode.isDev ? 0 : 9,
                    quality: env.buildMode.isDev ? 100 : 50,
                    bitdepth: 8,
                    // lossless: false,
                },
                // gif: {},
            }),
        )
        .pipe(gulp.dest(path.build.images))
        .pipe(browserSync.stream())
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('images', images)
