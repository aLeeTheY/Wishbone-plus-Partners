import { type Config } from 'prettier'

const config: Config = {
    plugins: ['prettier-plugin-jinja-template'],
    semi: false,
    tabWidth: 4,
    useTabs: false,
    printWidth: 100,
    singleQuote: true,
    jsxSingleQuote: true,
    bracketSpacing: true,
    objectWrap: 'preserve',
    bracketSameLine: true,
    arrowParens: 'always',
    insertPragma: false,
    requirePragma: false,
    checkIgnorePragma: true,
    quoteProps: 'consistent',
    singleAttributePerLine: false,
    htmlWhitespaceSensitivity: 'ignore',
    embeddedLanguageFormatting: 'auto',
    trailingComma: 'all',
    proseWrap: 'never',
    endOfLine: 'lf',
    overrides: [
        { files: ['*.json'], options: { tabWidth: 4 } },
        {
            files: ['*.html', '*.nj', '*.njk', '*.nunjucks'],
            options: {
                printWidth: 140,
                parser: 'jinja-template',
                // embeddedLanguageFormatting: 'off', //! <-- problem with this option !!!
            },
        },
    ],
}

export default config
