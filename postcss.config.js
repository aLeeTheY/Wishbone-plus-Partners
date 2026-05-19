const isStaging = process.env.NODE_ENV === 'staging'
const isProd = process.env.NODE_ENV === 'production'

export default {
    plugins: {
        // * замена clamp на комбинации min + max (old plugin)
        // 'postcss-clamp': {
        //     precalculate: true,
        // },
        // * округлить пиксельные значения до целых чисел
        'postcss-round-subpixels': {},
        // * fallback для font-variant (совместимость)
        'postcss-font-variant': {},
        // * автоматическое добавление font-display: swap для внешних локальных шрифтов (only works in @font-face)
        'postcss-font-display': {
            display: 'swap',
            replace: false,
        },
        // * css-hack для создания fallback для will-change у браузеров, которые не поддерживают will-change
        'postcss-will-change': {},
        // * preset-env + autoprefixer
        'postcss-preset-env': {
            // default value
            stage: 2,

            // more stable for production mode
            // stage: env === "production" ? 4 : 2,

            // disabled
            // autoprefixer: { grid: true },
        },
        ...(isProd && {
            // * rename переменных css (более короткие)
            'postcss-rename/variable': {
                strategy: 'minimal',
                by: 'whole',
                ids: false,
                except: ['--dont-touch-me'],
                outputMapCallback: false,
            },
            // ! disabled
            // * rename имён классов css (более короткие)
            // 'postcss-rename': {
            //     strategy: 'minimal',
            //     by: 'whole',
            //     ids: false,
            //     except: ['.dont-touch-me'],
            //     outputMapCallback: false,
            // },
        }),
        // ! функционал уже есть в cssnano (discardDuplicates)
        // * слияние идентичных селекторов (убираем дубликаты)
        // 'postcss-combine-duplicated-selectors': { removeDuplicatedValues: false },
        // * группировка медиазапросов в конец CSS файла
        'postcss-sort-media-queries': { sort: 'desktop-first' },
        // TODO: доделать webp-in-css и протестить
        // 'webp-in-css/plugin': {
        //     webpClass: 'webp',
        //     noWebpClass: 'no-webp',
        // },
        // ! не подходит
        // * обфускация CSS, замена имён классов упрощёными именами (только в staging/prod)
        // ...((isStaging || isProd) && {
        //     'postcss-obfuscator': {
        //         enable: true,
        //         length: 2,
        //         classMethod: 'random',
        //         ids: false,
        //         idMethod: 'random',
        //         jsonsPath: './dist/css/obfuscator',
        //         srcPath: './dist/css',
        //         fresh: false,
        //         multi: false,
        //     },
        // }),
        // * удаление неиспользуемых CSS (только в staging/prod)
        ...((isStaging || isProd) && {
            '@fullhuman/postcss-purgecss': {
                content: ['src/**/*.njk'],
            },
        }),
        // * сжатие CSS (только в prod и staging modes)
        ...((isStaging || isProd) && {
            cssnano: {
                // preset: "default",
                preset: [
                    'advanced',
                    {
                        // * отключаем склейку правил
                        // mergeRules: false,
                        // minifySelectors: false,
                    },
                ],
            },
        }),
    },
}
