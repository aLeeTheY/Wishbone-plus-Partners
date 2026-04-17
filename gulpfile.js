// * --- IMPORT
// * ----------
import fs from 'fs'

import gulp from 'gulp'
import browserSync from 'browser-sync'
import fileInclude from 'gulp-file-include'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'

import { deleteAsync } from 'del'

import gulpIf from 'gulp-if'
import sourcemaps from 'gulp-sourcemaps'
import rename from 'gulp-rename'
import replace from 'gulp-replace'

import gulpSass from 'gulp-sass'
import * as dartSass from 'sass'
const sass = gulpSass(dartSass)

import postcss from 'gulp-postcss'
import cleanCSS from 'gulp-clean-css'

import esbuild from 'esbuild'

import imagemin from 'gulp-imagemin'
import webp from 'gulp-webp'
import webphtml from 'gulp-webp-html'

import svgSprite from 'gulp-svg-sprite'

import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

import rev from 'gulp-rev'
import revRewrite from 'gulp-rev-rewrite'

import ffmpeg from 'gulp-fluent-ffmpeg'
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
// ffmpeg.setFfmpegPath(ffmpegInstaller.path)

import * as critical from 'critical'

import mergeStream from 'merge-stream'

// * --- BUILD MODE
// * --------------
const NODE_ENV = process.env.NODE_ENV ?? 'production'

const isDev = NODE_ENV === 'development'
const isProd = NODE_ENV === 'production'
const isStaging = NODE_ENV === 'staging'

// * --- VERSION
// * -----------
// const version = `?v=${Date.now()}`

// * --- PATH
// * --------
const buildBase = './out'
const srcBase = './src'

const path = {
    clean: buildBase,
    build: {
        base: `${buildBase}/`,
        html: `${buildBase}/`,
        js: `${buildBase}/js/`,
        css: `${buildBase}/css/`,
        icons: `${buildBase}/assets/icons/`,
        images: `${buildBase}/assets/images/`,
        videos: `${buildBase}/assets/videos/`,
        fonts: `${buildBase}/assets/fonts/`,
        misc: `${buildBase}/assets/misc/`,
        libs: `${buildBase}/libs/`,
    },
    src: {
        base: `${srcBase}/`,
        html: `${srcBase}/*.html`,
        ts: `${srcBase}/ts/main.ts`,
        scss: `${srcBase}/scss/*.scss`,
        icons: `${srcBase}/assets/icons/**/*.{svg}`,
        images: `${srcBase}/assets/images/**/*.{jpg,jpeg,png}`,
        // images: `${srcBase}/assets/images/**/*.{jpg,jpeg,png,gif,ico,webp}`,
        videos: `${srcBase}/assets/videos/**/*.{mp4,avi,mov,mkv,webm}`,
        fonts: `${srcBase}/assets/fonts/**/*.{ttf,otf,woff,woff2}`,
        misc: `${srcBase}/assets/misc/**/*.*`,
        libs: `${srcBase}/libs/**/*.*`,
    },
    watch: {
        base: `${srcBase}/`,
        html: `${srcBase}/**/*.html`,
        ts: `${srcBase}/ts/**/*.ts`,
        scss: `${srcBase}/scss/**/*.scss`,
        icons: `${srcBase}/assets/icons/**/*.*`,
        images: `${srcBase}/assets/images/**/*.*`,
        videos: `${srcBase}/assets/videos/**/*.*`,
        fonts: `${srcBase}/assets/fonts/**/*.*`,
        misc: `${srcBase}/assets/misc/**/*.*`,
        libs: `${srcBase}/libs/**/*.*`,
    },
    replace: {
        icons: './assets/icons',
        images: './assets/images',
        videos: './assets/videos',
        fonts: './assets/fonts',
        misc: './assets/misc',
        scss: './scss',
        css: './css',
        ts: './ts',
        js: './js',
        libs: './libs',
    },
}

// * --- ERROR HANDLER
// * -----------------
const errorHandler = notify.onError({
    title: 'Error in Gulp',
    message: '<%= error.message %>',
})

// * --- DEV SERVER (BROWSER-SYNC)
// * -----------------------------
function serve(done) {
    browserSync.init({
        server: {
            baseDir: path.build.base,
        },
        // открывать страницу автоматически - false
        notify: false,
        open: true,
        port: 3000,
    })
    done()
}

function reload(done) {
    browserSync.reload()
    done()
}

// * --- CLEAN
// * ---------
export function clean(done) {
    deleteAsync(path.clean).then(() => {
        done()
    })
}

