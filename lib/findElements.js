'use strict';

/**
 * Finds elements.
 *
 * @param  {WebDriver}          driver  - The WebDriver instance.
 * @param  {(String|Object|By)} locator - The locator.
 * @return {Array}                      - The WebElements.
 */
module.exports = function findElements(driver, locator) {
    if (typeof locator === 'string') {
        locator = { css: locator };
    }
    return driver.findElements(locator);
};
