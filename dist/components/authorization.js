'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _Toast = require('./Toast.js');

var _Toast2 = _interopRequireDefault(_Toast);

var _storageKey = require('./../utils/storageKey.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_wepy$component) {
  _inherits(Auth, _wepy$component);

  function Auth() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Auth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Auth.__proto__ || Object.getPrototypeOf(Auth)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.components = { toast: _Toast2.default }, _this.data = {
      inviteShow: false
    }, _this.methods = {
      closeLayer: function closeLayer() {
        this.inviteShow = false;
      },
      openLayer: function openLayer() {
        this.inviteShow = true;
      },

      /**
       * 授权拿code
       * code调api换accessToken
       * 存用户信息
       */
      goLogin: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var loginInfo, systemInfo, weChat, code, data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(e.detail.errMsg === 'getUserInfo:ok')) {
                    _context.next = 20;
                    break;
                  }

                  _context.next = 3;
                  return _wepy2.default.login();

                case 3:
                  loginInfo = _context.sent;

                  if (!loginInfo.code) {
                    _context.next = 18;
                    break;
                  }

                  _wepy2.default.setStorageSync('userInfo', e.detail.userInfo);
                  systemInfo = _wepy2.default.getSystemInfoSync();

                  _wepy2.default.setStorageSync('sysInfo', systemInfo);
                  _context.next = 10;
                  return _api2.default.WeChatSns({
                    /**
                     * 这里根据后台需要字段配置，
                     * 默认code、appid都传，
                     */
                    parma: {
                      code: loginInfo.code,
                      appid: _wepy2.default.$instance.globalData.appid
                    }
                  });

                case 10:
                  weChat = _context.sent;
                  code = weChat.code, data = weChat.data;

                  if (!(code == '-999')) {
                    _context.next = 14;
                    break;
                  }

                  return _context.abrupt('return', this.$invoke('toast', 'show', '登录过期、请重新登录'));

                case 14:
                  if (!(code !== '1')) {
                    _context.next = 16;
                    break;
                  }

                  return _context.abrupt('return', false);

                case 16:
                  _context.next = 20;
                  break;

                case 18:
                  _utils2.default.error('授权失败');
                  this.inviteShow = true;

                case 20:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function goLogin(_x) {
          return _ref2.apply(this, arguments);
        }

        return goLogin;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Auth;
}(_wepy2.default.component);

