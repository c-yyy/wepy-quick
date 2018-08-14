'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _order = require('./../types/order.js');

var _utils = require('./../../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _order.SET, function (state) {
  return _extends({}, state, {
    orderData: state.orderData.push()
  });
}), _defineProperty(_handleActions, _order.ADD, function (state, action) {
  _utils2.default.success('已加入购物车');
  return _extends({}, state, {
    orderData: [].concat(_toConsumableArray(state.orderData), [action.payload])
  });
}), _defineProperty(_handleActions, _order.REMOVE, function (state, action) {
  var orderData = [].concat(_toConsumableArray(state.orderData));
  orderData.splice(action.payload, 1);
  return _extends({}, state, {
    orderData: orderData
  });
}), _defineProperty(_handleActions, _order.REMOVEALL, function (state) {
  return _extends({}, state, {
    orderData: []
  });
}), _handleActions), {
  orderData: [],
  orderData2: [{ cname: '1', iprice: 'dd', capplyaddr: '上海' }, { cname: '2', iprice: 'dd', capplyaddr: '上海' }]

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIlNFVCIsInN0YXRlIiwib3JkZXJEYXRhIiwicHVzaCIsIkFERCIsImFjdGlvbiIsInV0aWwiLCJzdWNjZXNzIiwicGF5bG9hZCIsIlJFTU9WRSIsInNwbGljZSIsIlJFTU9WRUFMTCIsIm9yZGVyRGF0YTIiLCJjbmFtZSIsImlwcmljZSIsImNhcHBseWFkZHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztrQkFFZSx1RkFDWkEsVUFEWSxZQUNOQyxLQURNLEVBQ0M7QUFDWixzQkFDS0EsS0FETDtBQUVFQyxlQUFXRCxNQUFNQyxTQUFOLENBQWdCQyxJQUFoQjtBQUZiO0FBSUQsQ0FOWSxtQ0FPWkMsVUFQWSxZQU9OSCxLQVBNLEVBT0NJLE1BUEQsRUFPUztBQUNwQkMsa0JBQUtDLE9BQUwsQ0FBYSxRQUFiO0FBQ0Esc0JBQ0tOLEtBREw7QUFFRUMsNENBQWVELE1BQU1DLFNBQXJCLElBQWdDRyxPQUFPRyxPQUF2QztBQUZGO0FBSUQsQ0FiWSxtQ0FjWkMsYUFkWSxZQWNIUixLQWRHLEVBY0lJLE1BZEosRUFjWTtBQUN2QixNQUFJSCx5Q0FBZ0JELE1BQU1DLFNBQXRCLEVBQUo7QUFDQUEsWUFBVVEsTUFBVixDQUFpQkwsT0FBT0csT0FBeEIsRUFBaUMsQ0FBakM7QUFDQSxzQkFDS1AsS0FETDtBQUVFQyxlQUFXQTtBQUZiO0FBSUQsQ0FyQlksbUNBc0JaUyxnQkF0QlksWUFzQkFWLEtBdEJBLEVBc0JPO0FBQ2xCLHNCQUNLQSxLQURMO0FBRUVDLGVBQVc7QUFGYjtBQUlELENBM0JZLG9CQTRCWjtBQUNEQSxhQUFXLEVBRFY7QUFFRFUsY0FBWSxDQUNWLEVBQUNDLE9BQU0sR0FBUCxFQUFZQyxRQUFPLElBQW5CLEVBQXlCQyxZQUFXLElBQXBDLEVBRFUsRUFFUixFQUFDRixPQUFNLEdBQVAsRUFBWUMsUUFBTyxJQUFuQixFQUF5QkMsWUFBVyxJQUFwQyxFQUZROztBQUZYLENBNUJZLEMiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcbmltcG9ydCB7IFNFVCwgQURELCBSRU1PVkUsIFJFTU9WRUFMTCB9IGZyb20gJy4uL3R5cGVzL29yZGVyJ1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbU0VUXSAoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBvcmRlckRhdGE6IHN0YXRlLm9yZGVyRGF0YS5wdXNoKClcbiAgICB9XG4gIH0sXG4gIFtBRERdIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgdXRpbC5zdWNjZXNzKCflt7LliqDlhaXotK3nianovaYnKVxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG9yZGVyRGF0YTogWy4uLnN0YXRlLm9yZGVyRGF0YSwgYWN0aW9uLnBheWxvYWRdXG4gICAgfVxuICB9LFxuICBbUkVNT1ZFXSAoc3RhdGUsIGFjdGlvbikge1xuICAgIGxldCBvcmRlckRhdGEgPSBbLi4uc3RhdGUub3JkZXJEYXRhXVxuICAgIG9yZGVyRGF0YS5zcGxpY2UoYWN0aW9uLnBheWxvYWQsIDEpXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgb3JkZXJEYXRhOiBvcmRlckRhdGFcbiAgICB9XG4gIH0sXG4gIFtSRU1PVkVBTExdIChzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG9yZGVyRGF0YTogW11cbiAgICB9XG4gIH0sXG59LCB7XG4gIG9yZGVyRGF0YTogW10sXG4gIG9yZGVyRGF0YTI6IFtcbiAgICB7Y25hbWU6JzEnLCBpcHJpY2U6J2RkJywgY2FwcGx5YWRkcjon5LiK5rW3J30sXG4gICAgICB7Y25hbWU6JzInLCBpcHJpY2U6J2RkJywgY2FwcGx5YWRkcjon5LiK5rW3J30sXG4gIF1cbiAgICBcbiAgXG59KSJdfQ==