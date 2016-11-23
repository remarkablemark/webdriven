'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var test = require('selenium-webdriver/testing');
var By = require('selenium-webdriver').By;

var build = require('../lib/build');
var findElement = require('../lib/findElement');

/**
 * Find element.
 */
test.describe('#findElement', function() {
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
            findElement();
        });
    });

    test.it('throws an error if second argument `locator` is invalid', function() {
        assert.throws(function() {
            findElement(driver);
        });

        assert.throws(function() {
            findElement(driver, null);
        });
    });

    test.it('finds an element using string locator', function(done) {
        findElement(driver, 'h1').getText().then(function(text) {
            assert.equal(text, 'Example Domain');
            done();
        });
    });

    test.it('finds an element using hash locator', function(done) {
        findElement(driver, { tagName: 'h1' }).getText().then(function(text) {
            assert.equal(text, 'Example Domain');
            done();
        });
    });

    test.it('finds an element using By locator', function(done) {
        findElement(driver, By.tagName('h1')).getText().then(function(text) {
            assert.equal(text, 'Example Domain');
            done();
        });
    });
});
