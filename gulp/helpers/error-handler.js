import toasted from 'toasted-notifier'
import plumber from 'gulp-plumber'

// * --- EXPORT ERROR HANDLER TITLES
// * -------------------------------
export const ERROR_HANDLER_TITLES = {
    UNKNOWN: '[ERROR] --- Unknown',
    HTML: '[ERROR] HTML',
    META: '[ERROR] META',
    STYLES: '[ERROR] STYLES',
    SCRIPTS: '[ERROR] SCRIPTS',
    AUDIO: '[ERROR] AUDIO',
    ICONS: '[ERROR] ICONS',
    IMAGES: '[ERROR] IMAGES',
    VIDEOS: '[ERROR] VIDEOS',
    FONTS: '[ERROR] FONTS',
    I18N: '[ERROR] I18N',
    MISC: '[ERROR] MISC',
    LIBS: '[ERROR] LIBS',
    CRITICAL_CSS: '[ERROR] CRITICAL CSS',
    ZIP: '[ERROR] ZIP',
    FTP: '[ERROR] FTP',
    REVISION: '[ERROR] REVISION',
    REVISION_REWRITE: '[ERROR] REVISION --> REWRITE',
}

// * --- EXPORT ERROR HANDLER
// * ------------------------
export const errorHandler = (title) =>
    function (err) {
        toasted.notify({
            title: title ?? ERROR_HANDLER_TITLES.UNKNOWN,
            message: err.message ?? 'An unknown error occurred during the build.',
            sound: false,
            wait: false,
        })

        this.emit('end')
    }

// * --- EXPORT GULP PLUMBER WITH ERROR HANDLER
// * ------------------------------------------
export const plumberWithErrorHandler = (title) => plumber({ errorHandler: errorHandler(title) })
