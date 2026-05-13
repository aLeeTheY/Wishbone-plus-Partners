import gulp from 'gulp'
import { deleteAsync } from 'del'
import { readFileSync } from 'node:fs'

import rev from 'gulp-rev'
import revRewrite from 'gulp-rev-rewrite'
import revDel from 'gulp-rev-delete-original'

import { env } from '../../config/env.js'
import { path } from '../../config/path.js'
import {
    plumberWithErrorHandler,
    NOTIFICATION_HANDLER_TITLES,
} from '../../helpers/error-handler.js'

// * --- ASSET REVISIONING
// * ---------------------
function revision() {
    return (
        gulp
            // * берем готовые собранные ассеты
            .src(
                `${path.build.base}/**/*.{css,js,woff,woff2,ttf,svg,avif,webp,png,jpeg,jpg,webm,mp4,mp3}`,
                {
                    base: path.build.base,
                    encoding: false,
                },
            )
            // * подключаем plumber
            .pipe(plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.REVISION))
            // * добавляем ревизию к имени файлов
            .pipe(rev())
            // * удаляем оригинальные файлы до ревизии
            .pipe(revDel())
            // * перезаписываем файлы с новым именем
            .pipe(gulp.dest(path.build.base))
            // * генерируем rev-manifest.json
            .pipe(
                rev.manifest('rev-manifest.json', {
                    merge: true,
                }),
            )
            // * перезаписываем rev-manifest.json
            .pipe(gulp.dest(path.build.base))
    )
}

// * --- REWRITING REFERENCES
// * ------------------------
function rewrite() {
    const manifest = readFileSync(`${path.build.base}/rev-manifest.json`)

    return (
        gulp
            // * берем готовые собранные html
            .src(`${path.build.base}/**/*.{html,css}`)
            // * подключаем plumber
            .pipe(plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.REVISION_REWRITE))
            // * перезаписываем пути к новым ассетам с ревизиями
            .pipe(revRewrite({ manifest }))
            // * сохраняем обновленный html
            .pipe(gulp.dest(path.build.base))
    )
}

// * --- DELETE REVISION MANIFEST FILE
// * ---------------------------------
function deleteManifest(done) {
    if (env.buildMode.isProd) {
        deleteAsync(`${path.build.base}/rev-manifest.json`).then(() => {
            done()
        })
    } else {
        done()
    }
}

// * --- EXPORT GULP TASK
// * --------------------
export const revise = gulp.series(revision, rewrite, deleteManifest)

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('revise', revise)
