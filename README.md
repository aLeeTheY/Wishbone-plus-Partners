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
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Wishbone+Partners (Website)</h1>

  <p align="center">
    A desktop-focused single-page website built with HTML and Sass, using Alpine.js for collapsible sections and AOS for scroll animations. Features custom CSS transitions and is not optimized for mobile.
    <br />
    <br />
    <a href="https://verstaem.online/projects/wishbone/">Original Layout</a>
    &middot;
    <a href="https://aLeeTheY.github.io/Wishbone-plus-Partners/">View Demo</a>
    &middot;
    <a href="https://github.com/aLeeTheY/Wishbone-plus-Partners/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<br />
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#supported-browsers">Supported Browsers</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#build-static-files">Build Static Files</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is part of my portfolio and demonstrates my skills in creating websites based on client-provided mockups - either in [Figma](https://www.figma.com/) or [Photoshop](https://www.adobe.com/products/photoshop.html).

The primary objective was to build a sleek, animated landing page with a focus on aesthetic details and smooth interactive elements, based on a desktop-only design mockup.

Key technical notes:

* **Layout & Responsiveness**: Implemented with a fluid layout that gracefully adjusts across standard desktop and laptop screens. The site is not optimized for mobile devices as it was based on a single desktop mockup.
* **Styling & Architecture**: Styled with [Sass/SCSS][Sass-url] primarily for file organization by sections, with variables and mixins for typography and consistent styling.
* **Animations**: Features multiple animation layers:
    * Scroll-triggered animations via the [AOS (Animate On Scroll)][AOS-url] library.
    * Interactive collapse/expand functionality in specific sections using [Alpine.js][Alpine.js-url].
    * Custom CSS transitions for hover states on buttons, links, and images.
* **JavaScript Implementation**: No custom JavaScript was written; all interactivity is achieved through the AOS and Alpine.js libraries.
* **Build Approach**: This project combines preprocessed CSS architecture with lightweight JavaScript libraries to create a polished, desktop-focused front-end experience without custom scripting.

You can see a **preview of the website** in the image below:

[![Wishbone+Partners (Website) Preview][website-preview]](https://aLeeTheY.github.io/Wishbone-plus-Partners/)



### Built With

This website is made using the following technologies:

* [![HTML][HTML-logo]][HTML-url]
* [![CSS][CSS-logo]][CSS-url]
* [![JavaScript][JavaScript-logo]][JavaScript-url]
* [![Sass][Sass-logo]][Sass-url]
* [![Alpine.js][Alpine.js-logo]][Alpine.js-url]
* [![Node.js][Node.js-logo]][Node.js-url]
* [![Git][Git-logo]][Git-url]
* [AOS (Animate On Scroll)][AOS-url] library.



### Supported Browsers

Below is a list of browsers in which this website was tested and rendered correctly:

* [![Opera GX][OperaGX-logo]][OperaGX-url]
* [![Google Chrome][GoogleChrome-logo]][GoogleChrome-url]
* [![Microsoft Edge][MicrosoftEdge-logo]][MicrosoftEdge-url]
* [![Firefox][Firefox-logo]][Firefox-url]
* [![Arc][Arc-logo]][Arc-url]
* [![Brave][Brave-logo]][Brave-url]
* [![Vivaldi][Vivaldi-logo]][Vivaldi-url]

<br />

> [!IMPORTANT]
> Browser compatibility was verified for the 1.0.0 release. The site displayed correctly in the latest versions of all major browsers at that time.
> 
> **Last verification date: 9 December 2025**

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Please follow the steps below to build and view this website locally.



### Prerequisites

First, install [Node.js][Node.js-url]. Then, download this repository as a ZIP archive or clone it using [Git][Git-url] to a folder on your system. To clone it, you can use the following Git command:

* git

  ```sh
  git clone https://github.com/aLeeTheY/Wishbone-plus-Partners
  ```

Navigate to the project folder in your terminal and run the following command to install all project dependencies:

* npm

  ```sh
  npm install
  ```

### Build Static Files

_Please follow the steps below to build the static site files._

To compile Sass/SCSS files into CSS, run the following build command (you can ignore any warnings):

* npm

  ```sh
  npm run build:release
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

After completing the steps in the [**Getting Started**](#getting-started) section, you can view the site manually by opening the **_index.html_** file from the **_public/_** folder in any [supported browser](#supported-browsers).

Alternatively, to launch a local development server, use the following command:

* npm

  ```sh
  npm run serve
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Copyright © 2025 [Vladimir Nikulin](https://github.com/aLeeTheY).<br />
This project is [MIT][license-url] licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Author

👤 **Vladimir Nikulin**

* Github: [@aLeeTheY](https://github.com/aLeeTheY)
* Email: [mail.jorey@gmail.com](mailto:mail.jorey@gmail.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[HTML-logo]: https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge
[HTML-url]: https://html.spec.whatwg.org/

[CSS-logo]: https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff&style=for-the-badge
[CSS-url]: https://www.w3.org/TR/css/#css

[JavaScript-logo]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

[Sass-logo]: https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=for-the-badge
[Sass-url]: https://sass-lang.com/

[Alpine.js-logo]: https://img.shields.io/badge/Alpine.js-8BC0D0?logo=alpinedotjs&logoColor=fff&style=for-the-badge
[Alpine.js-url]: https://alpinejs.dev/

[Node.js-logo]: https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge
[Node.js-url]: https://nodejs.org/

[Git-logo]: https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=for-the-badge
[Git-url]: https://git-scm.com/

[AOS-url]: https://github.com/michalsnik/aos



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



[website-preview]: public/assets/images/website_preview.png



[OperaGX-logo]: https://img.shields.io/badge/Opera%20GX-EE2950?logo=operagx&logoColor=fff&style=for-the-badge
[OperaGX-url]: https://www.opera.com/gx/

[GoogleChrome-logo]: https://img.shields.io/badge/Google%20Chrome-4285F4?logo=GoogleChrome&logoColor=white&style=for-the-badge
[GoogleChrome-url]: https://www.google.com/chrome/

[MicrosoftEdge-logo]: https://custom-icon-badges.demolab.com/badge/Microsoft%20Edge-2771D8?logo=edge-white&logoColor=white&style=for-the-badge
[MicrosoftEdge-url]: https://www.microsoft.com/en-us/edge/

[Firefox-logo]: https://img.shields.io/badge/Firefox-FF7139?logo=firefoxbrowser&logoColor=white&style=for-the-badge
[Firefox-url]: https://www.firefox.com/

[Arc-logo]: https://img.shields.io/badge/Arc-FCBFBD?logo=arc&logoColor=000&style=for-the-badge
[Arc-url]: https://arc.net/

[Brave-logo]: https://img.shields.io/badge/Brave-FB542B?logo=Brave&logoColor=white&style=for-the-badge
[Brave-url]: https://brave.com/

[Vivaldi-logo]: https://img.shields.io/badge/Vivaldi-EF3939?logo=Vivaldi&logoColor=white&style=for-the-badge
[Vivaldi-url]: https://vivaldi.com/



[WordPress-url]: https://wordpress.com/


