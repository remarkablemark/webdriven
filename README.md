# webdriven

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

## Testing

```sh
$ npm test
```

## License

MIT
