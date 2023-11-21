"use strict";

var target = {
  _id: '1024',
  name: 'vuejs'
};
var validators = {
  name: function name(val) {
    return typeof val === 'string';
  },
  _id: function _id(val) {
    return typeof val === 'number' && val > 1024;
  }
};

var createValidator = function createValidator(target, validator) {
  return new Proxy(target, {
    _validator: validator,
    set: function set(target, propkey, value, proxy) {
      var validator = this._validator[propkey](value);

      if (validator) {
        return Reflect.set(target, propkey, value, proxy);
      } else {
        throw Error("Cannot set ".concat(propkey, " to ").concat(value, ". Invalid type."));
      }
    }
  });
};

var proxy = createValidator(target, validators);
proxy.name = 'vue-js.com'; // vue-js.com

proxy.name = 10086; // Uncaught Error: Cannot set name to 10086. Invalid type.

proxy._id = 1025; // 1025

proxy._id = 22; // Uncaught Error: Cannot set _id to 22. Invalid type