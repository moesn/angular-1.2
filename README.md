# angular-webpack

Angular 1.2.xx

### Quick start

```bash
# 克隆代码
$ git clone username@zhaohuaming.cn:/git/Angular-1.2.git
$ cd Angular-1.2

# 安装依赖
$ npm install

# 启动服务
$ npm start
```

[http://localhost:8080](http://localhost:8080)

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](./LICENSE)

{
  "name": "Angular-1.2",
  "version": "1.0.0",
  "description": "Support IE8",
  "scripts": {
    "build": "rimraf dist && webpack --bail --progress --profile",
    "server": "webpack-dev-server --history-api-fallback --inline --progress",
    "start": "npm run server"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/Foxandxss/angular-webpack-workflow.git"
  },
  "author": "Jesus Rodriguez",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/Foxandxss/angular-webpack-workflow/issues"
  },
  "homepage": "https://github.com/Foxandxss/angular-webpack-workflow",
  "dependencies": {
    "angular": "^1.2.32"
  },
  "devDependencies": {
    "angular-mocks": "^1.5.0",
    "autoprefixer": "^6.0.3",
    "babel-core": "^6.2.1",
    "babel-loader": "^6.2.0",
    "babel-preset-es2015": "^6.1.18",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.23.0",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.9.0",
    "html-webpack-plugin": "^2.7.1",
    "istanbul-instrumenter-loader": "^1.0.0",
    "jasmine-core": "^2.3.4",
    "node-libs-browser": "^2.0.0",
    "null-loader": "^0.1.1",
    "phantomjs-prebuilt": "^2.1.4",
    "postcss-loader": "^1.1.1",
    "raw-loader": "^0.5.1",
    "style-loader": "^0.13.0"
  }
}
