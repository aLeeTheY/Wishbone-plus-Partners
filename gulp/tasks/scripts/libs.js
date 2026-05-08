import gulp from 'gulp'
import browserSync from 'browser-sync'

import { path } from '../../config/path.js'
import { plumberWithErrorHandler, ERROR_HANDLER_TITLES } from '../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR (JS/TS) LIBS FILES
// * -------------------------------------------
export function libs() {
    return gulp
        .src(path.src.libs)
        .pipe(plumberWithErrorHandler(ERROR_HANDLER_TITLES.LIBS))
        .pipe(gulp.dest(path.build.libs))
        .pipe(browserSync.stream())
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('libs', libs)
