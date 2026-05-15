// import fileInclude from 'gulp-file-include'

// const version = Date.now()

// export const html = () => {
//     const app = global.app
//     return (
//         app.gulp //
//             .src(app.path.src.html)
//             .pipe(fileInclude())
//             .pipe(app.plugins.gulpReplace(/@images\//g, './assets/images'))
//             .pipe(app.plugins.gulpReplace(/@icons\//g, './assets/icons'))
//             .pipe(app.plugins.gulpReplace(/@fonts\//g, './assets/fonts'))
//             .pipe(app.plugins.gulpReplace(/@scss\//g, './src/scss'))
//             .pipe(app.plugins.gulpReplace(/@css\//g, './css'))
//             .pipe(app.plugins.gulpReplace(/@ts\//g, './src/ts'))
//             .pipe(app.plugins.gulpReplace(/@js\//g, './js'))

//             // files version (cache)
//             .pipe(app.plugins.gulpReplace(/(\.(css|js|png|jpg|jpeg|webp|svg))/g, `$1?v=${version}`))

//             .pipe(app.gulp.dest(app.path.build.html))
//     )
// }

import fs from 'fs'
import gulp from 'gulp'
import nodePath from 'path'
import gulpIf from 'gulp-if'
import prettier from 'gulp-prettier'
import browserSync from 'browser-sync'

import { env } from '../../config/env.js'
import { path } from '../../config/path.js'
import {
    plumberWithErrorHandler,
    NOTIFICATION_HANDLER_TITLES,
} from '../../helpers/error-handler.js'
import { htmlImg2PictureTransformer } from '../../helpers/html-img2picture-transformer.js'

// * html plugins
// import { nunjucksCompile } from 'gulp-nunjucks'
import nunjucksRender from 'gulp-nunjucks-render'

// import fileInclude from 'gulp-file-include'
// import nunjucksRender from 'gulp-nunjucks-render'

// ! posthtml so bad...
// import posthtml from 'gulp-posthtml'
// import loadConfig from 'posthtml-load-config'
// import include from 'posthtml-include'

import gulpReplace from 'gulp-replace'

import htmlmin from 'gulp-html-minifier-terser'

// import webphtml from 'gulp-webp-html-nosvg' // TODO: deprecated
// import webphtml from 'gulp-webp-html-fixed' // ! no avig support

// import { pictureTransformer } from '../../helpers/picture-transformer.js'
// import avifWebpHtml from 'gulp-avif-webp-html-universal'

// TODO:
// * --- CACHE VERSION
// * -----------------
// const cacheVersion = `?v=${Date.now()}`

