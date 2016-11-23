'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var index = require('../index');

/**
 * Index.
 */
describe('index', function() {
    it('returns an object of helpers when invoked with a parameter', function() {
        assert.deepEqual(
            Object.keys(index(null)), [
                'findElement',
                'findElements',
                'saveScreenshot'
            ]
        );
    });

    it('exposes build', function() {
        assert.equal(typeof index.build, 'function');
    });
});
