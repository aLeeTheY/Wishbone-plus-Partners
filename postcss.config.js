const isStaging = process.env.NODE_ENV === 'staging'
const isProd = process.env.NODE_ENV === 'production'

export default {
    plugins: {
        // * preset-env + autoprefixer
        'postcss-preset-env': {
            // default value
            stage: 2,

            // more stable for production mode
            // stage: env === "production" ? 4 : 2,

            // disabled
            // autoprefixer: { grid: true },
        },
        // * группировка медиазапросов в конец CSS файла
        'postcss-sort-media-queries': { sort: 'desktop-first' },
        // TODO: доделать webp-in-css и протестить
        // 'webp-in-css/plugin': {
        //     webpClass: 'webp',
        //     noWebpClass: 'no-webp',
        // },
        // * сжатие CSS (только в prod и staging modes)
        ...((isStaging || isProd) && {
            cssnano: {
                // preset: "default",
                preset: 'advanced',
            },
        }),
    },
}
