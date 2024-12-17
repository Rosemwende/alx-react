import { fromJS } from 'immutable';

/**
 * Converts an object into an Immutable Map using fromJS
 * @param {Object} object - The object to convert
 * @returns {Map} - Immutable Map representation of the object
 */
function getImmutableObject(object) {
    return fromJS(object);
}

export { getImmutableObject };
