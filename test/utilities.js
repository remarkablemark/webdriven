'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var utilities = require('../lib/utilities');

/**
 * Utilities.
 */
describe('utilities', function() {

    describe('#capitalize', function() {
        var capitalize = utilities.capitalize;

        it('throws an error if first argument is not a string', function() {
            [undefined, null, 1, {}, [], Function].forEach(function(argument) {
                assert.throws(function() {
                    capitalize(argument);
                }, TypeError);
            });
        });

        it('capitalizes a string', function() {
            assert.equal(capitalize(''), '');
            assert.equal(capitalize('foo'), 'Foo');
            assert.equal(capitalize('FOO'), 'FOO');
        });
    });

});
