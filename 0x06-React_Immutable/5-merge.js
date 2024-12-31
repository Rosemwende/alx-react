import { List, Map } from 'immutable';

/**
 * Concatenates two arrays and returns them as an Immutable List.
 * @param {Array} page1 - The first array.
 * @param {Array} page2 - The second array.
 * @returns {List} - An Immutable List containing the elements of both arrays.
 */
export function concatElements(page1, page2) {
  return List([...page1, ...page2]);
}

/**
 * Merges two objects and returns the result as an Immutable Map.
 * If there are conflicts, values from page2 will overwrite those in page1.
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {Map} - An Immutable Map containing the merged key-value pairs.
 */
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  return map1.merge(map2);
}
