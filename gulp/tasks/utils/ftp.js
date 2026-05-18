import gulp from 'gulp'
import through2 from 'through2'
import gulpUtil from 'gulp-util'
import vinylFTP from 'vinyl-ftp'

import { env } from '../../config/env.js'
import { path } from '../../config/path.js'
import { configFTP } from '../../config/ftp.js'
import {
    notify,
    plumberWithErrorHandler,
    NOTIFICATION_HANDLER_TITLES,
} from '../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR UPLOAD PROJECT BUILD TO REMOTE SERVER VIA FTP PROTOCOL
// * -------------------------------------------------------------------------------
export function ftp() {
    if (!configFTP.host || !configFTP.user) {
        notify.warn(NOTIFICATION_HANDLER_TITLES.FTP, 'FTP credentials missing, skipping deploy.')
        return gulp.src('.').pipe(gulp.dest('.'))
    }

    configFTP.log = gulpUtil.log

    const ftpConnect = vinylFTP.create(configFTP)

    return gulp
        .src(`${path.build.base}/**/*.*`, {})
        .pipe(
            env.buildMode.isDev
                ? plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.FTP)
                : through2.obj(), // passthrough
        )
        .pipe(ftpConnect.dest(`/${path.ftp}/${path.projectRootFolderName}`))
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('ftp', ftp)
