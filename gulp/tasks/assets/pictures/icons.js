import gulp from 'gulp'
import gulpIf from 'gulp-if'
import gulpNewer from 'gulp-newer'
import browserSync from 'browser-sync'

import { env } from '../../../config/env.js'
import { path } from '../../../config/path.js'
import { plumberWithErrorHandler, ERROR_HANDLER_TITLES } from '../../../helpers/error-handler.js'

import svgSprite from 'gulp-svg-sprite'
import svgoConfig from '../../../../svgo.config.mjs'

// * --- EXPORT GULP TASK FOR ICONS (SVG) FILES
// * ------------------------------------------
export function icons() {
    return (
        gulp
            .src(path.src.icons)
            .pipe(plumberWithErrorHandler(ERROR_HANDLER_TITLES.ICONS))
            .pipe(gulpIf(env.buildMode.isStaging || env.buildMode.isProd, gulpNewer(path.build.icons)))
            // ! use svgmin OR internal svgsprite transform, not both.
            // .pipe(svgmin())
            .pipe(
                // ! works only via web server, not via "file:///mysite.html"
                svgSprite({
                    mode: {
                        symbol: {
                            // * revision hash (disable)
                            bust: false,
                            // * sprite file name
                            sprite: '../sprite.svg',
                            // * generate html example file
                            example: false,
                            // render: {
                            //     // * generate css file with class names for icons (disable)
                            //     css: false,
                            // },
                            // * need enable if icons will using in html code
                            inline: true,
                        },
                    },
                    shape: {
                        transform: [
                            {
                                svgo: svgoConfig, // * connect svgo config
                            },
                        ],
                    },
                }),
            )
            .pipe(gulp.dest(path.build.icons))
            .pipe(browserSync.stream())
    )
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('icons', icons)
