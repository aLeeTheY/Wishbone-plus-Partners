import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

import stylistic from '@stylistic/eslint-plugin'

import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import prettierRecomended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: { js, '@stylistic': stylistic, 'prettier': prettierPlugin },
        extends: ['js/recommended', prettierConfig],
        rules: {
            // eslint stylistic rules
            '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

            // prettier rules
            ...prettierRecomended.rules,

            // other eslint rules
            'no-console': 'warn',
            'eqeqeq': 'warn',
            'curly': 'warn',
            'no-else-return': 'warn',
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    tseslint.configs.recommended,
])
