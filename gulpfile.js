// * --- IMPORT
// * ----------
import fs from 'fs'
import * as nodePath from 'path'
// import merge from 'merge-stream'
// import mergeStreams from '@sindresorhus/merge-streams'

// * cli args packages
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

// * main plugins
import gulp from 'gulp'
import gulpIf from 'gulp-if'
import gulpExec from 'gulp-exec'
import gulpNewer from 'gulp-newer'
// import gulpMerge from 'gulp-sequence'
// import gulpTap from 'gulp-tap'

// import gulpClone from 'gulp-clone'
// import merge from 'merge-stream'

// import sourcemaps from 'gulp-sourcemaps'
import rename from 'gulp-rename'

import prettier from 'gulp-prettier'

import browserSync from 'browser-sync'
import { deleteAsync } from 'del'

// * debug utils
import plumber from 'gulp-plumber'

import toasted from 'toasted-notifier'
// import notify from 'gulp-notify' // TODO: deprecated

// * html plugins
// import { nunjucksCompile } from 'gulp-nunjucks'
import nunjucksRender from 'gulp-nunjucks-render'

// import fileInclude from 'gulp-file-include'
// import nunjucksRender from 'gulp-nunjucks-render'

// ! posthtml so bad...
// import posthtml from 'gulp-posthtml'
// import loadConfig from 'posthtml-load-config'
// import include from 'posthtml-include'

import replace from 'gulp-replace'

import htmlmin from 'gulp-html-minifier-terser'

// import webphtml from 'gulp-webp-html-nosvg' // TODO: deprecated
// import webphtml from 'gulp-webp-html-fixed' // ! no avig support
import avifWebpHtml from 'gulp-avif-webp-html-universal'

// * css plugins
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)

import purgecss from 'gulp-purgecss'
import postcss from 'gulp-postcss'

// import webpcss from 'gulp-webpcss' // TODO: deprecated
// import avifWebpCss from 'gulp-avif-css' // ! bug when render
import webImagesCSS from 'gulp-web-images-css'

// ! critical css
// import * as critical from 'critical' // TODO: deprecated
// import penthouse from 'penthouse'
// import inject from 'gulp-inject-string'

import penthouse from 'penthouse'
// import inject from 'gulp-inject-string'

// * js plugins
// import esbuild from 'esbuild'

// ! esbuild --- build mode
import gulpEsbuild from 'gulp-esbuild'
// ! esbuild --- watch mode
// import { createGulpEsbuild } from 'gulp-esbuild'
// const gulpEsbuild = createGulpEsbuild({ incremental: true })

// * images
// import imagemin from 'gulp-imagemin' // TODO: deprecated
// import sharp from 'sharp'
import sharpOptimizeImages from 'gulp-sharp-optimize-images'
// import webp from 'gulp-webp'

// * icons
import svgoConfig from './svgo.config.mjs'

// * both use svgo.config.mjs
// import svgmin from 'gulp-svgmin'
import svgSprite from 'gulp-svg-sprite'

// * fonts
// import fonter from 'gulp-fonter-fix' // TODO: deprecated
// import ttf2woff2 from 'gulp-ttf2woff2' // TODO: deprecated

// * audio + videos
// import ffmpeg from 'gulp-fluent-ffmpeg'
// import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
// ffmpeg.setFfmpegPath(ffmpegInstaller.path)

// * i18n

// * revision
import rev from 'gulp-rev'
import revRewrite from 'gulp-rev-rewrite'
// import { config } from 'process'
// import { url } from 'inspector'

// * --- PLACEHOLDERS
// * ----------------
// const webpInCssPolyfillScript = fs.readFileSync('node_modules/webp-in-css/polyfill.js', 'utf-8')

// * --- ARGV
// * --------
const argv = yargs(hideBin(process.argv))
    .option('site-root', {
        alias: ['sr', 'r'],
        type: 'string',
        default: '',
        description:
            'Base path (URL prefix) for the project on the web server. If deploying to GitHub Pages, this is typically your repository name (e.g., "/my-repo/"). Default is empty string (site served from root).',
    })
    .option('internationalization', {
        alias: ['i18n', 'i'],
        type: 'boolean',
        default: false,
        description:
            'Enable internationalization build (reads locale JSON files). Without this flag, builds with inline text and default locale only.',
    })
    .parse()

