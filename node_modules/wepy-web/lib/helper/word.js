'use strict';

exports.__esModule = true;

var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = exports.hyphenate = function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};

var camelizeRE = /-(\w)/g;
var camelize = exports.camelize = function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
};