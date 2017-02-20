[![Build status](https://ci.appveyor.com/api/projects/status/cvsrq2dfxfoueuw7?svg=true)](https://ci.appveyor.com/project/HieuNV/webpack-react-redux-babel-sass-starter)
[![Build Status](https://travis-ci.org/hieunv8/webpack-react-redux-babel-sass-starter.svg?branch=master)](https://travis-ci.org/hieunv8/webpack-react-redux-babel-sass-starter)
[![dependencies Status](https://david-dm.org/hieunv8/webpack-react-redux-babel-sass-starter/status.svg)](https://david-dm.org/hieunv8/webpack-react-redux-babel-sass-starter)
[![devDependencies Status](https://david-dm.org/hieunv8/webpack-react-redux-babel-sass-starter/dev-status.svg)](https://david-dm.org/hieunv8/webpack-react-redux-babel-sass-starter?type=dev)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
# Webpack + ReactJS + Redux + Babel + SASS

## Installation
```bash
npm i -g cross-env sass-lint standard eslint-plugin-flowtype babel-eslint snazzy
npm install 
```

- [cross-env](https://github.com/kentcdodds/cross-env)
- [webpack](https://github.com/webpack/webpack)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [karma-cli](https://github.com/karma-runner/karma-cli)
- [sass-lint](https://github.com/sasstools/sass-lint)
- [babel](https://github.com/babel/babel)

## Development

```bash
npm run dev
```

```
http://localhost:8080/webpack-dev-server/
```

## Test
```bash
npm run test
```
```bash
npm run watch
```
- [jasmine](https://github.com/jasmine/jasmine)
- [jasmine-ajax](https://github.com/jasmine/jasmine-ajax)
- [enzyme](https://github.com/airbnb/enzyme)

## Distribution

```bash
npm run dist
```

### Output

```
dist/bundle.js
```

```
"test": "standard --fix --verbose | snazzy && node -r babel-register ./node_modules/karma/bin/karma start --singleRun true",
```