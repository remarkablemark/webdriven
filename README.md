# webdriven

[![NPM](https://nodei.co/npm/webdriven.png)](https://nodei.co/npm/webdriven/)

[![NPM version](https://img.shields.io/npm/v/webdriven.svg)](https://www.npmjs.com/package/webdriven)
[![Build Status](https://travis-ci.org/remarkablemark/webdriven.svg?branch=master)](https://travis-ci.org/remarkablemark/webdriven)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/webdriven/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/webdriven?branch=master)

Helpers for [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver).

## Install

```sh
$ npm install webdriven
```

## Getting Started

Require the package and build a driver:

```js
var webdriven = require('webdriven');
var driver = webdriven.build('chrome');
```

Now you can open a webpage:

```js
driver.get('http://example.com');
```

## Helpers

Initialize the helpers by invoking `webdriven` with `driver`:

```js
var helpers = webdriven(driver);
```

#### findElement(locator[, timeout])

```js
helpers.findElement('h1');
```

#### findElements(locator)

```js
helpers.findElements('p');
```

Check if an element is found:

```js
helpers
    .findElements('#no-such-element')
    .then(function(elements) {
        if (elements.length > 0) {
            // at least 1 element found
        } else {
            // element not found
        }
    });
```

#### saveScreenshot(filename, callback)

```js
helpers.saveScreenshot('filename.png', function(error) {
    if (error) throw error;
    console.log('Screenshot saved successfully');
});
```

## Testing

```sh
$ npm test
$ npm run lint
```

## License

[MIT](https://github.com/remarkablemark/webdriven/blob/master/LICENSE)
