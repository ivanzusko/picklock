/**
 * This method accepts target object and property
 * which should be deleted from the target object, and then 
 * returns new object without target property (passed as an argument).
 * 
 * @param {Object} object
 * @param {String} propertyToDelete
 * @returns {Object}
 * @example
 *
 * const Snow = {
 *   name: 'John',
 *   age: 20,
 *   role: 'Bastard',
 * }
 *
 * const Stark = deleteProperty(Snow, 'role');
 * console.log(Stark) // => { name: 'John', age: 20 }
 * console.log(Snow) // => { name: 'John', age: 20, role: 'Bastard' }
 */

export const deleteProperty = (object, propertyToDelete) =>
  Object.keys(object).reduce((memo, key) => {
    if (key !== propertyToDelete) {
      memo[key] = object[key];
    }
    return memo;
  }, {});
