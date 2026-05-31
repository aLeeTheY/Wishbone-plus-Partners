import gulp from 'gulp'
import browserSync from 'browser-sync'

import { env } from '../../../config/env.js'
import { path } from '../../../config/path.js'

// TODO: починить watchers
// * --- EXPORT GULP TASK FOR START DEV SERVER
// * -----------------------------------------
export function server(cb) {
    browserSync.init({
        // * serve files from the app directory with directory listing
        server: {
            baseDir: path.build.html,
            directory: false,
        },
        // * control `http` or `https` mode
        https: env.isHttps,
        // TODO: test 'ghostMode' later
        // ghostMode: {
        //     clicks: true,
        //     scroll: true,
        //     location: true,
        //     forms: true,
        // },
        // * open localhost url
        open: 'local',
        // * open page in google chrome by default
        browser: 'chrome',
        // * hide notification in browser
        notify: false,
        // * server port
        port: 3000,
    })
    cb()
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('server', server)
