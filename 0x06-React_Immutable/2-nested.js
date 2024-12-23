import { Map } from 'immutable';

/**
 * Access the value at a defined path in an immutable object using `getIn`
 * @param {Object} object - The object to access
 * @param {Array} array - The array defining the path to the value
 * @returns {any} - The value at the path (string, Map, or undefined)
 */
export default function accessImmutableObject(object, array) {
  const immutableObject = Map(object);
  const value = immutableObject.getIn(array);

  return value;
}
