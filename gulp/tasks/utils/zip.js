import gulp from 'gulp'
import gulpZip from 'gulp-zip'
import through2 from 'through2'
import { deleteAsync } from 'del'

import { env } from '../../config/env.js'
import { path } from '../../config/path.js'
import {
    plumberWithErrorHandler,
    NOTIFICATION_HANDLER_TITLES,
} from '../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR PUSH PROJECT BUILD TO ZIP ARCHIVE
// * ----------------------------------------------------------
export async function zip() {
    await deleteAsync(`${path.zip}/${path.projectRootFolderName}.zip`)

    return gulp
        .src(`${path.build.base}/**/*.*`, { encoding: false })
        .pipe(
            env.buildMode.isDev
                ? plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.ZIP)
                : through2.obj(), // passthrough
        )
        .pipe(gulpZip(`${path.projectRootFolderName}.zip`))
        .pipe(gulp.dest(`${path.zip}/`))
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('zip', zip)
