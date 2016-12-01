'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var fs = require('fs');
var test = require('selenium-webdriver/testing');

var build = require('../lib/build');
var saveScreenshot = require('../lib/saveScreenshot');

/**
 * Save screenshot.
 */
test.describe('#saveScreenshot', function() {
    var driver;

    test.before(function() {
        driver = build('phantomjs');
        driver.get('http://example.com');
    });

    test.after(function() {
        driver.quit();
    });

    test.it('throws an error if first argument `driver` is invalid', function() {
        assert.throws(function() {
            saveScreenshot();
        });
    });

    test.it('throws an error if second argument `filename` is invalid', function() {
        assert.throws(function() {
            saveScreenshot(driver);
        });

        assert.throws(function() {
            saveScreenshot(driver, null);
        });
    });

    test.it('takes and writes the screenshot', function(done) {
        var filename = 'test/temp/save-screenshot.png';
        saveScreenshot(driver, filename, function(error) {
            if (error) throw error;

            driver.takeScreenshot().then(function(data) {
                assert.equal(
                    fs.readFileSync(filename, 'base64'),
                    data.replace('data:image/png;base64')
                );
                done();
            });
        });
    });
});
