'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var build = require('../lib/build');
var test = require('selenium-webdriver/testing');

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

    test.it('launches a driver', function(done) {
        var driver = build('phantomjs');
        assert.equal(driver.constructor.name, 'thenableWebDriverProxy')
        driver.quit();
        done();
    });

    test.it('launches chrome with profile', function(done) {
        var profilePath = 'test/temp/chrome-profile';
        var driver = build('chrome', {
            profile: profilePath
        });
        driver.getCapabilities().then(function(capabilities) {
            assert.equal(capabilities.get('chrome').userDataDir, profilePath);
        });
        driver.quit();
        done();
    });
});
