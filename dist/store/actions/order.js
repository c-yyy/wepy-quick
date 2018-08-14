'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeOrderAll = exports.removeOrder = exports.addOrder = undefined;

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _order = require('./../types/order.js');

var addOrder = exports.addOrder = (0, _reduxActions.createAction)(_order.ADD, function (data) {
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(1)
  //   }, 1000)
  // })
  return data;
});

var removeOrder = exports.removeOrder = (0, _reduxActions.createAction)(_order.REMOVE, function (index) {

  return index;
});

var removeOrderAll = exports.removeOrderAll = (0, _reduxActions.createAction)(_order.REMOVEALL, function () {

  return '';
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbImFkZE9yZGVyIiwiQUREIiwiZGF0YSIsInJlbW92ZU9yZGVyIiwiUkVNT1ZFIiwiaW5kZXgiLCJyZW1vdmVPcmRlckFsbCIsIlJFTU9WRUFMTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUdPLElBQU1BLDhCQUFXLGdDQUFhQyxVQUFiLEVBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBT0EsSUFBUDtBQUNELENBUHVCLENBQWpCOztBQVNBLElBQU1DLG9DQUFjLGdDQUFhQyxhQUFiLEVBQXFCLFVBQUNDLEtBQUQsRUFBVzs7QUFFekQsU0FBT0EsS0FBUDtBQUNELENBSDBCLENBQXBCOztBQU1BLElBQU1DLDBDQUFpQixnQ0FBYUMsZ0JBQWIsRUFBd0IsWUFBTTs7QUFFMUQsU0FBTyxFQUFQO0FBQ0QsQ0FINkIsQ0FBdkIiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuaW1wb3J0IHsgQURELCBSRU1PVkUsIFJFTU9WRUFMTCB9IGZyb20gJy4uL3R5cGVzL29yZGVyJ1xuXG5cbmV4cG9ydCBjb25zdCBhZGRPcmRlciA9IGNyZWF0ZUFjdGlvbihBREQsIChkYXRhKSA9PiB7XG4gIC8vIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgIHJlc29sdmUoMSlcbiAgLy8gICB9LCAxMDAwKVxuICAvLyB9KVxuICByZXR1cm4gZGF0YVxufSlcblxuZXhwb3J0IGNvbnN0IHJlbW92ZU9yZGVyID0gY3JlYXRlQWN0aW9uKFJFTU9WRSwgKGluZGV4KSA9PiB7XG5cbiAgcmV0dXJuIGluZGV4XG59KVxuXG5cbmV4cG9ydCBjb25zdCByZW1vdmVPcmRlckFsbCA9IGNyZWF0ZUFjdGlvbihSRU1PVkVBTEwsICgpID0+IHtcblxuICByZXR1cm4gJydcbn0pXG4iXX0=