import { List } from 'immutable';

/**
 * Converts an array into an Immutable List.
 * @param {Array} array - The array to be converted into a List.
 * @returns {List} - The Immutable List.
 */
export function getListObject(array) {
  return List(array);
}

/**
 * Adds an element to the Immutable List.
 * @param {List} list - The Immutable List.
 * @param {string} element - The string element to be added to the list.
 * @returns {List} - The updated Immutable List with the new element appended.
 */
export function addElementToList(list, element) {
  return list.push(element);
}
