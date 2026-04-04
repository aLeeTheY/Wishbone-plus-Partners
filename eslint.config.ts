import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

import prettierRecomended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: {
            js,
            prettier: prettierPlugin,
        },
        extends: ['js/recommended', prettierConfig],
        rules: {
            ...prettierRecomended.rules,
            'no-console': 'warn',
            'eqeqeq': 'warn',
            'curly': 'warn',
            'no-else-return': 'warn',
        },
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
])
