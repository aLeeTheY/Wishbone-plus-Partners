import browserSync from 'browser-sync'
import { path } from '../../../config/path.js'

// * --- EXPORT GULP TASK FOR START DEV SERVER
// * -----------------------------------------
export function server(done) {
    browserSync.init({
        // * serve files from the app directory with directory listing
        server: {
            baseDir: path.build.html,
            directory: false,
        },
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
    done()
}
