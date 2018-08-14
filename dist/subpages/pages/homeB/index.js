'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Xyz = function (_wepy$page) {
  _inherits(Xyz, _wepy$page);

  function Xyz() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Xyz);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Xyz.__proto__ || Object.getPrototypeOf(Xyz)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      enablePullDownRefresh: true,
      backgroundTextStyle: '#000',
      onReachBottomDistance: 50,
      navigationBarBackgroundColor: '#FFF',
      navigationBarTitleText: '小程序模板',
      navigationBarTextStyle: 'black'
    }, _this.data = {
      customData: {}
    }, _this.components = {}, _this.methods = {}, _this.watch = {
      //监听器适用于当属性改变时需要进行某些额外处理的情形。
      num: function num(newValue, oldValue) {
        console.log('num value: ' + oldValue + ' -> ' + newValue);
      }
    }, _this.computed = {
      //只要是组件中有任何数据发生了改变，那么所有计算属性就都会被重新计算。
      aPlus: function aPlus() {
        return this.a + 1;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Xyz, [{
    key: 'GetAPI',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, code, _res$data, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return api.xxx();

              case 2:
                res = _context.sent;
                code = res.code, _res$data = res.data, data = _res$data === undefined ? {} : _res$data;

                if (!(code != '1')) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return', false);

              case 6:
                Object.assign(this.customData, data);
                this.$apply(); //强制更新视图

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetAPI() {
        return _ref2.apply(this, arguments);
      }

      return GetAPI;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.loadData();

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onPullDownRefresh() {
        return _ref3.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()
  }, {
    key: 'loadData',
    value: function loadData() {
      this.GetAPI();
      wx.stopPullDownRefresh();
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      return {
        title: 'Try训练',
        path: '/pages/home/index',
        imageUrl: '',
        success: function success(s) {},
        fail: function fail(s) {}
      };
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      // this.loadData();
    }
  }]);

  return Xyz;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Xyz , 'subpages/pages/homeB/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlh5eiIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJvblJlYWNoQm90dG9tRGlzdGFuY2UiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJkYXRhIiwiY3VzdG9tRGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwid2F0Y2giLCJudW0iLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29uc29sZSIsImxvZyIsImNvbXB1dGVkIiwiYVBsdXMiLCJhIiwiZXZlbnRzIiwiYXBpIiwieHh4IiwicmVzIiwiY29kZSIsIk9iamVjdCIsImFzc2lnbiIsIiRhcHBseSIsImxvYWREYXRhIiwiR2V0QVBJIiwid3giLCJzdG9wUHVsbERvd25SZWZyZXNoIiwidGl0bGUiLCJwYXRoIiwiaW1hZ2VVcmwiLCJzdWNjZXNzIiwicyIsImZhaWwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsTSxHQUFTO0FBQ1BDLDZCQUF1QixJQURoQjtBQUVQQywyQkFBcUIsTUFGZDtBQUdQQyw2QkFBdUIsRUFIaEI7QUFJUEMsb0NBQThCLE1BSnZCO0FBS1BDLDhCQUF3QixPQUxqQjtBQU1QQyw4QkFBd0I7QUFOakIsSyxRQVNUQyxJLEdBQU87QUFDTEMsa0JBQVk7QUFEUCxLLFFBSVBDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVSxFLFFBRVZDLEssR0FBUTtBQUNOO0FBQ0FDLFNBRk0sZUFFRkMsUUFGRSxFQUVRQyxRQUZSLEVBRWtCO0FBQ3RCQyxnQkFBUUMsR0FBUixpQkFBMEJGLFFBQTFCLFlBQXlDRCxRQUF6QztBQUNEO0FBSkssSyxRQU1SSSxRLEdBQVc7QUFDVDtBQUNBQyxXQUZTLG1CQUVEO0FBQ04sZUFBTyxLQUFLQyxDQUFMLEdBQVMsQ0FBaEI7QUFDRDtBQUpRLEssUUFzQ1hDLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7Ozt1QkE5QlNDLElBQUlDLEdBQUosRTs7O0FBQVpDLG1CO0FBQ0VDLG9CLEdBQW9CRCxHLENBQXBCQyxJLGNBQW9CRCxHLENBQWRoQixJLEVBQUFBLEksNkJBQU8sRTs7c0JBQ2ZpQixRQUFRLEc7Ozs7O2lEQUFZLEs7OztBQUN4QkMsdUJBQU9DLE1BQVAsQ0FBYyxLQUFLbEIsVUFBbkIsRUFBK0JELElBQS9CO0FBQ0EscUJBQUtvQixNQUFMLEcsQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWYscUJBQUtDLFFBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFHUztBQUNULFdBQUtDLE1BQUw7QUFDQUMsU0FBR0MsbUJBQUg7QUFDRDs7O3dDQUVtQjtBQUNsQixhQUFPO0FBQ0xDLGVBQU8sT0FERjtBQUVMQyxpQ0FGSztBQUdMQyxrQkFBVSxFQUhMO0FBSUxDLGVBSkssbUJBSUdDLENBSkgsRUFJTSxDQUFFLENBSlI7QUFLTEMsWUFMSyxnQkFLQUQsQ0FMQSxFQUtHLENBQUU7QUFMTCxPQUFQO0FBT0Q7Ozs2QkFFUTtBQUNQO0FBQ0Q7Ozs7RUE1RDhCRSxlQUFLQyxJOztrQkFBakJ4QyxHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBob21lIGZyb20gJ0AvYXBpL2FwaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFh5eiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXG4gICAgYmFja2dyb3VuZFRleHRTdHlsZTogJyMwMDAnLFxuICAgIG9uUmVhY2hCb3R0b21EaXN0YW5jZTogNTAsXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflsI/nqIvluo/mqKHmnb8nLFxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgfTtcblxuICBkYXRhID0ge1xuICAgIGN1c3RvbURhdGE6IHt9XG4gIH07XG5cbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7fTtcblxuICB3YXRjaCA9IHtcbiAgICAvL+ebkeWQrOWZqOmAgueUqOS6juW9k+WxnuaAp+aUueWPmOaXtumcgOimgei/m+ihjOafkOS6m+mineWkluWkhOeQhueahOaDheW9ouOAglxuICAgIG51bShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBudW0gdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YCk7XG4gICAgfVxuICB9O1xuICBjb21wdXRlZCA9IHtcbiAgICAvL+WPquimgeaYr+e7hOS7tuS4reacieS7u+S9leaVsOaNruWPkeeUn+S6huaUueWPmO+8jOmCo+S5iOaJgOacieiuoeeul+WxnuaAp+WwsemDveS8muiiq+mHjeaWsOiuoeeul+OAglxuICAgIGFQbHVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYSArIDE7XG4gICAgfVxuICB9O1xuXG4gIGFzeW5jIEdldEFQSSgpIHtcbiAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnh4eCgpO1xuICAgIGxldCB7IGNvZGUsIGRhdGEgPSB7fSB9ID0gcmVzO1xuICAgIGlmIChjb2RlICE9ICcxJykgcmV0dXJuIGZhbHNlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jdXN0b21EYXRhLCBkYXRhKTtcbiAgICB0aGlzLiRhcHBseSgpOyAvL+W8uuWItuabtOaWsOinhuWbvlxuICB9XG5cbiAgYXN5bmMgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgdGhpcy5sb2FkRGF0YSgpO1xuICB9XG5cbiAgbG9hZERhdGEoKSB7XG4gICAgdGhpcy5HZXRBUEkoKTtcbiAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdUcnnorq3nu4MnLFxuICAgICAgcGF0aDogYC9wYWdlcy9ob21lL2luZGV4YCxcbiAgICAgIGltYWdlVXJsOiAnJyxcbiAgICAgIHN1Y2Nlc3Mocykge30sXG4gICAgICBmYWlsKHMpIHt9XG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICAvLyB0aGlzLmxvYWREYXRhKCk7XG4gIH1cblxuICBldmVudHMgPSB7fTtcbn1cbiJdfQ==