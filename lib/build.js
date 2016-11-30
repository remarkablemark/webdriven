'use strict';

/**
 * Module dependencies.
 */
var path = require('path');
var utilities = require('./utilities');
var webdriver = require('selenium-webdriver');

/**
 * Builds and launches a driver.
 *
 * @param  {String}    browserName      - The browser name.
 * @param  {Object}    [browserOptions] - The build options.
 * @return {WebDriver}                  - The driver instance.
 */
module.exports = function build(browserName, browserOptions) {
    if (typeof browserName === 'string') {
        browserName = browserName.toLowerCase();
    } else {
        throw new TypeError('First argument `browserName` must be a string');
    }

    var builder = new webdriver.Builder();
    builder.forBrowser(browserName);

    // browser options
    if (typeof browserOptions === 'object') {
        var client = require(path.join('selenium-webdriver', browserName));
        var options = new client.Options();
        var profile = browserOptions.profile;

        // profile
        if (profile && typeof profile === 'string') {
            switch (browserName) {
                case 'firefox':
                    options.setProfile(profile);
                    break;
                case 'chrome':
                    options.addArguments('user-data-dir=' + profile);
                    break;
            }
        }

        builder['set' + utilities.capitalize(browserName) + 'Options'](options);
    }

    return builder.build();
};
