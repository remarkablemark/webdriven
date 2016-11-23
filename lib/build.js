'use strict';

/**
 * Module dependencies.
 */
var webdriver = require('selenium-webdriver');

/**
 * Builds and launches a driver.
 *
 * @param  {String}    browserName - The browser name.
 * @return {WebDriver}
 */
module.exports = function build(browserName) {
    if (typeof browserName !== 'string') {
        throw new TypeError('First argument `browserName` is missing');
    }
    var builder = new webdriver.Builder();
    builder.forBrowser(browserName);
    return builder.build();
};
