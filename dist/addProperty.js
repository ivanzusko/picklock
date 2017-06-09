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
    global.addProperty = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * This method accepts target object and property
   * which should be added to the target object 
   * and value of this property, and then 
   * returns new object with target property (passed as an argument).
   * It will throw an Error in case if you will try to set property which already exist in the object
   * 
   * @param {Object} object
   * @param {String} propertyToAdd
   * @param {String} value
   * @returns {Object}
   * @example
   *
   * const Stark = {
   *   name: 'John',
   *   age: 20,
   * }
   *
   * const Snow = addProperty(Stark, 'role', 'bastard');
   * console.log(Snow) // => { name: 'John', age: 20, role: 'bastard' }
   * console.log(Stark) // => { name: 'John', age: 20 }
   * console.log(addProperty(Snow, 'name', 'Ramsay')) // => Error: Property 'name' already exists in target Object!
   */

  var addProperty = exports.addProperty = function addProperty(object, propertyToAdd, value) {
    Object.keys(object).map(function (key) {
      if (key === propertyToAdd) throw new Error("Property '" + property + "' already exists in target Object!");
    });

    return _extends({}, object, _defineProperty({}, propertyToAdd, value));
  };
});