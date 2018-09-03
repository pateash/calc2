# electron-react-boilerplate

### A Boilerplate for Scalable Cross-Platform Desktop Apps

<br/>


[![React](./internals/img/react-padded-90.png)](https://facebook.github.io/react/)
[![Webpack](./internals/img/webpack-padded-90.png)](https://webpack.github.io/)
[![Redux](./internals/img/redux-padded-90.png)](http://redux.js.org/)
[![React Router](./internals/img/react-router-padded-90.png)](https://github.com/ReactTraining/react-router)
[![Flow](./internals/img/flow-padded-90.png)](https://flowtype.org/)
[![ESLint](./internals/img/eslint-padded-90.png)](http://eslint.org/)
[![Jest](./internals/img/jest-padded-90.png)](https://facebook.github.io/jest/)
[![Yarn](./internals/img/yarn-padded-90.png)](https://yarnpkg.com/)

[Electron](http://electron.atom.io/) application boilerplate based on [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux), [React Router](https://github.com/reactjs/react-router), [Webpack](http://webpack.github.io/docs/), [React Transform HMR](https://github.com/gaearon/react-transform-hmr) for rapid application development.

## Install

- **If you have installation or compilation issues with this project, please see [our debugging guide](https://github.com/chentsulin/electron-react-boilerplate/issues/400)**

First, clone the repo via git:

```bash
git clone  https://github.com/ashishpatel0720/calc2
```

And then install dependencies with yarn 

```bash
$ cd your-project-name
$ yarn 
```
Or with npm
```bash
$ cd your-project-name
$ npm install

## Run with yarn

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```
Or with npm
```bash
$ npm run dev
```


Alternatively, you can run the renderer and main processes separately. This way, you can restart one process without waiting for the other. Run these two commands **simultaneously** in different console tabs:

```bash
$ yarn start-renderer-dev
$ yarn start-main-dev 
```

If you don't need autofocus when your files was changed, then run `dev` with env `WITHOUT_FOCUS=true`:

```bash
$ WITHOUT_FOCUS=true yarn dev
```

## Packaging

To package apps for the local platform:

```bash
$ yarn package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://www.electron.build/multi-platform-build) for dependencies.

Then,

```bash
$ yarn package-all
```

To run End-to-End Test

```bash
$ yarn build
$ yarn test-e2e
```

:bulb: You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable:

```bash
DEBUG_PROD=true yarn package
```

## Maintainers

 [Ashish Patel](https://ashish.live)

## License

MIT © [Ashish Patel](https://ashish.live)

[npm-image]: https://img.shields.io/npm/v/electron-react-boilerplate.svg?style=flat-square
[github-tag-image]: https://img.shields.io/github/tag/chentsulin/electron-react-boilerplate.svg
[github-tag-url]: https://github.com/chentsulin/electron-react-boilerplate/releases/latest
[travis-image]: https://travis-ci.org/chentsulin/electron-react-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.org/chentsulin/electron-react-boilerplate
[appveyor-image]: https://ci.appveyor.com/api/projects/status/github/chentsulin/electron-react-boilerplate?svg=true
[appveyor-url]: https://ci.appveyor.com/project/chentsulin/electron-react-boilerplate/branch/master
[david_img]: https://img.shields.io/david/chentsulin/electron-react-boilerplate.svg
[david_site]: https://david-dm.org/chentsulin/electron-react-boilerplate
