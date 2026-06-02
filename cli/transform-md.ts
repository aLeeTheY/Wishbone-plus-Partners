/* eslint-disable curly */
/* eslint-disable no-console */

import fs from 'node:fs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
    .parserConfiguration({ 'camel-case-expansion': true })
    .wrap(Math.min(100, yargs(hideBin(process.argv)).terminalWidth()))
    .version('version', 'Show version', '1.0.0')
    .alias('version', 'v')
    .help('help', 'Show help')
    .alias('help', 'h')
    .option('verbose', {
        alias: 'V',
        type: 'boolean',
        default: false,
        description: 'Enable verbose logging',
    })

    .command(
        'encode [files...]',
        'Replace `code` with <code> and hyphens inside with &#8209;',
        (y) =>
            y.positional('files', {
                describe: '.md files',
                type: 'string',
                array: true,
            }),
        (argv) => {
            const files = argv.files ?? []
            processFiles(files, 'encode', argv.verbose)
        },
    )

    .command(
        'decode [files...]',
        'Revert &#8209; → - and <code> → `',
        (y) =>
            y.positional('files', {
                describe: '.md files',
                type: 'string',
                array: true,
            }),
        (argv) => {
            const files = argv.files ?? []
            processFiles(files, 'decode', argv.verbose)
        },
    )

    .demandCommand(1, 'Please specify a command: encode or decode')
    .strict()
    .parse()

// --- Handler ---
function processFiles(files: string[], command: 'encode' | 'decode', verbose: boolean): void {
    if (files.length === 0) {
        console.error('Please specify at least one .md file')
        process.exit(1)
    }

    for (const file of files) {
        if (!file.endsWith('.md')) {
            if (verbose) console.warn(`Skipped non-.md file: ${file}`)
            continue
        }

        if (!fs.existsSync(file)) {
            console.error(`Error: File not found: ${file}`)
            continue
        }

        let content = fs.readFileSync(file, 'utf-8')

        if (command === 'encode') {
            // Изолируем многострочные блоки кода (```...```), временно заменяя их на плейсхолдеры
            const codeBlocks: string[] = []
            content = content.replace(/(```[\s\S]*?```)/g, (match) => {
                codeBlocks.push(match)
                return `__CODE_BLOCK_PLACEHOLDER_${codeBlocks.length - 1}__`
            })

            // Теперь безопасно обрабатываем инлайновые бэктики
            content = content.replace(
                /(?<!`)(`[^`\r\n]+`)(?!`)/g,
                (_, p1) => `<code>${p1.slice(1, -1)}</code>`,
            )

            // Заменяем дефисы на неразрывные внутри тегов <code>
            content = content.replace(
                /<code[^>]*>([\s\S]*?)<\/code>/g,
                (_, inner) => `<code>${inner.replace(/-/g, '&#8209;')}</code>`,
            )

            // Возвращаем многострочные блоки кода обратно в неизменном виде
            content = content.replace(/__CODE_BLOCK_PLACEHOLDER_(\d+)__/g, (_, index) => {
                return codeBlocks[Number(index)]
            })
        } else {
            // При декодировании сначала возвращаем дефисы
            content = content.replace(/&#8209;/g, '-')
            // Убираем теги code, учитывая возможные атрибуты внутри <code ...>
            content = content.replace(/<code[^>]*>/g, '`').replace(/<\/code>/g, '`')
        }

        fs.writeFileSync(file, content, 'utf-8')
        console.log(`${command === 'encode' ? 'Encoded' : 'Decoded'}: ${file}`)
    }
}