const IS_I18N_ENABLED = argv.internationalization

const SITE_ROOT = argv.siteRoot

// * --- BUILD MODE
// * --------------
const NODE_ENV = process.env.NODE_ENV ?? 'development'

const isDev = NODE_ENV === 'development'
const isProd = NODE_ENV === 'production'
const isStaging = NODE_ENV === 'staging'

// TODO:
// * --- CACHE VERSION
// * -----------------
// const cacheVersion = `?v=${Date.now()}`

// * --- PATH
// * --------
const buildBase = './out'
const srcBase = './src'

const path = {
    clean: buildBase,
    build: {
        base: `${buildBase}/`,
        njk: `${buildBase}/`,
        html: `${buildBase}/`,
        meta: `${buildBase}/`,
        scripts: `${buildBase}/js/`,
        css: `${buildBase}/css/`,
        audio: `${buildBase}/assets/audio/`,
        icons: `${buildBase}/assets/icons/`,
        images: `${buildBase}/assets/images/`,
        videos: `${buildBase}/assets/videos/`,
        fonts: `${buildBase}/assets/fonts/`,
        misc: `${buildBase}/assets/misc/`,
        libs: `${buildBase}/libs/`,
        i18n: `${buildBase}/i18n/`,
    },
    src: {
        base: `${srcBase}/`,
        njk: `${srcBase}/*.{nj,njk,nunjucks}`,
        html: `${srcBase}/*.html`,
        meta: `${srcBase}/meta/**/*.*`,
        scripts: `${srcBase}/{js,ts}/main.{js,mjs,cjs,ts,mts,cts}`,
        scss: `${srcBase}/scss/*.scss`,
        audio: `${srcBase}/assets/audio/**/*.*`,
        icons: `${srcBase}/assets/icons/**/*.svg`,
        images: `${srcBase}/assets/images/**/*.{jpg,jpeg,png}`,
        // images: `${srcBase}/assets/images/**/*.{jpg,jpeg,png,gif,ico,webp}`,
        videos: `${srcBase}/assets/videos/**/*.{mp4,avi,mov,mkv,webm}`,
        fonts: `${srcBase}/assets/fonts/**/*.{ttf,otf,woff,woff2}`,
        misc: `${srcBase}/assets/misc/**/*.*`,
        libs: `${srcBase}/libs/**/*.*`,
        i18n: `${srcBase}/i18n/**/*.*`,
    },
    watch: {
        base: `${srcBase}/`,
        njk: `${srcBase}/**/*.{nj,njk,nunjucks}`,
        html: `${srcBase}/**/*.html`,
        meta: `${srcBase}/meta/**/*.*`,
        scripts: `${srcBase}/{js,ts}/**/*.{js,mjs,cjs,ts,mts,cts}`,
        scss: `${srcBase}/scss/**/*.scss`,
        audio: `${srcBase}/assets/audio/**/*.*`,
        icons: `${srcBase}/assets/icons/**/*.*`,
        images: `${srcBase}/assets/images/**/*.*`,
        videos: `${srcBase}/assets/videos/**/*.*`,
        fonts: `${srcBase}/assets/fonts/**/*.*`,
        misc: `${srcBase}/assets/misc/**/*.*`,
        libs: `${srcBase}/libs/**/*.*`,
        i18n: `${srcBase}/i18n/**/*.*`,
    },
    replace: {
        audio: /@audio\//g,
        fonts: /@fonts\//g,
        icons: /@icons\/(.+?)\.svg/g,
        images: /@images\//g,
        videos: /@videos\//g,
        misc: /@misc\//g,
        // scss: /@scss\//g,
        // css: /@css\//g,
        scss_css: /@(scss|css)\//g, // * other variant
        // ts: /@ts\//g,
        // js: /@js\//g,
        ts_js: /@(ts|js)\//g, // * other variant
        libs: /@libs\//g,
        meta: /@meta\//g,
    },
}

