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
    it('exposes build', function() {
        assert(index.hasOwnProperty('build'));
    });
});
