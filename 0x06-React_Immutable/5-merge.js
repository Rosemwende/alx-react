import { List, Map } from 'immutable';

/**
 * Concatenates two arrays into a single Immutable List
 * @param {Array} page1 - The first array
 * @param {Array} page2 - The second array
 * @returns {List} - The concatenated List
 */
export function concatElements(page1, page2) {
  return List(page1.concat(page2));
}

/**
 * Merges two objects into a single Immutable List,
 * with values from page2 overriding page1
 * @param {Object} page1 - The first object
 * @param {Object} page2 - The second object
 * @returns {List} - The merged List of values
 */
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return map1.merge(map2).toList();
}
