import gulp from 'gulp'

// import sass from 'gulp-sass'
// import postcss from 'gulp-postcss'

// import paths
import { path } from './gulp/config/path.js'

// import generic plugins
import { plugins } from './gulp/config/plugins.js'

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// Import tasks
import { reset } from './gulp/tasks/reset.js'

import { html } from './gulp/tasks/html.js'

import { copy } from './gulp/tasks/copy.js'

// Init watchers
const watcher = () => {
    gulp.watch(path.watch.assets, copy)
    gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.parallel(copy, html)

// DEV mode pipeline
const dev = gulp.series(reset, mainTasks, watcher)

// Execute default pipeline
gulp.task('default', dev)
