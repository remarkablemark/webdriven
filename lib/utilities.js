'use strict';

/**
 * Capitalize string.
 *
 * @param  {String} string - The string.
 * @return {String}
 */
function capitalize(string) {
    if (typeof string !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Export utilities.
 */
module.exports = {
    capitalize: capitalize
};
