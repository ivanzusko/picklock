(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.deleteProperty = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
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

  var deleteProperty = exports.deleteProperty = function deleteProperty(object, propertyToDelete) {
    return Object.keys(object).reduce(function (memo, key) {
      if (key !== propertyToDelete) {
        memo[key] = object[key];
      }
      return memo;
    }, {});
  };
});