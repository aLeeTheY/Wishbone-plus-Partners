import fileInclude from 'gulp-file-include'

const version = Date.now()

export const html = () => {
    const app = global.app
    return (
        app.gulp //
            .src(app.path.src.html)
            .pipe(fileInclude())
            .pipe(app.plugins.replace(/@images\//g, './assets/images'))
            .pipe(app.plugins.replace(/@icons\//g, './assets/icons'))
            .pipe(app.plugins.replace(/@fonts\//g, './assets/fonts'))
            .pipe(app.plugins.replace(/@scss\//g, './src/scss'))
            .pipe(app.plugins.replace(/@css\//g, './css'))
            .pipe(app.plugins.replace(/@ts\//g, './src/ts'))
            .pipe(app.plugins.replace(/@js\//g, './js'))

            // files version (cache)
            .pipe(app.plugins.replace(/(\.(css|js|png|jpg|jpeg|webp|svg))/g, `$1?v=${version}`))

            .pipe(app.gulp.dest(app.path.build.html))
    )
}
