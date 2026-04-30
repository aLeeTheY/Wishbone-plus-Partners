import gulp from 'gulp'
import browserSync from 'browser-sync'

import { path } from '../../config/path.js'
import { plumberWithErrorHandler, ERROR_HANDLER_TITLES } from '../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR MISC FILES
// * -----------------------------------
export function misc() {
    return gulp
        .src(path.src.misc)
        .pipe(plumberWithErrorHandler(ERROR_HANDLER_TITLES.MISC))
        .pipe(gulp.dest(path.build.misc))
        .pipe(browserSync.stream())
}
