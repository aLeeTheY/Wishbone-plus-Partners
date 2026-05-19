import fs from 'fs'
import nodePath from 'node:path'

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { path } from './path.js'

// * --- RESOLVE PATH TO PACKAGE.JSON FILE
// * -------------------------------------
const packageJsonPath = nodePath.resolve(process.cwd(), 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
const appVersion = packageJson.version

// * --- ARGV CONFIG
// * ---------------
const argv = yargs(hideBin(process.argv))
    // * выравнивание текста по ширине терминала
    .wrap(Math.min(100, yargs(hideBin(process.argv)).terminalWidth()))
    // * настраиваем вывод версии приложения
    .version('version', 'Show the current build version of the project', appVersion)
    .alias('version', 'v')
    // * настраиваем вывод help
    .help('info', 'Show help information and available build options')
    .alias('info', 'i')
    // * флаг verbose
    .option('verbose', {
        alias: ['V'],
        type: 'boolean',
        default: false,
        description: 'Print detailed logging and asset processing steps to the terminal',
    })
    .option('force-clean', {
        alias: ['c'],
        type: 'boolean',
        default: false,
        description: 'Force clean the entire dist/ folder, including assets and libraries',
    })
    // * флаг obfuscation
    .option('obfuscation', {
        alias: ['obf'],
        type: 'boolean',
        default: false,
        description:
            'Enable class name obfuscation across all CSS, JS, and HTML source files. CAUTION: Incompatible with --inline-* options.',
    })
    // * флаг base-url
    .option('base-url', {
        alias: ['bu'],
        type: 'string',
        default: undefined,
        description:
            'Base URL (domain) of the site, e.g. "https://example.com". ' +
            'For GitHub Pages this is usually "https://username.github.io". ' +
            'If not provided, the value from site.config.json is used',
    })
    // * флаг base-url-postfix
    .option('base-url-postfix', {
        alias: ['bup'],
        type: 'string',
        default: undefined,
        description:
            'URL path postfix where the site is served, e.g. "/my-repo/". ' +
            'For GitHub Pages this is the repository name. ' +
            'Leave empty or omit if served from root. ' +
            'If not provided, the value from site.config.json is used',
    })
    // * флаг internationalization
    .option('internationalization', {
        alias: ['i18n'],
        type: 'boolean',
        default: false,
        description:
            'Enable internationalization build (reads locale JSON files). ' +
            'Without this flag, builds with inline text and default locale only',
    })
    // * флаг local
    .option('local', {
        alias: ['l'],
        type: 'boolean',
        default: false,
        description: 'Build with relative paths for offline viewing via the file:/// protocol',
    })
    // * флаг inline-sprite
    .option('inline-sprite', {
        alias: ['full-inline-sprite', 'is'],
        type: 'boolean',
        default: false,
        description: 'Inline SVG sprite into HTML (forced when --local)',
    })
    // * флаг inline-css
    .option('inline-css', {
        alias: ['full-inline-css', 'ic'],
        type: 'boolean',
        default: false,
        description: 'Inline final CSS bundle into HTML (critical-css will be disabled)',
    })
    // * флаг inline-js
    .option('inline-js', {
        alias: ['full-inline-js', 'ij'],
        type: 'boolean',
        default: false,
        description: 'Inline final JavaScript bundle into HTML',
    })
    // * флаг production-server
    .option('production-server', {
        alias: ['prod-server', 'server', 'ps'],
        type: 'boolean',
        default: false,
        description: 'Enables local server execution for the production task',
    })

    // ! group options
    .group(['obfuscation'], 'EXPERIMENTAL OPTIONS (USE WITH CAUTION):')

    // ! check options mix
    .check((argv) => {
        if (
            argv.obfuscation &&
            (argv['inline-sprite'] || argv['inline-css'] || argv['inline-js'])
        ) {
            throw new Error('Flags --obfuscation and --inline-* cannot be used together.')
        }
        return true // * если всё хорошо, пропускаем дальше
    })
    .fail((msg, err) => {
        // * выводим только текст ошибки красным цветом в консоль
        // eslint-disable-next-line no-console
        console.error('\n\x1b[31m%s\x1b[0m\n', `❌ Error: ${msg || err.message}`)
        process.exit(1) // Завершаем процесс
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
    isVerbose: argv.verbose,
    isForceClean: argv.forceClean,
    isObfuscation: argv.obfuscation,
    isI18N: argv.internationalization,
    baseUrl: argv.baseUrl !== undefined ? argv.baseUrl : siteConfig.baseUrl || '/',
    baseUrlPostfix:
        argv.baseUrlPostfix !== undefined
            ? '/' + argv.baseUrlPostfix
            : siteConfig.baseUrlPostfix !== null && siteConfig.baseUrlPostfix !== ''
              ? '/' + siteConfig.baseUrlPostfix
              : '',
    isLocal: argv.local,
    isInlineSprite: argv.inlineSprite || argv.local, // local подразумевает инлайн-спрайт
    isInlineCSS: argv.inlineCss,
    isInlineJS: argv.inlineJs,
    isProdServer: argv.productionServer,
    // placeholders: {
    //     webpInCssPolyfillScript: fs.readFileSync('node_modules/webp-in-css/polyfill.js', 'utf-8'),
    // },
}
