(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './addProperty', './deleteProperty'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./addProperty'), require('./deleteProperty'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.addProperty, global.deleteProperty);
    global.index = mod.exports;
  }
})(this, function (exports, _addProperty, _deleteProperty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_addProperty).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _addProperty[key];
      }
    });
  });
  Object.keys(_deleteProperty).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _deleteProperty[key];
      }
    });
  });
});