// * --- HTML + VERSION
// * ------------------
export function html() {
    return (
        gulp
            .src(path.src.html)
            .pipe(plumber({ errorHandler }))
            .pipe(
                fileInclude({
                    prefix: '@@',
                    basepath: '@file',
                }),
            )
            .pipe(replace('@@images', path.replace.images))
            // .pipe(gulpIf(isProd || isStaging, webphtml()))
            .pipe(gulp.dest(path.build.html))
            .pipe(browserSync.stream())
    )
}

// * --- STYLES (SCSS -> CSS + POSTCSS)
// * ----------------------------------
export function styles() {
    return (
        gulp
            .src(path.src.scss)
            .pipe(plumber({ errorHandler }))
            .pipe(gulpIf(isProd || isStaging, sourcemaps.init()))
            .pipe(sass().on('error', sass.logError))
            // PostCSS прочитает конфиг postcss.config.js
            .pipe(postcss({ env: process.env.NODE_ENV || 'development' }))
            .pipe(gulpIf(isProd || isStaging, cleanCSS({ level: 2 })))
            .pipe(gulpIf(isProd || isStaging, rename({ suffix: '.min' })))
            .pipe(gulpIf(isProd || isStaging, sourcemaps.write('.')))
            .pipe(gulp.dest(path.build.css))
            .pipe(browserSync.stream())
    )
}

// * --- SCRIPTS (TS -> JS via ESBUILD)
// * ----------------------------------
export async function scripts() {
    try {
        await esbuild.build({
            entryPoints: [path.src.ts],
            bundle: true,
            minify: isProd || isStaging,
            sourcemap: isProd || isStaging,
            target: 'es2015',
            outfile: `${path.build.js}/main${isProd || isStaging ? '.min' : ''}.js`,
        })
        browserSync.reload()
    } catch (err) {
        console.error(err)
        throw err
    }
}

// TODO: битые картинки
// * --- IMAGES (WEBP + OPTIMIZE)
// * ----------------------------
export function images() {
    // const src = `${srcBase}/assets/images/**/*.{jpg,jpeg,png}`

    // обычные картинки
    const imagesStream = gulp
        .src(path.src.images)
        .pipe(plumber({ errorHandler }))
        .pipe(
            gulpIf(
                isProd || isStaging,
                imagemin([
                    imagemin.mozjpeg({ quality: 80, progressive: true }),
                    imagemin.optipng({ optimizationLevel: 5 }),
                ]),
            ),
        )
        .pipe(gulp.dest(path.build.images))

    // webp отдельно
    const webpStream = gulp
        .src(path.src.images)
        .pipe(plumber({ errorHandler }))
        .pipe(webp({ quality: 80 }))
        .pipe(gulp.dest(path.build.images))

    return mergeStream(imagesStream, webpStream)
}

// TODO: не работает вообще
// * --- ICONS (SVG) + MAKE SVG SPRITE
// * ---------------------------------
export function icons() {
    return gulp
        .src(path.src.icons)
        .pipe(plumber({ errorHandler }))
        .pipe(
            svgSprite({
                mode: {
                    symbol: {
                        sprite: '../sprite.svg',
                        example: false,
                    },
                },
                shape: {
                    transform: ['svgo'],
                },
            }),
        )
        .pipe(gulp.dest(path.build.icons))
        .pipe(browserSync.stream())
}

// TODO: протестить позже
// * --- FONTS + CONVERT TO WOFF/WOFF2
// * ---------------------------------

// * just copy ttf/otf | no convert to woff/woff2
function fontsCopy() {
    return gulp
        .src(path.src.fonts)
        .pipe(plumber({ errorHandler }))
        .pipe(gulp.dest(path.build.fonts))
}

// * convert ttf/otf to woff
function fontsWoff() {
    return gulp
        .src(path.src.fonts)
        .pipe(plumber({ errorHandler }))
        .pipe(gulpIf(/\/.otf$/, fonter({ formats: ['ttf'] })))
        .pipe(gulpIf(/\.ttf$/, fonter({ formats: ['woff'] })))
        .pipe(gulp.dest(path.build.fonts))
}

// * convert ttf/otf to woff2 | recomended to use
function fontsWoff2() {
    return gulp
        .src(path.src.fonts)
        .pipe(plumber({ errorHandler }))
        .pipe(gulpIf(/\.otf$/, fonter({ formats: ['ttf'] })))
        .pipe(gulpIf(/\.ttf$/, ttf2woff2()))
        .pipe(gulp.dest(path.build.fonts))
}

// * default entrypoint for fonts
export function fonts() {
    return fontsWoff2()
}

