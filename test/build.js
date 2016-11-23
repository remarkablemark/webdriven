'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var test = require('selenium-webdriver/testing');
var build = require('../lib/build');

/**
 * Build.
 */
test.describe('#build', function() {
    test.it('throws an error if first argument `browserName` is invalid', function() {
        assert.throws(function() {
            build();
        }, TypeError);

        assert.throws(function() {
            build('foo');
        }, Error);
    });

    test.it('builds and launches a driver', function() {
        var driver = build('phantomjs');
        assert.equal(driver.constructor.name, 'thenableWebDriverProxy')
        driver.quit();
    });
});
