import gulp from 'gulp'
// import gulpIf from 'gulp-if'
// import gulpRev from 'gulp-rev'
import browserSync from 'browser-sync'

import { env } from '../../config/env.js'
import { path } from '../../config/path.js'
import {
    plumberWithErrorHandler,
    NOTIFICATION_HANDLER_TITLES,
} from '../../helpers/error-handler.js'

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
            .pipe(plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.SCRIPTS))
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
            // // * добавляем к файлу ревизию для инвалидации кэша
            // .pipe(gulpIf(env.buildMode.isStaging || env.buildMode.isProd, gulpRev()))
            // * добавляем к имени суффикс .min
            // .pipe(rename({ suffix: '.min' }))
            // * кладем результат в папку сборки
            .pipe(gulp.dest(path.build.scripts))
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
gulp.task('scripts', scripts)
