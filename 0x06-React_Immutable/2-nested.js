import { fromJS } from 'immutable';

/**
 * Converts a plain JavaScript object into an Immutable Map using fromJS,
 * and accesses the value at a defined path using getIn.
 * @param {Object} object - The plain object to convert.
 * @param {Array} array - The path to the value to retrieve.
 * @returns {any} - The value at the path (string, Map, or undefined)
 */
export default function getImmutableObject(object, array) {
  const immutableObject = fromJS(object);

  const value = immutableObject.getIn(array);

  return value;
}
