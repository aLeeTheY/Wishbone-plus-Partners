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
    requirePragma: false,
    insertPragma: false,
    quoteProps: 'consistent',
    checkIgnorePragma: false,
    singleAttributePerLine: false,
    htmlWhitespaceSensitivity: 'ignore',
    embeddedLanguageFormatting: 'auto',
    trailingComma: 'all',
    proseWrap: 'never',
    endOfLine: 'lf',
    overrides: [
        {
            files: ['**/*.html'],
            options: { printWidth: 140 },
        },
        { files: ['**/*.json'], options: { tabWidth: 4 } },
        {
            files: ['**/*.njk'],
            options: {
                parser: 'jinja-template',
            },
        },
    ],
}

export default config
