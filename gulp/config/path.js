// import { build } from 'esbuild';
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './out'
const srcFolder = './src'

export const path = {
    build: {
        html: `${buildFolder}/`,
        assets: `${buildFolder}/assets/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,
}
