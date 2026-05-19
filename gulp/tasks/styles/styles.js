import gulp from 'gulp'
import through2 from 'through2'
// import gulpIf from 'gulp-if'
// import gulpRev from 'gulp-rev'
import gulpRename from 'gulp-rename'
import gulpReplace from 'gulp-replace'
import browserSync from 'browser-sync'

import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)

import postcss from 'gulp-postcss'
// import sourcemaps from 'gulp-sourcemaps'
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

// TODO: избавится от пакета gulp-sourcemaps (не принёс разницы со встроенным функционалом gulp 5)
// * --- EXPORT GULP TASK FOR SCSS/CSS FILES
// * ---------------------------------------
export function styles() {
    return (
        gulp
            // * берем исходники
            .src(path.src.styles.files, {
                sourcemaps: env.buildMode.isDev || env.buildMode.isStaging,
            })
            // * подключаем plumber, чтобы gulp не падал при ошибке
            // ! .pipe(plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.STYLES))
            .pipe(
                env.buildMode.isDev
                    ? plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.STYLES)
                    : through2.obj(),
            )
            // * делаем sourcemaps в режимах dev и staging
            // .pipe(gulpIf(isDev || isStaging, sourcemaps.init()))
            // .pipe(
            //     env.buildMode.isDev || env.buildMode.isStaging ? sourcemaps.init() : through2.obj(),
            // )
            // * билдим css через sass
            .pipe(
                sass({
                    // * sass options
                    // style: isProd || isStaging ? 'expanded' : 'expanded',
                    // * expanded always, bugs with webImagesCSS when compressed
                    style: 'expanded',
                }),
            )

            // * заменяем пути на корректные для каждого ресурса
            // .pipe(gulpReplace(/@meta\//g, '../'))
            .pipe(gulpReplace(/@(scss|css)\//g, env.isInlineCSS ? './css' : './'))
            // .pipe(gulpReplace(/@(ts|js)\//g, '../js/'))
            .pipe(
                gulpReplace(/@audio\//g, env.isInlineCSS ? './assets/audio/' : '../assets/audio/'),
            )
            .pipe(
                gulpReplace(/@fonts\//g, env.isInlineCSS ? './assets/fonts/' : '../assets/fonts/'),
            )
            .pipe(
                gulpReplace(/@icons\/(.+?)\.svg/g, (match, p1) => {
                    const id = p1.replace(/\//g, '--')
                    return env.isInlineCSS
                        ? `./assets/icons/sprite.svg#${id}`
                        : `../assets/icons/sprite.svg#${id}`
                }),
            )
            .pipe(
                gulpReplace(
                    /@images\//g,
                    env.isInlineCSS ? './assets/images/' : '../assets/images/',
                ),
            )
            .pipe(
                gulpReplace(
                    /@videos\//g,
                    env.isInlineCSS ? './assets/videos/' : '../assets/videos/',
                ),
            )
            .pipe(gulpReplace(/@misc\//g, env.isInlineCSS ? './assets/misc/' : '../assets/misc/'))
            // .pipe(gulpReplace(/@libs\//g, '../libs/'))

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
            // .pipe(
            //     env.buildMode.isDev || env.buildMode.isStaging
            //         ? sourcemaps.write('.')
            //         : through2.obj(),
            // )

            // * кладем результат в папку сборки
            .pipe(
                gulp.dest(path.build.styles, {
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
            .on('end', () => {
                // * update dev server
                browserSync.reload()
            })
    )
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('styles', styles)
