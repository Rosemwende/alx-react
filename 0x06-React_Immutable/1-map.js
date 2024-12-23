import { Map } from 'immutable';

/**
 * Converts an object into an Immutable Map using Map
 * @param {Object} object - The object to convert
 * @returns {Immutable.Map} - Immutable Map representation of the object
 */
const getImmutableObject = (object) => Map(object);

export default getImmutableObject;
