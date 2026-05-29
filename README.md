<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<div align="center">

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![MIT License][license-shield]][license-url]

![GitHub Last Commit][last-commit-shield] ![GitHub Repo Size][repo-size-shield]

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Wishbone + Partners</h1>

  <p align="center">
    💼 Корпоративный лендинг архитектурного бюро Wishbone + Partners с локализацией и fluid адаптивностью.
    <br />
    <br />
    <a href="https://verstaem.online/projects/wishbone/">Дизайн (Figma)</a>
    &middot;
    <a href="https://aleethey.github.io/Wishbone-plus-Partners/">Демо</a>
    &middot;
    <a href="https://github.com/aLeeTheY/Wishbone-plus-Partners/issues/new?labels=bug&template=bug-report---.md">Сообщить об ошибке</a>
  </p>

[![Русский](https://img.shields.io/badge/Русский-blue)](README.md) [![English](https://img.shields.io/badge/English-blue)](README.ENG.md)

</div>

<!-- TABLE OF CONTENTS -->
<br />
<details>
  <summary>📦 Содержание</summary>
  <ol>
    <li>
      <a href="#-о-проекте">ℹ️ О проекте</a>
      <ul>
        <li><a href="#-дизайн">🎨 Дизайн</a></li>
        <li><a href="#-предпросмотр">👁️ Предпросмотр</a></li>
        <li>
          <a href="#-ключевые-особенности">✨ Ключевые особенности</a>
          <ul>
            <li><a href="#-google-lighthouse-benchmark">⚡ Google Lighthouse Benchmark</a></li>
          </ul>
        </li>
        <li><a href="#-используемые-технологии">🛠️ Используемые технологии</a></li>
        <li><a href="#-структура-проекта">📂 Структура проекта</a></li>
        <li><a href="#-поддерживаемые-браузеры">🌐 Поддерживаемые браузеры</a></li>
      </ul>
    </li>
    <li>
      <a href="#-начало-работы">🚀 Начало работы</a>
      <ul>
        <li><a href="#-предварительные-требования">📋 Предварительные требования</a></li>
        <li><a href="#-установка-зависимостей">📥 Установка зависимостей</a></li>
        <li><a href="#-сборка-и-запуск">⚙️ Сборка и запуск</a></li>
      </ul>
    </li>
    <li>
      <a href="#-использование">💡 Использование</a>
      <ul>
        <li><a href="#-конфигурация">🔧 Конфигурация</a></li>
      </ul>
    </li>
    <li><a href="#-сложности-при-разработке">🧠 Сложности при разработке</a></li>
    <li><a href="#-полученные-навыки">📈 Полученные навыки</a></li>
    <li><a href="#-дорожная-карта">🗺️ Дорожная карта</a></li>
    <li><a href="#-лицензия">📄 Лицензия</a></li>
    <li><a href="#-контакты">🤝 Контакты</a></li>
    <li><a href="#-благодарности">💖 Благодарности</a></li>
  </ol>
</details>
<!-- ABOUT THE PROJECT -->

## ℹ️ О проекте

Основная цель проекта — разработка адаптивного корпоративного лендинга с фокусом на автоматизацию сборки, мультиязычность и максимальную производительность.

Проект построен как модульный инженерный каркас на базе Gulp 5: шаблонизатор Nunjucks собирает HTML с поддержкой локализации (i18n), SCSS обрабатывается по методологии BEM с многоступенчатым PostCSS-пайплайном, а TypeScript компилируется в оптимизированный бандл. Все медиа‑ассеты проходят через специализированные утилиты для сжатия и оптимизации загрузки страниц, а управление параметрами сборки вынесено в CLI‑интерфейс. Также поддерживаются режимы сборки dev, staging и production.

### 🎨 Дизайн

Визуальная составляющая базируется на макете [**Wishbone + Partners**](https://verstaem.online/projects/wishbone/) от платформы [**верстаем.онлайн**](https://verstaem.online/). <br /> Ключевой задачей было воссоздание интерфейса с применением принципов Pixel Perfect и Fluid Design, с последующей адаптацией под различные разрешения экранов с сохранением целостности дизайн-системы.

### 👁️ Предпросмотр

Ниже представлен **предварительный просмотр** сайта (_**Desktop + Mobile**, нажмите на изображение для перехода к демо_):

<div align="center">

[![Предпросмотр сайта][website-preview]](https://aleethey.github.io/Wishbone-plus-Partners/)

</div>

### ✨ Ключевые особенности

_Для удобства, вся информация разбита по категориям._

<details>
  <summary>📐 Верстка, Архитектура и UI/UX</summary>

- **Static & Modular Architecture:** Чистый статический фронтенд без CMS и SSR. HTML-код разбит на изолированные, переиспользуемые компоненты с помощью шаблонизатора **Nunjucks**.
- **Internationalization (i18n):** Полноценная поддержка мультиязычности. Пайплайн компилирует страницы на основе JSON-словарей (`ru.json`, `en.json`), генерируя раздельные языковые версии. Активируется CLI-флагом `--i18n`.
- **Fluid & Responsive Design:** Полностью гибкая адаптивность (Desktop, Tablet, Mobile). Построена на современных CSS-функциях `clamp()`, `min()` и `max()` в связке с каскадными медиа-запросами.
- **Pixel Perfect Fidelity:** Высокоточное воссоздание макета из Figma с жестким соблюдением отступов и оригинальной дизайн-системы.
- **BEM Methodology:** Именование классов по методологии БЭМ, гарантирующее изоляцию стилей и простоту поддержки.
- **Улучшенный UI/UX и микро-взаимодействия:** Интеграция плавных анимаций скролла (AOS.js) и декларативного управления состоянием на клиенте (Alpine.js). Эффект дополнен кастомными CSS-переходами (transitions) с аппаратным ускорением, что обеспечивает отзывчивый `hover`-эффект для всех интерактивных элементов (кнопок, ссылок и карточек).

</details>

<details>
  <summary>⚙️ Автоматизация и Управление сборкой (CLI & Workflow)</summary>

- **Gulp 5 Core & NODE_ENV:** Автоматизация построена на Gulp 5. Режимы запуска (`dev`, `staging`, `prod`) строго разграничены через `cross-env` и переменной окружения `NODE_ENV`.
- **Умные алиасы путей (Smart Path Aliasing):** Сквозная поддержка алиасов (`@scss`, `@ts`, `@images`, `@audio`, `@libs` и др.) с автодополнением в VS Code. При сборке Gulp-пайплайны автоматически заменяют их во всех исходниках.
- **Автономный режим (--local):** Флаг `--local` принудительно переводит пути в относительный формат и инлайнит SVG-спрайт, позволяя открывать сайт с локального диска по `file:///`.
- **Продвинутое CLI-управление (Yargs):** Настройка параметров сборки «на лету»: флаги для логирования (`--verbose`), путей (`--base-url`, `--base-url-postfix`) и сервера (`--prod-server`). Полная справка — `gulp --info`.
- **Валидация конфликтов (Strict CLI):** Автоматическое прерывание сборки с информативной ошибкой при вызове несовместимых флагов (например, одновременный вызов `--local` и `--obfuscation`).
- **Умная очистка (Smart Clean):** Задача очистки `dist/` по умолчанию не трогает тяжелые медиа (видео, аудио, шрифты, картинки). Для полной очистки предусмотрен флаг `--force-clean`.
- **Fast Dev Workflow:** В режиме разработки тяжелые оптимизации отключаются, а локальный сервер (**BrowserSync**) мгновенно отражает изменения благодаря `gulp-watch`.
- **Deployment & Архивация:** Интегрированы таски отправки дистрибутива на удаленный сервер по FTP (`vinyl-ftp`) и упаковки проекта в ZIP-архив.

</details>

<details>
  <summary>🧩 Самописные трансформеры и умные хелперы (Custom Gulp Helpers)</summary>

- **Инкрементальная проверка ассетов (`asset-exists.js`):** Кастомные хелперы отслеживают актуальность медиа-файлов с учётом хешей ревизий, чтобы тяжёлые задачи (FFmpeg, Sharp, конвертация шрифтов) не запускались повторно без необходимости.
- **Автоматический `<picture>`-трансформер:** Кастомный модуль (`html-img2picture-transformer.js`) автоматически парсит HTML, анализирует ширину изображений через `sharp`, нарезает их по брейкпоинтам под разные экраны и оборачивает `<img>`-теги в `<picture>` с генерацией AVIF/WebP и фолбеком на оригинальное изображение.
- **Гибкий инлайн-хелпер (`inline-assets.js`):** Управляемая через метки в HTML инъекция финального CSS, JS и SVG-спрайта. Исключает лишние HTTP-запросы и поддерживает автономный режим (`--local`).
- **Продвинутая инлайн-сборка:** Флаги `--inline-css`, `--inline-js` встраивают финальные бандлы прямо в HTML, исключая внешние запросы.
- **Экспериментальная обфускация (PostCSS Obfuscator):** Переименование CSS-классов в случайные короткие хэши (до 5 символов) для снижения веса и защиты структуры (флаг `--obfuscation`). CLI-валидация гарантирует, что обфускация не будет запущена одновременно с инлайн-режимом.
- **Интеграция нативных CLI-инструментов:** Пайплайн управляет внешними утилитами (`ffmpeg`, Python `ftcli`) через асинхронный `spawn` с проверкой их доступности в системе перед запуском задачи. Реализована атомарная запись результатов и защита от блокировки `Event Loop`.

</details>

<details>
  <summary>⚡ Оптимизация и Производительность (Performance)</summary>

- **Google Lighthouse:** Стабильные **100/100** баллов в категории **Performance** и **90+** по остальным метрикам (Accessibility, Best Practices, SEO).
- **Супербыстрая сборка скриптов (ESBuild):** Транспиляция TypeScript/JavaScript компилятором `esbuild` в стандарт ES2018, минификация и эффективный Tree Shaking.
- **Critical CSS & Penthouse:** Автоматическая генерация и инлайнинг критических стилей для мгновенной отрисовки первого экрана (отключается при полном инлайнинге: `--inline-css`).
- **Адаптивные изображения:** Генерация адаптивных форматов AVIF/WebP и формирование `<picture>`-элементов через кастомный трансформер (описан в разделе _🧩 Самописные трансформеры и умные хелперы (Custom Gulp Helpers) - **Автоматический `<picture>`-трансформер**_).
- **Оптимизация SVG (SVGO & Sprites):** Иконки очищаются утилитой SVGO и упаковываются в единый `sprite.svg`. При необходимости спрайт встраивается прямо в DOM (`--inline-sprite`).
- **Медиа-оптимизация (FFmpeg & WOFF/WOFF2):** Шрифты пережимаются в WOFF/WOFF2 через Python FoundryTools CLI. Аудио и видео конвертируются в `.webm` с помощью пресетов FFmpeg.
- **Кэширование (Asset Revisioning):** Хеширование имён файлов (`gulp-rev`) в режимах `staging` и `prod` для гарантированного сброса кэша у пользователей.
- **SEO & Meta:** Пайплайн включает в `dist/` пользовательские мета-файлы (`favicon.ico`, `robots.txt`, `sitemap.xml` и др.).

</details>

<details>
  <summary>🛡️ Линтинг, Форматирование и Качество кода (Code Quality)</summary>

- **Кроссбраузерность (.browserslistrc):** Плагины автопрефиксации ориентируются на глобальный охват >95% активных браузеров (продакшен). В `dev`-режиме — последние версии.
- **Продвинутый PostCSS Пайплайн:** Многоступенчатая обработка стилей: `postcss-preset-env`, минификация имён CSS-переменных, округление субпикселей, фолбеки для `font-variant` и `will-change`, автоматический `font-display: swap`, удаление неиспользуемых селекторов (`purgecss`), группировка медиа-запросов и сжатие через `cssnano`.
- **Контроль стандартов (ESLint):** Flat-конфигурация ESLint с `typescript-eslint` и `@stylistic`. Строгая проверка типов и предупреждения для потенциально опасного кода.
- **Проверка совместимости стилей (Stylelint):** Контроль синтаксиса SCSS с плагином `stylelint-no-unsupported-browser-features`, сверяющим CSS-свойства с `.browserslistrc`.
- **Prettier:** Автоматическое форматирование кода «на лету» с поддержкой синтаксиса Nunjucks (`prettier-plugin-jinja-template`). Отступы синхронизированы через `.editorconfig`.
- **Git Hooks (Husky & Commitlint):** `lint-staged` изолированно проверяет измененные файлы линтерами и форматирует их перед коммитом. `commitlint` следит за стандартом Conventional Commits с поддержкой типа `wip`.

</details>

<details>
  <summary>📋 Готовность к масштабированию (Template Versatility)</summary>

- Проект имеет строгую модульную структуру, что позволяет использовать его как стартовый шаблон (Boilerplate) для быстрой развёртки аналогичных статических сайтов любой сложности.

</details>

#### ⚡ Google Lighthouse Benchmark

В качестве подтверждения высокой оптимизации сайта ниже представлены результаты тестирования производительности в бенчмарке **Google Lighthouse** для десктопной и мобильной версий:

<div align="center">

| 🖥️ Desktop Version | 📱 Mobile Version |
| :-: | :-: |
| ![Lighthouse Desktop](project/lighthouse_benchmark__desktop.png) | ![Lighthouse Mobile](project/lighthouse_benchmark__mobile.png) |

</div>

### 🛠️ Используемые технологии

_Для удобства, вся информация разбита по категориям._

<details>
<summary>🌐 Языки, препроцессоры и шаблонизация</summary>

- [![HTML5][HTML-logo]][HTML-url] <sup>— семантическая разметка и структура страниц</sup>
- [![Nunjucks][Nunjucks-logo]][Nunjucks-url] <sup>— компонентный шаблонизатор для модульной сборки HTML-страниц</sup>
- [![Sass][Sass-logo]][Sass-url] <sup>— препроцессор для масштабируемой архитектуры CSS-стилей (BEM)</sup>
- [![TypeScript][TypeScript-logo]][TypeScript-url] <sup>— строго типизированный язык для разработки клиентской логики</sup>
- [![JavaScript][JavaScript-logo]][JavaScript-url] <sup>— написание конфигурационных скриптов и сценариев автоматизации</sup>

</details>

<details>
<summary>⚙️ Окружение и автоматизация сборки (Gulp Ecosystem)</summary>

- [![Node.js][NodeJS-logo]][NodeJS-url] <sup>— runtime-окружение</sup>
  - [![Npm][Npm-logo]][Npm-url] <sup>— менеджер пакетов и управление зависимостями</sup>
- [![Gulp 5][Gulp-logo]][Gulp-url] <sup>— таск-раннер для автоматизации и оркестрации процессов</sup>
  - **Интегрированные Gulp-таски (Node.js API):**
    - [![Esbuild][Esbuild-logo]][Esbuild-url] <sup>— сверхбыстрый бандлинг и компиляция TS/JS кода внутри сборки</sup>
    - [![PostCSS][PostCSS-logo]][PostCSS-url] <sup>— многоступенчатая постобработка, автопрефиксирование и оптимизация стилей</sup>
    - [![Sharp][sharp-logo]][sharp-url] <sup>— автоматическая обработка растровых изображений и генерация AVIF/WebP в процессе сборки</sup>
    - [![SVGO][SVGO-logo]][SVGO-url] <sup>— автоматическая очистка и минификация SVG-иконок</sup>
  - **Внешние CLI-инструменты (автоматический вызов через Gulp Spawn):**
    - [![FFmpeg][ffmpeg-logo]][ffmpeg-url] <sup>— конвертация аудио и видео-ассетов в формат `.webm` с поддержкой GPU-ускорения NVENC</sup>
    - [![Foundry Tools CLI][FoundryToolsCLI-logo]][FoundryToolsCLI-url] <sup>— Python-утилита для конвертации клиентских шрифтов OTF/TTF в форматы WOFF и WOFF2</sup>
- [![Browserslist][Browserslist-logo]][Browserslist-url] <sup>— управление конфигурацией целевых браузеров</sup>

</details>

<details>
<summary>🛡️ Контроль качества кода (Code Quality & Git Hooks)</summary>

- [![EditorConfig][EditorConfig-logo]][EditorConfig-url] <sup>— синхронизация базовых настроек форматирования для IDE</sup>
- [![Stylelint][Stylelint-logo]][Stylelint-url] <sup>— линтинг стилей (SCSS/CSS) с жестким контролем совместимости свойств</sup>
- [![ESLint][ESLint-logo]][ESLint-url] <sup>— глубокий статический анализ и линтинг TypeScript/JavaScript кода</sup>
- [![Prettier][Prettier-logo]][Prettier-url] <sup>— автоматическое форматирование кода во всех типах файлов (включая Nunjucks)</sup>
- [![Husky][Husky-logo]][Husky-url] <sup>— управление автоматическими Git-хуками на стороне клиента</sup>
  - [![Lint-staged][LintStaged-logo]][LintStaged-url] <sup>— линтинг и форматирование файлов перед коммитом (`pre-commit`)</sup>
  - [![Commitlint][CommitLint-logo]][CommitLint-url] <sup>— строгая валидация сообщений по спецификации Conventional Commits (с кастомным типом `wip`)</sup>

</details>

<details>
<summary>🚀 Контроль версий и Инфраструктура</summary>

- [![Git][Git-logo]][Git-url] <sup>— распределенная система контроля версий</sup>
- [![GitHub Pages][GithubPages-logo]][GithubPages-url] <sup>— статический хостинг для автоматического деплоя демонстрационной версии сайта</sup>

</details>

<details>
<summary>🧰 Программное окружение и дизайн</summary>

- [![Figma][Figma-logo]][Figma-url] <sup>— работа с дизайн-макетами, экспорт графики и параметров</sup>
- [![Visual Studio Code][VisualStudioCode-logo]][VisualStudioCode-url] <sup>— основная рабочая среда разработки (IDE)</sup>

</details>

### 📂 Структура проекта

```text
Wishbone-plus-Partners/
│
├── .husky/                          # Локальные Git-хуки
├── .vscode/                         # Файлы для VSCode
│
├── dist/                            # Папка сборки (генерируется автоматически)
├── docs/                            # Здесь могут быть файлы документации
│
├── gulp/                            # Скрипты сборщика Gulp
│   ├── config/                      # Конфигурационные файлы среды, путей и FTP
│   │   ├── env.js
│   │   ├── ftp.js
│   │   └── path.js
│   ├── helpers/                     # Утилиты-хелперы (обработка ошибок, парсинг HTML-тегов)
│   │   ├── asset-exists.js
│   │   ├── error-handler.js
│   │   ├── html-img2picture-transformer.js
│   │   └── inline-assets.js
│   └── tasks/                       # Основные таски Gulp
│       ├── assets/                  # Обработка шрифтов, графики, аудио и пр.
│       │   ├── fonts/
│       │   │   └── fonts.js
│       │   ├── media/
│       │   │   ├── audio.js
│       │   │   └── videos.js
│       │   ├── pictures/
│       │   │   ├── icons.js
│       │   │   └── images.js
│       │   └── misc.js
│       ├── core/                    # Core-скрипты сборщика (dev-сервер, watchers, очистка директорий)
│       │   ├── dev/
│       │   │   ├── server.js
│       │   │   └── watch.js
│       │   ├── clean.js
│       │   └── main-tasks.js
│       ├── html/                    # Компиляция HTML
│       │   └── html.js
│       ├── meta/                    # Обработка SEO-файлов
│       │   └── meta.js
│       ├── scripts/                 # Компиляция JS
│       │   ├── libs.js
│       │   └── scripts.js
│       ├── styles/                  # Компиляция CSS и Critical CSS
│       │   ├── critical-css.js
│       │   └── styles.js
│       └── utils/                   # Вспомогательные таски (деплой по FTP, архивация, ревизии)
│           ├── ftp.js
│           ├── revision.js
│           └── zip.js
│
├── project/                         # Проектные материалы, не участвующие в сборке
│   ├── preview/
│   ├── lighthouse_benchmark__desktop.png
│   └── lighthouse_benchmark__mobile.png
│
├── src/
│   ├── assets/                      # Статические ассеты (шрифты, графика, аудио и др.)
│   │   ├── audio/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   ├── misc/
│   │   └── videos/
│   ├── i18n/                        # Файлы локализации
│   │   ├── en.json
│   │   ├── languages.json
│   │   └── ru.json
│   ├── libs/                        # Сторонние локальные JS/TS-библиотеки
│   ├── meta/                        # Исходники SEO-файлов (favicons, robots.txt, sitemap и др.)
│   ├── scss/                        # Исходники стилей (организованы по методологии 7-1 Pattern)
│   │   ├── abstracts/
│   │   ├── base/
│   │   │   ├── globals/
│   │   │   ├── _fonts.scss
│   │   │   ├── _index.scss
│   │   │   ├── _reset.scss
│   │   │   ├── _root.scss
│   │   │   └── _typography.scss
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── themes/
│   │   ├── utils/
│   │   ├── vendors/
│   │   └── main.scss
│   ├── templates/                   # Nunjucks-шаблоны
│   │   ├── utils/
│   │   │   ├── macro__hreflang_tags.njk
│   │   │   └── macro__inline_script.njk
│   │   ├── footer.njk
│   │   ├── head.njk
│   │   └── header.njk
│   ├── ts/                          # Исходники скриптов
│   │   ├── modules/
│   │   └── main.ts
│   ├── index.njk
│   └── site.config.json             # Конфигуратор URL-адресов сайта (для HTML-пайплайна Gulp)
│
├── tests/                           # Здесь могут быть тесты
│
├── .browserslistrc                  # Целевые браузеры
├── .editorconfig                    # Настройки редактора
├── .gitattributes                   # Нормализация окончаний строк
├── .gitignore
├── .lintstagedrc.yml                # Сценарии проверки перед коммитом
├── .prettierignore
├── .stylelintignore
├── commitlint.config.ts             # Конфигурация Commitlint
├── eslint.config.ts                 # Конфигурация ESLint
├── gulpfile.js                      # Инициализация и оркестрация тасков Gulp 5
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js                # Конфигурация PostCSS
├── prettier.config.mts              # Конфигурация Prettier
├── README.ENG.md
├── README.md
├── stylelint.config.ts              # Конфигурация Stylelint
├── svgo.config.mjs                  # Конфигурация SVGO
└── tsconfig.json
```

### 🌐 Поддерживаемые браузеры

Проект проверен на корректность отображения и стабильность работы скриптов в актуальных версиях следующих браузеров:

- [![Google Chrome][GoogleChrome-logo]][GoogleChrome-url]
- [![Microsoft Edge][MicrosoftEdge-logo]][MicrosoftEdge-url]
- [![Yandex][Yandex-logo]][Yandex-url]
- [![Firefox][Firefox-logo]][Firefox-url]
- [![Opera][Opera-logo]][Opera-url]

> [!IMPORTANT]
> Информация актуальна для версии **[2.0.0](https://github.com/aLeeTheY/Wishbone-plus-Partners/releases/tag/2.0.0)**. На момент проверки проект корректно отображался в последних стабильных версиях всех [указанных браузеров](#-поддерживаемые-браузеры).
>
> **Дата последней проверки: 30 мая 2026**

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- GETTING STARTED -->

## 🚀 Начало работы

_Следуйте приведённым ниже инструкциям для сборки и запуска проекта на локальном сервере._

### 📋 Предварительные требования

1. Установите [Node.js][NodeJS-url], [FFmpeg][FFmpeg-url], [Python][Python-url] и [FoundryTools-CLI][FoundryToolsCLI-url].

2. Скачайте данный репозиторий в виде ZIP-архива или клонируйте его с помощью [Git][Git-url]:

```sh
git clone https://github.com/aLeeTheY/Wishbone-plus-Partners
```

### 📥 Установка зависимостей

3. Перейдите в каталог проекта и установите все необходимые зависимости:

```sh
npm install
```

### ⚙️ Сборка и запуск

4. Для сборки и запуска проекта, выполните одну из следующих команд (_с учётом предпочтительного режима сборки_):

| Режим сборки  | Команда                                                        |
| ------------- | -------------------------------------------------------------- |
| `development` | `cross-env NODE_ENV=development gulp dev --i18n`               |
| `staging`     | `cross-env NODE_ENV=staging gulp staging --i18n`               |
| `production`  | `cross-env NODE_ENV=production gulp prod --i18n --prod-server` |

<p align="right">(<a href="#readme-top">наверх</a>)</p>

## 💡 Использование

_Вы можете управлять конфигурацией сборки Gulp с помощью **аргументов командной строки** (argv)._

Для получения полного списка опций введите:

```sh
gulp --info
```

### 🔧 Конфигурация

Полный список опций дополнительно продублирован ниже:

<div align="center">

| Опция | Тип | Значение по-умолчанию | Описание |
| :-: | :-: | :-: | :-: |
| `-v, --version` | `boolean` | `false` | Показать текущую версию проекта |
| `-i, --info` | `boolean` | `false` | Показать справку и доступные опции |
| `-V, --verbose` | `boolean` | `false` | Расширенный вывод логов при выполнении некоторых Gulp-тасков |
| `-c, --force-clean` | `boolean` | `false` | Полная очистка папки `dist/` |
| `--base-url, --bu` | `string` | `-` | Базовый URL сайта, например `https://example.com` |
| `--base-url-postfix, --bup` | `string` | `-` | Постфикс пути, где развёрнут сайт, например `.../my-repo/...` |
| `--internationalization, --i18n` | `boolean` | `false` | Включить мультиязычную сборку |
| `-l, --local` | `boolean` | `false` | Сборка с относительными путями для `file:///` |
| `--inline-sprite, --full-inline-sprite, --is` | `boolean` | `false` | Встроить SVG-спрайт в HTML (включен автоматически при `--local`) |
| `--inline-css, --full-inline-css, --ic` | `boolean` | `false` | Встроить CSS-стили в HTML |
| `--inline-js, --full-inline-js, --ij` | `boolean` | `false` | Встроить JS-скрипты в HTML |
| `--production-server, --prod-server, --server, --ps` | `boolean` | `false` | Запустить локальный сервер для продакшен-сборки |

</div>

Экспериментальные опции:

<div align="center">

| Опция | Тип | Значение по-умолчанию | Описание |
| :-: | :-: | :-: | :-: |
| `--obfuscation, --obf` | `boolean` | `false` | Обфускация имён классов в CSS, JS и HTML. Несовместима с `--inline-*` опциями |

</div>

<p align="right">(<a href="#readme-top">наверх</a>)</p>

## 🧠 Сложности при разработке

- **Миграция с legacy-структуры на автоматизированный Gulp-воркфлоу.** Исходная кодовая база (v1.0.0) представляла собой обычный набор статичных файлов без сборщика, заточенный исключительно под десктоп. Перенос проекта на рельсы **Gulp 5** потребовал полной перестройки архитектуры: ручная верстка была разбита на модульные шаблоны Nunjucks, стили реструктуризированы под методологию БЭМ + `7-1 Pattern`, а сам сайт переписан в отзывчивый fluid-адаптив с нуля и без готовых мобильных макетов.
- **Анализ и подбор npm/gulp-пакетов.** Многие библиотеки в экосистеме Gulp помечены как `deprecated`, поэтому часть времени ушла на поиск актуальных аналогов или создание собственных решений.
- **Архитектура инкрементальных проверок ассетов.** Внедрение системы, отслеживающей актуальность медиа-файлов с учётом хешей ревизий. Стандартные плагины вроде `gulp-newer` оказались бесполезны после `gulp-rev`, поэтому был разработан кастомный подход, сравнивающий файлы по базовому имени, что многократно ускорило повторные сборки.
- **Интеграция и адаптация ИИ-сгенерированного кода (FFmpeg, ftcli).** Настройка кроссплатформенного управления утилитами FFmpeg и ftcli через асинхронный `spawn`. Сгенерированные ИИ модули потребовали тщательной верификации, исправления ошибок экранирования путей на Windows и доработки логики инкрементальных проверок.
- **Разрешение конфликта обфускации и инлайн-режимов.** Встраивание CSS в HTML с последующей обфускацией ломало стили, т.к. `postcss-obfuscator` не обрабатывает инлайн-стили. В связи с этим недостатком, флаги `--obfuscation` и `--inline-*` были помечены как несовместимые и в CLI-интерфейс добавлена упреждающая валидация этих флагов.
- **Работа c Fluid Design** Для каждого значения, заданного через `clamp()`, приходилось вычислять линейную функцию `y = kx + b` по двум точкам — минимальному (`x1, y1`) и максимальному (`x2, y2`) состояниям свойства.

<p align="right">(<a href="#readme-top">наверх</a>)</p>

## 📈 Полученные навыки

- **Верстка по принципу Fluid Design.** Создание "резиновой" верстки с помощью `clamp`, `min` и `max` и нескольких медиа-запросов.
- **Локализация.** Добавление локализации к веб-сайту с помощью шаблонизатора Nunjucks и JSON-словарей под разные языки.
- **Архитектура Gulp 5.** Создание пайплайнов с параллельным и последовательным выполнением (`gulp.series/parallel`), написание кастомных трансформеров на `through2` с помощью ИИ и работа с различными gulp-плагинами.
- **Web Performance.** Внедрение полного цикла оптимизации: автоматическая генерация Critical CSS, адаптивные изображения (AVIF/WebP), отложенная загрузка, управление `fetch priority`, инлайнинг CSS/JS/SVG ассетов и кэширование через ревизии.
- **Декларативное CLI-проектирование.** Настройка `yargs` для создания мощного интерфейса управления сборкой с собственной валидацией конфликтующих опций и кастомными обработчиками ошибок.
- **Эффективная коллаборация с ИИ-инструментами.** Практический опыт использования генеративного ИИ для ускорения разработки сложных Gulp-тасков: от постановки задачи до верификации, отладки и адаптации кода под требования production-сборки.

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- ROADMAP -->

## 🗺️ Дорожная карта

### 🏁 Фаза 1 – Статическая вёрстка (v1.0.0)

- [x] Верстка десктопного макета из Figma
  - [x] Разработка семантической HTML-структуры
  - [x] Базовая стилизация на SCSS (BEM)
- [x] Внедрение интерактивных элементов на базе AOS.js и Alpine.js

### 🚀 Фаза 2 – Gulp-интеграция и Fluid-адаптив (v2.0.0)

- [x] Создание современной сборки **Gulp 5**
  - [x] Полная автоматизация линтинга и форматирования (Husky, ESLint, Stylelint, Prettier)
  - [x] Оптимизация всех ресурсов: шрифты (WOFF2), изображения (AVIF/WebP), медиа (FFmpeg)
  - [x] Настройка критического CSS, кэширования (`gulp-rev`), обфускации и CLI-управления через `yargs`
  - [x] Внедрение модульного Nunjucks-шаблонизатора и мультиязычности (i18n)
  - [x] Разработка самописных хелперов (инкрементальные проверки, `<picture>`-трансформер, инлайн-сборка)
- [x] Переход на Fluid Design с использованием `clamp()`, `min()`, `max()`
  - [x] Адаптив под Laptop
  - [x] Адаптив под Tablet
  - [x] Адаптив под Mobile
- [x] Формирование демо на GitHub Pages
- [x] Подготовка технической документации и `README.md`

### 🔮 Возможное развитие

- [ ] Покрытие ключевых TypeScript-модулей unit-тестами (Mocha/Chai или Jest)
- [ ] Расширение проекта на другие страницы или блоговый движок на основе Nunjucks
- [ ] Интеграция с WordPress или другими CMS.

> 💡 Полный список планируемых функций и известных проблем доступен в разделе [Issues][issues-url].

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- LICENSE -->

## 📄 Лицензия

Copyright © 2025 [aLeeTheY](https://github.com/aLeeTheY) <br/> Проект распространяется по лицензии [MIT][license-url]. Смотрите файл `LICENSE` для получения подробной информации.

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- CONTACT -->

## 🤝 Контакты

GitHub: [aLeeTheY](https://github.com/aLeeTheY) <br/> Email: [aleethey@gmail.com](mailto:aleethey@gmail.com)

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## 💖 Благодарности

[aLeeTheY](https://github.com/aLeeTheY) выражает благодарность разработчикам и сообществам следующих проектов:

### 🏛️ Ключевые технологии и окружение

- [Figma](https://www.figma.com/), [Visual Studio Code](https://code.visualstudio.com/) — за проектирование интерфейса и среду разработки.
- [Node.js](https://nodejs.org/), [Npm](https://www.npmjs.com/), [Git](https://git-scm.com/), [GitHub](https://github.com/) — за фундамент: среду выполнения, управление пакетами и контроль версий.
- [Gulp](https://gulpjs.com/), [Browsersync](https://browsersync.io/) — за экосистему автоматизации и мгновенный Live Reload.
- [Nunjucks](https://mozilla.github.io/nunjucks/), [Esbuild](https://esbuild.github.io/), [Sass](https://sass-lang.com/), [PostCSS](https://postcss.org/) — за модульную шаблонизацию, сверхбыструю компиляцию скриптов и продвинутую обработку стилей.
- [Alpine.js](https://alpinejs.dev/), [AOS](https://michalsnik.github.io/aos/) — за легковесную реактивность интерфейса и анимации.
- [Chocolatey](https://chocolatey.org/) — за легкую установку Command Line Tools.

### ⚡ Оптимизация медиа, графики и шрифтов

- [FFmpeg](https://www.ffmpeg.org/) — за обработку видео и аудио.
- [Sharp](https://sharp.pixelplumbing.com/), [SVGO](https://github.com/svg/svgo), [gifsicle](https://github.com/kohler/gifsicle) — за сжатие и оптимизацию растровой и векторной графики.
- [FoundryTools-CLI](https://github.com/ftCLI/FoundryTools-CLI) — за конвертацию шрифтов в веб-форматы.

### 🛠️ Качество кода, линтинг и аудит

- [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/), [Prettier](https://prettier.io/), [EditorConfig](https://editorconfig.org/) — за контроль качества и единообразие кодовой базы.
- [Husky](https://typicode.github.io/husky/), [Lint-staged](https://github.com/lint-staged/lint-staged), [Commitlint](https://github.com/conventional-changelog/commitlint) — за автоматизированные проверки перед коммитами.
- [Browserslist](https://github.com/browserslist/browserslist), [Chrome DevTools](https://developer.chrome.com/docs/devtools), [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) — за конфигурацию кроссбраузерности, отладку и аудит производительности.

### 🔌 Ключевые экосистемные плагины и расширения

<details>
<summary>📋 Показать список плагинов, решивших специфичные задачи проекта</summary>

- **Системные зависимости и CLI:** [cross-env](https://github.com/kentcdodds/cross-env), [yargs](https://yargs.js.org/), [through2](https://github.com/rvagg/through2), [htmlparser2](https://github.com/fb55/htmlparser2).
- **Critical CSS:** [penthouse](https://github.com/pocketjoso/penthouse), [puppeteer](https://github.com/puppeteer/puppeteer).
- **Оптимизация и минификация CSS:** [cssnano](https://cssnano.github.io/cssnano/), [PurgeCSS](https://purgecss.com/), [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env), [postcss-sort-media-queries](https://github.com/yunusga/postcss-sort-media-queries), [postcss-clamp](https://github.com/polemius/postcss-clamp), [postcss-combine-duplicated-selectors](https://github.com/ChristianMurphy/postcss-combine-duplicated-selectors), [postcss-will-change](https://github.com/postcss/postcss-will-change), [postcss-font-display](https://github.com/dkrnl/postcss-font-display), [postcss-font-variant](https://github.com/postcss/postcss-font-variant), [postcss-round-subpixels](https://github.com/himynameisdave/postcss-round-subpixels), [postcss-obfuscator](https://n4j1Br4ch1D/postcss-obfuscator), [postcss-rename](https://github.com/google/postcss-rename).
- **Кэширование, версионирование и деплой:** [gulp-rev](https://github.com/sindresorhus/gulp-rev), [gulp-rev-rewrite](https://github.com/thomasvantuycom/gulp-rev-rewrite), [gulp-rev-delete-original](https://github.com/nib-health-funds/gulp-rev-delete-original), [vinyl-ftp](https://github.com/morris/vinyl-ftp), [gulp-zip](https://github.com/sindresorhus/gulp-zip).
- **Интеграция компиляторов и линтеров в Gulp:** [gulp-esbuild](https://github.com/ym-project/gulp-esbuild), [gulp-sass](https://github.com/dlmanning/gulp-sass), [gulp-postcss](https://github.com/postcss/gulp-postcss), [gulp-prettier](https://github.com/thomasvantuycom/gulp-prettier), [gulp-nunjucks-render](https://github.com/carlitoplatanito/gulp-nunjucks-render), [stylelint-no-unsupported-browser-features](https://github.com/RJWadley/stylelint-no-unsupported-browser-features), [prettier-plugin-jinja-template](https://github.com/davidodenwald/prettier-plugin-jinja-template).
- **Трансформация HTML и оптимизация сборки:** [gulp-web-images-css](https://github.com/GreyAdmiral/gulp-web-images-css), [gulp-svg-sprite](https://github.com/svg-sprite/gulp-svg-sprite), [gulp-html-minifier-terser](https://github.com/pioug/gulp-html-minifier-terser).
- **Вспомогательные Gulp-утилиты:** [gulp-if](https://github.com/robrich/gulp-if), [gulp-plumber](https://github.com/floatdrop/gulp-plumber), [gulp-rename](https://github.com/hparra/gulp-rename), [gulp-replace](https://github.com/lazd/gulp-replace).

</details>

> [!NOTE]
> Без этих инструментов разработка данного проекта была бы **невозможна**.

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- git repo --->

[contributors-shield]: https://img.shields.io/github/contributors/aLeeTheY/Wishbone-plus-Partners.svg?style=for-the-badge
[contributors-url]: https://github.com/aLeeTheY/Wishbone-plus-Partners/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/aLeeTheY/Wishbone-plus-Partners.svg?style=for-the-badge
[forks-url]: https://github.com/aLeeTheY/Wishbone-plus-Partners/network/members
[stars-shield]: https://img.shields.io/github/stars/aLeeTheY/Wishbone-plus-Partners.svg?style=for-the-badge
[stars-url]: https://github.com/aLeeTheY/Wishbone-plus-Partners/stargazers
[issues-shield]: https://img.shields.io/github/issues/aLeeTheY/Wishbone-plus-Partners.svg?style=for-the-badge
[issues-url]: https://github.com/aLeeTheY/Wishbone-plus-Partners/issues
[license-shield]: https://img.shields.io/github/license/aLeeTheY/Wishbone-plus-Partners.svg?style=for-the-badge
[license-url]: https://github.com/aLeeTheY/Wishbone-plus-Partners/blob/main/LICENSE
[last-commit-shield]: https://img.shields.io/github/last-commit/aLeeTheY/Wishbone-plus-Partners?style=for-the-badge
[repo-size-shield]: https://img.shields.io/github/repo-size/aLeeTheY/Wishbone-plus-Partners?style=for-the-badge

<!-- technologies --->

[Gulp-logo]: https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white
[Gulp-url]: https://gulpjs.com/
[Esbuild-logo]: https://img.shields.io/badge/esbuild-%23FFCF00.svg?style=for-the-badge&logo=esbuild&logoColor=black
[Esbuild-url]: https://esbuild.github.io/
[HTML-logo]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://html.spec.whatwg.org/
[Nunjucks-logo]: https://custom-icon-badges.demolab.com/badge/Nunjucks-3d8137?logo=nunjucks&style=for-the-badge
[Nunjucks-url]: https://mozilla.github.io/nunjucks/
[Sass-logo]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[Sass-url]: https://sass-lang.com/
[Git-logo]: https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=for-the-badge
[Git-url]: https://git-scm.com/
[NodeJS-logo]: https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge
[NodeJS-url]: https://nodejs.org/
[Npm-logo]: https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=for-the-badge
[Npm-url]: https://www.npmjs.com/
[TypeScript-logo]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[JavaScript-logo]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://ecma-international.org/publications-and-standards/standards/ecma-262/
[GithubPages-logo]: https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white
[GithubPages-url]: https://pages.github.com/
[PostCSS-logo]: https://img.shields.io/badge/PostCSS-%23DD3A0A.svg?style=for-the-badge&logo=postcss&logoColor=white
[PostCSS-url]: https://postcss.org/
[SVGO-logo]: https://custom-icon-badges.demolab.com/badge/SVGO-12222b?logo=svgo&style=for-the-badge
[SVGO-url]: https://svgo.dev/
[Browserslist-logo]: https://custom-icon-badges.demolab.com/badge/browserslist-1d1d1d?logo=browserslist&style=for-the-badge
[Browserslist-url]: https://github.com/browserslist/browserslist
[Sharp-logo]: https://custom-icon-badges.demolab.com/badge/Sharp-1f2a1c?logo=sharp&style=for-the-badge
[Sharp-url]: https://sharp.pixelplumbing.com/
[Python-url]: https://www.python.org/

<!-- linters & code format --->

[ESLint-logo]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://eslint.org/
[Stylelint-logo]: https://custom-icon-badges.demolab.com/badge/Stylelint-1b1b1d?logo=stylelint&style=for-the-badge
[Stylelint-url]: https://stylelint.io/
[Prettier-logo]: https://img.shields.io/badge/prettier-%23192a32?style=for-the-badge&logo=prettier&logoColor=dc524a
[Prettier-url]: https://prettier.io/
[EditorConfig-logo]: https://custom-icon-badges.demolab.com/badge/EditorConfig-010101?logo=editorconfig&style=for-the-badge
[EditorConfig-url]: https://editorconfig.org/
[Commitlint-logo]: https://custom-icon-badges.demolab.com/badge/Commitlint-1b1b1f?logo=commitlint&style=for-the-badge
[Commitlint-url]: https://commitlint.js.org/
[LintStaged-logo]: https://custom-icon-badges.demolab.com/badge/Lint--Staged-ffffff?logo=lintstaged&style=for-the-badge
[LintStaged-url]: https://github.com/lint-staged/lint-staged
[Husky-logo]: https://custom-icon-badges.demolab.com/badge/Husky-607d8b?logo=husky-vscode&style=for-the-badge
[Husky-url]: https://typicode.github.io/husky/

<!-- cli tools --->

[ffmpeg-logo]: https://shields.io/badge/FFmpeg-%23171717.svg?logo=ffmpeg&style=for-the-badge&labelColor=171717&logoColor=5cb85c
[ffmpeg-url]: https://ffmpeg.org/
[FoundryToolsCLI-logo]: https://custom-icon-badges.demolab.com/badge/Foundry%20Tools%20CLI-000000?logo=foundry-tools-cli&style=for-the-badge
[FoundryToolsCLI-url]: https://github.com/ftCLI/FoundryTools-CLI

<!-- ide & workspace --->

[VisualStudioCode-logo]: https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white
[VisualStudioCode-url]: https://code.visualstudio.com/
[Figma-logo]: https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white
[Figma-url]: https://www.figma.com/

<!-- browsers --->

[Opera-logo]: https://img.shields.io/badge/Opera-FF1B2D?logo=Opera&logoColor=white&style=for-the-badge
[Opera-url]: https://www.opera.com/
[GoogleChrome-logo]: https://img.shields.io/badge/Google%20Chrome-4285F4?logo=GoogleChrome&logoColor=white&style=for-the-badge
[GoogleChrome-url]: https://www.google.com/chrome/
[MicrosoftEdge-logo]: https://custom-icon-badges.demolab.com/badge/Microsoft%20Edge-2771D8?logo=edge-white&logoColor=white&style=for-the-badge
[MicrosoftEdge-url]: https://www.microsoft.com/en-us/edge/
[Firefox-logo]: https://img.shields.io/badge/Firefox-FF7139?logo=firefoxbrowser&logoColor=white&style=for-the-badge
[Firefox-url]: https://www.firefox.com/
[Yandex-logo]: https://custom-icon-badges.demolab.com/badge/Yandex%20Browser-F03911?logo=yandex-browser&style=for-the-badge
[Yandex-url]: https://browser.yandex.com/

<!-- preview --->

[website-preview]: project/preview/preview.gif
