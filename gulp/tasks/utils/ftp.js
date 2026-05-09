import gulp from 'gulp'
import gulpUtil from 'gulp-util'
import vinylFTP from 'vinyl-ftp'

import { path } from '../../config/path.js'
import { configFTP } from '../../config/ftp.js'
import { plumberWithErrorHandler, ERROR_HANDLER_TITLES } from '../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR UPLOAD PROJECT BUILD TO REMOTE SERVER VIA FTP PROTOCOL
// * -------------------------------------------------------------------------------
export function ftp() {
    configFTP.log = gulpUtil.log
    const ftpConnect = vinylFTP.create(configFTP)

    return gulp
        .src(`${path.build.base}/**/*.*`, {})
        .pipe(plumberWithErrorHandler(ERROR_HANDLER_TITLES.FTP))
        .pipe(ftpConnect.dest(`/${path.ftp}/${path.root}`))
}
