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

[![Русский](https://img.shields.io/badge/Русский-blue)](README.md) [![English](https://img.shields.io/badge/English-blue)](README.EN.md)

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
        <li>
          <a href="#preview">👁️ Preview</a>
          <ul>
            <li><a href="#interface-preview">🖥️📱 Interface Showcase (Desktop + Mobile)</a></li>
            <li><a href="#fluid-preview">💧 Fluid Responsiveness Showcase</a></li>
          </ul>
        </li>
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
        <li><a href="#deployment-path-config">🌐 Deployment Paths Configuration (Optional)</a></li>
        <li><a href="#build-launch">⚙️ Build & Launch</a></li>
      </ul>
    </li>
    <li>
    <a href="#usage">💡 Usage</a>
      <ul>
        <li>
        <a href="#configuration">🔧 Configuration</a>
          <ul>
            <li><a href="#examples">📖 Examples of Overriding Parameters via NPM Scripts</a></li>
            <li><a href="#npm-scripts">🏃 NPM Scripts</a></li>
          </ul>
        </li>
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

The primary objective of this project is the development of a responsive corporate landing page with a strict focus on full build automation, internationalization, and achieving maximum web performance metrics.

The project is engineered as a modular architecture driven by Gulp 5: the Nunjucks templating engine compiles HTML with native localization (i18n) support, SCSS is processed using the BEM methodology via a multi-stage PostCSS pipeline, and client-side logic is written in TypeScript, compiling into an optimized bundle. All media assets pass through dedicated optimization pipelines to minimize page load overhead, while build configurations are exposed through a comprehensive CLI interface supporting <code>dev</code>, <code>staging</code>, and <code>production</code> environments.

### 🎨 Design <a id="design"></a>

The visual layer is based on the [**Wishbone + Partners**](https://verstaem.online/projects/wishbone/) design mockup provided by the [**verstaem.online**](https://verstaem.online/) platform. <br /> A key challenge was reconstructing the user interface using Pixel Perfect implementation and Fluid Design principles, ensuring seamless adaptation across various device resolutions while maintaining the absolute integrity of the underlying design system.

### 👁️ Preview <a id="preview"></a>

Below is an **interactive demonstration** of the project (_click on either image to visit the live demo_):

<div align="center">

#### 🖥️📱 Interface Showcase (Desktop + Mobile) <a id="interface-preview"></a>

[![Interface Showcase][interface-preview-gif]](https://aleethey.github.io/Wishbone-plus-Partners/)

<br />

#### 💧 Fluid Responsiveness Showcase <a id="fluid-preview"></a>

[![Fluid Design Showcase][fluid-preview-gif]](https://aleethey.github.io/Wishbone-plus-Partners/)

</div>

### ✨ Key Features <a id="key-features"></a>

_For convenience, all features are categorized below._

<details>
  <summary>📐 Layout, Architecture & UI/UX</summary>

- **Static & Modular Architecture:** Clean static frontend design entirely free of CMS overhead or SSR bottlenecks. HTML code is decomposed into isolated, highly reusable component layers using the **Nunjucks** templating engine.
- **Internationalization (i18n):** Full native multi-language routing support. The pipeline dynamically cross-compiles pages using localized JSON dictionaries (<code>ru.json</code>, <code>en.json</code>), yielding separate language routes with distinct entry points. Triggered via the <code>&#8209;I, &#8209;&#8209;i18n</code> CLI flag.
- **Fluid & Responsive Design:** Fully fluid responsiveness across Desktop, Tablet, and Mobile viewport bounds. Engineered using modern CSS layout equations (<code>clamp()</code>, <code>min()</code>, and <code>max()</code>) bound to cascading media query rulesets.
- **Bi-directional Layout Pipeline (--mobile-first):** A unique <code>&#8209;M, &#8209;&#8209;mobile&#8209;first</code> flag allows switching the core build strategy on the fly. It reconfigures PostCSS to sort media queries using <code>min&#8209;width</code> rules and forces the custom <code><picture></code> transformer to invert its tag generation logic into Mobile-First mode instead of the default Desktop-First (<code>max&#8209;width</code>) matrix.
- **Pixel Perfect Fidelity:** High-precision translation of Figma mockups into functional code with strict, zero-tolerance adherence to layout paddings, margins, and the underlying design system.
- **BEM Methodology:** Standardized class naming conventions based on the BEM methodology, guaranteeing complete style isolation and long-term codebase maintainability.
- **Advanced UI/UX & Micro-interactions:** Seamless integration of smooth scroll animations (AOS.js) paired with declarative client-side state management (Alpine.js). Enhanced with hardware-accelerated custom CSS transitions to ensure a highly responsive <code>hover</code> feedback matrix for all interactive nodes.

</details>

<details>
  <summary>⚙️ Automation & Build Management (CLI & Workflow)</summary>

- **Gulp 5 Core & Node Environments:** Build automation is driven by Gulp 5 core APIs. Execution scopes are decoupled via <code>cross&#8209;env</code>, featuring a dedicated <code>staging</code> configuration activated via the <code>&#8209;s, &#8209;&#8209;staging</code> CLI flag embedded within production build rulesets.
- **Smart Path Aliasing:** Universal, cross-pipeline path aliasing support (<code>@scss</code>, <code>@ts</code>, <code>@images</code>, <code>@audio</code>, <code>@libs</code>, etc.) with integrated VS Code autocomplete definition mapping. Gulp tasks dynamically resolve and parse these aliases across all source files during asset processing.
- **Offline Autonomous Mode:** The <code>&#8209;l, &#8209;&#8209;local</code> flag forces all asset references into strict relative pathing and automatically inlines the SVG sprite, enabling the project to run flawlessly directly from a local drive via the <code>file:///</code> protocol.
- **Advanced CLI Management (Yargs):** Fine-grained, on-the-fly build orchestration: verbose logging toggle (<code>&#8209;V, &#8209;&#8209;verbose</code>), deployment target domain override (<code>&#8209;d, &#8209;&#8209;domain</code>), output directory naming (<code>&#8209;F, &#8209;&#8209;site&#8209;folder</code>), and production preview server execution (<code>&#8209;P, &#8209;&#8209;prod&#8209;server</code>). A comprehensive interactive help menu is accessible via <code>gulp &#8209;i</code>.
- **Strict CLI Conflict Validation:** Automated, pre-flight build termination with explicit error printing when incompatible CLI flags are passed together. For instance, the engine explicitly blocks running experimental obfuscation (<code>&#8209;o, &#8209;&#8209;obfuscation</code>) in tandem with asset inlining parameters (<code>&#8209;&#8209;inline&#8209;css</code>, <code>&#8209;&#8209;inline&#8209;js</code>, <code>&#8209;&#8209;inline&#8209;sprite</code>).
- **Smart Cache-Safe Clean:** The default directory cleanup task (when the <code>&#8209;c, &#8209;&#8209;force&#8209;clean</code> flag is omitted) preserves heavy media distributions (videos, audio, fonts, images) inside the <code>dist/</code> workspace. Passing the <code>&#8209;c</code> flag forces a destructive, total purge of the target build directory.
- **Fast Dev Workflow:** Heavy computing optimizations are bypassed entirely during local development, while local server synchronization (**BrowserSync**) instantly mirrors hot-reloaded source modifications thanks to a highly optimized <code>gulp&#8209;watch</code> tracking grid. Secure HTTPS tunneling is natively supported via the <code>&#8209;H, &#8209;&#8209;secure</code> flag.
- **Deployment & Archiving:** Features integrated automated tasks for streaming the distribution bundle to remote production hosts over FTP (<code>vinyl&#8209;ftp</code>) and packaging the compiled project into an optimized ZIP archive. The <code>&#8209;g, &#8209;&#8209;gh&#8209;pages</code> flag automatically recalibrates asset routing configurations for GitHub Pages environments.

</details>

<details>
  <summary>🧩 Custom Gulp Transformers & Smart Helpers</summary>

- **Incremental Asset Validation (<code>asset&#8209;exists.js</code>):** Custom helper scripts track media asset validity states using persistent revision hashes, completely preventing heavy background routines (FFmpeg processing, Sharp execution, font compilation formats) from redundant execution loops if source targets remain unchanged.
- **Automated <code><picture></code> Transformer (<code>html&#8209;img2picture&#8209;transformer.js</code>):** A custom HTML parser built on top of <code>htmlparser2</code> and integrated directly into the <code>html.js</code> execution pipeline. Operating as a "DOM topology architect", it reads raw source assets via <code>sharp</code> to analyze original bounds, then dynamically rewires the tree to wrap standard <code><img></code> nodes inside structured <code><picture></code> blocks with a precise media query map. The task is cleanly isolated from heavy graphics generation to eliminate race conditions, while natively solving Core Web Vitals targets: blocks CLS by injecting strict <code>width</code>/<code>height</code> dimensions and automates LCP heuristics (bypassing <code>lazy loading</code> for <code>fetchpriority="high"</code> elements while forcing <code>decoding="async"</code>).
- **Flexible Inline Helper (<code>inline&#8209;assets.js</code>):** HTML attribute-driven injection of final CSS, JS, and SVG sprites. Eliminates redundant HTTP roundtrips on the client side and natively supports the offline autonomous mode (<code>&#8209;l, &#8209;&#8209;local</code>).
- **Advanced Inline Bundling:** Dedicated <code>&#8209;&#8209;inline&#8209;css</code> and <code>&#8209;&#8209;inline&#8209;js</code> flags embed the final compiled production style and script bundles directly into the HTML document node, completely cutting out external network overhead on the client end.
- **Experimental Code Obfuscation:** The <code>&#8209;o, &#8209;&#8209;obfuscation</code> flag initiates the rewriting of CSS classes into randomized short cryptographic hashes across all HTML, CSS, and JS compilation outputs, maximizing asset weight reduction and shielding the layout structure from direct copying.
- **Native CLI Binary Integration:** The compilation pipeline directly orchestrates external native binaries (<code>ffmpeg</code>, Python-based <code>ftcli</code>) via asynchronous child processes using <code>spawn</code> routines with pre-flight OS environment availability checking. Features atomic file writing and robust protection against blocking the Node.js Event Loop.

</details>

<details>
  <summary>⚡ Optimization & Performance</summary>

- **Google Lighthouse Metrics:** Consistent, reproducible **100/100** score in the **Performance** audit category and **90+** across all remaining core metrics (Accessibility, Best Practices, SEO).
- **Blazing Fast Script Compilation (ESBuild):** Ultra-fast TypeScript/JavaScript transpilation down to standard ES2018 targets using the <code>esbuild</code> compiler engine, incorporating deep minification schemes and highly efficient Tree Shaking algorithms.
- **Critical CSS Extraction (Penthouse):** Automated extraction and inlining of above-the-fold critical style blocks for instantaneous initial paint rendering (automatically bypassed if full stylesheet inlining is forced via <code>&#8209;&#8209;inline&#8209;css</code>).
- **Responsive Images Permutations Matrix (<code>images.js</code>):** A heavy-duty computing pipeline powered by pure <code>sharp</code> to generate a responsive graphics grid. It extracts source image metadata to construct a complete permutation matrix: <code>[Target Breakpoints × 3 Formats (Original, WebP, AVIF)]</code>. The script prevents image upscaling (skipping breakpoint targets wider than the physical resolution of the source asset) and dynamically adapts to execution environments: prioritizing compilation velocity in <code>dev</code> modes (minimal compression <code>effort</code>, 100% quality) while unlocking extreme compression profiles during production (<code>mozjpeg</code> encoding pipelines, structured PNG palettization, and maxed-out compression <code>effort</code> passes). Fully integrated with the <code>asset&#8209;exists.js</code> helper for incremental skip execution of already compiled asset batches.
- **SVG Optimization (SVGO & Sprites):** Vector iconography assets are automatically stripped of technical metadata and editor clutter via SVGO, then consolidated into a single unified <code>sprite.svg</code> map. Explicit DOM embedding is managed via the <code>&#8209;&#8209;inline&#8209;sprite</code> flag (forced automatically when running under <code>&#8209;l, &#8209;&#8209;local</code>).
- **Media Optimization (FFmpeg & WOFF2):** Typography packages are heavily compressed into highly efficient WOFF/WOFF2 web distribution formats using Python-based FoundryTools CLI wrappers. Audio and video assets are converted to modern <code>.webm</code> media containers via fine-tuned FFmpeg encoding presets.
- **Asset Revisioning (Cache Busting):** Manifest-driven filename hashing (<code>gulp&#8209;rev</code>) is automatically applied during <code>staging</code> (via the <code>&#8209;s</code> flag) and production builds to guarantee instantaneous cache busting on the user client side upon deployment.
- **SEO & Production Metadata:** Automated injection of all critical production meta-assets (<code>favicon.ico</code>, <code>robots.txt</code>, <code>sitemap.xml</code>) into the root distribution output directory.

</details>

<details>
  <summary>🛡️ Linting, Formatting & Code Quality</summary>

- **Cross-browser Compatibility (.browserslistrc):** PostCSS <code>autoprefixer</code> driven by <code>postcss&#8209;preset&#8209;env</code> targets a global active browser market share coverage of >95% for production distributions. In <code>dev</code> mode, compilation speed is optimized by focusing strictly on the latest software versions.
- **Advanced PostCSS Pipeline:** Multi-stage stylesheet transformation utilizing <code>postcss&#8209;preset&#8209;env</code>, CSS variable name minification, subpixel value rounding, fallbacks for <code>font&#8209;variant</code> and <code>will&#8209;change</code>, automated <code>font&#8209;display: swap</code> injection, dead-code elimination (<code>purgecss</code>), media query grouping, and final compression via <code>cssnano</code>.
- **Strict Linting Standards (ESLint):** Modern Flat ESLint configuration powered by <code>typescript&#8209;eslint</code> and <code>@stylistic</code>. Enforces rigorous type checking and proactive alerts for potentially hazardous code patterns.
- **Stylelint Architecture:** Robust SCSS syntax control integrated with the <code>stylelint&#8209;no&#8209;unsupported&#8209;browser&#8209;features</code> plugin, automatically cross-referencing utilized CSS properties against the project's target <code>.browserslistrc</code> specification.
- **Automated Formatting (Prettier):** On-the-fly automated code formatting with native Nunjucks syntax support (<code>prettier&#8209;plugin&#8209;jinja&#8209;template</code>). Code indentation rules are synchronized with the <code>.editorconfig</code> specification.
- **Git Hooks Automation (Husky & Commitlint):** A <code>lint&#8209;staged</code> workflow isolates and validates modified files through active linters and formatters prior to committing. <code>commitlint</code> strictly monitors adherence to the Conventional Commits specification (including explicit support for the <code>wip</code> commit type).

</details>

<details>
  <summary>📋 Scalability & Template Versatility</summary>

- **Production-Ready Boilerplate:** The project maintains a highly strict modular architecture, rendering it an ideal, high-performance starter template for deploying equivalent static websites of arbitrary scale and complexity.
- **Pure Static Output & Hosting Independence:** The pipeline generates clean, production-ready static assets that do not require a Node.js runtime on the server. The final output can be hosted for free on GitHub Pages, uploaded to any cheap shared hosting, or run locally directly from a folder.
- **Decoupled Architecture:** Core compiler engineering is completely decoupled from content and assets—centralized configuration files allow rapid adjustments to asset pipelines without modifying the underlying Gulp core engine.

</details>

#### ⚡ Google Lighthouse Benchmark <a id="google-lighthouse-benchmark"></a>

As confirmation of the project's optimization, below are the benchmark metrics obtained from **Google Lighthouse** evaluations for both desktop and mobile layouts:

<div align="center">

|                        🖥️ Desktop Version                         |                        📱 Mobile Version                        |
| :---------------------------------------------------------------: | :-------------------------------------------------------------: |
| ![Lighthouse Desktop](project/lighthouse_benchmark__desktop.avif) | ![Lighthouse Mobile](project/lighthouse_benchmark__mobile.avif) |

</div>

### 🛠️ Built With <a id="built-with"></a>

_For convenience, all technologies are categorized below._

<details>
<summary>🌐 Languages, Preprocessors & Templating</summary>

- [![HTML5][HTML-logo]][HTML-url] <sup>— semantic markup and page structure</sup>
- [![Nunjucks][Nunjucks-logo]][Nunjucks-url] <sup>— component-based template engine for modular HTML compilation</sup>
- [![Sass][Sass-logo]][Sass-url] <sup>— CSS preprocessor for scalable style architecture (BEM)</sup>
- [![TypeScript][TypeScript-logo]][TypeScript-url] <sup>— strongly typed language for client-side logic development</sup>
- [![JavaScript][JavaScript-logo]][JavaScript-url] <sup>— configuration scripting and build automation tasks</sup>

</details>

<details>
<summary>⚙️ Environment & Build Automation (Gulp Ecosystem)</summary>

- [![Node.js][NodeJS-logo]][NodeJS-url] <sup>— runtime environment</sup>
  - [![Npm][Npm-logo]][Npm-url] <sup>— package manager and dependency management</sup>
- [![Gulp 5][Gulp-logo]][Gulp-url] <sup>— task runner for process automation and orchestration</sup>
  - **Integrated Gulp Tasks (Node.js API):**
    - [![Esbuild][Esbuild-logo]][Esbuild-url] <sup>— ultra-fast TS/JS bundling and compilation within the pipeline</sup>
    - [![PostCSS][PostCSS-logo]][PostCSS-url] <sup>— multi-stage post-processing, autoprefixing, and style optimization</sup>
    - [![Sharp][sharp-logo]][sharp-url] <sup>— automated raster image processing and AVIF/WebP generation during the build</sup>
    - [![SVGO][SVGO-logo]][SVGO-url] <sup>— automated SVG icon optimization and minification</sup>
  - **External CLI Tools (Orchestrated via Gulp Spawn):**
    - [![FFmpeg][ffmpeg-logo]][ffmpeg-url] <sup>— audio and video asset conversion to <code>.webm</code> with NVENC GPU acceleration support</sup>
    - [![Foundry Tools CLI][FoundryToolsCLI-logo]][FoundryToolsCLI-url] <sup>— Python utility for converting client OTF/TTF fonts to WOFF and WOFF2 formats</sup>
- [![Browserslist][Browserslist-logo]][Browserslist-url] <sup>— target browser matrix configuration management</sup>

</details>

<details>
<summary>🛡️ Code Quality & Git Hooks</summary>

- [![EditorConfig][EditorConfig-logo]][EditorConfig-url] <sup>— cross-IDE basic formatting rule synchronization</sup>
- [![Stylelint][Stylelint-logo]][Stylelint-url] <sup>— style linting (SCSS/CSS) with strict browser property compatibility checks</sup>
- [![ESLint][ESLint-logo]][ESLint-url] <sup>— deep static analysis and linting for TypeScript/JavaScript code</sup>
- [![Prettier][Prettier-logo]][Prettier-url] <sup>— automated multi-format code formatting (including native Nunjucks templates)</sup>
- [![Husky][Husky-logo]][Husky-url] <sup>— client-side automated Git hooks management</sup>
  - [![Lint-staged][LintStaged-logo]][LintStaged-url] <sup>— isolated linting and formatting for staged files (<code>pre&#8209;commit</code>)</sup>
  - [![Commitlint][CommitLint-logo]][CommitLint-url] <sup>— strict commit message validation matching Conventional Commits (with custom <code>wip</code> & <code>deploy</code> types)</sup>

</details>

<details>
<summary>🚀 Version Control & Infrastructure</summary>

- [![Git][Git-logo]][Git-url] <sup>— distributed version control system</sup>
- [![GitHub Pages][GithubPages-logo]][GithubPages-url] <sup>— static hosting for automated demonstration deployment</sup>

</details>

<details>
<summary>🧰 Software Environment & Design</summary>

- [![Figma][Figma-logo]][Figma-url] <sup>— design mockup management, asset export, and design tokens</sup>
- [![Visual Studio Code][VisualStudioCode-logo]][VisualStudioCode-url] <sup>— primary integrated development environment (IDE)</sup>

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
├── gulp/                            # Gulp build system root folder
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
├── .editorconfig-checker.json
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
> **Last Verification Date: June 2, 2026**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 🚀 Quick Start <a id="quick-start"></a>

_Follow the instructions below to build and run the project on your local server._

### 📋 Prerequisites <a id="prerequisites"></a>

1. Install [Node.js][NodeJS-url], [FFmpeg][FFmpeg-url], [Python][Python-url], and [FoundryTools-CLI][FoundryToolsCLI-url].

2. Download this repository as a ZIP archive or clone it using [Git][Git-url]:

```sh
git clone https://github.com/aLeeTheY/Wishbone-plus-Partners
```

### 📥 Installation <a id="installation"></a>

3. Navigate to the project directory and install all required dependencies:

```sh
npm install
```

### 🌐 Deployment Paths Configuration (Optional) <a id="deployment-path-config"></a>

Before running the build, you can customize base domains and paths for different environments in the <code>src/site.config.json</code> configuration file:

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

You can customize these parameters to suit your needs. The builder automatically maps the correct values: the base fields (<code>domain</code> and <code>siteFolder</code>) are used for the <code>dev</code>, <code>prod &#8209;&#8209;staging</code> and <code>prod &#8209;&#8209;prod&#8209;server</code> scenarios, while the suffixed keys correspond to the <code>prod</code> and <code>prod &#8209;&#8209;gh&#8209;pages</code> scenarios respectively.

> [!TIP]
> **CLI Alternative**
>
> If you need to override the configuration on the fly without modifying the file, you can use the following command-line flags:
>
> - <code>&#8209;&#8209;domain</code> (<code>&#8209;d</code>) — to override the target URL
> - <code>&#8209;&#8209;site&#8209;folder</code> (<code>&#8209;F</code>) — to override the subdirectory path

> [!NOTE]
> **Smart Normalization (Error Protection)**
>
> The builder features automatic slash handling. You can specify them in any format (at the end, at the beginning, or omit them entirely):
>
> - <code>https://site.com</code> or <code>https://site.com/</code>
> - <code>/www/</code> or <code>www</code>
>
> This Gulp build automatically normalizes lines, preventing broken paths to assets.

### ⚙️ Build & Launch <a id="build-launch"></a>

4. To build and launch the project, execute one of the following commands (_depending on your preferred build mode_):

<div align="center">

|        Build Mode        |                                               Direct Call (CLI)                                               |      Alternative (NPM)       |
| :----------------------: | :-----------------------------------------------------------------------------------------------------------: | :--------------------------: |
| <code>development</code> |                 <code>cross&#8209;env NODE_ENV=development gulp dev &#8209;&#8209;i18n</code>                 |   <code>npm run dev</code>   |
|   <code>staging</code>   |      <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;staging &#8209;&#8209;i18n</code>      | <code>npm run staging</code> |
| <code>production</code>  | <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;prod&#8209;server</code> |  <code>npm run prod</code>   |

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💡 Usage <a id="usage"></a>

_You can manage the Gulp build configuration using **command-line arguments** (argv)._

To get the full list of available options, type:

```sh
gulp --info
```

### 🔧 Configuration <a id="configuration"></a>

The complete list of options is duplicated below for reference:

<div align="center">

|                                                                       Option                                                                       |         Type         |           Default Value            |                                                                                                                   Description                                                                                                                   |
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------: | :--------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                  <code>&#8209;W</code><br /><code>&#8209;&#8209;workspace&#8209;version</code><br /><code>&#8209;&#8209;wv</code>                  | <code>boolean</code> |         <code>false</code>         |                                                                                                   Displays current workspace semantic version                                                                                                   |
|                                             <code>&#8209;i</code><br /><code>&#8209;&#8209;info</code>                                             | <code>boolean</code> |         <code>false</code>         |                                                                                                           Displays CLI options manual                                                                                                           |
|                                           <code>&#8209;V</code><br /><code>&#8209;&#8209;verbose</code>                                            | <code>boolean</code> |         <code>false</code>         |                                                                                        Unlocks extended console logging during task streaming execution                                                                                         |
|                                           <code>&#8209;s</code><br /><code>&#8209;&#8209;staging</code>                                            | <code>boolean</code> |         <code>false</code>         |                                                                        Enables <code>staging</code> environment configurations under <code>production</code> build rules                                                                        |
|                                      <code>&#8209;c</code><br /><code>&#8209;&#8209;force&#8209;clean</code>                                       | <code>boolean</code> |         <code>false</code>         |                                                                                  Triggers a hard sweep of the compiled <code>dist/</code> workspace directory                                                                                   |
|                                            <code>&#8209;l</code><br /><code>&#8209;&#8209;local</code>                                             | <code>boolean</code> |         <code>false</code>         |                                                                       Switches paths to strict relative links, satisfying standalone execution via <code>file:///</code>                                                                        |
|                  <code>&#8209;I</code><br /><code>&#8209;&#8209;internationalization</code><br /><code>&#8209;&#8209;i18n</code>                   | <code>boolean</code> |         <code>false</code>         |                                                                                             Activates localized multi-lingual document compilation                                                                                              |
|                                 <code>&#8209;&#8209;inline&#8209;sprite</code><br /><code>&#8209;&#8209;is</code>                                  | <code>boolean</code> |         <code>false</code>         |                                                            Directly embeds the SVG vector asset grid inside the document (forced automatically via <code>&#8209;&#8209;local</code>)                                                            |
|                                   <code>&#8209;&#8209;inline&#8209;css</code><br /><code>&#8209;&#8209;ic</code>                                   | <code>boolean</code> |         <code>false</code>         |                                                                                      Directly embeds production stylesheets inside the HTML layout payload                                                                                      |
|                                   <code>&#8209;&#8209;inline&#8209;js</code><br /><code>&#8209;&#8209;ij</code>                                    | <code>boolean</code> |         <code>false</code>         |                                                                                     Directly embeds processed client scripts inside the HTML layout payload                                                                                     |
|                    <code>&#8209;M</code><br /><code>&#8209;&#8209;mobile&#8209;first</code><br /><code>&#8209;&#8209;mf</code>                     | <code>boolean</code> |         <code>false</code>         | Toggles the build layout pipeline. Sets PostCSS media query sorting to <code>mobile&#8209;first</code> and configures the HTML picture transformer to generate <code>min&#8209;width</code> source tags instead of <code>max&#8209;width</code> |
|  <code>&#8209;d</code><br /><code>&#8209;&#8209;domain</code><br /><code>&#8209;&#8209;site&#8209;url</code><br /><code>&#8209;&#8209;url</code>   | <code>string</code>  | <code>http://localhost:3000</code> |                                                                                   Maps target deployment domain root, e.g., <code>https://example.com</code>                                                                                    |
| <code>&#8209;F</code><br /><code>&#8209;&#8209;site&#8209;folder</code><br /><code>&#8209;&#8209;folder</code><br /><code>&#8209;&#8209;sf</code>  | <code>string</code>  |           <code>/</code>           |                                                              Folder name on the hosting server or GitHub repository name (e.g., <code>my&#8209;repo</code>, <code>www</code>, ...)                                                              |
| <code>&#8209;P</code><br /><code>&#8209;&#8209;prod&#8209;server</code><br /><code>&#8209;&#8209;server</code><br /><code>&#8209;&#8209;ps</code>  | <code>boolean</code> |         <code>false</code>         |                                                                                    Launches a local server tracking the compiled production build footprint                                                                                     |
| <code>&#8209;H</code><br /><code>&#8209;&#8209;secure</code><br /><code>&#8209;&#8209;use&#8209;https</code><br /><code>&#8209;&#8209;https</code> | <code>boolean</code> |         <code>false</code>         |                                                                               Forces HTTPS protocol execution for both build paths and local development servers                                                                                |
|    <code>&#8209;g</code><br /><code>&#8209;&#8209;gh&#8209;pages</code><br /><code>&#8209;&#8209;demo</code><br /><code>&#8209;&#8209;gh</code>    | <code>boolean</code> |         <code>false</code>         |                                                               Enables GitHub Pages build configuration (uses GitHub URLs, see <code>site.config.json</code> in <code>src/</code>)                                                               |

</div>

Experimental Features parameters:

<div align="center">

|                                   Option                                   |         Type         |   Default Value    |                                                               Description                                                                |
| :------------------------------------------------------------------------: | :------------------: | :----------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
| <code>&#8209;&#8209;obfuscation</code><br /><code>&#8209;&#8209;obf</code> | <code>boolean</code> | <code>false</code> | Obfuscates structural CSS class selectors across HTML, CSS, and JS. Incompatible with <code>&#8209;&#8209;inline&#8209;\*</code> options |

</div>

#### 📖 Examples of Overriding Parameters via NPM Scripts <a id="examples"></a>

To pass CLI flags without calling Gulp directly, use the <code>&#8209;&#8209;</code> separator after the npm command:

```sh
# Example of production build with custom domain and destination folder
npm run prod -- --domain https://my-custom-domain.com --site-folder /my-app/
```

#### 🏃 NPM Scripts <a id="npm-scripts"></a>

_For convenience, the primary npm scripts available in the project are listed below._

<div align="center">

|          Script (NPM)          |                                                            Complete CLI Command                                                            |                                     Description                                     |
| :----------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
|      <code>prepare</code>      |                                                             <code>husky</code>                                                             |           Automatically sets up Git hooks after <code>npm install</code>            |
|       <code>clean</code>       |                                          <code>gulp clean &#8209;&#8209;force&#8209;clean</code>                                           |              Full cleanup of the compiled <code>dist/</code> directory              |
|        <code>dev</code>        |                                 <code>cross&#8209;env NODE_ENV=development gulp &#8209;&#8209;i18n</code>                                  |                 Dev server with hot reload and multilingual support                 |
|      <code>staging</code>      |                    <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;staging &#8209;&#8209;i18n</code>                     |                    Production build with debugging flags enabled                    |
|       <code>prod</code>        |               <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;prod&#8209;server</code>                |                    Production build with a local preview server                     |
|       <code>start</code>       |                                                          <code>npm run dev</code>                                                          |                         Alias for <code>npm run dev</code>                          |
|       <code>build</code>       |               <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;force&#8209;clean</code>                |                Full production build with <code>dist/</code> cleanup                |
|       <code>local</code>       |     <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;local &#8209;&#8209;force&#8209;clean</code>      | Production build with relative paths for standalone <code>file:///</code> execution |
|      <code>secure</code>       |     <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;https &#8209;&#8209;force&#8209;clean</code>      |                  Production build forcing HTTPS protocol execution                  |
|  <code>gh&#8209;pages</code>   | <code>cross&#8209;env NODE_ENV=production gulp prod &#8209;&#8209;i18n &#8209;&#8209;gh&#8209;pages &#8209;&#8209;force&#8209;clean</code> |               Production build configured for GitHub Pages deployment               |
|      <code>archive</code>      |                                                   <code>npm run build && gulp zip</code>                                                   |                   Build and package <code>dist/</code> into a ZIP                   |
|      <code>lint:ts</code>      |                                          <code>eslint . &#8209;&#8209;max&#8209;warnings=0</code>                                          |                         Lint TypeScript/JavaScript codebase                         |
|    <code>lint:ts:fix</code>    |                                 <code>eslint . &#8209;&#8209;max&#8209;warnings=0 &#8209;&#8209;fix</code>                                 |                        Auto-fix linter errors in TS/JS files                        |
|     <code>lint:scss</code>     |                                  <code>stylelint \"\*_/_.scss\" &#8209;&#8209;max&#8209;warnings=0</code>                                  |                                Lint SCSS stylesheets                                |
|   <code>lint:scss:fix</code>   |                         <code>stylelint \"\*_/_.scss\" &#8209;&#8209;max&#8209;warnings=0 &#8209;&#8209;fix</code>                         |                        Auto-fix linter errors in SCSS files                         |
|       <code>lint</code>        |                               <code>npm&#8209;run&#8209;all &#8209;&#8209;parallel lint:ts lint:scss</code>                                |                         Parallel linting for TS/JS and SCSS                         |
|     <code>lint:fix</code>      |                           <code>npm&#8209;run&#8209;all &#8209;&#8209;parallel lint:ts:fix lint:scss:fix</code>                            |                        Parallel auto-fix for TS/JS and SCSS                         |
|      <code>format</code>       |                                                <code>prettier . &#8209;&#8209;write</code>                                                 |                    Format all files according to Prettier rules                     |
| <code>test:editorconfig</code> |                                                  <code>editorconfig&#8209;checker</code>                                                   |             Verify compliance with <code>.editorconfig</code> settings              |

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🧠 Development Challenges <a id="development-challenges"></a>

- **Migrating Legacy Static Infrastructure to an Automated Gulp Workflow:** The original codebase (v1.0.0) was a loose collection of uncompiled static files built strictly for desktop viewports without any build-tool orchestration. Transitioning this structure into a robust Gulp 5 ecosystem required a complete architectural overhaul: manual HTML strings were modularized into Nunjucks templates, styles re-engineered into a strict BEM + <code>7&#8209;1 Pattern</code> system, and the layout rewritten from scratch into a fluid, responsive environment without the aid of mobile Figma wireframes.
- **Evaluating and Selecting npm/gulp Packages:** Many libraries inside the Gulp module graph are currently flagged as <code>deprecated</code>. Significant effort was allocated to isolating modern equivalents or engineering bespoke custom script blocks to maintain build security and stability.
- **Incremental Asset Validation Architecture:** Implementing a pipeline tracking media asset state against revision hashes. Standard plugins like <code>gulp&#8209;newer</code> proved ineffective post-<code>gulp&#8209;rev</code> execution. To overcome this, a custom approach was designed to compare files by their base name, effectively eliminating redundant rebuilds for revision-hashed assets.
- **Integrating and Adapting AI-Generated Code (FFmpeg, ftcli):** Mapping cross-platform operational control logic over host binaries (FFmpeg, ftcli) using asynchronous <code>spawn</code> workers. LLM-generated scaffold streams required close verification, path escaping corrections to handle Windows system edge-cases, and integration into the custom incremental file state tracker.
- **Resolving Conflicts Between Obfuscation and Inline Modes:** Embedding production styles inside HTML files prior to performing obfuscation routines routinely broke browser rendering pipelines, as <code>postcss&#8209;obfuscator</code> was unable to map mutations onto inline markup styles. To address this functional deficit, <code>&#8209;&#8209;obfuscation</code> and <code>&#8209;&#8209;inline&#8209;\*</code> parameters were explicitly separated as mutually exclusive flags, validated by preemptive CLI error-checking hooks.
- **Mathematical Calculations for Fluid Design:** For every responsive value defined via <code>clamp()</code>, it was necessary to compute a linear function (<code>y = kx + b</code>) based on two coordinate points—the minimum (<code>x_1, y_1</code>) and maximum (<code>x_2, y_2</code>) boundary states of the property to ensure flawless scaling between breakpoints.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📈 Key Skills <a id="key-skills"></a>

- **Fluid Design Implementation:** Practical mastery over fluid rendering mechanics using <code>clamp()</code>, <code>min()</code>, and <code>max()</code> operations combined with minimal media-query overrides to produce clean layout fluidity.
- **Internationalization (i18n):** Orchestrating robust site localization pipelines powered by Nunjucks templates rendering key/value JSON structures dynamically across multi-language domains.
- **Gulp 5 Architecture:** Structuring industrial-grade stream automation engines using task synchronization sequences (<code>gulp.series</code>/<code>gulp.parallel</code>), and engineering tailored streaming processors over Node.js <code>through2</code> systems with the aid of AI.
- **Web Performance Engineering:** Implementing complete optimization mechanics, including atomic Critical CSS injections, multi-breakpoint responsive image delivery templates (AVIF/WebP), structural lazy loading configurations, <code>fetch priority</code> budgeting, layout inlining toggles, and cache optimization routines driven by content hashing.
- **Declarative CLI Design:** Developing custom user interfaces via <code>yargs</code>, embedding preemptive validation logic to identify overlapping configuration profiles, and managing asynchronous runtime exception handling.
- **Effective AI Collaboration:** Gaining practical experience leveraging generative AI to accelerate the construction of complex Gulp workflows—from defining prompt schemas to verifying, debugging, and tailoring generated code to meet production requirements.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## 🗺️ Roadmap <a id="roadmap"></a>

### 🏁 Phase 1 – Static Layout ([v1.0.0](https://github.com/aLeeTheY/Wishbone-plus-Partners/releases/tag/1.0.0))

- [x] Implementation of the Figma desktop layout.
  - [x] Development of a semantic HTML5 structure.
  - [x] Building base style architecture using SCSS and BEM methodology.
- [x] Integration of dynamic UI components and animations powered by AOS.js and Alpine.js.

### 🚀 Phase 2 – Gulp Integration & Fluid Responsiveness ([v2.0.0](https://github.com/aLeeTheY/Wishbone-plus-Partners/releases/tag/2.0.0))

- [x] Establishing a modern automated build engine powered by **Gulp 5**.
  - [x] Automating pre-commit staged file audits and commit message linting (Husky, lint-staged, commitlint).
  - [x] Workspace code quality checks orchestration (Stylelint, ESLint, Prettier).
  - [x] Binding Stylelint with [Browserslist][Browserslist-url] for real-time target browser compatibility checks.
  - [x] Implementation of the Nunjucks modular document generator and language localization routines (i18n).
  - [x] Static asset optimization: Web fonts (WOFF2), Graphics (AVIF/WebP/SVG Sprites), and Media layers (FFmpeg).
  - [x] Setting up asset production pipelines: Minification, PurgeCSS, Critical CSS pathing, cache hashing (<code>gulp&#8209;rev</code>), and code obfuscation.
  - [x] Authoring custom stream wrappers (asset inline processors, <code><picture></code> DOM transformers).
  - [x] Mapping command-line build controls and flags execution via <code>yargs</code>.
- [x] Achieving a Fluid Design using <code>clamp()</code>, <code>min()</code>, and <code>max()</code> functions.
  - [x] Viewport layout optimization across Laptop, Tablet, and Mobile breakpoints.
  - [x] Localization-specific UI testing (fixing layout and rendering bugs for the Russian version).
- [x] Shipping live demo structures to GitHub Pages.
- [x] Constructing workspace documentation architecture and engineering <code>README.md</code>.

### 🔮 Future Plans

- [ ] **Backend Template Integration (Django/Jinja2):** Develop a compilation pipeline that allows decoupled frontend development while outputting templates fully compatible with the [Django][Django-url] architecture (Jinja2/Nunjucks), automating static asset path injection.
- [ ] **Custom Gulp Plugin for FFmpeg:** Engineer a modern asset pipeline plugin for media processing (audio/video conversion and encoding), as the existing <code>gulp&#8209;fluent&#8209;ffmpeg</code> package is officially deprecated.
- [ ] **Font Pipeline Overhaul:** Create a dedicated Gulp plugin to interface natively with the modern [ftcli][FoundryToolsCLI-url] binary, replacing obsolete packages like <code>gulp&#8209;ttf2woff</code>, <code>gulp&#8209;ttf2woff2</code>, and <code>gulp&#8209;fonter</code>.
- [ ] **Custom Gulp Plugin for Responsive Images:** Develop a new plugin for adaptive graphics generation (automated transformation of <code><img></code> into <code><picture></code> with breakpoint support and aspect-ratio calculation), as the existing <code>gulp&#8209;responsive</code> is deprecated.
- [ ] **Universal HTML Media Transformer:** Build a comprehensive Gulp plugin to automatically morph standard media elements into optimized responsive layouts. It should dynamically transform basic <code><img></code> tags into adaptive <code><picture></code> trees (with automated <code>srcset</code>), and map raw <code><video></code> or <code><audio></code> containers into deep structures with nested <code><source></code> tracks, respecting <code>mobile&#8209;first</code> or <code>desktop&#8209;first</code> parameters.
- [ ] **CMS Integration:** Provide out-of-the-box configuration presets for porting static code distributions over to WordPress and other popular CMS platforms.
- [ ] **React & Modern Framework Support:** Explore integration boundaries to bundle this Gulp environment with Vite/Webpack, bringing full development capabilities to React, Vue, or Angular applications.

> 💡 The full list of planned features and known issues is available in the [Issues][issues-url] section.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📄 License <a id="license"></a>

Copyright © 2025 [aLeeTheY](https://github.com/aLeeTheY) <br/> Distributed under the [MIT][license-url] License. See <code>LICENSE</code> file for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## 🤝 Contact <a id="contact"></a>

[![GitHub][GitHub-logo]](https://github.com/aLeeTheY)
[![Telegram][Telegram-logo]](https://t.me/aLeeTheY)
[![Gmail][Gmail-logo]](mailto:aleethey@gmail.com)

<!-- GitHub: [aLeeTheY](https://github.com/aLeeTheY)
<br/>
Telegram: [@aLeeTheY](https://t.me/aLeeTheY)
<br/>
Email: [aleethey@gmail.com](mailto:aleethey@gmail.com) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## 💖 Acknowledgments <a id="acknowledgments"></a>

[aLeeTheY](https://github.com/aLeeTheY) is grateful to the developers and communities behind the following projects.

### 🏛️ Core Technologies & Ecosystem Foundations

- [Figma](https://www.figma.com/), [Visual Studio Code](https://code.visualstudio.com/) — for a convenient layout environment and code editor.
- [Node.js](https://nodejs.org/), [Npm](https://www.npmjs.com/), [Git](https://git-scm.com/), [GitHub](https://github.com/) — for runtime primitives, dependency management, and version control architecture.
- [Gulp](https://gulpjs.com/), [Browsersync](https://browsersync.io/) — for stream pipeline orchestration and real-time livereload functionality.
- [Nunjucks](https://mozilla.github.io/nunjucks/), [Esbuild](https://esbuild.github.io/), [Sass](https://sass-lang.com/), [PostCSS](https://postcss.org/) — for design component processing, blazing fast script compilation, and advanced style mutations.
- [Alpine.js](https://alpinejs.dev/), [AOS](https://michalsnik.github.io/aos/) — for lightweight client reactive frameworks and programmatic UI animations.
- [Chocolatey](https://chocolatey.org/) — for simplifying terminal-level package dependency management.
- [Python](https://www.python.org/) — for providing the execution runtime for font compilation CLI tools.

### ⚡ Media, Typography & Graphical Optimizers

- [FFmpeg](https://www.ffmpeg.org/) — for low-level media transcoding pipelines.
- [Sharp](https://sharp.pixelplumbing.com/), [SVGO](https://github.com/svg/svgo), [gifsicle](https://github.com/kohler/gifsicle) — for extreme raster and vector optimization curves.
- [FoundryTools-CLI](https://github.com/ftCLI/FoundryTools-CLI) — for granular automated web-font reconstruction matrices.

### 🛠️ Code Quality Frameworks, Linters & Auditing

- [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/), [Prettier](https://prettier.io/), [EditorConfig](https://editorconfig.org/) — for unified enforcement of code styles and static typing parameters.
- [Husky](https://typicode.github.io/husky/), [Lint-staged](https://github.com/lint-staged/lint-staged), [Commitlint](https://github.com/conventional-changelog/commitlint) — for rigid automation protocols executed at the pre-commit layer.
- [Browserslist](https://github.com/browserslist/browserslist), [Chrome DevTools](https://developer.chrome.com/docs/devtools), [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) — for target runtime scoping, live environment inspection, and performance logging.

### 🔌 Ecosystem Extensions & Utility Packages

<details>
<summary>📋 Show list of plugins that solved specific project tasks</summary>

- **System Dependencies & CLI:** [cross-env](https://github.com/kentcdodds/cross-env), [yargs](https://yargs.js.org/), [through2](https://github.com/rvagg/through2), [htmlparser2](https://github.com/fb55/htmlparser2), [domutils](https://github.com/fb55/domutils), [domhandler](https://github.com/fb55/domhandler).
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

<!-- ! 🚀 ┌────────────────────────────────────────────────────────────────────────┐ -->
<!-- ! 🚀 │  README MAINTENANCE CHEAT SHEET / ШПАРГАЛКА ПО ПОДГОТОВКЕ README       │ -->
<!-- ! 🚀 └────────────────────────────────────────────────────────────────────────┘ -->
<!-- ! 💡 See / См. файл: docs/CHEATSHEET.md -->
