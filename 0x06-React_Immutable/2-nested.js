import { fromJS } from 'immutable';

/**
 * Converts a plain JavaScript object into an Immutable Map using fromJS.
 * @param {Object} object - The plain object to convert.
 * @returns {Map} - The Immutable Map object.
 */
export default function getImmutableObject(object) {
  const immutableObject = fromJS(object);
  
  // Return the Immutable Map directly
  return immutableObject;
}
