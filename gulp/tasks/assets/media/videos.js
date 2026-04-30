import gulp from 'gulp'
import browserSync from 'browser-sync'

import { path } from '../../../config/path.js'
import { plumberWithErrorHandler, ERROR_HANDLER_TITLES } from '../../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR VIDEO FILES
// * ------------------------------------
export function videos() {
    return (
        gulp
            .src(path.src.videos)
            .pipe(plumberWithErrorHandler(ERROR_HANDLER_TITLES.VIDEOS))
            // * video processing modules here
            .pipe(gulp.dest(path.build.videos))
            .pipe(browserSync.stream())
    )
}
