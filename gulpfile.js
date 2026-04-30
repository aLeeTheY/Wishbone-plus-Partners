import gulp from 'gulp'

import { dev, prod } from './gulp/tasks/core/main-tasks.js'

// * --- EXPORT TASKS
// * ----------------
gulp.task('default', dev)

gulp.task('dev', dev)
// gulp.task('staging', staging)
gulp.task('prod', prod)

// gulp.task('zip', prod)
// gulp.task('ftp', prod)
