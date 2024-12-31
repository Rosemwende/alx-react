import { fromJS } from 'immutable';

/**
 * Converts a plain JavaScript object into an Immutable Map using fromJS.
 * @param {Object} object - The plain object to convert.
 * @returns {Map} - The Immutable Map object.
 */
export default function getImmutableObject(object) {
  return fromJS(object);
}
