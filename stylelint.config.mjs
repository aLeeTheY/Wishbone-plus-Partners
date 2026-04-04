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
        'selector-class-pattern': null,
        'number-max-precision': 3,
        // 'scss/double-slash-comment-whitespace-inside': '^\\/\\/[!*?todo] ([a-z0-9])*$',
        'scss/at-mixin-pattern': '^([a-z0-9]+(-[a-z0-9]+)*)(--[a-z0-9]+)?$',
        'plugin/no-unsupported-browser-features': [true, { severity: 'warning' }],
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