// TODO: протестить позже
// * --- VIDEOS
// * ----------
export function videos() {
    return (
        gulp
            .src(path.src.videos)
            .pipe(plumber({ errorHandler }))
            // for .webm
            .pipe(
                ffmpeg('.webm', (cmd) => {
                    return cmd
                        .setFfmpegPath(ffmpegInstaller.path) // Указываем путь здесь
                        .addOptions([
                            '-c:v libvpx-vp9',
                            '-crf 30',
                            '-b:v 0',
                            '-deadline best',
                            '-cpu-used 4',
                        ])
                }),
            )
            // for .mp4
            .pipe(
                ffmpeg('.mp4', (cmd) => {
                    return cmd
                        .setFfmpegPath(ffmpegInstaller.path) // Указываем путь здесь
                        .addOptions([
                            '-c:v libx264',
                            '-crf 23',
                            '-preset medium',
                            '-movflags +faststart',
                        ])
                }),
            )
            .pipe(gulp.dest(path.build.videos))
            .pipe(browserSync.stream())
    )
}

// * --- OTHER STATIC FILES
// * ----------------------
export function misc() {
    return gulp
        .src(path.src.misc)
        .pipe(plumber({ errorHandler }))
        .pipe(gulp.dest(path.build.misc))
        .pipe(browserSync.stream())
}

// * --- LIBRARIES (LIBS)
// * --------------------
export function libs() {
    return (
        gulp
            // берем файлы
            .src(path.src.libs)
            // подключаем логгер
            .pipe(plumber({ errorHandler }))
            // переносим файлы в папку ./build/
            .pipe(gulp.dest(path.build.libs))
            // обновляем страницу через browser-sync
            .pipe(browserSync.stream())
    )
}

// * --- REVISION (HASHING)
// * ----------------------
export function revision() {
    return gulp
        .src([`${path.build.css}*.css`, `${path.build.js}*.js`], { base: path.build.base })
        .pipe(plumber({ errorHandler }))
        .pipe(rev())
        .pipe(gulp.dest(path.build.base))
        .pipe(rev.manifest('rev-manifest.json'))
        .pipe(gulp.dest(path.build.base))
    // .pipe(browserSync.stream()) | use only in dev mode
}

// TODO: доделать rewrite
export function rewrite() {
    const manifest = gulp.src(`${path.build.base}rev-manifest.json`)
    return gulp
        .src(`${path.build.html}*.html`)
        .pipe(plumber({ errorHandler }))
        .pipe(revRewrite({ manifest }))
        .pipe(gulp.dest(path.build.html))
    // .pipe(browserSync.stream()) | use only in dev mode
}

// export function rewrite() {
//     const manifest = JSON.parse(fs.readFileSync(`${path.build.base}rev-manifest.json`))
//     return gulp
//         .src(`${path.build.html}*.html`)
//         .pipe(plumber({ errorHandler }))
//         .pipe(revRewrite({ manifest }))
//         .pipe(gulp.dest(path.build.html))
//     // .pipe(browserSync.stream()) | use only in dev mode
// }

// TODO: не робит
// * --- CRITICAL CSS
// * ----------------
export function criticalCss(done) {
    return gulp
        .src(`${path.build.html}*.html`)
        .pipe(plumber({ errorHandler }))
        .pipe(
            critical.stream({
                base: path.build.base,
                // встроить критический CSS в <style>
                inline: true,
                // путь к основному CSS (уже с хешами)
                css: [`${path.build.css}*.css`],
                // минифицировать встроенные стили
                minify: true,
                dimensions: [
                    { width: 375, height: 812 }, // mobile
                    { width: 1920, height: 1080 }, // desktop
                ],
                // удалить оригинальные инлайн-стили (если были)
                extract: true,
            }),
        )
        .pipe(gulp.dest(path.build.html))
        .on('end', () => {
            browserSync.reload()
            done()
        })
}

// * --- WATCH FILES
// * ---------------
export function watch() {
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, styles)
    gulp.watch(path.watch.ts, scripts)
    gulp.watch(path.watch.icons, icons)
    gulp.watch(path.watch.images, images)
    gulp.watch(path.watch.videos, videos)
    gulp.watch(path.watch.fonts, fonts)
    gulp.watch(path.watch.misc, misc)
    gulp.watch(path.watch.libs, libs)
}

// * --- LINT CODE (ESLINT + STYLELINT)
// * ----------------------------------
// function listJS(needFix = false) {
//     return (
//         gulp
//             .src(path.watch.ts)
//             .pipe(eslint())
//             // фиксим ошибки опционально
//             .pipe(gulpIf(needFix, eslint.format()))
//     )
// }

