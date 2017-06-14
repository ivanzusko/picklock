/**
 * This method accepts target object, property
 * which should be updated in the target object,
 * value of the given property, and then 
 * returns new object with updated property (passed as an argument).
 * 
 * @param {Object} object
 * @param {String} propertyToUpdate
 * @param {String} value
 * @returns {Object}
 * @example
 *
 * const Stark = {
 *   name: 'John',
 *   age: 20,
 * }
 *
 * const Snow = updateProperty(Stark, 'age', 21);
 * console.log(Snow) // => { name: 'John', age: 21 }
 * console.log(Stark) // => { name: 'John', age: 20 }
 */

export const updateProperty = (object, propertyToUpdate, value) => {
  return {
    ...object,
    [propertyToUpdate]: value,
  };
};
