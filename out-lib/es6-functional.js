"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var forEach = exports.forEach = function forEach(array, fn) {
  var i = void 0;
  for (i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};