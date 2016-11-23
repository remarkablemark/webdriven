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

## Testing

```sh
$ npm test
```

## License

MIT
