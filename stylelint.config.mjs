/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-selector-bem-pattern', 'stylelint-no-unsupported-browser-features'],
    rules: {
        'plugin/selector-bem-pattern': {
            componentName: '[a-z0-9]+(?:-[a-z0-9]+)*',
            componentSelectors: { initial: '^\\.{componentName}(?:__[a-z0-9]+)?(?:--[a-z0-9]+)?$' },
            utilitySelectors: '^\\.util-[a-z]+$',
        },
        'plugin/no-unsupported-browser-features': [
            true,
            {
                // * plugin reads 'production' section by default from .browserslistrc
                // browsers: ['last 4 versions', '> 0.2%', 'not dead'],
                ignore: ['css-nesting', 'multicolumn'],
                severity: 'warning',
            },
        ],
        'scss/double-slash-comment-empty-line-before': null,
        'media-feature-range-notation': 'prefix',
        'declaration-empty-line-before': null,
        'selector-class-pattern': null,
        // 'length-zero-no-unit': null,
        'number-max-precision': 5,
        // 'scss/double-slash-comment-whitespace-inside': '^\\/\\/[!*?todo] ([a-z0-9])*$',
        'scss/at-mixin-pattern': '^([a-z0-9]+(-[a-z0-9]+)*)(--[a-z0-9]+)?$',
    },
    ignoreFiles: [
        '**/*.js',
        '**/*.mjs',
        '**/*.cjs',
        '**/*.ts',
        '**/*.mts',
        '**/*.cts',
        '**/*.htm',
        '**/*.html',
        // '**/*.svg',
        // '**/public/*',
        '**/vendors/*.scss',
    ],
}