// * --- NOTIFICATION CENTER
// * -----------------------
const notificationCenterErrorTitles = {
    unknown: '[ERROR] --- Unknown',
    html: '[ERROR] HTML',
    meta: '[ERROR] META',
    styles: '[ERROR] STYLES',
    scripts: '[ERROR] SCRIPTS',
    audio: '[ERROR] AUDIO',
    icons: '[ERROR] ICONS',
    images: '[ERROR] IMAGES',
    videos: '[ERROR] VIDEOS',
    fonts: '[ERROR] FONTS',
    i18n: '[ERROR] I18N',
    misc: '[ERROR] MISC',
    libs: '[ERROR] LIBS',
    criticalCss: '[ERROR] CRITICAL CSS',
}

const errorHandler = (title) => {
    return function (err) {
        toasted.notify({
            title: title || notificationCenterErrorTitles.unknown,
            message: err.message || 'An unknown error occurred during the build.',
            sound: true,
            wait: false,
        })

        this.emit('end')
    }
}

// * --- DEV SERVER (BROWSER-SYNC)
// * -----------------------------
export function server(done) {
    browserSync.init({
        // * serve files from the app directory with directory listing
        server: {
            baseDir: path.build.html,
            directory: false,
        },
        // TODO: test 'ghostMode' later
        // ghostMode: {
        //     clicks: true,
        //     scroll: true,
        //     location: true,
        //     forms: true,
        // },
        // * open localhost url
        open: 'local',
        // * open page in google chrome by default
        browser: 'chrome',
        // * hide notification in browser
        notify: false,
        // * server port
        port: 3000,
    })
    done()
}

// * --- CLEAN
// * ---------
export function clean(done) {
    deleteAsync(path.clean).then(() => {
        done()
    })
}

