import gulp from 'gulp'
// import browserSync from 'browser-sync'

import rev from 'gulp-rev'
import revRewrite from 'gulp-rev-rewrite'

import { path } from '../../config/path.js'
import {
    plumberWithErrorHandler,
    NOTIFICATION_HANDLER_TITLES,
} from '../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR MAKE REVISION HASH FOR WEBSITE STATIC FILES (IGNORE CACHE)
// * -----------------------------------------------------------------------------------
export function revision() {
    return gulp
        .src([`${path.build.css}*.css`, `${path.build.scripts}*.js`], { base: path.build.base })
        .pipe(plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.REVISION))
        .pipe(rev())
        .pipe(gulp.dest(path.build.base))
        .pipe(rev.manifest('rev-manifest.json'))
        .pipe(gulp.dest(path.build.base))
    // .pipe(browserSync.stream()) | use only in dev mode
}

export function rewrite() {
    const manifest = gulp.src(`${path.build.base}rev-manifest.json`)
    return gulp
        .src(`${path.build.html}*.html`)
        .pipe(plumberWithErrorHandler(NOTIFICATION_HANDLER_TITLES.REVISION_REWRITE))
        .pipe(revRewrite({ manifest }))
        .pipe(gulp.dest(path.build.html))
    // .pipe(browserSync.stream()) | use only in dev mode
}

// export function rewrite() {
//     const manifest = JSON.parse(fs.readFileSync(`${path.build.base}rev-manifest.json`))
//     return gulp
//         .src(`${path.build.html}*.html`)
//         .pipe(plumber({ errorHandler }))
//         .pipe(revRewrite({ manifest }))
//         .pipe(gulp.dest(path.build.html))
//     // .pipe(browserSync.stream()) | use only in dev mode
// }

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('revision', revision)
