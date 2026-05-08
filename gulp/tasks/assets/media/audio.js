import gulp from 'gulp'
import browserSync from 'browser-sync'

import { path } from '../../../config/path.js'
import { plumberWithErrorHandler, ERROR_HANDLER_TITLES } from '../../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR AUDIO FILES
// * ------------------------------------
export function audio() {
    return (
        gulp
            .src(path.src.audio)
            .pipe(plumberWithErrorHandler(ERROR_HANDLER_TITLES.AUDIO))
            // * audio processing modules here
            .pipe(gulp.dest(path.build.audio))
            .pipe(browserSync.stream())
    )
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('audio', audio)
