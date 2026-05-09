import * as nodePath from 'path'

// * --- BASE FOLDERS
// * ----------------
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './out'
const srcFolder = './src'

// * --- EXPORT GULP PATHS
// * ---------------------
export const path = {
    root: rootFolder,
    clean: buildFolder,
    build: {
        base: `${buildFolder}`,
        njk: `${buildFolder}/`,
        html: `${buildFolder}/`,
        meta: `${buildFolder}/`,
        scripts: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        audio: `${buildFolder}/assets/audio/`,
        icons: `${buildFolder}/assets/icons/`,
        images: `${buildFolder}/assets/images/`,
        videos: `${buildFolder}/assets/videos/`,
        fonts: `${buildFolder}/assets/fonts/`,
        misc: `${buildFolder}/assets/misc/`,
        libs: `${buildFolder}/libs/`,
        i18n: `${buildFolder}/i18n/`,
    },
    src: {
        base: `${srcFolder}`,
        njk: `${srcFolder}/*.{nj,njk,nunjucks}`,
        html: `${srcFolder}/*.html`,
        meta: `${srcFolder}/meta/**/*.*`,
        scripts: `${srcFolder}/{js,ts}/main.{js,mjs,cjs,ts,mts,cts}`,
        scss: `${srcFolder}/scss/*.scss`,
        audio: `${srcFolder}/assets/audio/**/*.*`,
        icons: `${srcFolder}/assets/icons/**/*.svg`,
        images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png}`,
        // images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,ico,webp}`,
        videos: `${srcFolder}/assets/videos/**/*.{mp4,avi,mov,mkv,webm}`,
        fonts: `${srcFolder}/assets/fonts/**/*.{ttf,otf,woff,woff2}`,
        misc: `${srcFolder}/assets/misc/**/*.*`,
        libs: `${srcFolder}/libs/**/*.*`,
        i18n: `${srcFolder}/i18n/**/*.*`,
    },
    watch: {
        base: `${srcFolder}`,
        njk: `${srcFolder}/**/*.{nj,njk,nunjucks}`,
        html: `${srcFolder}/**/*.html`,
        meta: `${srcFolder}/meta/**/*.*`,
        scripts: `${srcFolder}/{js,ts}/**/*.{js,mjs,cjs,ts,mts,cts}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        audio: `${srcFolder}/assets/audio/**/*.*`,
        icons: `${srcFolder}/assets/icons/**/*.*`,
        images: `${srcFolder}/assets/images/**/*.*`,
        videos: `${srcFolder}/assets/videos/**/*.*`,
        fonts: `${srcFolder}/assets/fonts/**/*.*`,
        misc: `${srcFolder}/assets/misc/**/*.*`,
        libs: `${srcFolder}/libs/**/*.*`,
        i18n: `${srcFolder}/i18n/**/*.*`,
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
    ftp: `test`,
}
