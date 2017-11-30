.PHONY: flow lint lint-fix test report build all
flow:
	yarn flow check --strip-root
lint:
	yarn eslint "src/**" "test/**"
lint-fix:
	make lint -- --fix
test:
	yarn nyc --check-coverage \
	yarn cross-env NODE_ENV=test \
	yarn mocha --opts .mocharc "./test/*.test.js"
report:
	yarn opn ./coverage/index.html
build:
	yarn babel src --out-dir dist --source-maps
all: test flow lint build