// TODO: доделать <source> для video, audio и i18n
// * --- HTML + VERSION
// * ------------------
function createHtmlStream({ locale, localeData, destPath }) {
    return (
        gulp
            // * берем исходники
            .src(path.src.njk)
            // * подключаем plumber, чтобы gulp не падал при ошибке
            .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.html) }))
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
                    path: ['./src/', './'],
                    data: {
                        locale,
                        ...localeData,
                    },
                }),
            )
            // .pipe(
            //     // nunjucksRender({
            //     //     path: ['src/partials'], // CRITICAL: Tell Nunjucks where to find header/footer
            //     // }),
            //     nunjucksCompile(),
            // )
            // * заменяем пути на корректные для каждого ресурса
            .pipe(replace(path.replace.meta, `${SITE_ROOT}/`))
            .pipe(replace(path.replace.scss_css, `${SITE_ROOT}/css/`))
            .pipe(replace(path.replace.ts_js, `${SITE_ROOT}/js/`))
            .pipe(replace(path.replace.audio, `${SITE_ROOT}/assets/audio/`))
            .pipe(
                replace(path.replace.icons, (match, p1) => {
                    const id = p1.replace(/\//g, '--')
                    return `${SITE_ROOT}/assets/icons/sprite.svg#${id}`
                }),
            )
            .pipe(replace(path.replace.images, `${SITE_ROOT}/assets/images/`))
            .pipe(replace(path.replace.videos, `${SITE_ROOT}/assets/videos/`))
            .pipe(replace(path.replace.fonts, `${SITE_ROOT}/assets/fonts/`))
            .pipe(replace(path.replace.misc, `${SITE_ROOT}/assets/misc/`))
            .pipe(replace(path.replace.libs, `${SITE_ROOT}/libs/`))
            // * замена расширений файлов .scss
            .pipe(replace(/\.scss(?=["'])/g, '.min.css'))
            // * замена расширений файлов .ts
            .pipe(replace(/\.ts(?=["'])/g, '.min.js'))
            // .pipe(
            //     replace(
            //         '<!-- ![GULP] DO NOT REMOVE --- plugin: webp-in-css --- polyfill.js placeholder --->',
            //         `<script>${webpInCssPolyfillScript}</script>`,
            //     ),
            // )
            // * генерируем webp на основе png, jpg, jpeg и т.д.
            // .pipe(webphtml())
            // * генерируем avif и webp на основе png, jpg и jpeg
            .pipe(
                avifWebpHtml({
                    avif: true,
                    webp: true,
                }),
            )
            // * форматируем код через prettier
            .pipe(prettier())
            // * минифицируем html
            .pipe(
                gulpIf(
                    isStaging || isProd,
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

export async function html() {
    if (IS_I18N_ENABLED) {
        // * build for locales
        const i18config = JSON.parse(fs.readFileSync('./src/i18n/languages.json', 'utf-8'))
        const { default_locale: defaultLocale, available_locales: locales } = i18config

        for (const locale of locales) {
            const dataPath = `./src/i18n/${locale}.json`
            const localeData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

            const destPath =
                locale === defaultLocale
                    ? path.build.html
                    : nodePath.join(path.build.html, String(locale).toLowerCase())

            const stream = createHtmlStream({ locale, localeData, destPath })
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

// * --- STYLES (SCSS -> CSS + POSTCSS)
// * ----------------------------------
export function styles() {
    return (
        gulp
            // * берем исходники
            .src(path.src.scss, { sourcemaps: isDev || isStaging })
            // * подключаем plumber, чтобы gulp не падал при ошибке
            .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.styles) }))
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
            .pipe(replace(path.replace.audio, '../assets/audio/'))
            .pipe(
                replace(path.replace.icons, (match, p1) => {
                    const id = p1.replace(/\//g, '--')
                    return `../assets/icons/sprite.svg#${id}`
                }),
            )
            .pipe(replace(path.replace.images, '../assets/images/'))
            .pipe(replace(path.replace.videos, '../assets/videos/'))
            .pipe(replace(path.replace.fonts, '../assets/fonts/'))
            .pipe(replace(path.replace.misc, '../assets/misc/'))
            .pipe(replace(path.replace.scss_css, './'))
            // // * замена расширений файлов .scss
            // .pipe(replace(/\.scss(?=["'])/g, '.min.css'))
            .pipe(replace(path.replace.ts_js, '../js/'))
            // // * замена расширений файлов .ts
            // .pipe(replace(/\.ts(?=["'])/g, '.min.js'))
            .pipe(replace(path.replace.libs, '../libs/'))
            // * удаляем неиспользуемые css классы
            .pipe(
                gulpIf(
                    isStaging || isProd,
                    purgecss({
                        content: ['src/**/*.njk'],
                    }),
                ),
            )
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
            // * добавляем к имени суффикс .min
            .pipe(rename({ suffix: '.min' }))
            // * пишем sourcemaps
            // .pipe(gulpIf(isDev || isStaging, sourcemaps.write('.')))
            // * кладем результат в папку сборки
            .pipe(gulp.dest(path.build.css, { sourcemaps: isDev || isStaging ? '.' : false }))
            // * обновляем сервер разработки
            .pipe(browserSync.stream())
    )
}

// * --- SCRIPTS (TS -> JS via ESBUILD)
// * ----------------------------------
export function scripts() {
    return (
        gulp
            // * берем исходники
            .src(path.src.scripts)
            // * подключаем plumber, чтобы gulp не падал при ошибке
            .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.scripts) }))
            // * билдим JS с помощью Esbuild
            .pipe(
                gulpEsbuild({
                    bundle: true,
                    format: 'iife',
                    platform: 'browser',
                    outfile: 'main.min.js',
                    sourcemap: isDev || isStaging ? 'external' : false,
                    minify: isStaging || isProd,
                    target: ['es2018'],
                    drop: isProd ? ['console', 'debugger'] : [],
                    treeShaking: true,
                    define: {
                        'process.env.NODE_ENV': JSON.stringify(
                            isProd ? 'production' : isStaging ? 'staging' : 'development',
                        ),
                    },
                }),
            )
            // * добавляем к имени суффикс .min
            // .pipe(rename({ suffix: '.min' }))
            // * кладем результат в папку сборки
            .pipe(gulp.dest(path.build.scripts))
            // * обновляем сервер разработки
            .pipe(browserSync.stream())
    )
}

// * --- IMAGES (WEBP + OPTIMIZE)
// * ----------------------------
export function images() {
    return gulp
        .src(path.src.images, { encoding: false })
        .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.images) }))
        .pipe(gulpIf(isStaging || isProd, gulpNewer(path.build.images)))
        .pipe(
            sharpOptimizeImages({
                // * format {from}_to_{to}
                jpg_to_jpg: {
                    quality: isDev ? 100 : 80,
                    mozjpeg: isStaging || isProd,
                    progressive: true,
                },
                png_to_png: {
                    effort: isDev ? 1 : 10,
                    quality: isDev ? 100 : 80,
                    progressive: true,
                    compressionLevel: isDev ? 0 : 9,
                },
                webp: {
                    effort: isDev ? 0 : 6,
                    quality: isDev ? 100 : 60,
                    // lossless: true,
                    // nearLossless: true,
                },
                avif: {
                    effort: isDev ? 0 : 9,
                    quality: isDev ? 100 : 50,
                    bitdepth: 8,
                    // lossless: false,
                },
                // gif: {},
            }),
        )
        .pipe(gulp.dest(path.build.images))
        .pipe(browserSync.stream())
}

// function optimizeOriginalImages() {
//     return gulp
//         .src(path.src.images, { encoding: false })
//         .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.images) }))
//         .pipe(
//             gulpIf(
//                 isProd || isStaging,
//                 gulpTap(async (file) => {
//                     let pipeline = sharp(file.contents)
//                     const ext = file.extname.toLowerCase()

//                     switch (ext) {
//                         case '.jpg':
//                         case '.jpeg':
//                             pipeline = pipeline.jpeg({ quality: 80, progressive: true })
//                             break
//                         case '.png':
//                             pipeline = pipeline.png({ compressionLevel: 9 })
//                             break
//                         default:
//                             break
//                     }

//                     file.contents = await pipeline.toBuffer()
//                 }),
//             ),
//         )
//         .pipe(gulp.dest(path.build.images))
//         .pipe(browserSync.stream())
// }

// function createWebpImages() {
//     return gulp
//         .src(path.src.images, { encoding: false })
//         .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.images) }))
//         .pipe(
//             gulpIf(
//                 isProd || isStaging,
//                 gulpTap(async (file) => {
//                     let pipeline = sharp(file.contents)
//                     file.contents = await pipeline
//                         .webp({ effort: 6, nearLossless: true })
//                         .toBuffer()
//                 }),
//             ),
//         )
//         .pipe(rename({ extname: '.webp' }))
//         .pipe(gulp.dest(path.build.images))
//         .pipe(browserSync.stream())
// }

// export const images = gulp.parallel(optimizeOriginalImages, createWebpImages)

// export function images() {
//     // * 1. Создаём основной поток с исходными файлами (без изменений)
//     const sourceStream = gulp
//         .src(path.src.images, { encoding: false })
//         .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.images) }))

//     // * 2. Ветка для оптимизированных оригиналов (JPEG/PNG)
//     const originalStream = sourceStream
//         // * клонирование потока
//         .pipe(gulpClone())
//         .pipe(
//             gulpIf(
//                 isProd || isStaging,
//                 gulpTap(async (file) => {
//                     let pipeline = sharp(file.contents)
//                     const ext = file.extname.toLowerCase()

//                     switch (ext) {
//                         case '.jpg':
//                         case '.jpeg':
//                             pipeline = pipeline.jpeg({ quality: 80, progressive: true })
//                             break
//                         case '.png':
//                             pipeline = pipeline.png({ compressionLevel: 9 })
//                             break
//                         default:
//                             break
//                     }

//                     file.contents = await pipeline.toBuffer()
//                 }),
//             ),
//         )
//         .pipe(gulp.dest(path.build.images))

//     // * 3. Ветка для WebP (из исходных файлов!)
//     const webpStream = sourceStream
//         .pipe(gulpClone())
//         .pipe(
//             gulpIf(
//                 isProd || isStaging,
//                 gulpTap(async (file) => {
//                     let pipeline = sharp(file.contents)
//                     file.contents = await pipeline.webp({ quality: 60 }).toBuffer()
//                 }),
//             ),
//         )
//         .pipe(rename({ extname: '.webp' }))
//         .pipe(gulp.dest(path.build.images))

//     // * 4. Объединяем потоки и вешаем обновление BrowserSync
//     return merge(originalStream, webpStream).on('end', () => browserSync.reload())
// }

// * --- ICONS (SVG) + MAKE SVG SPRITE
// * ---------------------------------
export function icons() {
    return (
        gulp
            .src(path.src.icons)
            .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.icons) }))
            .pipe(gulpIf(isStaging || isProd, gulpNewer(path.build.icons)))
            // ! use svgmin OR internal svgsprite transform, not both.
            // .pipe(svgmin())
            .pipe(
                // ! works only via web server, not via "file:///mysite.html"
                svgSprite({
                    mode: {
                        symbol: {
                            // * revision hash (disable)
                            bust: false,
                            // * sprite file name
                            sprite: '../sprite.svg',
                            // * generate html example file
                            example: false,
                            // render: {
                            //     // * generate css file with class names for icons (disable)
                            //     css: false,
                            // },
                            // * need enable if icons will using in html code
                            inline: true,
                        },
                    },
                    shape: {
                        transform: [
                            {
                                svgo: svgoConfig, // * connect svgo config
                            },
                        ],
                    },
                }),
            )
            .pipe(gulp.dest(path.build.icons))
            .pipe(browserSync.stream())
    )
}

