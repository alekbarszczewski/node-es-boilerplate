
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Node.js ES Boilerplate

### Requirements

* yarn >= 1.2.1
* Node.js >= 8.4.0

### Install

```sh
$ yarn
```

### Run

Development:

```sh
$ yarn dev
```

Production:

```sh
$ node dist/index.js
```

### Commands

| Command           | Description
|-------------------|------------
| `make flow`       | run flow test
| `make lint`       | run lint test
| `make lint-fix`   | run lint test and auto fix if possible
| `make test`       | run mocha tests and coverage test
| `make report`     | show coverage report (after `make test`)
| `make build`      | build project into dist directory
| `make all`        | test && flow && lint && build
| `make clean`      | clean all
| `make clean-dist` | clean dist files
| `make clean-cov`  | clean coverage files
| `make app-secret` | generate app secret

### Babel Plugins

* https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties
* https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-object-rest-spread
* https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-export-namespace-from
* https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-decorators
* https://github.com/entwicklerstube/babel-plugin-root-import