// function lintCSS(needFix = false) {
//     return (
//         gulp
//             .src(path.watch.scss)
//             .pipe(
//                 stylelint({
//                     reporters: [{ formatter: 'string', console: true }],
//                 }),
//             )
//             // фиксим ошибки опционально
//             .pipe(gulpIf(needFix, stylelint().format()))
//     )
// }

// * --- TASKS
// * ---------
const build = gulp.series(
    clean,
    gulp.parallel(html, styles, scripts, icons, images, videos, fonts, misc, libs),
)

// * development | build + devServer + watchers
const dev = gulp.series(build, serve, watch)

// * staging | build with optimizations + no HASHING + no criticalCss
const staging = gulp.series(clean, gulp.parallel(html, styles, scripts, images, fonts, videos))

// * production | build with optimizations + HASHING + link rewrite + criticalCss
export const prod = gulp.series(build, revision, rewrite, criticalCss)

// * --- CLI EXPORTS
// * ---------------
gulp.task('default', dev)

gulp.task('dev', dev)
gulp.task('staging', staging)
gulp.task('prod', prod)

// gulp.task('clean', clean)
// gulp.task('fonts', fonts)
// gulp.task('build', build)

// * --- OLD
// * -------
// function js() {
//     return (
//         gulp
//             // берем файл
//             .src(path.src.js)
//             // объединяем всё в 1 файл
//             .pipe(concat('main.js'))
//             // сжимаем JS
//             .pipe(uglify())
//             // складываем результат в папку build
//             .pipe(gulp.dest(path.build.js))
//             // обновляем страницу через browser-sync
//             .pipe(browserSync.stream())
//     )
// }

// function ts() {
//     return (
//         gulp
//             // берем файл
//             .src(path.src.ts)
//             // объединяем всё в 1 файл
//             .pipe(concat('main.ts'))
//             // конвертируем TS в JS
//             .pipe(convert())
//             // сжимаем JS
//             .pipe(uglify())
//             // складываем результат в папку build
//             .pipe(gulp.dest(path.build.js))
//             // обновляем страницу через browser-sync
//             .pipe(browserSync.stream())
//     )
// }

// function css() {
//     return (
//         gulp
//             // берем файл
//             .src(path.src.css)
//             // если есть ошибка, уведомляем об этом
//             // .pipe(sass().on('error', sass.logError))
//             // добавляем префиксы
//             // .pipe(autoprefixer())
//             // складываем результат в папку build
//             .pipe(gulp.dest(path.build.css))
//             // обновляем страницу через browser-sync
//             .pipe(browserSync.stream())
//     )
// }

// function scss() {
//     return (
//         gulp
//             // берем файл
//             .src(path.src.scss)
//             // если есть ошибка, уведомляем об этом
//             .pipe(sass().on('error', sass.logError))
//             // добавляем префиксы
//             // .pipe(autoprefixer())
//             // складываем результат в папку build
//             .pipe(gulp.dest(path.build.css))
//             // обновляем страницу через browser-sync
//             .pipe(browserSync.stream())
//     )
// }

// function postcss() {
//     return (
//         gulp
//             // берем файл
//             .src(path.build.css)
//             // обрабатываем css, с помощью postcss
//             .pipe(postcss())
//             // добавляем префиксы
//             // .pipe(autoprefixer())
//             // складываем результат в папку build
//             .pipe(gulp.dest(path.build.css))
//             // обновляем страницу через browser-sync
//             .pipe(browserSync.stream())
//     )
// }

// function libs() {
//     return (
//         gulp
//             // берем файлы
//             .src(path.src.html)
//             // переносим файлы в папку ./build/
//             .pipe(gulp.dest(path.build.libs))
//             // обновляем страницу через browser-sync
//             .pipe(browserSync.stream())
//     )
// }

// function html() {
//     return (
//         gulp
//             // берем файлы
//             .src(path.src.html)
//             // обработка страниц с помощью gulp-file-include
//             .pipe(fileInclude())
//             // переносим файлы в папку ./build/
//             .pipe(gulp.dest(path.build.html))
//             // обновляем страницу через browser-sync
//             .pipe(browserSync.stream())
//     )
// }

// async function images() {
//     return (
//         gulp
//             // берем файлы
//             .src(path.src.images, { encoding: false })
//             // сжимаем картинки
//             // .pipe(imagemin())
//             // конвертируем в .webp
//             .pipe(convertToWebP())
//             // оптимизируем .webp
//             .pipe(optimizeWebP())
//             // переносим файлы в папку ./build/
//             .pipe(gulp.dest(path.build.images))
//             // обновляем страницу через browser-sync
//             .pipe(browserSync.stream())
//     )
// }