// TODO:
// * --- FONTS + CONVERT TO WOFF/WOFF2
// * ---------------------------------

// * just copy ttf/otf | no convert to woff/woff2
// function fontsCopy() {
//     return gulp
//         .src(path.src.fonts)
//         .pipe(plumber({ errorHandler }))
//         .pipe(gulp.dest(path.build.fonts))
// }

// * convert ttf/otf to woff
// function fontsWoff() {
//     return gulp
//         .src(path.src.fonts)
//         .pipe(plumber({ errorHandler }))
//         .pipe(gulpIf(/\/.otf$/, fonter({ formats: ['ttf'] })))
//         .pipe(gulpIf(/\.ttf$/, fonter({ formats: ['woff'] })))
//         .pipe(gulp.dest(path.build.fonts))
// }

// * convert ttf/otf to woff2 | recomended to use
// function fontsWoff2() {
//     return gulp
//         .src(path.src.fonts)
//         .pipe(plumber({ errorHandler }))
//         .pipe(gulpIf(/\.otf$/, fonter({ formats: ['ttf'] })))
//         .pipe(gulpIf(/\.ttf$/, ttf2woff2()))
//         .pipe(gulp.dest(path.build.fonts))
// }

// * default entrypoint for fonts
// export function fonts() {
//     return fontsWoff2()
// }

