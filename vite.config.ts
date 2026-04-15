import { defineConfig } from 'vite'
import path from 'path'

// plugins
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }) => ({
    root: 'src',

    build: {
        outDir: '../out',
        emptyOutDir: true,
        sourcemap: mode !== 'production',

        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/index.html'),
            },
        },
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },

    css: {
        postcss: './postcss.config.js',
    },

    plugins: [
        createHtmlPlugin({
            minify: mode === 'production',
        }),
    ],

    server: {
        open: true,
    },
}))