// function icons() {
//     return (
//         gulp
//             // берем файлы
//             .src(path.src.icons)
//             // сжимаем SVG
//             // .pipe(optimizeSVG())
//             // переносим файлы в папку ./build/
//             .pipe(gulp.dest(path.build.icons))
//             // обновляем страницу через browser-sync
//             .pipe(browserSync.stream())
//     )
// }

// function clean() {
//     return del('./build')
// }

// function server() {
//     browserSync.init({
//         server: {
//             baseDir: './build/',
//         },
//         // открывать страницу автоматически - false
//         notify: false,
//         port: 3000,
//     })
// }

// function ttfToWoff() {
//     return (
//         gulp
//             // берем шрифты, отключай кодировку
//             .src(path.src.fonts, { encoding: false })
//             // если .tff/.otf конвертируем в woff
//             .pipe(ttf2woff())
//             // переносим файлы в папку ./build/
//             .pipe(gulp.dest(path.build.fonts))
//     )
// }

// function ttfToWoff2() {
//     return (
//         gulp
//             // берем шрифты, отключай кодировку
//             .src(path.src.fonts, { encoding: false })
//             // если .tff/.otf конвертируем в woff2
//             .pipe(ttf2woff2())
//             // переносим файлы в папку ./build/
//             .pipe(gulp.dest(path.build.fonts))
//     )
// }

// function videos() {
//     return (
//         gulp
//             // берем файлы
//             .src(path.src.videos, { encoding: false })
//             // сжимаем картинки
//             // .pipe(imagemin())
//             // конвертируем в .webm
//             // .pipe(convertToWebM())
//             // оптимизируем .webm
//             // .pipe(optimizeWebM())
//             // переносим файлы в папку ./build/
//             .pipe(gulp.dest(path.build.videos))
//             // обновляем страницу через browser-sync
//             .pipe(browserSync.stream())
//     )
// }

// function watchFiles() {
//     gulp.watch(path.watch.html, html)
//     gulp.watch(path.watch.css, css)
//     gulp.watch(path.watch.scss, scss)
//     gulp.watch(path.watch.js, js)
//     gulp.watch(path.watch.ts, ts)
//     // gulp.watch(path.watch.fonts, fonts)
//     gulp.watch(path.watch.images, images)
//     gulp.watch(path.watch.icons, icons)
//     gulp.watch(path.watch.libs, libs)
//     gulp.watch(path.watch.videos, videos)
// }

// * --- TASKS
// * ---------
// const dev = gulp.series(
//     clean,
//     gulp.parallel(html, styles, scripts, images, fonts),
//     gulp.parallel(watchFiles, server),
// )

// const prod = gulp.series(clean, gulp.parallel(html, styles, scripts, images, fonts), revision)

// gulp.task('default', dev)

// gulp.task('build:dev', dev)
// gulp.task('build:prod', prod)

// gulp.task('clean', clean)
// // gulp.task('fonts', fonts)
// // gulp.task('build', build)

// * --- OLD
// * -------
// const fonts = gulp.series(ttfToWoff, ttfToWoff2)

// const mainTasks = gulp.series(
//     clean,
//     gulp.parallel(html, fonts, libs, scss, js, images, icons, videos),
// )

// const dev = gulp.series(mainTasks, gulp.parallel(watchFiles, server))
// // const prod = gulp.series(mainTasks, minify)

// gulp.task('default', dev)

// gulp.task('clean', clean)
// gulp.task('fonts', fonts)
// gulp.task('build', build)

// * --- OLD
// * -------
// import gulp from 'gulp'

// // import sass from 'gulp-sass'
// // import postcss from 'gulp-postcss'

// // import paths
// import { path } from './gulp/config/path.js'

// // import generic plugins
// import { plugins } from './gulp/config/plugins.js'

// global.app = {
//     path: path,
//     gulp: gulp,
//     plugins: plugins,
// }

// // Import tasks
// import { reset } from './gulp/tasks/reset.js'

// import { html } from './gulp/tasks/html.js'

// import { copy } from './gulp/tasks/copy.js'

// // Init watchers
// const watcher = () => {
//     gulp.watch(path.watch.assets, copy)
//     gulp.watch(path.watch.html, html)
// }

// const mainTasks = gulp.parallel(copy, html)

// // DEV mode pipeline
// const dev = gulp.series(reset, mainTasks, watcher)

// // Execute default pipeline
// gulp.task('default', dev)