exports.default = Auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6YXRpb24uanMiXSwibmFtZXMiOlsiQXV0aCIsInByb3BzIiwiY29tcG9uZW50cyIsInRvYXN0IiwiZGF0YSIsImludml0ZVNob3ciLCJtZXRob2RzIiwiY2xvc2VMYXllciIsIm9wZW5MYXllciIsImdvTG9naW4iLCJlIiwiZGV0YWlsIiwiZXJyTXNnIiwid2VweSIsImxvZ2luIiwibG9naW5JbmZvIiwiY29kZSIsInNldFN0b3JhZ2VTeW5jIiwidXNlckluZm8iLCJzeXN0ZW1JbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJhcGkiLCJXZUNoYXRTbnMiLCJwYXJtYSIsImFwcGlkIiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsIndlQ2hhdCIsIiRpbnZva2UiLCJVIiwiZXJyb3IiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRLEUsUUFFUkMsVSxHQUFhLEVBQUVDLHNCQUFGLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLGtCQUFZO0FBRFAsSyxRQUlQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWCxhQUFLRixVQUFMLEdBQWtCLEtBQWxCO0FBQ0QsT0FITztBQUlSRyxlQUpRLHVCQUlJO0FBQ1YsYUFBS0gsVUFBTCxHQUFrQixJQUFsQjtBQUNELE9BTk87O0FBT1I7Ozs7O0FBS01JLGFBWkU7QUFBQSw2RkFZTUMsQ0FaTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFhRkEsRUFBRUMsTUFBRixDQUFTQyxNQUFULEtBQW9CLGdCQWJsQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlCQWVvQkMsZUFBS0MsS0FBTCxFQWZwQjs7QUFBQTtBQWVFQywyQkFmRjs7QUFBQSx1QkFnQkFBLFVBQVVDLElBaEJWO0FBQUE7QUFBQTtBQUFBOztBQWlCRkgsaUNBQUtJLGNBQUwsQ0FBb0IsVUFBcEIsRUFBZ0NQLEVBQUVDLE1BQUYsQ0FBU08sUUFBekM7QUFDTUMsNEJBbEJKLEdBa0JpQk4sZUFBS08saUJBQUwsRUFsQmpCOztBQW1CRlAsaUNBQUtJLGNBQUwsQ0FBb0IsU0FBcEIsRUFBK0JFLFVBQS9CO0FBbkJFO0FBQUEseUJBb0JtQkUsY0FBSUMsU0FBSixDQUFjO0FBQ2pDOzs7O0FBSUFDLDJCQUFPO0FBQ0xQLDRCQUFNRCxVQUFVQyxJQURYO0FBRUxRLDZCQUFPWCxlQUFLWSxTQUFMLENBQWVDLFVBQWYsQ0FBMEJGO0FBRjVCO0FBTDBCLG1CQUFkLENBcEJuQjs7QUFBQTtBQW9CSUcsd0JBcEJKO0FBOEJJWCxzQkE5QkosR0E4Qm1CVyxNQTlCbkIsQ0E4QklYLElBOUJKLEVBOEJVWixJQTlCVixHQThCbUJ1QixNQTlCbkIsQ0E4QlV2QixJQTlCVjs7QUFBQSx3QkErQkVZLFFBQVEsTUEvQlY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbURBZ0NPLEtBQUtZLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE1BQXRCLEVBQThCLFlBQTlCLENBaENQOztBQUFBO0FBQUEsd0JBaUNFWixTQUFTLEdBakNYO0FBQUE7QUFBQTtBQUFBOztBQUFBLG1EQWlDdUIsS0FqQ3ZCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQW1DRmEsa0NBQUVDLEtBQUYsQ0FBUSxNQUFSO0FBQ0EsdUJBQUt6QixVQUFMLEdBQWtCLElBQWxCOztBQXBDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7RUFSc0JRLGVBQUtrQixTOztrQkFBbEIvQixJIiwiZmlsZSI6ImF1dGhvcml6YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IFUgZnJvbSAnQC91dGlscy91dGlscyc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG5pbXBvcnQgdG9hc3QgZnJvbSAnLi9Ub2FzdCc7XG5pbXBvcnQgeyBUT0tFTiwgRVhQSVJFVE9LRU4gfSBmcm9tICdAL3V0aWxzL3N0b3JhZ2VLZXknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHt9O1xuXG4gIGNvbXBvbmVudHMgPSB7IHRvYXN0IH07XG4gIGRhdGEgPSB7XG4gICAgaW52aXRlU2hvdzogZmFsc2VcbiAgfTtcblxuICBtZXRob2RzID0ge1xuICAgIGNsb3NlTGF5ZXIoKSB7XG4gICAgICB0aGlzLmludml0ZVNob3cgPSBmYWxzZTtcbiAgICB9LFxuICAgIG9wZW5MYXllcigpIHtcbiAgICAgIHRoaXMuaW52aXRlU2hvdyA9IHRydWU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmjojmnYPmi79jb2RlXG4gICAgICogY29kZeiwg2FwaeaNomFjY2Vzc1Rva2VuXG4gICAgICog5a2Y55So5oi35L+h5oGvXG4gICAgICovXG4gICAgYXN5bmMgZ29Mb2dpbihlKSB7XG4gICAgICBpZiAoZS5kZXRhaWwuZXJyTXNnID09PSAnZ2V0VXNlckluZm86b2snKSB7XG4gICAgICAgIC8vIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGxvZ2luSW5mbyA9IGF3YWl0IHdlcHkubG9naW4oKTtcbiAgICAgICAgaWYgKGxvZ2luSW5mby5jb2RlKSB7XG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCBlLmRldGFpbC51c2VySW5mbyk7XG4gICAgICAgICAgY29uc3Qgc3lzdGVtSW5mbyA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdzeXNJbmZvJywgc3lzdGVtSW5mbyk7XG4gICAgICAgICAgY29uc3Qgd2VDaGF0ID0gYXdhaXQgYXBpLldlQ2hhdFNucyh7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi/memHjOagueaNruWQjuWPsOmcgOimgeWtl+autemFjee9ru+8jFxuICAgICAgICAgICAgICog6buY6K6kY29kZeOAgWFwcGlk6YO95Lyg77yMXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBhcm1hOiB7XG4gICAgICAgICAgICAgIGNvZGU6IGxvZ2luSW5mby5jb2RlLFxuICAgICAgICAgICAgICBhcHBpZDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5hcHBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCB7IGNvZGUsIGRhdGEgfSA9IHdlQ2hhdDtcbiAgICAgICAgICBpZiAoY29kZSA9PSAnLTk5OScpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93JywgJ+eZu+W9lei/h+acn+OAgeivt+mHjeaWsOeZu+W9lScpOyAvL+eZu+W9lei/h+acn1xuICAgICAgICAgIGlmIChjb2RlICE9PSAnMScpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBVLmVycm9yKCfmjojmnYPlpLHotKUnKTtcbiAgICAgICAgICB0aGlzLmludml0ZVNob3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19