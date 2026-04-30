import gulp from 'gulp'
import { path } from '../../../config/path.js'

import { html } from '../../html/html.js'
import { styles } from '../../styles/styles.js'
import { scripts } from '../../scripts/scripts.js'
import { audio } from '../../assets/media/audio.js'
import { icons } from '../../assets/pictures/icons.js'
import { images } from '../../assets/pictures/images.js'
import { videos } from '../../assets/media/videos.js'
import { libs } from '../../scripts/libs.js'
import { misc } from '../../assets/misc.js'

// * --- EXPORT GULP TASK FOR WATCH KEY FILES
// * ----------------------------------------
export function watch() {
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, styles)
    gulp.watch(path.watch.scripts, scripts)
    gulp.watch(path.watch.audio, audio)
    gulp.watch(path.watch.icons, icons)
    gulp.watch(path.watch.images, images)
    gulp.watch(path.watch.videos, videos)
    // gulp.watch(path.watch.fonts, fonts)
    gulp.watch(path.watch.libs, libs)
    gulp.watch(path.watch.misc, misc)
}
