import fs from 'fs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { path } from './path.js'

// * --- ARGV CONFIG
// * ---------------
const argv = yargs(hideBin(process.argv))
    .option('base-url', {
        alias: ['bu', 'u'],
        type: 'string',
        default: undefined,
        description:
            'Base URL (domain) of the site, e.g. "https://example.com". ' +
            'For GitHub Pages this is usually "https://username.github.io". ' +
            'If not provided, the value from site.config.json is used.',
    })
    .option('base-url-prefix', {
        alias: ['bup', 'p'],
        type: 'string',
        default: undefined,
        description:
            'URL path prefix where the site is served, e.g. "/my-repo/". ' +
            'For GitHub Pages this is the repository name. ' +
            'Leave empty or omit if served from root. ' +
            'If not provided, the value from site.config.json is used.',
    })
    .option('internationalization', {
        alias: ['i18n', 'i'],
        type: 'boolean',
        default: false,
        description:
            'Enable internationalization build (reads locale JSON files). ' +
            'Without this flag, builds with inline text and default locale only.',
    })
    .parse()

// * --- CONSTANTS
// * -------------
const NODE_ENV = process.env.NODE_ENV ?? 'development'

// * --- LOAD CONFIG
// * ---------------
const siteConfig = JSON.parse(fs.readFileSync(`${path.src.base}/site.config.json`, 'utf-8'))

// * --- EXPORT GULP ENV
// * -------------------
export const env = {
    buildMode: {
        isDev: NODE_ENV === 'development',
        isProd: NODE_ENV === 'production',
        isStaging: NODE_ENV === 'staging',
    },
    isI18N: argv.internationalization,
    baseUrl: argv.baseUrl !== undefined ? argv.baseUrl : siteConfig.baseUrl,
    baseUrlPrefix:
        argv.baseUrlPrefix !== undefined
            ? '/' + argv.baseUrlPrefix
            : siteConfig.baseUrlPrefix !== ''
              ? '/' + siteConfig.baseUrlPrefix
              : '',
    // placeholders: {
    //     webpInCssPolyfillScript: fs.readFileSync('node_modules/webp-in-css/polyfill.js', 'utf-8'),
    // },
}
