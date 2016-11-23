'use strict';

/**
 * Module dependencies.
 */
var until = require('selenium-webdriver').until;

/**
 * Waits until element is located and then finds element.
 *
 * @param  {WebDriver}          driver    - The WebDriver instance.
 * @param  {(String|Object|By)} locator   - The locator.
 * @param  {Number}             [timeout] - The wait timeout in milliseconds.
 * @return {WebElement}
 */
module.exports = function findElement(driver, locator, timeout) {
    if (typeof locator === 'string') {
        locator = { css: locator };
    }
    driver.wait(until.elementLocated(locator), timeout);
    return driver.findElement(locator);
};
