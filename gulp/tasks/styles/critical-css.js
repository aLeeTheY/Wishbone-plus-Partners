import fs from 'fs'
import gulp from 'gulp'
import nodePath from 'path'
import fastGlob from 'fast-glob'
import penthouse from 'penthouse'
import browserSync from 'browser-sync'

import { path } from '../../config/path.js'
import { errorHandler, NOTIFICATION_HANDLER_TITLES } from '../../helpers/error-handler.js'

// * --- EXPORT GULP TASK FOR INLINE CRITICAL CSS TO HTML FILES
// * ----------------------------------------------------------
export async function criticalCss() {
    // TODO: read docs for nodePath.resolve()
    const dir = nodePath.resolve(path.build.html)
    const cssFile = nodePath.resolve(path.build.css, 'main.min.css')

    // const files = fs.readdirSync(dir)
    // const htmlFiles = files.filter((f) => f.endsWith('.html'))

    const htmlFiles = fastGlob.sync('**/*.html', {
        cwd: dir,
        absolute: true,
    })

    // ! не нужно, penthouse уже захватывает media queries при генерации
    // const viewports = [
    //     { width: 375, height: 667 }, // Mobile
    //     { width: 1920, height: 1080 }, // Desktop
    // ]

    const viewport = {
        width: 1920,
        height: 1080,
    }

    for (const file of htmlFiles) {
        const filePath = nodePath.resolve(dir, file)
        let html = fs.readFileSync(filePath, 'utf-8')

        if (!html.includes('<!-- ! DO NOT REMOVE THIS COMMENT | CRITICAL CSS PLACEHOLDER --->')) {
            continue
        }

        try {
            const criticalCss = await penthouse({
                url: `file:///${filePath}`,
                css: cssFile,
                width: viewport.width,
                height: viewport.height,
                forceInclude: [/^\.avif #reeding-house/, /^\.webp #reeding-house/],
            })

            html = html.replace(
                '<!-- ! DO NOT REMOVE THIS COMMENT | CRITICAL CSS PLACEHOLDER --->',
                `<style>${criticalCss}</style>`,
            )

            fs.writeFileSync(filePath, html)
        } catch (err) {
            errorHandler(NOTIFICATION_HANDLER_TITLES.CRITICAL_CSS)(err)
        }

        browserSync.reload()
    }
}

// * --- REGISTER GULP TASK
// * ----------------------
gulp.task('critical-css', criticalCss)