// TODO:
// * --- VIDEOS
// * ----------
export function videos() {
    return (
        gulp
            .src(path.src.videos)
            .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.videos) }))
            // * video processing modules here
            .pipe(gulp.dest(path.build.videos))
            .pipe(browserSync.stream())
    )
}

// TODO:
// * --- AUDIO
// * ---------
export function audio() {
    return (
        gulp
            .src(path.src.audio)
            .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.audio) }))
            // * audio processing modules here
            .pipe(gulp.dest(path.build.audio))
            .pipe(browserSync.stream())
    )
}

// TODO:
// * --- LANGUAGES
// * -------------
export function i18n() {
    return gulp
        .src(path.src.i18n)
        .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.i18n) }))
        .pipe(gulp.dest(path.build.i18n))
        .pipe(browserSync.stream())
}

// * --- OTHER STATIC FILES
// * ----------------------
export function misc() {
    return gulp
        .src(path.src.misc)
        .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.misc) }))
        .pipe(gulp.dest(path.build.misc))
        .pipe(browserSync.stream())
}

// * --- LIBRARIES (LIBS)
// * --------------------
export function libs() {
    return gulp
        .src(path.src.libs)
        .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.libs) }))
        .pipe(gulp.dest(path.build.libs))
        .pipe(browserSync.stream())
}

