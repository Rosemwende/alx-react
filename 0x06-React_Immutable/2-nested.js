/**
 * Access the value at a defined path in an object
 * @param {Object} object - The object to access
 * @param {Array} array - The array defining the path to the value
 * @returns {any} - The value at the path, or undefined if not found
 */
export default function accessImmutableObject(object, array) {
  let result = object;
  for (let i = 0; i < array.length; i++){
    if (result && result[array[i]] !== undefined) {
      result = result[array[i]];
    } else {
      return undefined;
    }
  }
  
  return result;
}
