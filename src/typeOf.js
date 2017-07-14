/**
 * This method accepts any single variable, which type should be found(in case if only variable 
 * passed as an argument) or which type should be compared to the type passed as a second argument.
 * 
 * @param {Any} variable
 * @param {String} comparator
 * @returns {Boolean} - result of comparing variables type with expected type(if two arguments presented).
 *          {String}  - type of passed variable(if only variable was passed).
 *
 * @example
 *
 * const Stark = {
 *   name: 'John',
 *   age: 20,
 * }
 *
 * const Snow = addProperty(Stark, 'role', 'bastard');
 *
 * const say = () => console.log('Winter is Coming'); 
 *
 * console.log(typeOf(Stark)) // => "Object"
 * console.log(typeOf(Stark, 'Object')) // => true
 * console.log(typeOf(Stark, 'object')) // => true
 * console.log(typeOf(Snow)) // => "Object"
 * console.log(typeOf(Snow, 'String')) // => false
 * console.log(typeOf(say)) // => "Function"
 */

export const typeOf = (variable, comparator) => {
  const pattern = /Array|String|Object|Boolean|Number|Function/g;
  const variableType = Object.prototype.toString.call(variable).match(pattern)[0];
    
  return !!comparator ? variableType.toLowerCase() === comparator.toLowerCase() : variableType;
};