// * --- META FILES
// * --------------
export function meta() {
    return gulp
        .src(path.src.meta)
        .pipe(plumber({ errorHandler: errorHandler(notificationCenterErrorTitles.meta) }))
        .pipe(gulp.dest(path.build.meta))
        .pipe(browserSync.stream())
}

// TODO:
// * --- REVISION (HASHING)
// * ----------------------
export function revision() {
    return gulp
        .src([`${path.build.css}*.css`, `${path.build.scripts}*.js`], { base: path.build.base })
        .pipe(plumber({ errorHandler }))
        .pipe(rev())
        .pipe(gulp.dest(path.build.base))
        .pipe(rev.manifest('rev-manifest.json'))
        .pipe(gulp.dest(path.build.base))
    // .pipe(browserSync.stream()) | use only in dev mode
}

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

// * --- CRITICAL CSS
// * ----------------
export async function criticalCss() {
    const dir = nodePath.resolve(path.build.html)
    const cssFile = nodePath.resolve(path.build.css, 'main.min.css')

    const files = fs.readdirSync(dir)
    const htmlFiles = files.filter((f) => f.endsWith('.html'))

    // ! не нужно, penthouse уже захватывает media queries при генерации
    // const viewports = [
    //     { width: 375, height: 667 }, // Mobile
    //     { width: 1920, height: 1080 }, // Desktop
    // ]

    const viewport = {
        width: 1920,
        height: 1080,
    }

    for (const file of htmlFiles) {
        const filePath = nodePath.resolve(dir, file)
        let html = fs.readFileSync(filePath, 'utf-8')

        if (!html.includes('<!-- ! DO NOT REMOVE THIS COMMENT | CRITICAL CSS PLACEHOLDER --->')) {
            continue
        }

        try {
            const criticalCss = await penthouse({
                url: `file:///${filePath}`,
                css: cssFile,
                width: viewport.width,
                height: viewport.height,
                forceInclude: [/^\.avif #reeding-house/, /^\.webp #reeding-house/],
            })

            html = html.replace(
                '<!-- ! DO NOT REMOVE THIS COMMENT | CRITICAL CSS PLACEHOLDER --->',
                `<style>${criticalCss}</style>`,
            )

            fs.writeFileSync(filePath, html)
        } catch (err) {
            toasted.notify({
                title: notificationCenterErrorTitles.criticalCss,
                message: err.message,
                sound: true,
                wait: false,
            })
        }

        browserSync.reload()
    }
}

// * --- WATCH FILES
// * ---------------
export function watch() {
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, styles)
    // gulp.watch(path.watch.ts, scripts)
    gulp.watch(path.watch.audio, audio)
    gulp.watch(path.watch.icons, icons)
    gulp.watch(path.watch.images, images)
    gulp.watch(path.watch.videos, videos)
    // gulp.watch(path.watch.fonts, fonts)
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
// const build = gulp.series(
//     clean,
//     gulp.parallel(html, styles, scripts, icons, images, videos, fonts, misc, libs),
// )

// * development | build + devServer + watchers
// const dev = gulp.series(build, server, watch)

// * staging | build with optimizations + no HASHING + no criticalCss
// const staging = gulp.series(clean, gulp.parallel(html, styles, scripts, images, fonts, videos))

// * production | build with optimizations + HASHING + link rewrite + criticalCss
// export const prod = gulp.series(build, revision, rewrite, criticalCss)

// * --- CLI EXPORTS
// * ---------------
// gulp.task('default', dev)

// gulp.task('dev', dev)
// gulp.task('staging', staging)
// gulp.task('prod', prod)

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
//             .pipe(gulp.dest(path.build.scripts))
//             // обновляем страницу через browser-sync
//             .pipe(browserSync.stream())
//     )
// }

// function ts() {
//     return (
//         gulp
//             // берем файл
//             .src(path.src.scripts)
//             // объединяем всё в 1 файл
//             .pipe(concat('main.ts'))
//             // конвертируем TS в JS
//             .pipe(convert())
//             // сжимаем JS
//             .pipe(uglify())
//             // складываем результат в папку build
//             .pipe(gulp.dest(path.build.scripts))
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
