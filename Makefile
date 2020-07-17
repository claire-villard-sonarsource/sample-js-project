.PHONY: build
build: node_modules static/js/sample.bundle.js

node_modules:
	npm install

static/js/sample.bundle.js:
	./node_modules/.bin/webpack -p

.PHONY: eslint
eslint:
	find src/js -name '*.js' | xargs ./node_modules/.bin/eslint

.PHONY: check
check: eslint

.PHONY: clean
clean:
	rm -rf node_modules static
