import gulp from 'gulp'

import { server } from './dev/server.js'
import { watch } from './dev/watch.js'

import { clean } from './clean.js'

import { html } from '../html/html.js'
import { styles } from '../styles/styles.js'
import { scripts } from '../scripts/scripts.js'
import { audio } from '../assets/media/audio.js'
import { icons } from '../assets/pictures/icons.js'
import { images } from '../assets/pictures/images.js'
import { videos } from '../assets/media/videos.js'
import { libs } from '../scripts/libs.js'
import { misc } from '../assets/misc.js'

// * --- LOCAL TASKS
// * ---------------
const assets = gulp.parallel(icons, images, audio, videos)
const mainTasks = gulp.series(gulp.parallel(styles, scripts, assets, libs, misc), html)
const devTools = gulp.parallel(watch, server)

// * --- EXPORT GULP MAIN TASKS PIPELINES
// * ------------------------------------
export const dev = gulp.series(clean, mainTasks, devTools)

// TODO: add revision
// export const staging = gulp.series(clean, mainTasks, watch, server)
export const prod = gulp.series(clean, mainTasks)
