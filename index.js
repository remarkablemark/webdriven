'use strict';

/**
 * Factory for the driver-dependent helpers.
 *
 * @param  {WebDriver} driver - The WebDriver instance.
 * @return {Object}           - The helpers object.
 */
module.exports = function(driver) {
    return {
        findElement: require('./lib/findElement').bind(null, driver),
        findElements: require('./lib/findElements').bind(null, driver)
    };
};

/**
 * Build helper.
 */
module.exports.build = require('./lib/build');
