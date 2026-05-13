import gulp from 'gulp'
import gulpIf from 'gulp-if'
// import gulpRev from 'gulp-rev'
import gulpRename from 'gulp-rename'
import gulpReplace from 'gulp-replace'
import browserSync from 'browser-sync'

import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)

import postcss from 'gulp-postcss'
// import purgecss from 'gulp-purgecss'

// import webpcss from 'gulp-webpcss' // TODO: deprecated
// import avifWebpCss from 'gulp-avif-css' // ! bug when render
import webImagesCSS from 'gulp-web-images-css'

import { env } from '../../config/env.js'
import { path } from '../../config/path.js'
import {
    plumberWithErrorHandler,
    NOTIFICATION_HANDLER_TITLES,
} from '../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR SCSS/CSS FILES
// * ---------------------------------------
export function styles() {
    return (
        gulp
            // * берем исходники
            .src(path.src.scss, { sourcemaps: env.buildMode.isDev || env.buildMode.isStaging })
            // * подключаем plumber, чтобы gulp не падал при ошибке
            .pipe(plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.STYLES))
            // * делаем sourcemaps в режимах dev и staging
            // .pipe(gulpIf(isDev || isStaging, sourcemaps.init()))
            // * билдим css через sass
            .pipe(
                sass({
                    // * sass options
                    // style: isProd || isStaging ? 'expanded' : 'expanded',
                    // * expanded always, bugs with webImagesCSS when compressed
                    style: 'expanded',
                }).on('error', sass.logError),
            )
            // * заменяем пути на корректные для каждого ресурса
            .pipe(gulpReplace(path.replace.audio, '../assets/audio/'))
            .pipe(
                gulpReplace(path.replace.icons, (match, p1) => {
                    const id = p1.replace(/\//g, '--')
                    return `../assets/icons/sprite.svg#${id}`
                }),
            )
            .pipe(gulpReplace(path.replace.images, '../assets/images/'))
            .pipe(gulpReplace(path.replace.videos, '../assets/videos/'))
            .pipe(gulpReplace(path.replace.fonts, '../assets/fonts/'))
            .pipe(gulpReplace(path.replace.misc, '../assets/misc/'))
            .pipe(gulpReplace(path.replace.scss_css, './'))
            // // * замена расширений файлов .scss
            // .pipe(gulpReplace(/\.scss(?=["'])/g, '.min.css'))
            .pipe(gulpReplace(path.replace.ts_js, '../js/'))
            // // * замена расширений файлов .ts
            // .pipe(gulpReplace(/\.ts(?=["'])/g, '.min.js'))
            .pipe(gulpReplace(path.replace.libs, '../libs/'))
            // * удаляем неиспользуемые css классы
            // .pipe(
            //     gulpIf(
            //         env.buildMode.isStaging || env.buildMode.isProd,
            //         purgecss({
            //             content: ['src/**/*.njk'],
            //         }),
            //     ),
            // )
            // ! STRONGLY AFTER PURGE CSS
            // * генерируем классы .avif и .webp для background-image: url() из .png, .jpg и .jpeg
            // .pipe(avifWebpCss())
            .pipe(
                webImagesCSS({
                    mode: 'all',
                }),
            )
            // * далее обрабатываем полученный css с помощью postcss (dev mode by default)
            .pipe(postcss())
            // * добавляем webp вариант к картинкам jpg,jpeg,png в css файле
            // ? на замену используется postcss/webp-in-css
            // .pipe(
            //     webpcss({
            //         webpClass: '.webp',
            //         noWebpClass: '.no-webp',
            //     }),
            // )
            // // * добавляем к файлу ревизию для инвалидации кэша
            // .pipe(gulpIf(env.buildMode.isStaging || env.buildMode.isProd, gulpRev()))
            // * добавляем к имени суффикс .min
            .pipe(gulpRename({ suffix: '.min' }))
            // * пишем sourcemaps
            // .pipe(gulpIf(isDev || isStaging, sourcemaps.write('.')))
            // * кладем результат в папку сборки
            .pipe(
                gulp.dest(path.build.css, {
                    sourcemaps: env.buildMode.isDev || env.buildMode.isStaging ? '.' : false,
                }),
            )
            // // * делаем запись в rev-manifest.json
            // .pipe(
            //     gulpIf(
            //         env.buildMode.isStaging || env.buildMode.isProd,
            //         gulpRev.manifest('rev-manifest.json', { base: 'out/', merge: true }),
            //     ),
            // )
            // // * созраняем rev-manifest.json
            // .pipe(
            //     gulpIf(env.buildMode.isStaging || env.buildMode.isProd, gulp.dest(path.build.base)),
            // )
            // * обновляем сервер разработки
            .pipe(browserSync.stream())
    )
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('styles', styles)
