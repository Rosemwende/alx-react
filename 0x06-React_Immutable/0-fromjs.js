import { fromJS } from 'immutable';

/**
 * Converts an object into an Immutable Map using fromJS
 * @param {Object} object - The object to convert
 * @returns {Immutable.Map} - Immutable Map representation of the object
 */
const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;
