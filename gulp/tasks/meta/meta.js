import gulp from 'gulp'
import browserSync from 'browser-sync'

import { path } from '../../config/path.js'
import { plumberWithErrorHandler, ERROR_HANDLER_TITLES } from '../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR META FILES
// * -----------------------------------
export function meta() {
    return gulp
        .src(path.src.meta)
        .pipe(plumberWithErrorHandler(ERROR_HANDLER_TITLES.META))
        .pipe(gulp.dest(path.build.meta))
        .pipe(browserSync.stream())
}
