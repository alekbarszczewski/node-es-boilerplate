.PHONY: flow lint lint-fix test report build all
flow:
	yarn flow check --strip-root
lint:
	yarn eslint "src/**" "test/**"
lint-fix:
	make lint -- --fix
test: clean-cov
	yarn nyc --check-coverage \
	yarn cross-env NODE_ENV=test \
	yarn mocha --opts .mocharc "./test/*.test.js"
report:
	yarn opn ./coverage/index.html
build: clean-dist
	yarn babel src --out-dir dist --source-maps
all: test flow lint build
clean-cov:
	yarn rimraf .nyc_output coverage
clean-dist:
	yarn rimraf dist
clean: clean-cov clean-dist
app-secret:
	node -e 'console.log(require("crypto").randomBytes(64).toString("hex"))'
