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

## Usage

First, require the package:

```js
var webdriven = require('webdriven');
```

Then build and launch a driver:

```js
var driver = webdriven.build('chrome');
```

Now you can open a webpage:

```js
driver.get('http://example.com');
```

Initialize all the helpers:

```js
var helpers = webdriven(driver);
```

Find an element:

```js
helpers.findElement('h1');
```

Find elements:

```js
helpers.findElements('p');
```

Check if an element is found:

```js
helpers
    .findElements('#no-such-element')
    .then(function(elements) {
        if (elements.length > 0) {
            // at least one element found
        } else {
            // element not found
        }
    });
```

Take and save a screenshot:

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