// TODO: доделать <source> для video, audio и i18n
function createHtmlStream({
    locale,
    localeData,
    destPath,
    allLocales,
    defaultLocale,
    baseUrl,
    baseUrlPostfix,
    pageRelativePath,
}) {
    return (
        gulp
            // * берем исходники
            .src(path.src.njk)
            // * подключаем plumber, чтобы gulp не падал при ошибке
            .pipe(plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.HTML))
            // * собираем все partials в полноценные html
            // .pipe(
            //     fileInclude({
            //         prefix: '@@',
            //         basepath: '@file',
            //         context: {
            //             placeholder__webpInCssPolyfill: `<script>\n${webpInCssPolyfillScript}\n</script>`,
            //         },
            //     }),
            // )
            // .pipe(posthtml())
            .pipe(
                nunjucksRender({
                    // path: [`${path.root}/src/`, `${path.root}/src/templates/`, `${path.root}/`],
                    path: ['./src/', './'],
                    data: {
                        locale,
                        ...localeData,
                        allLocales,
                        defaultLocale,
                        baseUrl,
                        baseUrlPostfix,
                        pageRelativePath,
                    },
                }),
            )
            // * генерируем <img> в <picture>/<source> + responsive + avif/webp
            .pipe(htmlImg2PictureTransformer('src/assets/images', { desktopFirst: true }))
            // .pipe(
            //     // nunjucksRender({
            //     //     path: ['src/partials'], // CRITICAL: Tell Nunjucks where to find header/footer
            //     // }),
            //     nunjucksCompile(),
            // )
            // * заменяем пути на корректные для каждого ресурса
            .pipe(gulpReplace(path.replace.meta, `${env.baseUrlPostfix}/`))
            .pipe(gulpReplace(path.replace.scss_css, `${env.baseUrlPostfix}/css/`))
            .pipe(gulpReplace(path.replace.ts_js, `${env.baseUrlPostfix}/js/`))
            .pipe(gulpReplace(path.replace.audio, `${env.baseUrlPostfix}/assets/audio/`))
            .pipe(
                gulpReplace(path.replace.icons, (match, p1) => {
                    const id = p1.replace(/\//g, '--')
                    return `${env.baseUrlPostfix}/assets/icons/sprite.svg#${id}`
                }),
            )
            .pipe(gulpReplace(path.replace.images, `${env.baseUrlPostfix}/assets/images/`))
            .pipe(gulpReplace(path.replace.videos, `${env.baseUrlPostfix}/assets/videos/`))
            .pipe(gulpReplace(path.replace.fonts, `${env.baseUrlPostfix}/assets/fonts/`))
            .pipe(gulpReplace(path.replace.misc, `${env.baseUrlPostfix}/assets/misc/`))
            .pipe(gulpReplace(path.replace.libs, `${env.baseUrlPostfix}/libs/`))
            // * замена расширений файлов .scss
            .pipe(gulpReplace(/\.scss(?=["'])/g, '.min.css'))
            // * замена расширений файлов .ts
            .pipe(gulpReplace(/\.ts(?=["'])/g, '.min.js'))
            // .pipe(
            //     gulpReplace(
            //         '<!-- ![GULP] DO NOT REMOVE --- plugin: webp-in-css --- polyfill.js placeholder --->',
            //         `<script>${webpInCssPolyfillScript}</script>`,
            //     ),
            // )
            // * генерируем webp на основе png, jpg, jpeg и т.д.
            // .pipe(webphtml())
            // * генерируем avif и webp на основе png, jpg и jpeg
            // .pipe(
            //     avifWebpHtml({
            //         avif: true,
            //         webp: true,
            //     }),
            // )

            // .pipe(
            //     pictureTransformer({
            //         imgDir: path.join(process.cwd(), 'out', 'assets', 'images'), // ваш путь build.images
            //         avif: true,
            //         webp: true,
            //         sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw', // пример адаптивного sizes
            //     }),
            // )
            // * форматируем код через prettier
            .pipe(prettier())
            // * минифицируем html
            .pipe(
                gulpIf(
                    env.buildMode.isStaging || env.buildMode.isProd,
                    htmlmin({
                        caseSensitive: true,
                        collapseWhitespace: true,
                        preserveLineBreaks: false,
                        collapseBooleanAttributes: true,
                        collapseInlineTagWhitespace: false,
                        keepClosingSlash: true,
                        minifyURLs: true,
                        minifyCSS: true,
                        minifyJS: true,
                        html5: true,
                        removeComments: true,
                        quoteCharacter: '"',
                        removeEmptyElements: false,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: false,
                        ignoreCustomComments: [
                            /Built with love by aLeeTheY/,
                            /CRITICAL CSS PLACEHOLDER/,
                        ],
                    }),
                ),
            )
            // ! posthtml so bad...
            // .pipe(posthtml())
            // * кладем результат в папку сборки
            .pipe(gulp.dest(destPath))
        // * обновляем сервер разработки
        // .pipe(browserSync.stream())
    )
}

// * --- EXPORT GULP TASK FOR HTML FILES
// * -----------------------------------
export async function html() {
    if (env.isI18N) {
        // * build for locales
        const i18nConfig = JSON.parse(
            fs.readFileSync(`${path.src.base}/i18n/languages.json`, 'utf-8'),
        )
        const { default_locale: defaultLocale, available_locales: locales } = i18nConfig

        for (const locale of locales) {
            const dataPath = `${path.src.base}/i18n/${locale}.json`
            const localeData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

            const destPath =
                locale === defaultLocale
                    ? path.build.html
                    : nodePath.join(path.build.html, String(locale).toLowerCase())

            const stream = createHtmlStream({
                locale,
                localeData,
                destPath,
                allLocales: locales,
                defaultLocale,
                baseUrl: env.baseUrl,
                baseUrlPostfix: env.baseUrlPostfix,
                pageRelativePath: '',
            })
            await new Promise((resolve, reject) => {
                stream.on('end', resolve).on('error', reject)
            })

            // reload browserSync after every locale build
            // browserSync.reload();
        }
    } else {
        const stream = createHtmlStream({ destPath: path.build.html })

        await new Promise((resolve, reject) => {
            stream.on('end', resolve).on('error', reject)
        })
    }

    browserSync.reload()
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('html', html)
