import gulp from 'gulp'

import { dev, prod } from './gulp/tasks/core/main-tasks.js'

import { zip } from './gulp/tasks/utils/zip.js'
import { ftp } from './gulp/tasks/utils/ftp.js'
import { convertFonts } from './gulp/tasks/assets/fonts/convert-fonts.js'

// * --- EXPORT TASKS
// * ----------------
gulp.task('default', dev)

gulp.task('dev', dev)
// gulp.task('staging', staging)
gulp.task('prod', prod)

// gulp.task('zip', prod)
// gulp.task('ftp', prod)

gulp.task('zip', zip)
gulp.task('ftp', ftp)
gulp.task('convert-fonts', convertFonts)
