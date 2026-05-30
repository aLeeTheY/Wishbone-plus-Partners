import fs from 'fs'
import nodePath from 'node:path'

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { path } from './path.js'

// * --- NODE_ENV
// * ------------
const NODE_ENV = process.env.NODE_ENV ?? 'development'

// * --- RESOLVE PATH TO PACKAGE.JSON FILE
// * -------------------------------------
const packageJsonPath = nodePath.resolve(process.cwd(), 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
const appVersion = packageJson.version

// * --- ARGV CONFIG
// * ---------------
const argv = yargs(hideBin(process.argv))
    // * Выравнивание текста по ширине терминала
    .wrap(Math.min(100, yargs(hideBin(process.argv)).terminalWidth()))
    // * Настраиваем вывод версии приложения
    .version('version', 'Displays current workspace semantic version', appVersion)
    .alias('version', 'v')
    // * Настраиваем вывод help
    .help('info', 'Displays CLI options manual')
    .alias('info', 'i')
    // * Флаг verbose
    .option('verbose', {
        alias: ['V'],
        type: 'boolean',
        default: false,
        description: 'Unlocks extended console logging during task streaming execution',
    })
    // * Флаг staging
    .option('staging', {
        alias: ['s'],
        type: 'boolean',
        default: false,
        description: 'Enable `staging` environment configurations under `production` build rules',
    })
    .option('force-clean', {
        alias: ['c'],
        type: 'boolean',
        default: false,
        description: 'Triggers a hard sweep of the compiled `dist/` workspace directory',
    })
    // * Флаг obfuscation
    .option('obfuscation', {
        alias: ['obf'],
        type: 'boolean',
        default: false,
        description:
            'Obfuscates structural CSS class selectors across HTML, CSS, and JS. Incompatible with `--inline-*` options',
    })
    // * Флаг base-url
    .option('base-url', {
        alias: ['bu'],
        type: 'string',
        default: undefined,
        description: 'Maps target deployment domain root, e.g., `https://example.com`',
    })
    // * Флаг base-url-postfix
    .option('base-url-postfix', {
        alias: ['bup'],
        type: 'string',
        default: undefined,
        description:
            'Maps trailing repository paths for subdirectory deployments, e.g., `.../my-repo/...`',
    })
    // * Флаг internationalization
    .option('internationalization', {
        alias: ['i18n'],
        type: 'boolean',
        default: false,
        description: 'Activates localized multi-lingual document compilation',
    })
    // * Флаг local
    .option('local', {
        alias: ['l'],
        type: 'boolean',
        default: false,
        description:
            'Switches paths to strict relative links, satisfying standalone execution via `file:///`',
    })
    // * Флаг inline-sprite
    .option('inline-sprite', {
        alias: ['full-inline-sprite', 'is'],
        type: 'boolean',
        default: false,
        description:
            'Directly embeds the SVG vector asset grid inside the document (forced automatically via `--local`)',
    })
    // * Флаг inline-css
    .option('inline-css', {
        alias: ['full-inline-css', 'ic'],
        type: 'boolean',
        default: false,
        description: 'Directly embeds production stylesheets inside the HTML layout payload',
    })
    // * Флаг inline-js
    .option('inline-js', {
        alias: ['full-inline-js', 'ij'],
        type: 'boolean',
        default: false,
        description: 'Directly embeds processed client scripts inside the HTML layout payload',
    })
    // * Флаг production-server
    .option('production-server', {
        alias: ['prod-server', 'server', 'ps'],
        type: 'boolean',
        default: false,
        description: 'Launches a local server tracking the compiled production build footprint',
    })

    // ! group options
    .group(['obfuscation'], 'EXPERIMENTAL OPTIONS (USE WITH CAUTION):')

    // ! check options mix
    .check((argv) => {
        // Защита от смеси с девелопментом
        if (argv.staging && NODE_ENV !== 'production') {
            throw new Error(
                'The --staging flag can only be used under production rules (cross-env NODE_ENV=production).',
            )
        }
        // Проверка обфускации и инлайнинга
        if (
            argv.obfuscation &&
            (argv['inline-sprite'] || argv['inline-css'] || argv['inline-js'])
        ) {
            throw new Error('Flags --obfuscation and --inline-* cannot be used together.')
        }
        return true
    })
    .fail((msg, err) => {
        // eslint-disable-next-line no-console
        console.error('\n\x1b[31m%s\x1b[0m\n', `❌ Error: ${msg || err.message}`)
        process.exit(1)
    })
    .parse()

// * --- CHECK STAGING MODE
// * ----------------------
const isStagingMode = NODE_ENV === 'production' && argv.staging

// * --- LOAD CONFIG
// * ---------------
const siteConfig = JSON.parse(fs.readFileSync(`${path.src.base}/site.config.json`, 'utf-8'))

// * --- EXPORT GULP ENV
// * -------------------
export const env = {
    buildMode: {
        isDev: NODE_ENV === 'development',
        isStaging: isStagingMode,
        isProd: NODE_ENV === 'production' && !isStagingMode,
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
