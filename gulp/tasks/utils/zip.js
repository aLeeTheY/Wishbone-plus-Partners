import gulp from 'gulp'
import gulpZip from 'gulp-zip'
import { deleteAsync } from 'del'

import { path } from '../../config/path.js'
import { plumberWithErrorHandler, ERROR_HANDLER_TITLES } from '../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR PUSH PROJECT BUILD TO ZIP ARCHIVE
// * ----------------------------------------------------------
export async function zip() {
    await deleteAsync(`./archive/${path.root}.zip`)

    return gulp
        .src(`${path.build.base}/**/*.*`, {})
        .pipe(plumberWithErrorHandler(ERROR_HANDLER_TITLES.ZIP))
        .pipe(gulpZip(`${path.root}.zip`))
        .pipe(gulp.dest('./archive/'))
}
