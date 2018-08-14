"use strict";

exports.__esModule = true;
exports.getter = getter;
function getter() {
  return function () {
    wx.$loading.show = false;
  };
};