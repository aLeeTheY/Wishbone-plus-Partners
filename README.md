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

[![Русский](https://img.shields.io/badge/Русский-blue)](README.md) [![English](https://img.shields.io/badge/English-blue)](README.EN.md)

</div>

<!-- TABLE OF CONTENTS -->
<br />
<details>
  <summary>📦 Содержание</summary>
  <ol>
    <li>
      <a href="#about-the-project">ℹ️ О проекте</a>
      <ul>
        <li><a href="#design">🎨 Дизайн</a></li>
        <li>
          <a href="#preview">👁️ Предпросмотр</a>
          <ul>
            <li><a href="#interface-preview">🖥️📱 Интерфейс (Desktop + Mobile)</a></li>
            <li><a href="#fluid-preview">💧 Демонстрация Fluid-адаптива</a></li>
          </ul>
        </li>
        <li>
          <a href="#key-features">✨ Ключевые особенности</a>
          <ul>
            <li><a href="#google-lighthouse-benchmark">⚡ Google Lighthouse Benchmark</a></li>
          </ul>
        </li>
        <li><a href="#built-with">🛠️ Используемые технологии</a></li>
        <li><a href="#project-structure">📂 Структура проекта</a></li>
        <li><a href="#supported-browsers">🌐 Поддерживаемые браузеры</a></li>
      </ul>
    </li>
    <li>
      <a href="#quick-start">🚀 Начало работы</a>
      <ul>
        <li><a href="#prerequisites">📋 Предварительные требования</a></li>
        <li><a href="#installation">📥 Установка зависимостей</a></li>
        <li><a href="#deployment-path-config">🌐 Конфигурация путей развёртывания (опционально)</a></li>
        <li><a href="#build-launch">⚙️ Сборка и запуск</a></li>
      </ul>
    </li>
    <li>
    <a href="#usage">💡 Использование</a>
      <ul>
        <li>
        <a href="#configuration">🔧 Конфигурация</a>
          <ul>
            <li><a href="#examples">📖 Примеры переопределения параметров через NPM-скрипты</a></li>
            <li><a href="#npm-scripts">🏃 NPM скрипты</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#development-challenges">🧠 Сложности при разработке</a></li>
    <li><a href="#key-skills">📈 Полученные навыки</a></li>
    <li><a href="#roadmap">🗺️ Дорожная карта</a></li>
    <li><a href="#license">📄 Лицензия</a></li>
    <li><a href="#contact">🤝 Контакты</a></li>
    <li><a href="#acknowledgments">💖 Благодарности</a></li>
  </ol>
</details>
<!-- ABOUT THE PROJECT -->

## ℹ️ О проекте <a id="about-the-project"></a>

Основная цель проекта — разработка адаптивного корпоративного лендинга с фокусом на полную автоматизацию сборки, мультиязычность и достижение максимальных показателей производительности.

Проект построен как модульный инженерный каркас на базе Gulp 5: шаблонизатор Nunjucks собирает HTML с поддержкой локализации (i18n), SCSS обрабатывается по методологии BEM с многоступенчатым PostCSS-пайплайном, а клиентская логика (при необходимости) пишется на TypeScript и компилируется в оптимизированный бандл. Все медиа‑ассеты проходят через специализированные утилиты для сжатия и оптимизации загрузки страниц, а управление параметрами сборки вынесено в CLI‑интерфейс с поддержкой режимов <code>dev</code>, <code>staging</code> и <code>production</code>.

### 🎨 Дизайн <a id="design"></a>

Визуальная составляющая базируется на макете [**Wishbone + Partners**](https://verstaem.online/projects/wishbone/) от платформы [**верстаем.онлайн**](https://verstaem.online/). <br /> Ключевой задачей было воссоздание интерфейса с применением принципов Pixel Perfect и Fluid Design, с последующей адаптацией под различные разрешения экранов с сохранением целостности дизайн-системы.

### 👁️ Предпросмотр <a id="preview"></a>

Ниже представлена **интерактивная демонстрация** проекта (_нажмите на любое изображение для перехода к живому демо_):

<div align="center">

#### 🖥️📱 Интерфейс (Desktop + Mobile) <a id="interface-preview"></a>

[![Интерфейс проекта][interface-preview-gif]](https://aleethey.github.io/Wishbone-plus-Partners/)

<br />

#### 💧 Демонстрация Fluid-адаптива <a id="fluid-preview"></a>

[![Демонстрация Fluid Design][fluid-preview-gif]](https://aleethey.github.io/Wishbone-plus-Partners/)

</div>

### ✨ Ключевые особенности <a id="key-features"></a>

_Для удобства вся информация разбита по категориям._

<details>
  <summary>📐 Верстка, Архитектура и UI/UX</summary>

- **Static & Modular Architecture:** Чистый статический фронтенд без CMS и SSR overhead. HTML-код декомпозирован на изолированные, переиспользуемые компоненты с помощью шаблонизатора **Nunjucks**.
- **Internationalization (i18n):** Полноценная поддержка мультиязычности. Пайплайн динамически компилирует страницы на основе JSON-словарей (<code>ru.json</code>, <code>en.json</code>), генерируя раздельные языковые версии со своими роутами. Активируется CLI-флагом <code>&#8209;I, &#8209;&#8209;i18n</code>.
- **Fluid & Responsive Design:** Полностью гибкая адаптивность (Desktop, Tablet, Mobile). Построена на современных CSS-функциях <code>clamp()</code>, <code>min()</code> и <code>max()</code> в связке с каскадными медиа-запросами.
- **Bi-directional Layout Pipeline (--mobile-first):** Уникальный флаг <code>&#8209;M, &#8209;&#8209;mobile&#8209;first</code> позволяет на лету переключать стратегию сборки: он перенастраивает PostCSS на сортировку медиа-запросов по <code>min&#8209;width</code> и заставляет кастомный <code><picture></code>-трансформер инвертировать логику генерации адаптивных тегов в режим Mobile-First вместо стандартного Desktop-First (<code>max&#8209;width</code>).
- **Pixel Perfect Fidelity:** Высокоточное воссоздание макета из Figma с жестким соблюдением отступов и оригинальной дизайн-системы.
- **BEM Methodology:** Именование классов по методологии БЭМ, гарантирующее полную изоляцию стилей и простоту поддержки.
- **Advanced UI/UX & Micro-interactions:** Интеграция плавных анимаций скролла (AOS.js) и декларативного управления состоянием на клиенте (Alpine.js). Эффект дополнен кастомными CSS-переходами (transitions) с аппаратным ускорением для интерактивных элементов.

</details>

<details>
  <summary>⚙️ Автоматизация и Управление сборкой (CLI & Workflow)</summary>

- **Gulp 5 Core & Node Environments:** Автоматизация построена на Gulp 5. Режимы запуска разграничены через <code>cross&#8209;env</code>. При этом конфигурация <code>staging</code> активируется через выделенный CLI-флаг <code>&#8209;s, &#8209;&#8209;staging</code> внутри правил продакшен-сборки.
- **Smart Path Aliasing:** Сквозная поддержка алиасов (<code>@scss</code>, <code>@ts</code>, <code>@images</code>, <code>@audio</code>, <code>@libs</code> и др.) с автодополнением в VS Code. При сборке Gulp-пайплайны автоматически заменяют их во всех исходниках.
- **Offline Autonomous Mode:** Флаг <code>&#8209;l, &#8209;&#8209;local</code> принудительно переводит пути в относительный формат и автоматически инлайнит SVG-спрайт, позволяя запускать сайт напрямую с локального диска по протоколу <code>file:///</code>.
- **Advanced CLI Management (Yargs):** Настройка параметров сборки «на лету»: управление логированием (<code>&#8209;V, &#8209;&#8209;verbose</code>), конфигурация домена деплоя (<code>&#8209;d, &#8209;&#8209;domain</code>), имени целевой папки (<code>&#8209;F, &#8209;&#8209;site&#8209;folder</code>) и запуск сервера продакшена (<code>&#8209;P, &#8209;&#8209;prod&#8209;server</code>). Полная справка доступна по команде <code>gulp &#8209;i</code>.
- **Strict CLI Conflict Validation:** Автоматическое прерывание сборки с информативной ошибкой при вызове несовместимых флагов. Например, CLI заблокирует запуск экспериментальной обфускации <code>&#8209;o, &#8209;&#8209;obfuscation</code> совместно с флагами инлайнинга (<code>&#8209;&#8209;inline&#8209;css</code>, <code>&#8209;&#8209;inline&#8209;js</code>, <code>&#8209;&#8209;inline&#8209;sprite</code>).
- **Smart Cache-Safe Clean:** Задача очистки папки <code>dist/</code> по умолчанию (флаг <code>&#8209;c, &#8209;&#8209;force&#8209;clean</code> отключен) не трогает тяжелые медиаресурсы (видео, аудио, шрифты, картинки). Для принудительной полной очистки рабочей директории передается флаг <code>&#8209;c</code>.
- **Fast Dev Workflow:** В режиме разработки тяжелые оптимизации отключаются, а локальный сервер (**BrowserSync**) мгновенно отражает изменения благодаря оптимизированному <code>gulp&#8209;watch</code>. Поддерживается протокол HTTPS через флаг <code>&#8209;H, &#8209;&#8209;secure</code>.
- **Deployment & Archiving:** Интегрированы автоматизированные таски отправки дистрибутива на удаленный сервер по FTP (<code>vinyl&#8209;ftp</code>) и упаковки готового проекта в ZIP-архив. Флаг <code>&#8209;g, &#8209;&#8209;gh&#8209;pages</code> автоматически адаптирует пути под хостинг GitHub Pages.

</details>

<details>
  <summary>🧩 Самописные трансформеры и умные хелперы (Custom Gulp Helpers)</summary>

- **Incremental Asset Validation (<code>asset&#8209;exists.js</code>):** Кастомные хелперы отслеживают актуальность медиафайлов с учётом хешей ревизий, чтобы тяжёлые фоновые задачи (FFmpeg, Sharp, конвертация шрифтов) не запускались повторно без необходимости.
- **Automated <code><picture></code> Transformer (<code>html&#8209;img2picture&#8209;transformer.js</code>):** Кастомный HTML-парсер на базе <code>htmlparser2</code>, интегрированный прямо в поток <code>html.js</code>. Он выступает в роли «DOM-архитектора»: анализирует исходники через <code>sharp</code> для считывания пропорций оригинала, после чего динамически перестраивает дерево тегов, оборачивая <code><img></code> в структуры <code><picture></code> с точной картой медиа-запросов. Пайплайн полностью изолирован от тяжелой графики (не вызывает race conditions) и аппаратно решает задачи Core Web Vitals: предотвращает CLS (инжектирует <code>width</code>/<code>height</code>) и оптимизирует LCP (вырезает <code>lazy loading</code> при наличии <code>fetchpriority="high"</code> и форсирует <code>decoding="async"</code>).
- **Flexible Inline Helper (<code>inline&#8209;assets.js</code>):** Управляемая через метки в HTML инъекция финального CSS, JS и SVG-спрайта. Исключает лишние HTTP-запросы и поддерживает автономный режим (<code>&#8209;l, &#8209;&#8209;local</code>).
- **Advanced Inline Bundling:** Выделенные флаги <code>&#8209;&#8209;inline&#8209;css</code> and <code>&#8209;&#8209;inline&#8209;js</code> встраивают финальные скомпилированные бандлы стилей и скриптов прямо в HTML-код, полностью исключая внешние сетевые запросы на клиенте.
- **Experimental Code Obfuscation:** Флаг <code>&#8209;o, &#8209;&#8209;obfuscation</code> запускает переименование CSS-классов в случайные короткие хэши во всех HTML, CSS и JS файлах сборки для экстремального снижения веса и защиты структуры кода от прямого копирования.
- **Native CLI Binary Integration:** Пайплайн управляет внешними системными утилитами (<code>ffmpeg</code>, Python <code>ftcli</code>) через асинхронный <code>spawn</code> с упреждающей проверкой их доступности в ОС. Реализована атомарная запись результатов и защита от блокировки <code>Event Loop</code>.

</details>

<details>
  <summary>⚡ Оптимизация и Производительность (Performance)</summary>

- **Google Lighthouse Metrics:** Стабильные **100/100** баллов в категории **Performance** и **90+** по остальным метрикам (Accessibility, Best Practices, SEO).
- **Blazing Fast Script Compilation (ESBuild):** Сверхбыстрая транспиляция TypeScript/JavaScript компилятором <code>esbuild</code> в стандарт ES2018, глубокая минификация и эффективный Tree Shaking.
- **Critical CSS Extraction (Penthouse):** Автоматическая генерация и инлайнинг критических стилей для мгновенной отрисовки первого экрана (автоматически отключается при полном инлайнинге стилей через <code>&#8209;&#8209;inline&#8209;css</code>).
- **Responsive Images Permutations Matrix (<code>images.js</code>):** Вычислительный пайплайн на базе чистого <code>sharp</code> для генерации адаптивной сетки графики. Извлекает метаданные оригиналов и формирует матрицу комбинаций <code>[Брейкпоинты × 3 Формата (Исходный, WebP, AVIF)]</code>. Скрипт защищен от апскейла (пропускает брейкпоинты, превышающие физическое разрешение исходника) и гибко адаптируется под окружение: в <code>dev</code> оптимизирует скорость (минимальный <code>effort</code>, качество 100%), а в <code>prod</code> включает максимальное сжатие (<code>mozjpeg</code>, оптимизация палитры PNG, глубокие проходы <code>effort</code>). Интегрирован с хелпером <code>asset&#8209;exists.js</code> для инкрементального пропуска уже скомпилированных пачек файлов.
- **SVG Optimization (SVGO & Sprites):** Векторные иконки автоматически очищаются утилитой SVGO от технического мусора и упаковываются в единый <code>sprite.svg</code>. Принудительный инлайнинг в DOM-дерево доступен через флаг <code>&#8209;&#8209;inline&#8209;sprite</code> (автоматически активируется в <code>&#8209;l, &#8209;&#8209;local</code>).
- **Media Optimization (FFmpeg & WOFF2):** Шрифты пережимаются в максимально эффективные форматы WOFF/WOFF2 через Python FoundryTools CLI. Аудио- и видеоресурсы конвертируются в медиаконтейнеры <code>.webm</code> с помощью пресетов FFmpeg.
- **Asset Revisioning (Cache Busting):** Хеширование имён файлов (<code>gulp&#8209;rev</code>) в режимах <code>staging</code> (флаг <code>&#8209;s</code>) и <code>prod</code> для гарантированного сброса кэша на стороне пользователей после деплоя.
- **SEO & Production Metadata:** Автоматическое включение в финальную сборку всех сопутствующих метафайлов (<code>favicon.ico</code>, <code>robots.txt</code>, <code>sitemap.xml</code>).

</details>

<details>
  <summary>🛡️ Линтинг, Форматирование и Качество кода (Code Quality)</summary>

- **Cross-browser Compatibility (.browserslistrc):** PostCSS <code>autoprefixer</code> в составе <code>postcss&#8209;preset&#8209;env</code> ориентируется на глобальный охват >95% активных браузеров для продакшена. В <code>dev</code>-режиме компиляция ускорена за счет фокуса на последних версиях ПО.
- **Advanced PostCSS Pipeline:** Многоступенчатая обработка стилей: <code>postcss&#8209;preset&#8209;env</code>, минификация имён CSS-переменных, округление субпикселей, фолбеки для <code>font&#8209;variant</code> и <code>will&#8209;change</code>, автоматический <code>font&#8209;display: swap</code>, удаление неиспользуемых селекторов (<code>purgecss</code>), группировка медиа-запросов и финальное сжатие через <code>cssnano</code>.
- **Strict Linting Standards (ESLint):** Современная Flat-конфигурация ESLint с поддержкой <code>typescript&#8209;eslint</code> и <code>@stylistic</code>. Включена строгая проверка типов и предупреждения для потенциально опасного кода.
- **Stylelint Architecture:** Контроль синтаксиса SCSS с плагином <code>stylelint&#8209;no&#8209;unsupported&#8209;browser&#8209;features</code>, автоматически сверяющим используемые CSS-свойства со спецификацией <code>.browserslistrc</code>.
- **Automated Formatting (Prettier):** Автоматическое форматирование кода «на лету» с поддержкой синтаксиса Nunjucks (<code>prettier&#8209;plugin&#8209;jinja&#8209;template</code>). Отступы синхронизированы с конфигурацией <code>.editorconfig</code>.
- **Git Hooks Automation (Husky & Commitlint):** Связка <code>lint&#8209;staged</code> изолированно проверяет измененные файлы линтерами и форматирует их перед коммитом. <code>commitlint</code> строго следит за соответствием стандарту Conventional Commits (с поддержкой типа <code>wip</code>).
- **Automated Markdown Processing (transform-md.ts):** Автоматическая адаптация и подготовка разметки README-файлов к публикации. Скрипт <code>cli/transform&#8209;md.ts</code> изолирует и фиксирует верстку и типографику документации перед отправкой в репозиторий, а затем прозрачно восстанавливает стандартный Markdown-вид для удобного локального редактирования. Подробная техническая информация доступна при запуске утилиты с флагом <code>&#8209;&#8209;help</code>.

</details>

<details>
  <summary>📋 Готовность к масштабированию (Template Versatility)</summary>

- **Production-Ready Boilerplate:** Проект имеет строгую модульную структуру, что позволяет использовать его как универсальный стартовый шаблон для развертки аналогичных статических сайтов любой сложности.
- **Pure Static Output & Hosting Independence:** Сборка генерирует чистые статические файлы, которые не требуют Node.js на стороне сервера. Итоговый результат можно бесплатно запустить на GitHub Pages, залить на любой копеечный хостинг или открыть локально прямо из папки.
- **Decoupled Architecture:** Логика сборщика полностью отделена от контентной части — конфигурационные файлы позволяют быстро перенастроить пайплайны под новые типы ассетов без переписывания ядра на Gulp.

</details>

#### ⚡ Google Lighthouse Benchmark <a id="google-lighthouse-benchmark"></a>

В качестве подтверждения высокой оптимизации сайта ниже представлены результаты тестирования производительности в бенчмарке **Google Lighthouse** для десктопной и мобильной версий:

<div align="center">

|                        🖥️ Desktop Version                         |                        📱 Mobile Version                        |
| :---------------------------------------------------------------: | :-------------------------------------------------------------: |
| ![Lighthouse Desktop](project/lighthouse_benchmark__desktop.avif) | ![Lighthouse Mobile](project/lighthouse_benchmark__mobile.avif) |

</div>

### 🛠️ Используемые технологии <a id="built-with"></a>

_Для удобства вся информация разбита по категориям._

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
    - [![FFmpeg][ffmpeg-logo]][ffmpeg-url] <sup>— конвертация аудио- и видеоассетов в формат <code>.webm</code> с поддержкой GPU-ускорения NVENC</sup>
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
  - [![Lint-staged][LintStaged-logo]][LintStaged-url] <sup>— линтинг и форматирование файлов перед коммитом (<code>pre&#8209;commit</code>)</sup>
  - [![Commitlint][CommitLint-logo]][CommitLint-url] <sup>— строгая валидация сообщений по спецификации Conventional Commits (с кастомными типами <code>wip</code> и <code>deploy</code>)</sup>

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

### 📂 Структура проекта <a id="project-structure"></a>

```text
Wishbone-plus-Partners/
│
├── .husky/                          # Локальные Git-хуки
├── .vscode/                         # Файлы для VSCode
│
├── cli/                             # Скрипты автоматизации и CLI-утилиты
│   ├── transform-md.ts              # Утилита экранирования инлайн-кода и дефисов в Markdown
│   └── tsconfig.json
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
├── .editorconfig                    # Настройки отступов редактора
├── .editorconfig-checker.json
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

### 🌐 Поддерживаемые браузеры <a id="supported-browsers"></a>

Проект проверен на корректность отображения и стабильность работы скриптов в актуальных версиях следующих браузеров:

- [![Google Chrome][GoogleChrome-logo]][GoogleChrome-url]
- [![Microsoft Edge][MicrosoftEdge-logo]][MicrosoftEdge-url]
- [![Yandex][Yandex-logo]][Yandex-url]
- [![Firefox][Firefox-logo]][Firefox-url]
- [![Opera][Opera-logo]][Opera-url]

> [!IMPORTANT]
> Информация актуальна для версии **[2.0.0](https://github.com/aLeeTheY/Wishbone-plus-Partners/releases/tag/2.0.0)**. На момент проверки проект корректно отображался в последних стабильных версиях всех [указанных браузеров](#supported-browsers).
>
> **Дата последней проверки: 2 июня 2026**

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- GETTING STARTED -->

## 🚀 Начало работы <a id="quick-start"></a>

_Следуйте приведённым ниже инструкциям для сборки и запуска проекта на локальном сервере._

### 📋 Предварительные требования <a id="prerequisites"></a>

1. Установите [Node.js][NodeJS-url], [FFmpeg][FFmpeg-url], [Python][Python-url] и [FoundryTools-CLI][FoundryToolsCLI-url].

2. Скачайте данный репозиторий в виде ZIP-архива или клонируйте его с помощью [Git][Git-url]:

```sh
git clone https://github.com/aLeeTheY/Wishbone-plus-Partners
```

### 📥 Установка зависимостей <a id="installation"></a>

1. Перейдите в каталог проекта и установите все необходимые зависимости:

```sh
npm install
```

### 🌐 Конфигурация путей развёртывания (опционально) <a id="deployment-path-config"></a>

Перед запуском сборки вы можете изменить базовые домены и пути для различных сред в конфигурационном файле <code>src/site.config.json</code>:

```json
{
  "domain": "http://localhost:3000",
  "siteFolder": "/",
  "domainProduction": "https://your.domain.com/",
  "siteFolderProduction": "/www/",
  "domainGitHubPages": "https://aleethey.github.io/",
  "siteFolderGitHubPages": "/Wishbone-plus-Partners/"
}
```

Вы можете настроить эти параметры под свои нужды. Сборщик автоматически подставит нужные значения: базовые поля (<code>domain</code> и <code>siteFolder</code>) используются для сценариев <code>dev</code>, <code>prod &#8209;&#8209;staging</code> и <code>prod &#8209;&#8209;prod&#8209;server</code>, в то время как ключи с суффиксами соответствуют сценариям <code>prod</code> и <code>prod &#8209;&#8209;gh&#8209;pages</code> соответственно.

> [!TIP]
> **Альтернатива через CLI**
>
> Если вам нужно переопределить конфигурацию «на лету» без изменения файла, можно использовать следующие флаги командной строки:
>
> - <code>&#8209;&#8209;domain</code> (<code>&#8209;d</code>) — для переопределения целевого URL
> - <code>&#8209;&#8209;site&#8209;folder</code> (<code>&#8209;F</code>) — для переопределения пути к подкаталогу

> [!NOTE]
> **Умная нормализация (защита от ошибок)**
>
> В сборщик встроена автоматическая обработка слэшей. Вы можете указывать их в любом формате (в конце, в начале или вовсе опускать):
>
> - <code>https://site.com</code> or <code>https://site.com/</code>
> - <code>/www/</code> or <code>www</code>
>
> Текущая Gulp-сборка автоматически нормализует строки, предотвращая поломку путей к ресурсам.

### ⚙️ Сборка и запуск <a id="build-launch"></a>

1. Для сборки и запуска проекта, выполните одну из следующих команд (_с учётом предпочтительного режима сборки_):

<div align="center">

| Режим сборки  |                       Прямой вызов (CLI)                       | Альтернатива (NPM) |
| :-----------: | :------------------------------------------------------------: | :----------------: |
| <code>development</code> |        <code>cross&#8209;env NODE_ENV=development gulp dev &#8209;&#8209;i18n</code>        |   <code>npm run dev</code>    |
|   <code>staging</code>   |   <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;staging &#8209;&#8209;i18n</code>   | <code>npm run staging</code>  |
| <code>production</code>  | <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;prod&#8209;server</code> |   <code>npm run prod</code>   |

</div>

<p align="right">(<a href="#readme-top">наверх</a>)</p>

## 💡 Использование <a id="usage"></a>

_Вы можете управлять конфигурацией сборки Gulp с помощью **аргументов командной строки** (argv)._

Для получения полного списка опций введите:

```sh
gulp --info
```

### 🔧 Конфигурация <a id="configuration"></a>

Полный список опций дополнительно продублирован ниже:

<div align="center">

|                         Опция                          |    Тип    |  Значение по-умолчанию  |                                                                         Описание                                                                          |
| :----------------------------------------------------: | :-------: | :---------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      <code>&#8209;W</code><br /><code>&#8209;&#8209;workspace&#8209;version</code><br /><code>&#8209;&#8209;wv</code>       | <code>boolean</code> |         <code>false</code>         |                                                              Показать текущую версию проекта                                                              |
|                   <code>&#8209;i</code><br /><code>&#8209;&#8209;info</code>                   | <code>boolean</code> |         <code>false</code>         |                                                            Показать справку и доступные опции                                                             |
|                 <code>&#8209;V</code><br /><code>&#8209;&#8209;verbose</code>                  | <code>boolean</code> |         <code>false</code>         |                                               Расширенный вывод логов при выполнении некоторых Gulp-тасков                                                |
|                 <code>&#8209;s</code><br /><code>&#8209;&#8209;staging</code>                  | <code>boolean</code> |         <code>false</code>         |                                       Включить конфигурацию <code>staging</code>-окружения на базе правил <code>production</code>-сборки                                        |
|               <code>&#8209;c</code><br /><code>&#8209;&#8209;force&#8209;clean</code>                | <code>boolean</code> |         <code>false</code>         |                                                               Полная очистка папки <code>dist/</code>                                                                |
|                  <code>&#8209;l</code><br /><code>&#8209;&#8209;local</code>                   | <code>boolean</code> |         <code>false</code>         |                                                       Сборка с относительными путями для <code>file:///</code>                                                       |
|    <code>&#8209;I</code><br /><code>&#8209;&#8209;internationalization</code><br /><code>&#8209;&#8209;i18n</code>    | <code>boolean</code> |         <code>false</code>         |                                                               Включить мультиязычную сборку                                                               |
|             <code>&#8209;&#8209;inline&#8209;sprite</code><br /><code>&#8209;&#8209;is</code>              | <code>boolean</code> |         <code>false</code>         |                                             Встроить SVG-спрайт в HTML (включен автоматически при <code>&#8209;&#8209;local</code>)                                              |
|               <code>&#8209;&#8209;inline&#8209;css</code><br /><code>&#8209;&#8209;ic</code>               | <code>boolean</code> |         <code>false</code>         |                                                                 Встроить CSS-стили в HTML                                                                 |
|               <code>&#8209;&#8209;inline&#8209;js</code><br /><code>&#8209;&#8209;ij</code>                | <code>boolean</code> |         <code>false</code>         |                                                                Встроить JS-скрипты в HTML                                                                 |
|         <code>&#8209;M</code><br /><code>&#8209;&#8209;mobile&#8209;first</code><br /><code>&#8209;&#8209;mf</code>         | <code>boolean</code> |         <code>false</code>         | Переключить сборочный пайплайн на mobile‑first: сортировка медиа‑запросов PostCSS по возрастанию, атрибуты <code><picture></code> как <code>min&#8209;width</code> вместо <code>max&#8209;width</code> |
|  <code>&#8209;d</code><br /><code>&#8209;&#8209;domain</code><br /><code>&#8209;&#8209;site&#8209;url</code><br /><code>&#8209;&#8209;url</code>   | <code>string</code>  | <code>http://localhost:3000</code> |                                                     Базовый URL сайта, например <code>https://example.com</code>                                                     |
| <code>&#8209;F</code><br /><code>&#8209;&#8209;site&#8209;folder</code><br /><code>&#8209;&#8209;folder</code><br /><code>&#8209;&#8209;sf</code>  | <code>string</code>  |           <code>/</code>           |                                       Имя папки на хостинге или репозитория GitHub (например, <code>my&#8209;repo</code>, <code>www</code>, …)                                        |
| <code>&#8209;P</code><br /><code>&#8209;&#8209;prod&#8209;server</code><br /><code>&#8209;&#8209;server</code><br /><code>&#8209;&#8209;ps</code>  | <code>boolean</code> |         <code>false</code>         |                                                      Запустить локальный сервер для продакшен-сборки                                                      |
| <code>&#8209;H</code><br /><code>&#8209;&#8209;secure</code><br /><code>&#8209;&#8209;use&#8209;https</code><br /><code>&#8209;&#8209;https</code> | <code>boolean</code> |         <code>false</code>         |                                 Принудительно использовать HTTPS при генерации путей и для локального сервера разработки                                  |
|    <code>&#8209;g</code><br /><code>&#8209;&#8209;gh&#8209;pages</code><br /><code>&#8209;&#8209;demo</code><br /><code>&#8209;&#8209;gh</code>    | <code>boolean</code> |         <code>false</code>         |                             Включить сборку под GitHub Pages (использует URL-ы GitHub, см. файл <code>site.config.json</code> в <code>src/</code>)                              |

</div>

Экспериментальные опции:

<div align="center">

|            Опция             |    Тип    | Значение по-умолчанию |                                              Описание                                               |
| :--------------------------: | :-------: | :-------------------: | :-------------------------------------------------------------------------------------------------: |
| <code>&#8209;&#8209;obfuscation</code><br /><code>&#8209;&#8209;obf</code> | <code>boolean</code> |        <code>false</code>        | Обфускация структурных селекторов CSS-классов в HTML, CSS и JS. Несовместимо с <code>&#8209;&#8209;inline&#8209;*</code> опциями |

</div>

#### 📖 Примеры переопределения параметров через NPM-скрипты <a id="examples"></a>

Чтобы передать CLI-флаги без прямого вызова Gulp, используйте разделитель <code>&#8209;&#8209;</code> после npm-команды:

```sh
# Пример сборки для production с кастомным доменом и папкой назначения
npm run prod -- --domain https://my-custom-domain.com --site-folder /my-app/
```

#### 🏃 NPM скрипты <a id="npm-scripts"></a>

_Для удобства ниже продублированы основные npm-скрипты, доступные в проекте._

<div align="center">

|    Скрипт (NPM)     |                                       Исполняемая команда                                       |                                                               Описание                                                                |
| :-----------------: | :---------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
|      <code>prepare</code>      |                                             <code>husky</code>                                             |                                        Автоматическая настройка Git-хуков после <code>npm install</code>                                         |
|    <code>postinstall</code>    |                                       <code>npm run md:decode</code>                                       |                         Возвращает README в исходный Markdown сразу после <code>npm install</code> для локальной работы                          |
|     <code>md:encode</code>     | <code>npx prettier &#8209;&#8209;write \"**/*.md\" && npx tsx cli/transform&#8209;md.ts encode README.md README.EN.md</code> | Форматирование Prettier + защита инлайн-кода от разрывов строк через <code>transform&#8209;md.ts</code> (детали: <code>npx tsx cli/transform&#8209;md.ts &#8209;&#8209;help</code>) |
|     <code>md:decode</code>     | <code>npx tsx cli/transform&#8209;md.ts decode README.md README.EN.md && npx prettier &#8209;&#8209;write \"**/*.md\"</code> |         Откат изменений назад в стандартный Markdown + форматирование Prettier (детали: <code>npx tsx cli/transform&#8209;md.ts &#8209;&#8209;help</code>)         |
|       <code>clean</code>       |                                   <code>gulp clean &#8209;&#8209;force&#8209;clean</code>                                    |                                                     Полная очистка папки <code>dist/</code>                                                      |
|        <code>dev</code>        |                          <code>cross&#8209;env NODE_ENV=development gulp &#8209;&#8209;i18n</code>                           |                                         Dev-сервер с горячей перезагрузкой и мультиязычностью                                         |
|      <code>staging</code>      |                   <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;staging &#8209;&#8209;i18n</code>                    |                                        Production-сборка с активированными отладочными флагами                                        |
|       <code>prod</code>        |                 <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;prod&#8209;server</code>                  |                                       Production-сборка с локальным сервером для предпросмотра                                        |
|       <code>start</code>       |                                          <code>npm run dev</code>                                          |                                                        Алиас для <code>npm run dev</code>                                                        |
|       <code>build</code>       |                 <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;force&#8209;clean</code>                  |                                              Полная production-сборка с очисткой <code>dist/</code>                                              |
|       <code>local</code>       |             <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;local &#8209;&#8209;force&#8209;clean</code>              |                                       Production-сборка с относительными путями для <code>file:///</code>                                        |
|      <code>secure</code>       |             <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;https &#8209;&#8209;force&#8209;clean</code>              |                                               Production-сборка с принудительным HTTPS                                                |
|     <code>gh&#8209;pages</code>      |            <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;gh&#8209;pages &#8209;&#8209;force&#8209;clean</code>            |                                             Production-сборка для выгрузки в GitHub Pages                                             |
|      <code>archive</code>      |                                   <code>npm run build && gulp zip</code>                                   |                                                    Сборка и упаковка <code>dist/</code> в ZIP                                                    |
|      <code>lint:ts</code>      |                                   <code>eslint . &#8209;&#8209;max&#8209;warnings=0</code>                                   |                                                     Линтинг TypeScript/JavaScript                                                     |
|    <code>lint:ts:fix</code>    |                                <code>eslint . &#8209;&#8209;max&#8209;warnings=0 &#8209;&#8209;fix</code>                                |                                             Автоисправление ошибок линтера в TS/JS-файлах                                             |
|     <code>lint:scss</code>     |                           <code>stylelint \"**/*.scss\" &#8209;&#8209;max&#8209;warnings=0</code>                            |                                                          Линтинг SCSS-файлов                                                          |
|   <code>lint:scss:fix</code>   |                        <code>stylelint \"**/*.scss\" &#8209;&#8209;max&#8209;warnings=0 &#8209;&#8209;fix</code>                         |                                             Автоисправление ошибок линтера в SCSS-файлах                                              |
|       <code>lint</code>        |                           <code>npm&#8209;run&#8209;all &#8209;&#8209;parallel lint:ts lint:scss</code>                            |                                                   Параллельный линтинг TS/JS и SCSS                                                   |
|     <code>lint:fix</code>      |                       <code>npm&#8209;run&#8209;all &#8209;&#8209;parallel lint:ts:fix lint:scss:fix</code>                        |                                              Параллельное автоисправление в TS/JS и SCSS                                              |
|      <code>format</code>       |                                      <code>prettier . &#8209;&#8209;write</code>                                       |                                               Форматирование всех файлов через Prettier                                               |
| <code>test:editorconfig</code> |                                     <code>editorconfig&#8209;checker</code>                                      |                                            Проверка соответствия правилам <code>.editorconfig</code>                                             |

</div>

<p align="right">(<a href="#readme-top">наверх</a>)</p>

## 🧠 Сложности при разработке <a id="development-challenges"></a>

- **Миграция с legacy-структуры на автоматизированный Gulp-воркфлоу:** Исходная кодовая база (v1.0.0) представляла собой обычный набор статичных файлов без сборщика, заточенный исключительно под десктоп. Перенос проекта на рельсы **Gulp 5** потребовал полной перестройки архитектуры: ручная верстка была разбита на модульные шаблоны Nunjucks, стили реструктуризированы под методологию БЭМ + <code>7&#8209;1 Pattern</code>, а сам сайт переписан в отзывчивый fluid-адаптив с нуля и без готовых мобильных макетов.
- **Анализ и подбор npm/gulp-пакетов:** Многие библиотеки в экосистеме Gulp помечены как <code>deprecated</code>, поэтому часть времени ушла на поиск актуальных аналогов или создание собственных решений для сохранения безопасности и стабильности сборки.
- **Архитектура инкрементальной проверки ресурсов:** Внедрение системы, отслеживающей актуальность медиафайлов с учётом хешей ревизий. Стандартные плагины (например, <code>gulp&#8209;newer</code>) оказались бесполезны после работы <code>gulp&#8209;rev</code>. Для решения этой проблемы был разработан кастомный подход, сравнивающий файлы по их базовому имени, что позволило избежать избыточных пересборок для ассетов с хэшем в названии.
- **Интеграция и адаптация ИИ-сгенерированного кода (FFmpeg, ftcli):** Настройка кроссплатформенного управления утилитами FFmpeg и ftcli через асинхронный <code>spawn</code>. Сгенерированные ИИ модули потребовали тщательной верификации, исправления ошибок экранирования путей на Windows и доработки логики инкрементальных проверок.
- **Разрешение конфликта обфускации и инлайн-режимов:** Встраивание CSS в HTML с последующей обфускацией ломало стили, так как <code>postcss&#8209;obfuscator</code> не обрабатывает инлайн-стили. В связи с этим ограничением флаги <code>&#8209;&#8209;obfuscation</code> и <code>&#8209;&#8209;inline&#8209;*</code> были объявлены взаимоисключающими, а в CLI-интерфейс добавлена упреждающая валидация.
- **Математические вычисления для Fluid Design:** Для каждого адаптивного значения, заданного через <code>clamp()</code>, приходилось вручную или через кастомные SASS-миксины вычислять линейную функцию <code>y = kx + b</code> по двум точкам — минимальному (<code>x_1, y_1</code>) и максимальному (<code>x_2, y_2</code>) состояниям свойства для точного масштабирования между брейкпоинтами.

<p align="right">(<a href="#readme-top">наверх</a>)</p>

## 📈 Полученные навыки <a id="key-skills"></a>

- **Реализация методологии Fluid Design:** Практическое освоение механики «текучей» вёрстки с использованием математических функций <code>clamp()</code>, <code>min()</code> и <code>max()</code> в сочетании с минимальным количеством медиа-запросов для создания бесшовной адаптивности.
- **Интернационализация (i18n) и локализация:** Построение отказоустойчивой системы локализации веб-сайта на базе шаблонизатора Nunjucks и динамического рендеринга JSON-словарей для поддержки мультиязычности.
- **Архитектура Gulp 5:** Проектирование сложных систем автоматизации потоков данных с использованием последовательной и параллельной синхронизации задач (<code>gulp.series</code>/<code>gulp.parallel</code>), а также разработка кастомных стрим-процессоров на базе пакета <code>through2</code> при поддержке ИИ.
- **Инженерия веб-производительности (Web Performance):** Внедрение полного цикла оптимизации: автоматическая генерация и инъекция Critical CSS, адаптивная подгрузка современных форматов изображений (AVIF/WebP), тонкая настройка <code>fetch priority</code>, инлайнинг критических ресурсов и кэширование через генерацию хешей ревизий.
- **Декларативное проектирование CLI-интерфейсов:** Создание гибкого интерфейса управления сборкой с помощью <code>yargs</code>, разработка логики упреждающей валидации конфликтующих параметров и кастомная обработка асинхронных исключений во время рантайма.
- **Эффективный синергизм с ИИ-инструментами:** Практический опыт глубокой интеграции генеративного ИИ для ускорения разработки комплексных Gulp-сценариев: от проектирования промпт-схем до верификации, отладки и кастомизации кода под строгие требования production-окружения.

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- ROADMAP -->

## 🗺️ Дорожная карта <a id="roadmap"></a>

### 🏁 Фаза 1 – Статическая вёрстка ([v1.0.0](https://github.com/aLeeTheY/Wishbone-plus-Partners/releases/tag/1.0.0))

- [x] Реализация десктопного макета из Figma
  - [x] Разработка семантической HTML-структуры
  - [x] Создание базовой архитектуры стилей на SCSS по методологии BEM
- [x] Интеграция динамических UI-компонентов и анимаций на базе AOS.js и Alpine.js

### 🚀 Фаза 2 – Gulp-интеграция и Fluid-адаптив ([v2.0.0](https://github.com/aLeeTheY/Wishbone-plus-Partners/releases/tag/2.0.0))

- [x] Создание современной сборки **Gulp 5**
  - [x] Настройка автоматического линтинга коммитов и staged-файлов (Husky, lint-staged, commitlint)
  - [x] Интеграция экосистемы проверки кода (Stylelint, ESLint, Prettier)
  - [x] Связка Stylelint с [Browserslist][Browserslist-url] для валидации CSS-свойств под целевые браузеры
  - [x] Внедрение модульного шаблонизатора Nunjucks и интернационализации (i18n)
  - [x] Оптимизация статики: шрифты (WOFF2), изображения (AVIF/WebP/SVG-спрайты) и медиа (FFmpeg)
  - [x] Настройка минификации, кеширования (<code>gulp&#8209;rev</code>), обфускации, критического CSS и очистки неиспользуемого кода (Purge)
  - [x] Разработка кастомных стрим-хелперов (инлайнинг ресурсов, <code><picture></code>-трансформер)
  - [x] Интеграция CLI-управления сборкой через <code>yargs</code>
- [x] Переход на Fluid Design с использованием <code>clamp()</code>, <code>min()</code>, <code>max()</code>
  - [x] Адаптивная оптимизация под Laptop, Tablet и Mobile вьюпорты
  - [x] Локализационная адаптация (устранение багов отображения в русскоязычной версии сайта)
- [x] Развёртывание живого демо на GitHub Pages
- [x] Подготовка технической документации и написание <code>README.md</code>

### 🔮 Планы на будущее

- [ ] **Интеграция с бэкенд-шаблонами (Django/Jinja2):** Разработать пайплайн, позволяющий верстать изолированно от бэкенд-разработки, но генерировать на выходе шаблоны, полностью совместимые с архитектурой [Django][Django-url] (Jinja2/Nunjucks), автоматизируя подстановку статики.
- [ ] **Кастомный Gulp-плагин для FFmpeg:** Разработать современный плагин для медиа-конвейера (конвертация и сжатие аудио/видео), так как существующий <code>gulp&#8209;fluent&#8209;ffmpeg</code> устарел (<code>deprecated</code>).
- [ ] **Обновление пайплайна шрифтов:** Создать Gulp-плагин для интеграции с актуальным [ftcli][FoundryToolsCLI-url] (замена устаревшим пакетам <code>gulp&#8209;ttf2woff</code>, <code>gulp&#8209;ttf2woff2</code> и <code>gulp&#8209;fonter</code>).
- [ ] **Кастомный Gulp-плагин для адаптивной графики:** Разработать новый плагин для сборки адаптивных картинок (автоматическая трансформация <code><img></code> в <code><picture></code> с поддержкой брейкпоинтов и расчетом пропорций), так как существующий <code>gulp&#8209;responsive</code> устарел (<code>deprecated</code>).
- [ ] **Универсальный HTML-медиа-трансформер:** Создать комплексный Gulp-плагин для автоматического преобразования стандартных медиа-тегов в оптимизированные адаптивные структуры. Он должен на лету переносить обычные <code><img></code> в <code><picture></code> (с <code>srcset</code>), а базовые <code><video></code> и <code><audio></code> — в развернутые конструкции с вложенными тегами <code><source></code>, генерируя медиа-запросы с учетом подходов <code>mobile&#8209;first</code> или <code>desktop&#8209;first</code>.
- [ ] **CMS Интеграция:** Добавить готовые пресеты для развертывания и посадки верстки на WordPress и другие популярные CMS.
- [ ] **Поддержка React и аналогов:** Исследовать возможность использования текущей Gulp-сборки в связке с Vite/Webpack для полноценной поддержки React/Vue/Angular.

> 💡 Полный список планируемых функций и известных проблем доступен в разделе [Issues][issues-url].

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- LICENSE -->

## 📄 Лицензия <a id="license"></a>

Copyright © 2025 [aLeeTheY](https://github.com/aLeeTheY) <br/> Проект распространяется по лицензии [MIT][license-url]. Смотрите файл <code>LICENSE</code> для получения подробной информации.

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- CONTACT -->

## 🤝 Контакты <a id="contact"></a>

[![GitHub][GitHub-logo]](https://github.com/aLeeTheY)
[![Telegram][Telegram-logo]](https://t.me/aLeeTheY)
[![Gmail][Gmail-logo]](mailto:aleethey@gmail.com)

<!-- GitHub: [aLeeTheY](https://github.com/aLeeTheY)
<br/>
Telegram: [@aLeeTheY](https://t.me/aLeeTheY)
<br/>
Email: [aleethey@gmail.com](mailto:aleethey@gmail.com) -->

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## 💖 Благодарности <a id="acknowledgments"></a>

[aLeeTheY](https://github.com/aLeeTheY) выражает благодарность разработчикам и сообществам нижеперечисленных проектов.

### 🏛️ Ключевые технологии и окружение

- [Figma](https://www.figma.com/), [Visual Studio Code](https://code.visualstudio.com/) — за удобную среду для работы с макетами и редактор кода.
- [Node.js](https://nodejs.org/), [Npm](https://www.npmjs.com/), [Git](https://git-scm.com/), [GitHub](https://github.com/) — за фундамент: среду выполнения, управление пакетами и контроль версий.
- [Gulp](https://gulpjs.com/), [Browsersync](https://browsersync.io/) — за экосистему автоматизации и мгновенный Live Reload.
- [Nunjucks](https://mozilla.github.io/nunjucks/), [Esbuild](https://esbuild.github.io/), [Sass](https://sass-lang.com/), [PostCSS](https://postcss.org/) — за модульную шаблонизацию, сверхбыструю компиляцию скриптов и продвинутую обработку стилей.
- [Alpine.js](https://alpinejs.dev/), [AOS](https://michalsnik.github.io/aos/) — за легковесную реактивность интерфейса и анимации.
- [Chocolatey](https://chocolatey.org/) — за легкую установку Command Line Tools.
- [Python](https://www.python.org/) — за базу для работы CLI-инструментов компиляции шрифтов.

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

- **Системные зависимости и CLI:** [cross-env](https://github.com/kentcdodds/cross-env), [yargs](https://yargs.js.org/), [through2](https://github.com/rvagg/through2), [htmlparser2](https://github.com/fb55/htmlparser2), [domutils](https://github.com/fb55/domutils), [domhandler](https://github.com/fb55/domhandler).
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
[license-url]: https://github.com/aLeeTheY/Wishbone-plus-Partners/blob/master/LICENSE
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
[Django-url]: https://www.djangoproject.com/

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

<!-- contacts --->

[GitHub-logo]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[Telegram-logo]: https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white
[Gmail-logo]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white

<!-- preview --->

[interface-preview-gif]: project/preview/interface-preview.gif
[fluid-preview-gif]: project/preview/fluid-design-preview.gif
