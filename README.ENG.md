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
    💼 Corporate landing page for the Wishbone + Partners architectural bureau with localization and fluid layout.
    <br />
    <br />
    <a href="https://verstaem.online/projects/wishbone/">Design (Figma)</a>
    &middot;
    <a href="https://aleethey.github.io/Wishbone-plus-Partners/">Live Demo</a>
    &middot;
    <a href="https://github.com/aLeeTheY/Wishbone-plus-Partners/issues/new?labels=bug&template=bug-report---.md">Report a Bug</a>
  </p>

[![Русский](https://img.shields.io/badge/Русский-blue)](README.md) [![English](https://img.shields.io/badge/English-blue)](README.ENG.md)

</div>

<!-- TABLE OF CONTENTS -->
<br />
<details>
  <summary>📦 Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">ℹ️ About The Project</a>
      <ul>
        <li><a href="#design">🎨 Design</a></li>
        <li><a href="#preview">👁️ Preview</a></li>
        <li>
          <a href="#key-features">✨ Key Features</a>
          <ul>
            <li><a href="#google-lighthouse-benchmark">⚡ Google Lighthouse Benchmark</a></li>
          </ul>
        </li>
        <li><a href="#built-with">🛠️ Built With</a></li>
        <li><a href="#project-structure">📂 Project Structure</a></li>
        <li><a href="#supported-browsers">🌐 Supported Browsers</a></li>
      </ul>
    </li>
    <li>
      <a href="#quick-start">🚀 Quick Start</a>
      <ul>
        <li><a href="#prerequisites">📋 Prerequisites</a></li>
        <li><a href="#installation">📥 Installation</a></li>
        <li><a href="#build-launch">⚙️ Build & Launch</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">💡 Usage</a>
      <ul>
        <li><a href="#configuration">🔧 Configuration</a></li>
      </ul>
    </li>
    <li><a href="#development-challenges">🧠 Development Challenges</a></li>
    <li><a href="#key-skills">📈 Key Skills</a></li>
    <li><a href="#roadmap">🗺️ Roadmap</a></li>
    <li><a href="#license">📄 License</a></li>
    <li><a href="#contact">🤝 Contact</a></li>
    <li><a href="#acknowledgments">💖 Acknowledgments</a></li>
  </ol>
</details>
<!-- ABOUT THE PROJECT -->

## ℹ️ About The Project <a id="about-the-project"></a>

The primary goal of the project is to develop a responsive corporate landing page with a focus on full build automation, multilingual support, and achieving maximum performance scores.

The project is built as a modular engineering framework on top of Gulp 5: the Nunjucks templating engine assembles HTML with localization (i18n) support, SCSS is processed using the BEM methodology through a multi-stage PostCSS pipeline, and client-side logic (when needed) is written in TypeScript and compiled into an optimized bundle. All media assets are processed by specialized utilities to compress and optimize page loading, while build parameter management is exposed through a CLI interface with support for `dev`, `staging`, and `production` modes.

### 🎨 Design <a id="design"></a>

The visual layout is based on the [**Wishbone + Partners**](https://verstaem.online/projects/wishbone/) wireframe provided by the [**verstaem.online**](https://verstaem.online/) platform. <br /> The core objective was to implement the interface using Pixel Perfect fidelity and Fluid Design principles, ensuring seamless adaptation across all viewports while maintaining the integrity of the original design system.

### 👁️ Preview <a id="preview"></a>

Below is a **preview** of the live environment (_**Desktop + Mobile**, click the image to view the live demo_):

<div align="center">

[![Website Preview][website-preview]](https://aleethey.github.io/Wishbone-plus-Partners/)

</div>

### ✨ Key Features <a id="key-features"></a>

_For convenience, features are categorized by core architectural domains._

<details>
  <summary>📐 Layout, Architecture & UI/UX</summary>

- **Static & Modular Architecture:** Clean static frontend devoid of heavy CMS or SSR overhead. HTML is abstracted into isolated, reusable components using the **Nunjucks** templating engine.
- **Internationalization (i18n):** Native multi-language orchestration. The pipeline compiles pages utilizing structured JSON dictionaries (`ru.json`, `en.json`), generating independent language builds. Toggled instantly via the `--i18n` CLI flag.
- **Fluid & Responsive Design:** Fully scalable layout across Desktop, Tablet, and Mobile viewports. Driven by modern CSS functions like `clamp()`, `min()`, and `max()` working in tandem with cascading media queries.
- **Pixel Perfect Fidelity:** High-precision layout replication from Figma, strictly adhering to designated spacing tokens and the core design system.
- **BEM Methodology:** Strict class naming convention following BEM rules, guaranteeing style isolation and trivial long-term maintainability.
- **Enhanced UI/UX & Micro-interactions:** Integrated smooth scroll animations via AOS.js and lightweight, declarative client-side state management using Alpine.js. Supplemented with hardware-accelerated CSS transitions to deliver fluid, highly responsive `hover` feedback across all interactive nodes (buttons, links, and cards).

</details>

<details>
  <summary>⚙️ Automation & Build Management (CLI & Workflow)</summary>

- **Gulp 5 Core & NODE_ENV:** Build orchestration engineered with Gulp 5. Runtime modes (`dev`, `staging`, `prod`) are isolated using `cross-env` and standard `NODE_ENV` evaluations.
- **Smart Path Aliasing:** Universal support for path shortcuts (`@scss`, `@ts`, `@images`, `@audio`, `@libs`, etc.) configured with VS Code IntelliSense auto-completion. Gulp pipelines dynamically resolve these aliases across all source files during compilation.
- **Standalone Offline Mode (--local):** Passing the `--local` flag forces relative asset pathing and directly inlines the SVG sprite, allowing the site to be fully functional when executed straight from the file system via the `file:///` protocol.
- **Advanced CLI Control (Yargs):** On-the-fly configuration mapping: verbose logging toggles (`--verbose`), base path overrides (`--base-url`, `--base-url-postfix`), and localized production testing environments (`--prod-server`). Access complete CLI manual with `gulp --info`.
- **Preemptive Conflict Validation (Strict CLI):** The build process immediately self-terminates with semantic error reporting if incompatible parameters are invoked simultaneously (e.g., executing `--local` alongside `--obfuscation`).
- **Smart Clean Operations:** The standard directory sanitization routine ignores heavy media folders (videos, audio, fonts, images) to minimize disk I/O. Complete directory wipes can be forced using the `--force-clean` flag.
- **Fast Dev Workflow:** Production optimization passes are skipped during local development cycles, allowing the local server (**BrowserSync**) to instantly hot-reload UI changes via atomic `gulp-watch` listeners.
- **Deployment & Archiving:** Native tasks are exposed for shipping compiled distribution builds to remote servers over FTP (`vinyl-ftp`) or bundling the workspace into a compressed production ZIP archive.

</details>

<details>
  <summary>🧩 Custom Transformers & Custom Helpers</summary>

- **Incremental Asset Validation (`asset-exists.js`):** Custom utilities evaluate asset state against revision hashes. Heavy downstream tasks (FFmpeg encoding, Sharp optimization, font conversions) skip processing if the source files haven't changed.
- **Automated `<picture>` Transformer:** A custom Node.js module (`html-img2picture-transformer.js`) parses compiled HTML strings, reads asset dimensions via `sharp`, crops/scales them across layout breakpoints, and intercepts standard `<img>` nodes to inject `<picture>` structures complete with AVIF/WebP alternatives and fallback routing.
- **Flexible Inlining Engine (`inline-assets.js`):** Targeted script and style injection driven by custom marker tags inside HTML source code. Consolidates production CSS, JS, and SVG sprites directly into the document object, cutting HTTP overhead and fulfilling the requirements of standalone mode (`--local`).
- **Deep Bundle Inlining:** Activating `--inline-css` or `--inline-js` embeds production bundles inside the document payload, eliminating external blocking round-trips.
- **Experimental CSS Class Obfuscation:** A specialized post-processing utility (`postcss-obfuscator`) re-maps declared style selectors into random, ultra-short hashes (under 5 characters), shedding weight and masking architecture (enabled via `--obfuscation`). Guardrails prevent compilation if combined with raw inlining.
- **Native OS CLI Binary Orchestration:** The build stream provisions external system tools (`ffmpeg`, Python-based `ftcli`) using asynchronous `spawn` interfaces, checking binary presence prior to task execution. Leverages atomic file writing routines to prevent blocking the Node.js Event Loop.

</details>

<details>
  <summary>⚡ Optimization & Performance</summary>

- **Google Lighthouse:** Consistent **100/100** scoring within the **Performance** matrix and **90+** ratings across accompanying criteria (Accessibility, Best Practices, SEO).
- **Blazing Fast Script Bundling (ESBuild):** TypeScript/JavaScript source transpilation driven by `esbuild` targeting ES2018 parameters, yielding lightning-fast minification and tree-shaking passes.
- **Critical CSS Extraction (Penthouse):** Automated critical-path CSS generation and above-the-fold document inlining for instantaneous first contentful paints (automatically bypassed if global stylesheet inlining is active via `--inline-css`).
- **Responsive Media Generation:** Automated multi-viewport AVIF/WebP image generation managed dynamically via custom compilation pipelines (see _Custom Transformers_ details above).
- **SVG Optimization (SVGO & Sprites):** Vector assets pass through a rigid SVGO sanitization filter before being packed into a singular `sprite.svg`. The pipeline supports structural DOM injection using the `--inline-sprite` trigger.
- **Media Transcoding (FFmpeg & WOFF/WOFF2):** Text assets are compressed into optimal web-fonts (WOFF/WOFF2) using the Python FoundryTools CLI engine. Audio/video elements are converted to highly compressed `.webm` containers using hardware-accelerated FFmpeg configurations.
- **Cache Busting (Asset Revisioning):** File name hashing (`gulp-rev`) maps explicit fingerprints to compiled assets in `staging` and `prod` contexts, ensuring instant client-side cache busting upon deployment updates.
- **SEO & Meta Provisions:** The build stream correctly maps standard search engine configurations into the root of the distribution build (`favicon.ico`, `robots.txt`, `sitemap.xml`, etc.).

</details>

<details>
  <summary>🛡️ Linting, Formatting & Code Quality</summary>

- **Vendor Prefixing (.browserslistrc):** Vendor prefixing configurations are tuned to achieve >95% global active browser coverage in production environments, while utilizing raw un-prefixed modes for local dev tasks.
- **Advanced PostCSS Pipeline:** Multi-tier style transformation sequence: `postcss-preset-env`, custom CSS property scaling, subpixel rounding corrections, `font-variant` and `will-change` fallback injections, automated `font-display: swap` assignment, dead selector elimination (`purgecss`), media-query packing, and ultimate compression using `cssnano`.
- **Strict Type Checking & Linting (ESLint):** Flat configuration structures powered by ESLint using `typescript-eslint` and `@stylistic` modules. Enforces strict type boundaries and intercepts hazardous execution vectors.
- **Cascading Style Validation (Stylelint):** Structural validation for SCSS modules via `stylelint-no-unsupported-browser-features`, vetting property declarations against current `.browserslistrc` queries.
- **Prettier Integration:** Enforced syntax consistency across the workspace with dedicated support for Nunjucks templating blocks via `prettier-plugin-jinja-template`. Spacing layout rules are enforced at the IDE layer via `.editorconfig`.
- **Automated Git Hooks (Husky & Commitlint):** Powered by `lint-staged` to isolate mutated files, executing lint filters and formatting corrections prior to accepting commits. Standardizes VCS logs via strict Commitlint checks supporting transient `wip` markers.

</details>

<details>
  <summary>📋 Scaling & Template Versatility</summary>

- The workspace maintains strict folder modularity, making it perfectly suited to function as a plug-and-play frontend Boilerplate for scaffolding robust static web applications of any scale.

</details>

#### ⚡ Google Lighthouse Benchmark <a id="google-lighthouse-benchmark"></a>

As confirmation of the project's optimization, below are the benchmark metrics obtained from **Google Lighthouse** evaluations for both desktop and mobile layouts:

<div align="center">

|                        🖥️ Desktop Version                        |                       📱 Mobile Version                        |
| :--------------------------------------------------------------: | :------------------------------------------------------------: |
| ![Lighthouse Desktop](project/lighthouse_benchmark__desktop.png) | ![Lighthouse Mobile](project/lighthouse_benchmark__mobile.png) |

</div>

### 🛠️ Built With <a id="built-with"></a>

_For clarity, project dependencies are grouped by environmental roles._

<details>
<summary>🌐 Core Languages, Preprocessors & Templating</summary>

- [![HTML5][HTML-logo]][HTML-url] <sup>— Semantic markup and document structure</sup>
- [![Nunjucks][Nunjucks-logo]][Nunjucks-url] <sup>— Component-based template engine for modular HTML compilation</sup>
- [![Sass][Sass-logo]][Sass-url] <sup>— CSS preprocessor enforcing scalable style architectures (BEM)</sup>
- [![TypeScript][TypeScript-logo]][TypeScript-url] <sup>— Strictly typed language for structural client-side execution logic</sup>
- [![JavaScript][JavaScript-logo]][JavaScript-url] <sup>— Scripting language used for build system mechanics and task automation</sup>

</details>

<details>
<summary>⚙️ Build Automation & Orchestration (Gulp Ecosystem)</summary>

- [![Node.js][NodeJS-logo]][NodeJS-url] <sup>— Javascript runtime environment</sup>
  - [![Npm][Npm-logo]][Npm-url] <sup>— Package management and workspace dependencies</sup>
- [![Gulp 5][Gulp-logo]][Gulp-url] <sup>— Task runner for workflow orchestration and pipeline streaming</sup>
  - **Integrated Gulp Tasks (Node.js API):**
    - [![Esbuild][Esbuild-logo]][Esbuild-url] <sup>— Ultra-fast script bundling and compilation within the pipeline</sup>
    - [![PostCSS][PostCSS-logo]][PostCSS-url] <sup>— Multi-stage style post-processing, prefixing, and asset minification</sup>
    - [![Sharp][sharp-logo]][sharp-url] <sup>— High-performance image processing and AVIF/WebP generation routines</sup>
    - [![SVGO][SVGO-logo]][SVGO-url] <sup>— Automated optimization and minification for vector assets</sup>
  - **External Native Binaries (Executed via Gulp Spawn):**
    - [![FFmpeg][ffmpeg-logo]][ffmpeg-url] <sup>— Multimedia encoding engine to transcode audio/video into `.webm` using NVENC hardware acceleration</sup>
    - [![Foundry Tools CLI][FoundryToolsCLI-logo]][FoundryToolsCLI-url] <sup>— Python utility utilized for rebuilding OTF/TTF typographic assets into optimized WOFF/WOFF2 packages</sup>
- [![Browserslist][Browserslist-logo]][Browserslist-url] <sup>— Target matrix provider for environmental compatibility tooling</sup>

</details>

<details>
<summary>🛡️ Code Quality Assurance, Linting & Git Hooks</summary>

- [![EditorConfig][EditorConfig-logo]][EditorConfig-url] <sup>— Enforces consistent code formatting rules directly inside the IDE</sup>
- [![Stylelint][Stylelint-logo]][Stylelint-url] <sup>— Linter for styles (SCSS/CSS) checking CSS properties compatibility</sup>
- [![ESLint][ESLint-logo]][ESLint-url] <sup>— Static analysis framework inspecting TypeScript/JavaScript code quality</sup>
- [![Prettier][Prettier-logo]][Prettier-url] <sup>— Opinionated multi-format formatter supporting Nunjucks structures</sup>
- [![Husky][Husky-logo]][Husky-url] <sup>— Native client-side Git hooks lifecycle management</sup>
  - [![Lint-staged][LintStaged-logo]][LintStaged-url] <sup>— Isolates and filters staged files for pre-commit evaluation</sup>
  - [![Commitlint][CommitLint-logo]][CommitLint-url] <sup>— Enforces standard semantic formatting across commit history with custom `wip` extensions</sup>

</details>

<details>
<summary>🚀 Version Control & Infrastructure</summary>

- [![Git][Git-logo]][Git-url] <sup>— Distributed version control system</sup>
- [![GitHub Pages][GithubPages-logo]][GithubPages-url] <sup>— Hosting infrastructure used for automated delivery of the live staging preview</sup>

</details>

<details>
<summary>🧰 Design & Workspace Tooling</summary>

- [![Figma][Figma-logo]][Figma-url] <sup>— Interface prototyping platform, asset sourcing, and design spec extraction</sup>
- [![Visual Studio Code][VisualStudioCode-logo]][VisualStudioCode-url] <sup>— Core Integrated Development Environment (IDE)</sup>

</details>

### 📂 Project Structure <a id="project-structure"></a>

```text
Wishbone-plus-Partners/
│
├── .husky/                          # Local Git Hooks configurations
├── .vscode/                         # IDE workspace settings
│
├── dist/                            # Automatically generated distribution directory
├── docs/                            # Documentation assets
│
├── gulp/                            # Build system root
│   ├── config/                      # Environment, routing, and deployment configurations
│   │   ├── env.js
│   │   ├── ftp.js
│   │   └── path.js
│   ├── helpers/                     # Custom Node stream extensions and HTML parsing modules
│   │   ├── asset-exists.js
│   │   ├── error-handler.js
│   │   ├── html-img2picture-transformer.js
│   │   └── inline-assets.js
│   └── tasks/                       # Core Gulp workflows
│       ├── assets/                  # Media compilation streams (Fonts, Graphics, Audio, etc.)
│       │   ├── fonts/
│       │   │   └── fonts.js
│       │   ├── media/
│       │   │   ├── audio.js
│       │   │   └── videos.js
│       │   ├── pictures/
│       │   │   ├── icons.js
│       │   │   └── images.js
│       │   └── misc.js
│       ├── core/                    # Infrastructure tasks (Local proxy, file watchers, sanitization)
│       │   ├── dev/
│       │   │   ├── server.js
│       │   │   └── watch.js
│       │   ├── clean.js
│       │   └── main-tasks.js
│       ├── html/                    # HTML template compilation
│       │   └── html.js
│       ├── meta/                    # SEO configuration processing
│       │   └── meta.js
│       ├── scripts/                 # Application script packaging
│       │   ├── libs.js
│       │   └── scripts.js
│       ├── styles/                  # Stylesheet processing and Critical CSS paths
│       │   ├── critical-css.js
│       │   └── styles.js
│       └── utils/                   # Pipelines (Remote FTP syncing, project archiving, cache revving)
│           ├── ftp.js
│           ├── revision.js
│           └── zip.js
│
├── project/                         # Workspace references excluded from distribution pipelines
│   ├── preview/
│   ├── lighthouse_benchmark__desktop.png
│   └── lighthouse_benchmark__mobile.png
│
├── src/                             # Source workspace root
│   ├── assets/                      # Raw uncompiled static media (Fonts, graphics, audio layers)
│   │   ├── audio/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   ├── misc/
│   │   └── videos/
│   ├── i18n/                        # Translation schema layers
│   │   ├── en.json
│   │   ├── languages.json
│   │   └── ru.json
│   ├── libs/                        # Vendor client modules hosted locally
│   ├── meta/                        # Unprocessed global SEO mappings (favicons, robots, sitemaps)
│   ├── scss/                        # Application styles mapped to the 7-1 Architecture Pattern
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
│   ├── templates/                   # Nunjucks document layout frames
│   │   ├── utils/
│   │   │   ├── macro__hreflang_tags.njk
│   │   │   └── macro__inline_script.njk
│   │   ├── footer.njk
│   │   ├── head.njk
│   │   └── header.njk
│   ├── ts/                          # Source client script nodes
│   │   ├── modules/
│   │   └── main.ts
│   ├── index.njk
│   └── site.config.json             # Core routing configuration for Gulp's HTML compilation
│
├── tests/                           # Project test suites folder
│
├── .browserslistrc                  # Target vendor environment matrix
├── .editorconfig                    # Global code layout standards
├── .gitattributes                   # Line ending stabilization rules
├── .gitignore
├── .lintstagedrc.yml                # Pre-commit filtering actions configuration
├── .prettierignore
├── .stylelintignore
├── commitlint.config.ts             # Structural VCS ruleset mapping
├── eslint.config.ts                 # Source static analysis ruleset
├── gulpfile.js                      # Root Gulp 5 task registration and flow control orchestration
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js                # Core PostCSS pipeline layers setup
├── prettier.config.mts              # Standard formatting boundaries configuration
├── README.ENG.md
├── README.md
├── stylelint.config.ts              # Core Stylelint validation map
├── svgo.config.mjs                  # SVG rendering optimization constraints
└── tsconfig.json
```

### 🌐 Supported Browsers <a id="supported-browsers"></a>

The codebase is validated to ensure visual consistency and script execution stability across modern releases of the following web browsers:

- [![Google Chrome][GoogleChrome-logo]][GoogleChrome-url]
- [![Microsoft Edge][MicrosoftEdge-logo]][MicrosoftEdge-url]
- [![Yandex][Yandex-logo]][Yandex-url]
- [![Firefox][Firefox-logo]][Firefox-url]
- [![Opera][Opera-logo]][Opera-url]

> [!IMPORTANT]
> This information applies to version **[2.0.0](https://github.com/aLeeTheY/Wishbone-plus-Partners/releases/tag/2.0.0)**. At the time of verification, the project was rendered correctly in the latest stable versions of all [supported browsers](#supported-browsers).
>
> **Last Verification Date: May 30, 2026**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 🚀 Quick Start <a id="quick-start"></a>

_Follow the configuration scripts provided below to prepare and spin up the project in a local development environment._

### 📋 Prerequisites <a id="prerequisites"></a>

1. Set up [Node.js][NodeJS-url], [FFmpeg][FFmpeg-url], [Python][Python-url], and [FoundryTools-CLI][FoundryToolsCLI-url] inside your operating environment.

2. Fetch the codebase by extracting the repository ZIP bundle or cloning via [Git][Git-url]:

```sh
git clone https://github.com/aLeeTheY/Wishbone-plus-Partners
```

### 📥 Installation <a id="installation"></a>

1. Route into the workspace directory and trigger package initialization dependencies:

```sh
npm install
```

### ⚙️ Build & Launch <a id="build-launch"></a>

1. To compile assets and wake the workspace server, execute one of the specified command protocols matching your target environment:

<div align="center">

| Build Target  | Invocation Script                                              |
| ------------- | -------------------------------------------------------------- |
| `development` | `cross-env NODE_ENV=development gulp dev --i18n`               |
| `staging`     | `cross-env NODE_ENV=staging gulp staging --i18n`               |
| `production`  | `cross-env NODE_ENV=production gulp prod --i18n --prod-server` |

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💡 Usage <a id="usage"></a>

_You can drive Gulp compilation configurations at runtime using explicit **Command Line Interface arguments** (argv)._

To evaluate the complete manual of available configuration parameters, run:

```sh
gulp --info
```

### 🔧 Configuration <a id="configuration"></a>

The parameter configuration options are documented below:

<div align="center">

|                    Parameter Flag                    | Data Type | Default Allocation |                                         Functional Target                                          |
| :--------------------------------------------------: | :-------: | :----------------: | :------------------------------------------------------------------------------------------------: |
|                   `-v, --version`                    | `boolean` |      `false`       |                            Displays current workspace semantic version                             |
|                     `-i, --info`                     | `boolean` |      `false`       |                                    Displays CLI options manual                                     |
|                   `-V, --verbose`                    | `boolean` |      `false`       |                  Unlocks extended console logging during task streaming execution                  |
|                 `-c, --force-clean`                  | `boolean` |      `false`       |                 Triggers a hard sweep of the compiled `dist/` workspace directory                  |
|                  `--base-url, --bu`                  | `string`  |        `-`         |                  Maps target deployment domain root, e.g., `https://example.com`                   |
|             `--base-url-postfix, --bup`              | `string`  |        `-`         |        Maps trailing repository paths for subdirectory deployments, e.g., `.../my-repo/...`        |
|           `--internationalization, --i18n`           | `boolean` |      `false`       |                       Activates localized multi-lingual document compilation                       |
|                    `-l, --local`                     | `boolean` |      `false`       |      Switches paths to strict relative links, satisfying standalone execution via `file:///`       |
|    `--inline-sprite, --full-inline-sprite, --is`     | `boolean` |      `false`       | Directly embeds the SVG vector asset grid inside the document (forced automatically via `--local`) |
|       `--inline-css, --full-inline-css, --ic`        | `boolean` |      `false`       |               Directly embeds production stylesheets inside the HTML layout payload                |
|        `--inline-js, --full-inline-js, --ij`         | `boolean` |      `false`       |              Directly embeds processed client scripts inside the HTML layout payload               |
| `--production-server, --prod-server, --server, --ps` | `boolean` |      `false`       |              Launches a local server tracking the compiled production build footprint              |

</div>

Experimental Features parameters:

<div align="center">

|     Parameter Flag     | Data Type | Default Allocation |                                             Functional Target                                              |
| :--------------------: | :-------: | :----------------: | :--------------------------------------------------------------------------------------------------------: |
| `--obfuscation, --obf` | `boolean` |      `false`       | Obfuscates structural CSS class selectors across HTML, CSS, and JS. Incompatible with `--inline-*` options |

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🧠 Development Challenges <a id="development-challenges"></a>

- **Migrating Legacy Static Infrastructure to an Automated Gulp Workflow:** The original codebase (v1.0.0) was a loose collection of uncompiled static files built strictly for desktop viewports without any build-tool orchestration. Transitioning this structure into a robust Gulp 5 ecosystem required a complete architectural overhaul: manual HTML strings were modularized into Nunjucks templates, styles re-engineered into a strict BEM + `7-1 Pattern` system, and the layout rewritten from scratch into a fluid, responsive environment without the aid of mobile Figma wireframes.
- **Evaluating and Selecting npm/gulp Packages:** Many libraries inside the Gulp module graph are currently flagged as `deprecated`. Significant effort was allocated to isolating modern equivalents or engineering bespoke custom script blocks to avoid legacy packages.
- **Incremental Asset Validation Architecture:** Architecting a system capable of mapping media status flags directly against compiled revision cryptographs. Standard alternatives like `gulp-newer` failed after encountering file strings mutated by `gulp-rev`. This required engineering an independent asset checking wrapper matching original names, heavily accelerating downstream performance during local rebuilds.
- **Integrating and Adapting AI-Generated Code (FFmpeg, ftcli):** Mapping cross-platform operational control logic over host binaries (FFmpeg, ftcli) using asynchronous `spawn` workers. LLM-generated scaffold streams required close verification, path escaping corrections to handle Windows system edge-cases, and integration into the custom incremental file state tracker.
- **Resolving Conflicts Between Obfuscation and Inline Modes:** Embedding production styles inside HTML files prior to performing obfuscation routines routinely broke browser rendering pipelines, as `postcss-obfuscator` was unable to map mutations onto inline markup styles. To address this functional deficit, `--obfuscation` and `--inline-*` variables were explicitly separated as mutually exclusive flags, checked by preemptive CLI error-checking hooks.
- **Fluid Design Mathematical Calculations:** For every responsive value defined via `clamp()`, it was necessary to compute a linear function (`y = kx + b`) based on two coordinate points—the minimum (`x1, y1`) and maximum (`x2, y2`) boundary states of the property.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📈 Key Skills <a id="key-skills"></a>

- **Fluid Design Implementation:** Practical mastery over fluid rendering mechanics using `clamp`, `min`, and `max` operations combined with minimal media-query overrides to produce clean layout fluidity.
- **Internationalization (i18n):** Orchestrating robust site localization pipelines powered by Nunjucks templates rendering key/value JSON structures dynamically across multi-language domains.
- **Gulp 5 Architecture:** Structuring industrial-grade stream automation engines using task synchronization sequences (`gulp.series/parallel`), and engineering tailored streaming processors over node `through2` systems with the aid of AI.
- **Web Performance Engineering:** Implementing complete optimization mechanics, including: atomic Critical CSS injections, multi-breakpoint responsive image delivery templates (AVIF/WebP), structural lazy loading configurations, `fetch priority` budgeting, layout inlining toggles, and cache optimization routines driven by content hashing.
- **Declarative CLI Design:** Developing custom user interfaces via `yargs`, embedding preemptive validation logic to identify overlapping configuration profiles, and managing asynchronous runtime exception handling.
- **Effective AI Collaboration:** Gaining practical experience leveraging generative AI to accelerate the construction of complex Gulp workflows—from defining prompt schemas to verifying, debugging, and tailoring generated code to meet production requirements.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## 🗺️ Roadmap <a id="roadmap"></a>

### 🏁 Phase 1 – Static Layout ([v1.0.0](https://github.com/aLeeTheY/Wishbone-plus-Partners/releases/tag/1.0.0))

- [x] Figma desktop wireframe implementation
  - [x] Semantic HTML5 layout development
  - [x] Base SCSS style structures mapping (BEM)
- [x] Client UI interaction provisioning via AOS.js and Alpine.js

### 🚀 Phase 2 – Gulp Integration & Fluid Responsiveness ([v2.0.0](https://github.com/aLeeTheY/Wishbone-plus-Partners/releases/tag/2.0.0))

- [x] Establishing a modern automated build engine powered by **Gulp 5**
  - [x] Workspace code quality checks orchestration (Husky, ESLint, Stylelint, Prettier)
  - [x] Resource compression engine setup: Web fonts (WOFF2), Graphics (AVIF/WebP), Media layers (FFmpeg)
  - [x] Asset management setup: Critical CSS pathing, cache hashing (`gulp-rev`), code obfuscation, and command line control bindings (`yargs`)
  - [x] Implementation of the Nunjucks modular document generator and language localization routines (i18n)
  - [x] Authoring custom stream wrappers (state checks trackers, `<picture>` DOM injection processors, asset inline builders)
- [x] Achieving a Fluid Design using `clamp()`, `min()`, and `max()` functions
  - [x] Laptop viewport optimization
  - [x] Tablet viewport optimization
  - [x] Mobile viewport optimization
- [x] Shipping live demo structures to GitHub Pages
- [x] Constructing workspace documentation architecture and engineering `README.md`

### 🔮 Future Expansion

- [ ] Implementing testing frameworks across core TypeScript modules (Mocha/Chai or Jest)
- [ ] Scaling static routing architectures to provision complex document structures or a Nunjucks-backed blogging platform
- [ ] Integrating database endpoints, Headless architectures, or traditional Content Management Systems (WordPress).

> 💡 The full list of planned features and known issues is available in the [Issues][issues-url] section.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📄 License <a id="license"></a>

Copyright © 2025 [aLeeTheY](https://github.com/aLeeTheY) <br/> Distributed under the [MIT][license-url] License. See `LICENSE` file for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## 🤝 Contact <a id="contact"></a>

GitHub: [aLeeTheY](https://github.com/aLeeTheY) <br/> Email: [aleethey@gmail.com](mailto:aleethey@gmail.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## 💖 Acknowledgments <a id="acknowledgments"></a>

[aLeeTheY](https://github.com/aLeeTheY) expresses gratitude to the developers and communities of the following projects:

### 🏛️ Core Technologies & Ecosystem Foundations

- [Figma](https://www.figma.com/), [Visual Studio Code](https://code.visualstudio.com/) — For interface design environments and the ultimate IDE.
- [Node.js](https://nodejs.org/), [Npm](https://www.npmjs.com/), [Git](https://git-scm.com/), [GitHub](https://github.com/) — For runtime primitives, dependency management, and version control architecture.
- [Gulp](https://gulpjs.com/), [Browsersync](https://browsersync.io/) — For stream pipeline orchestration and real-time livereload functionality.
- [Nunjucks](https://mozilla.github.io/nunjucks/), [Esbuild](https://esbuild.github.io/), [Sass](https://sass-lang.com/), [PostCSS](https://postcss.org/) — For design component processing, blazing fast script compilation, and advanced style mutations.
- [Alpine.js](https://alpinejs.dev/), [AOS](https://michalsnik.github.io/aos/) — For lightweight client reactive frameworks and programmatic UI animations.
- [Chocolatey](https://chocolatey.org/) — For simplifying terminal-level package dependency management.

### ⚡ Media, Typography & Graphical Optimizers

- [FFmpeg](https://www.ffmpeg.org/) — For low-level media transcoding pipelines.
- [Sharp](https://sharp.pixelplumbing.com/), [SVGO](https://github.com/svg/svgo), [gifsicle](https://github.com/kohler/gifsicle) — For extreme raster and vector optimization curves.
- [FoundryTools-CLI](https://github.com/ftCLI/FoundryTools-CLI) — For granular automated web-font reconstruction matrices.

### 🛠️ Code Quality Frameworks, Linters & Auditing

- [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/), [Prettier](https://prettier.io/), [EditorConfig](https://editorconfig.org/) — For unified enforcement of code styles and static typing parameters.
- [Husky](https://typicode.github.io/husky/), [Lint-staged](https://github.com/lint-staged/lint-staged), [Commitlint](https://github.com/conventional-changelog/commitlint) — For rigid automation protocols executed at the pre-commit layer.
- [Browserslist](https://github.com/browserslist/browserslist), [Chrome DevTools](https://developer.chrome.com/docs/devtools), [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) — For target runtime scoping, live environment inspection, and performance logging.

### 🔌 Ecosystem Extensions & Utility Packages

<details>
<summary>📋 Show list of plugins that solved specific project tasks</summary>

- **System Dependencies & CLI Builders:** [cross-env](https://github.com/kentcdodds/cross-env), [yargs](https://yargs.js.org/), [through2](https://github.com/rvagg/through2), [htmlparser2](https://github.com/fb55/htmlparser2).
- **Critical Path CSS Processors:** [penthouse](https://github.com/pocketjoso/penthouse), [puppeteer](https://github.com/puppeteer/puppeteer).
- **Style Minimizers & PostCSS Adjusters:** [cssnano](https://cssnano.github.io/cssnano/), [PurgeCSS](https://purgecss.com/), [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env), [postcss-sort-media-queries](https://github.com/yunusga/postcss-sort-media-queries), [postcss-clamp](https://github.com/polemius/postcss-clamp), [postcss-combine-duplicated-selectors](https://github.com/ChristianMurphy/postcss-combine-duplicated-selectors), [postcss-will-change](https://github.com/postcss/postcss-will-change), [postcss-font-display](https://github.com/dkrnl/postcss-font-display), [postcss-font-variant](https://github.com/postcss/postcss-font-variant), [postcss-round-subpixels](https://github.com/himynameisdave/postcss-round-subpixels), [postcss-obfuscator](https://n4j1Br4ch1D/postcss-obfuscator), [postcss-rename](https://github.com/google/postcss-rename).
- **Cache Management, Versioning & Deployment:** [gulp-rev](https://github.com/sindresorhus/gulp-rev), [gulp-rev-rewrite](https://github.com/thomasvantuycom/gulp-rev-rewrite), [gulp-rev-delete-original](https://github.com/nib-health-funds/gulp-rev-delete-original), [vinyl-ftp](https://github.com/morris/vinyl-ftp), [gulp-zip](https://github.com/sindresorhus/gulp-zip).
- **Gulp Compiler & Linter Bridges:** [gulp-esbuild](https://github.com/ym-project/gulp-esbuild), [gulp-sass](https://github.com/dlmanning/gulp-sass), [gulp-postcss](https://github.com/postcss/gulp-postcss), [gulp-prettier](https://github.com/thomasvantuycom/gulp-prettier), [gulp-nunjucks-render](https://github.com/carlitoplatanito/gulp-nunjucks-render), [stylelint-no-unsupported-browser-features](https://github.com/RJWadley/stylelint-no-unsupported-browser-features), [prettier-plugin-jinja-template](https://github.com/davidodenwald/prettier-plugin-jinja-template).
- **HTML Modification & Pipeline Optimizers:** [gulp-web-images-css](https://github.com/GreyAdmiral/gulp-web-images-css), [gulp-svg-sprite](https://github.com/svg-sprite/gulp-svg-sprite), [gulp-html-minifier-terser](https://github.com/pioug/gulp-html-minifier-terser).
- **Auxiliary Gulp Utilities:** [gulp-if](https://github.com/robrich/gulp-if), [gulp-plumber](https://github.com/floatdrop/gulp-plumber), [gulp-rename](https://github.com/hparra/gulp-rename), [gulp-replace](https://github.com/lazd/gulp-replace).

</details>

> [!NOTE]
> Without these tools, the development of this project would have been **impossible**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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
