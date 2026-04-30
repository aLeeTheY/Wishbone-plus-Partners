// import fs from 'fs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

// * --- ARGV CONFIG
// * ---------------
const argv = yargs(hideBin(process.argv))
    .option('site-root', {
        alias: ['sr', 'r'],
        type: 'string',
        default: '',
        description:
            'Base path (URL prefix) for the project on the web server. If deploying to GitHub Pages, this is typically your repository name (e.g., "/my-repo/"). Default is empty string (site served from root).',
    })
    .option('internationalization', {
        alias: ['i18n', 'i'],
        type: 'boolean',
        default: false,
        description:
            'Enable internationalization build (reads locale JSON files). Without this flag, builds with inline text and default locale only.',
    })
    .parse()

// * --- CONSTANTS
// * -------------
const NODE_ENV = process.env.NODE_ENV ?? 'development'

// * --- EXPORT GULP ENV
// * -------------------
export const env = {
    buildMode: {
        isDev: NODE_ENV === 'development',
        isProd: NODE_ENV === 'production',
        isStaging: NODE_ENV === 'staging',
    },
    isI18N: argv.internationalization,
    siteRoot: argv.siteRoot,
    // placeholders: {
    //     webpInCssPolyfillScript: fs.readFileSync('node_modules/webp-in-css/polyfill.js', 'utf-8'),
    // },
}
