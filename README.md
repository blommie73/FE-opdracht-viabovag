# Front-end assessment

Bij [viaBOVAG.nl](https://www.viabovag.nl) willen we het met de kandidaat graag o.a. over code hebben. Deze opdracht is een middel om je coding skills te presenteren. Je mag grotendeels zelf bepalen welke technieken en tooling je bij het uitvoeren van de opdracht gebruikt. Aangezien je naar een positie als front-end developer solliciteert ligt het gebruik van _HTML_, _CSS_ en _JavaScript_ voor de hand. Dit zien we dan ook graag terug in jouw code.

Tijdens het technisch interview zullen we de opgeleverde code bespreken en vragen stellen over gemaakte keuzes. Het hoeft geen briljante oplossing te zijn, maar het zal helpen het interview inhoud en vorm te geven. De bedoeling is dat je er maximaal een dagdeel aan besteed.

We kijken uit naar jouw oplossing!

## 👨‍💻 Voorbereiding

Zorg er voor dat je **Node.js** versie **8** of hoger geïnstalleerd hebt.

## 🏁 Doel van de opdracht

Bouw een webpagina die de voertuigen toont zoals ze ter beschikking worden gesteld door de *Vehicle API* (verderop meer hier over). Artistieke vrijheid is van toepassing. Gebruik dus je creativiteit met de manier waarop de voertuigen gepresenteerd worden.

💡 Tip: toon/verberg bij interactie (bijvoorbeeld een click event) uitgebreidere voertuigdetails.

**Aandachtspunten:**

* Mobile first approach: meer dan 60% van de bezoeken komt via mobiel
* Performance: essentieel voor een goede gebruikerservaring

## ✅ Acceptatiecriteria

* Webpagina werkt cross-browser/-device/-OS (incl. IE11)
* Webpagina moet bereikbaar/op te starten zijn via een HTTP server
* JavaScript is geschreven in handcoded (vanilla) ES6+ 
* Style declaraties zijn genaamd volgens BEM methodology 

## 👌 Definition of Done

* De opgeleverde webpagina toont de voertuigen zoals ze ter beschikking zijn gesteld middels de Vehicle API.
* De gebruiker kan interactie hebben met de voertuigen om zodanig meer details te zien.
* Code beschikbaar in een publieke git repository (bv. [Azure DevOps](https://dev.azure.com)). Mail de URL vervolgens naar de recruiter.

## 🚙 Vehicle API

De voertuigen op viaBOVAG.nl worden aangeleverd middels de *Vehicle API*. Voor de opdracht gaan we gebruik maken van een vereenvoudigde, gemockte variant. Deze bevindt zich in de map `/api`. We starten de mock server als volgt:

```bash
$ cd api
$ npm i && npm start
```

De mock server is nu te bereiken op http://localhost:3000

### Routes

Haal details van alle voertuigen op:

```
GET /vehicles
```

Haal details van een specifiek voertuig op:

```
GET /vehicles/:id
```

Haal afbeelding op uit `public/images/` folder:

```
GET /images/:file
```

# 📦 Webpack Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![David](https://img.shields.io/david/dev/taniarascia/webpack-boilerplate)

Minimal Webpack 4 boilerplate with Babel, Sass, ESLint, Hot Module Replacement, and development/production optimization.

## Installation

```
git clone git@github.com:taniarascia/webpack-boilerplate
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:3000`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash 
npm i -g http-server
```

You can view the deploy by creating a server in `dist`. 

```bash
cd dist && http-server
```

## Features

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)

## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack.
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration.

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript.
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class.
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel.
- [`babel-eslint`](https://github.com/babel/babel-eslint) - Lint Babel code.
  - [`eslint`](https://github.com/eslint/eslint) - ESLint.

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and Webpack.
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS.
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass.
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS.
  - [`cssnano`](https://github.com/cssnano/cssnano) - Optimize and compress PostCSS.
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS.
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolves CSS imports into JS.
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM.
- [`eslint-loader`](https://webpack.js.org/loaders/eslint-loader/) - Use ESLint with Webpack.
- [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Copy files to build folder.
- [`url-loader`](https://webpack.js.org/loaders/url-loader/) - Encode and inline files. Falls back to file-loader.

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders.
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory.
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template.
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files.
- [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimize and minimize CSS assets.
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Minify JavaScript.

## Author

- [Tania Rascia](https://www.taniarascia.com)

## License

This project is open source and available under the [MIT License](LICENSE).
