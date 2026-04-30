import gulp from 'gulp'
import browserSync from 'browser-sync'

import { env } from '../../config/env.js'
import { path } from '../../config/path.js'
import { plumberWithErrorHandler, ERROR_HANDLER_TITLES } from '../../helpers/error-handler.js'

// ! build mode
import gulpEsbuild from 'gulp-esbuild'

// ! watch mode
// import { createGulpEsbuild } from 'gulp-esbuild'
// const gulpEsbuild = createGulpEsbuild({ incremental: true })

// * --- EXPORT GULP TASK FOR JS/TS FILES
// * ------------------------------------
export function scripts() {
    return (
        gulp
            // * берем исходники
            .src(path.src.scripts)
            // * подключаем plumber, чтобы gulp не падал при ошибке
            .pipe(plumberWithErrorHandler(ERROR_HANDLER_TITLES.SCRIPTS))
            // * билдим JS с помощью Esbuild
            .pipe(
                gulpEsbuild({
                    bundle: true,
                    format: 'iife',
                    platform: 'browser',
                    outfile: 'main.min.js',
                    sourcemap: env.buildMode.isDev || env.buildMode.isStaging ? 'external' : false,
                    minify: env.buildMode.isStaging || env.buildMode.isProd,
                    target: ['es2018'],
                    drop: env.buildMode.isProd ? ['console', 'debugger'] : [],
                    treeShaking: true,
                    define: {
                        'process.env.buildMode.NODE_ENV': JSON.stringify(
                            env.buildMode.isProd
                                ? 'production'
                                : env.buildMode.isStaging
                                  ? 'staging'
                                  : 'development',
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
