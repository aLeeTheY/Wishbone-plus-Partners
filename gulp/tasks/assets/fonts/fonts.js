// * fonts
// import fonter from 'gulp-fonter-fix' // TODO: deprecated
// import ttf2woff2 from 'gulp-ttf2woff2' // TODO: deprecated

// TODO:
// * --- FONTS + CONVERT TO WOFF/WOFF2
// * ---------------------------------

// * just copy ttf/otf | no convert to woff/woff2
// function fontsCopy() {
//     return gulp
//         .src(path.src.fonts)
//         .pipe(plumber({ errorHandler }))
//         .pipe(gulp.dest(path.build.fonts))
// }

// * convert ttf/otf to woff
// function fontsWoff() {
//     return gulp
//         .src(path.src.fonts)
//         .pipe(plumber({ errorHandler }))
//         .pipe(gulpIf(/\/.otf$/, fonter({ formats: ['ttf'] })))
//         .pipe(gulpIf(/\.ttf$/, fonter({ formats: ['woff'] })))
//         .pipe(gulp.dest(path.build.fonts))
// }

// * convert ttf/otf to woff2 | recomended to use
// function fontsWoff2() {
//     return gulp
//         .src(path.src.fonts)
//         .pipe(plumber({ errorHandler }))
//         .pipe(gulpIf(/\.otf$/, fonter({ formats: ['ttf'] })))
//         .pipe(gulpIf(/\.ttf$/, ttf2woff2()))
//         .pipe(gulp.dest(path.build.fonts))
// }

// * default entrypoint for fonts
// export function fonts() {
//     return fontsWoff2()
// }
