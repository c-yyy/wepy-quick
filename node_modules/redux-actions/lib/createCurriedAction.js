'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('lodash/curry');

var _curry2 = _interopRequireDefault(_curry);

var _createAction = require('./createAction');

var _createAction2 = _interopRequireDefault(_createAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (type, payloadCreator) {
  return (0, _curry2.default)((0, _createAction2.default)(type, payloadCreator), payloadCreator.length);
};