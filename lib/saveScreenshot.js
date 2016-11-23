'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs');

/**
 * Takes and saves screenshot.
 *
 * @param {WebDriver}           driver     - The WebDriver instance.
 * @param {String}              filename   - The filename.
 * @param {fsWriteFileCallback} [callback] - The callback.
 */
module.exports = function saveScreenshot(driver, filename, callback) {
    if (typeof filename !== 'string') {
        throw new TypeError('The argument `filename` must be a string');
    }

    driver.takeScreenshot().then(function(data) {
        fs.writeFile(
            filename,
            data.replace('data:image/png;base64', ''),
            'base64',
            callback
        );
    });
};

/**
 * The callback for `fs.writeFile()`.
 *
 * @callback fsWriteFileCallback
 * @param {Error} error - The error object.
 */
