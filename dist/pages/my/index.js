'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _utils = require('./../../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _storageKey = require('./../../utils/storageKey.js');

var _authorization = require('./../../components/authorization.js');

var _authorization2 = _interopRequireDefault(_authorization);

var _Toast = require('./../../components/Toast.js');

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var My = function (_wepy$page) {
  _inherits(My, _wepy$page);

  function My() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, My);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      enablePullDownRefresh: false,
      backgroundTextStyle: '#000',
      onReachBottomDistance: 50,
      navigationBarBackgroundColor: '#FFF',
      navigationBarTitleText: '我的',
      navigationBarTextStyle: 'black'
    }, _this2.components = { authorization: _authorization2.default, toast: _Toast2.default }, _this2.data = {
      authShow: false,
      userInfo: {},
      windowHeight: wx.getSystemInfoSync().windowHeight * 2 - 120 + 'rpx',
      x: 64 + 'rpx',
      y: 80 + 'rpx'
    }, _this2.mixins = [_Toast2.default.mixin], _this2.watch = {
      //监听器适用于当属性改变时需要进行某些额外处理的情形。
      x: function x(newValue, oldValue) {
        this.x = 64 + 'rpx';
        this.y = 80 + 'rpx';
        this.$apply();
      },
      y: function y(newValue, oldValue) {
        this.x = 64 + 'rpx';
        this.y = 80 + 'rpx';
        this.$apply();
      }
    }, _this2.methods = {
      closeLayer: function closeLayer() {
        this.authShow = false;
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(My, [{
    key: 'htouchmove',
    value: function htouchmove(e) {
      if (e.detail.source == 'friction' || e.detail.x == '0' || e.detail.x >= '291') {
        this.x = e.detail.x * 2 + 'rpx';
        this.y = e.detail.y * 2 + 'rpx';
        this.$apply();
      }
    }
  }, {
    key: 'login',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var warningTip;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.authShow = true;
                _context.next = 3;
                return this.$warningTip('现在是伪登录,快将登录代码解封吧!', {
                  duration: 3000
                });

              case 3:
                warningTip = _context.sent;

                this.$apply();
                // 登录授权弹层
                // this.$invoke('authorization', 'openLayer');

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _ref2.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'auth',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var _this, login, sys;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = this;

                if (!(e.detail.errMsg == 'getUserInfo:ok')) {
                  _context2.next = 8;
                  break;
                }

                this.userInfo = e.detail.userInfo;
                _context2.next = 5;
                return _wepy2.default.login();

              case 5:
                login = _context2.sent;
                sys = _wepy2.default.getSystemInfoSync();

                if (login.code) {
                  _wepy2.default.setStorageSync('userInfo', e.detail.userInfo);
                  _wepy2.default.setStorageSync('sysInfo', sys);
                  wx.checkSession({
                    success: function success() {
                      //session_key 未过期，并且在本生命周期一直有效
                      _this.authShow = false;
                      _this.$apply();
                      _wepy2.default.switchTab({
                        url: '/pages/home/index'
                      });
                    },
                    fail: function fail() {
                      // session_key 已经失效，需要重新执行登录流程
                      _this.$invoke('toast', 'show', 'session_key失效');
                      _wepy2.default.login(); //重新登录
                    }
                  });
                }

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function auth(_x) {
        return _ref3.apply(this, arguments);
      }

      return auth;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this, setting;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this = this;
                _context3.next = 3;
                return _wepy2.default.getSetting();

              case 3:
                setting = _context3.sent;

                wx.getNetworkType({
                  success: function success(res) {
                    var networkType = res.networkType;
                    if (networkType == 'none') {
                      _this.$invoke('toast', 'show', '无网络，请稍后重试');
                    } else {
                      if (setting.authSetting['scope.userInfo']) {
                        _this.userInfo = _wepy2.default.getStorageSync('userInfo');
                        _this.$apply();
                      } else {
                        _this.login();
                      }
                    }
                  }
                });
                wx.onNetworkStatusChange(function (res) {
                  res.isConnected && _this.login();
                });

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad() {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return My;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(My , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk15IiwiY29uZmlnIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm9uUmVhY2hCb3R0b21EaXN0YW5jZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImNvbXBvbmVudHMiLCJhdXRob3JpemF0aW9uIiwidG9hc3QiLCJkYXRhIiwiYXV0aFNob3ciLCJ1c2VySW5mbyIsIndpbmRvd0hlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ4IiwieSIsIm1peGlucyIsIm1peGluIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiJGFwcGx5IiwibWV0aG9kcyIsImNsb3NlTGF5ZXIiLCJlIiwiZGV0YWlsIiwic291cmNlIiwiJHdhcm5pbmdUaXAiLCJkdXJhdGlvbiIsIndhcm5pbmdUaXAiLCJfdGhpcyIsImVyck1zZyIsIndlcHkiLCJsb2dpbiIsInN5cyIsImNvZGUiLCJzZXRTdG9yYWdlU3luYyIsImNoZWNrU2Vzc2lvbiIsInN1Y2Nlc3MiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJmYWlsIiwiJGludm9rZSIsImdldFNldHRpbmciLCJzZXR0aW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJyZXMiLCJuZXR3b3JrVHlwZSIsImF1dGhTZXR0aW5nIiwiZ2V0U3RvcmFnZVN5bmMiLCJvbk5ldHdvcmtTdGF0dXNDaGFuZ2UiLCJpc0Nvbm5lY3RlZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxFOzs7Ozs7Ozs7Ozs7OztpTEFDbkJDLE0sR0FBUztBQUNQQyw2QkFBdUIsS0FEaEI7QUFFUEMsMkJBQXFCLE1BRmQ7QUFHUEMsNkJBQXVCLEVBSGhCO0FBSVBDLG9D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SCxDQUFrQjtBQUNoQlAseUJBRGdCLG1CQUNSUSxHQURRLEVBQ0g7QUFDWCx3QkFBSUMsY0FBY0QsSUFBSUMsV0FBdEI7QUFDQSx3QkFBSUEsZUFBZSxNQUFuQixFQUEyQjtBQUN6QmpCLDRCQUFNWSxPQUFOLENBQWMsT0FBZCxFQUF1QixNQUF2QixFQUErQixXQUEvQjtBQUNELHFCQUZELE1BRU87QUFDTCwwQkFBSUUsUUFBUUksV0FBUixDQUFvQixnQkFBcEIsQ0FBSixFQUEyQztBQUN6Q2xCLDhCQUFNcEIsUUFBTixHQUFpQnNCLGVBQUtpQixjQUFMLENBQW9CLFVBQXBCLENBQWpCO0FBQ0FuQiw4QkFBTVQsTUFBTjtBQUNELHVCQUhELE1BR087QUFDTFMsOEJBQU1HLEtBQU47QUFDRDtBQUNGO0FBQ0Y7QUFiZSxpQkFBbEI7QUFlQXJCLG1CQUFHc0MscUJBQUgsQ0FBeUIsVUFBU0osR0FBVCxFQUFjO0FBQ3JDQSxzQkFBSUssV0FBSixJQUFtQnJCLE1BQU1HLEtBQU4sRUFBbkI7QUFDRCxpQkFGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUtPLENBQUU7Ozs7RUFuSG1CRCxlQUFLb0IsSTs7a0JBQWhCdkQsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IGhvbWUgZnJvbSAnQC9hcGkvYXBpJztcclxuaW1wb3J0IFUgZnJvbSAnQC91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IElTTE9HSU4gfSBmcm9tICdAL3V0aWxzL3N0b3JhZ2VLZXknO1xyXG5pbXBvcnQgYXV0aG9yaXphdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvYXV0aG9yaXphdGlvbic7XHJcbmltcG9ydCB0b2FzdCBmcm9tICdAL2NvbXBvbmVudHMvVG9hc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2UsXHJcbiAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnIzAwMCcsXHJcbiAgICBvblJlYWNoQm90dG9tRGlzdGFuY2U6IDUwLFxyXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCcsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50cyA9IHsgYXV0aG9yaXphdGlvbiwgdG9hc3QgfTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGF1dGhTaG93OiBmYWxzZSxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIHdpbmRvd0hlaWdodDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQgKiAyIC0gMTIwICsgJ3JweCcsXHJcbiAgICB4OiA2NCArICdycHgnLFxyXG4gICAgeTogODAgKyAncnB4J1xyXG4gIH07XHJcbiAgXHJcbiAgbWl4aW5zID0gW3RvYXN0Lm1peGluXTtcclxuXHJcbiAgd2F0Y2ggPSB7XHJcbiAgICAvL+ebkeWQrOWZqOmAgueUqOS6juW9k+WxnuaAp+aUueWPmOaXtumcgOimgei/m+ihjOafkOS6m+mineWkluWkhOeQhueahOaDheW9ouOAglxyXG4gICAgeChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgdGhpcy54ID0gNjQgKyAncnB4JztcclxuICAgICAgdGhpcy55ID0gODAgKyAncnB4JztcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH0sXHJcbiAgICB5KG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnggPSA2NCArICdycHgnO1xyXG4gICAgICB0aGlzLnkgPSA4MCArICdycHgnO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGh0b3VjaG1vdmUoZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBlLmRldGFpbC5zb3VyY2UgPT0gJ2ZyaWN0aW9uJyB8fFxyXG4gICAgICBlLmRldGFpbC54ID09ICcwJyB8fFxyXG4gICAgICBlLmRldGFpbC54ID49ICcyOTEnXHJcbiAgICApIHtcclxuICAgICAgdGhpcy54ID0gZS5kZXRhaWwueCAqIDIgKyAncnB4JztcclxuICAgICAgdGhpcy55ID0gZS5kZXRhaWwueSAqIDIgKyAncnB4JztcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBjbG9zZUxheWVyKCkge1xyXG4gICAgICB0aGlzLmF1dGhTaG93ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICB0aGlzLmF1dGhTaG93ID0gdHJ1ZTtcclxuICAgIGxldCB3YXJuaW5nVGlwID0gYXdhaXQgdGhpcy4kd2FybmluZ1RpcCgn546w5Zyo5piv5Lyq55m75b2VLOW/q+WwhueZu+W9leS7o+eggeino+WwgeWQpyEnLCB7XHJcbiAgICAgIGR1cmF0aW9uOiAzMDAwXHJcbiAgICB9KTtcclxuICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAvLyDnmbvlvZXmjojmnYPlvLnlsYJcclxuICAgIC8vIHRoaXMuJGludm9rZSgnYXV0aG9yaXphdGlvbicsICdvcGVuTGF5ZXInKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGF1dGgoZSkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGlmIChlLmRldGFpbC5lcnJNc2cgPT0gJ2dldFVzZXJJbmZvOm9rJykge1xyXG4gICAgICB0aGlzLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm87XHJcbiAgICAgIGNvbnN0IGxvZ2luID0gYXdhaXQgd2VweS5sb2dpbigpO1xyXG4gICAgICBjb25zdCBzeXMgPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgIGlmIChsb2dpbi5jb2RlKSB7XHJcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCBlLmRldGFpbC51c2VySW5mbyk7XHJcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnc3lzSW5mbycsIHN5cyk7XHJcbiAgICAgICAgd3guY2hlY2tTZXNzaW9uKHtcclxuICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgIC8vc2Vzc2lvbl9rZXkg5pyq6L+H5pyf77yM5bm25LiU5Zyo5pys55Sf5ZG95ZGo5pyf5LiA55u05pyJ5pWIXHJcbiAgICAgICAgICAgIF90aGlzLmF1dGhTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF90aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB3ZXB5LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2hvbWUvaW5kZXgnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgICAgIC8vIHNlc3Npb25fa2V5IOW3sue7j+WkseaViO+8jOmcgOimgemHjeaWsOaJp+ihjOeZu+W9lea1geeoi1xyXG4gICAgICAgICAgICBfdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93JywgJ3Nlc3Npb25fa2V55aSx5pWIJyk7XHJcbiAgICAgICAgICAgIHdlcHkubG9naW4oKTsgLy/ph43mlrDnmbvlvZVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBzZXR0aW5nID0gYXdhaXQgd2VweS5nZXRTZXR0aW5nKCk7XHJcbiAgICB3eC5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgbGV0IG5ldHdvcmtUeXBlID0gcmVzLm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIGlmIChuZXR3b3JrVHlwZSA9PSAnbm9uZScpIHtcclxuICAgICAgICAgIF90aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCAn5peg572R57uc77yM6K+356iN5ZCO6YeN6K+VJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChzZXR0aW5nLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnVzZXJJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKTtcclxuICAgICAgICAgICAgX3RoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfdGhpcy5sb2dpbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3eC5vbk5ldHdvcmtTdGF0dXNDaGFuZ2UoZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgIHJlcy5pc0Nvbm5lY3RlZCAmJiBfdGhpcy5sb2dpbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblNob3coKSB7fVxyXG59XHJcbiJdfQ==