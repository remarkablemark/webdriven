'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var test = require('selenium-webdriver/testing');

var build = require('../lib/build');
var findElements = require('../lib/findElements');

/**
 * Find elements.
 */
test.describe('#findElements', function() {
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
            findElements();
        });
    });

    test.it('throws an error if second argument `locator` is invalid', function() {
        assert.throws(function() {
            findElements(driver);
        });

        assert.throws(function() {
            findElements(driver, null);
        });
    });

    test.it('finds elements using string locator', function(done) {
        findElements(driver, 'p').then(function(elements) {
            assert.equal(elements.length, 2);
            assert.equal(elements[0].constructor.name, 'WebElement');
            done();
        });
    });

    test.it('returns an empty array if no elements are found', function(done) {
        findElements(driver, { id: 'no-such-element' }).then(function(elements) {
            assert.equal(elements.constructor, Array);
            assert.equal(elements.length, 0);
            done();
        });
    });
});
