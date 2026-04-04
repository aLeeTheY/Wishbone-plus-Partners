/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-selector-bem-pattern'],
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
