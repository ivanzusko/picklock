/**
 * This method accepts target object
 * and returns new object with all the properties from target object(passed as an argument), which is copy of the target object and not a reference on it.
 * 
 * @param {Object} object
 * @returns {Object}
 * @example
 *
 * const Stark = {
 *   name: 'John',
 *   age: 20,
 * }
 *
 * // bad:
 * const Ramsay = Stark;
 * console.log(Starg === Ramsay) // => true (one object is reference on another)
 * 
 * // good:
 * const bastard = cloneObject(Stark);
 * console.log(Stark === bastard) // => false
 * 
 * console.log(bastard) // => { name: 'John', age: 20 }
 * console.log(Stark) // => { name: 'John', age: 20 }
 * console.log(addProperty(bastard, 'nick', 'Snow')) // => { name: 'John', age: 20, nick: 'Snow' }
 * console.log(Stark) // => { name: 'John', age: 20 }
 * console.log(bastard) // => { name: 'John', age: 20 }
 */

export const cloneObject = (object) => ({
  ...object,
});
