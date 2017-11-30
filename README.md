
# Node.js ES Boilerplate

### Requirements

* yarn >= 1.3.2
* Node.js >= 8.4.0

### Installation

```sh
$ yarn
```

### Commands

| Command         | Description
|-----------------|------------
| `make flow`     | run flow test
| `make lint`     | run lint test
| `make lint-fix` | run lint test and auto fix if possible
| `make test`     | run mocha tests and coverage test
| `make report`   | show coverage report (after `make test`)
| `make build`    | build project into dist directory
| `make all`      | test && flow && lint && build

### Babel Plugins

* https://babeljs.io/docs/plugins/transform-class-properties/
* https://babeljs.io/docs/plugins/transform-object-rest-spread/
* https://www.npmjs.com/package/babel-plugin-transform-export-namespace
* https://babeljs.io/docs/plugins/transform-decorators/
* https://github.com/entwicklerstube/babel-plugin-root-import
