'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _authorization = require('./../../components/authorization.js');

var _authorization2 = _interopRequireDefault(_authorization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      enablePullDownRefresh: true,
      backgroundTextStyle: '#000',
      onReachBottomDistance: 50,
      navigationBarBackgroundColor: '#FFF',
      navigationBarTitleText: '首页',
      navigationBarTextStyle: 'black'
    }, _this.data = {
      src: '',
      imgList: [],
      customData: {}
    }, _this.components = {
      toast: _authorization2.default,
      authorization: _authorization2.default
    }, _this.methods = {
      previewImage: function previewImage(src) {
        wx.previewImage({ current: src, urls: this.imgList });
      },
      takePhoto: function takePhoto() {
        var _this2 = this;

        var ctx = wx.createCameraContext();
        ctx.takePhoto({
          quality: 'high',
          success: function success(res) {
            _this2.imgList.push(res.tempImagePath);
            _this2.src = res.tempImagePath;
            _this2.$apply();
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'cameraError',
    value: function cameraError(e) {
      console.log(e.detail);
    }
  }, {
    key: 'GetAPI',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, code, _res$data, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.xxx();

              case 2:
                res = _context.sent;
                code = res.code, _res$data = res.data, data = _res$data === undefined ? {} : _res$data;

                if (!(code !== '1')) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return', false);

              case 6:
                // 浅拷贝，如有需要，自行处理data后再传入
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

    /**
     * 前页面调用多个接口加载数据，用loadData为了简化
     * 方便刷新接口
     */

  }, {
    key: 'loadData',
    value: function loadData() {
      // this.GetAPI();
      wx.stopPullDownRefresh();
    }
  }, {
    key: 'login',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.$invoke('authorization', 'openLayer');
                this.loadData();

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function login() {
        return _ref4.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      // let _this = this;
      // wx.getNetworkType({
      //   success(res) {
      //     let networkType = res.networkType;
      //     if (networkType == 'none') {
      //       _this.$invoke('toast', 'show', '无网络，请稍后重试');
      //     } else {
      //       _this.login();
      //     }
      //   }
      // });
      // wx.onNetworkStatusChange(function(res) {
      //   res.isConnected && _this.login();
      // });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwib25SZWFjaEJvdHRvbURpc3RhbmNlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZGF0YSIsInNyYyIsImltZ0xpc3QiLCJjdXN0b21EYXRhIiwiY29tcG9uZW50cyIsInRvYXN0IiwiYXV0aG9yaXphdGlvbiIsIm1ldGhvZHMiLCJwcmV2aWV3SW1hZ2UiLCJ3eCIsImN1cnJlbnQiLCJ1cmxzIiwidGFrZVBob3RvIiwiY3R4IiwiY3JlYXRlQ2FtZXJhQ29udGV4dCIsInF1YWxpdHkiLCJzdWNjZXNzIiwicHVzaCIsInJlcyIsInRlbXBJbWFnZVBhdGgiLCIkYXBwbHkiLCJldmVudHMiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImFwaSIsInh4eCIsImNvZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJsb2FkRGF0YSIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkaW52b2tlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDZCQUF1QixJQURoQjtBQUVQQywyQkFBcUIsTUFGZDtBQUdQQyw2QkFBdUIsRUFIaEI7QUFJUEMsb0NBQThCLE1BSnZCO0FBS1BDLDhCQUF3QixJQUxqQjtBQU1QQyw4QkFBd0I7QUFOakIsSyxRQVNUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGVBQVMsRUFGSjtBQUdMQyxrQkFBWTtBQUhQLEssUUFNUEMsVSxHQUFhO0FBQ1hDLG9DQURXO0FBRVhDO0FBRlcsSyxRQUtiQyxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ0tQLEdBREwsRUFDVTtBQUNoQlEsV0FBR0QsWUFBSCxDQUFnQixFQUFFRSxTQUFTVCxHQUFYLEVBQWdCVSxNQUFNLEtBQUtULE9BQTNCLEVBQWhCO0FBQ0QsT0FITztBQUlSVSxlQUpRLHVCQUlJO0FBQUE7O0FBQ1YsWUFBTUMsTUFBTUosR0FBR0ssbUJBQUgsRUFBWjtBQUNBRCxZQUFJRCxTQUFKLENBQWM7QUFDWkcsbUJBQVMsTUFERztBQUVaQyxtQkFBUyxzQkFBTztBQUNkLG1CQUFLZCxPQUFMLENBQWFlLElBQWIsQ0FBa0JDLElBQUlDLGFBQXRCO0FBQ0EsbUJBQUtsQixHQUFMLEdBQVdpQixJQUFJQyxhQUFmO0FBQ0EsbUJBQUtDLE1BQUw7QUFDRDtBQU5XLFNBQWQ7QUFRRDtBQWRPLEssUUFpRVZDLE0sR0FBUyxFOzs7OztnQ0FoREdDLEMsRUFBRztBQUNiQyxjQUFRQyxHQUFSLENBQVlGLEVBQUVHLE1BQWQ7QUFDRDs7Ozs7Ozs7Ozs7O3VCQUdpQkMsY0FBSUMsR0FBSixFOzs7QUFBWlQsbUI7QUFDRVUsb0IsR0FBb0JWLEcsQ0FBcEJVLEksY0FBb0JWLEcsQ0FBZGxCLEksRUFBQUEsSSw2QkFBTyxFOztzQkFDZjRCLFNBQVMsRzs7Ozs7aURBQVksSzs7O0FBQ3pCO0FBQ0FDLHVCQUFPQyxNQUFQLENBQWMsS0FBSzNCLFVBQW5CLEVBQStCSCxJQUEvQjtBQUNBLHFCQUFLb0IsTUFBTCxHLENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlmLHFCQUFLVyxRQUFMOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs7OytCQUlXO0FBQ1Q7QUFDQXRCLFNBQUd1QixtQkFBSDtBQUNEOzs7Ozs7Ozs7QUFHQyxxQkFBS0MsT0FBTCxDQUFhLGVBQWIsRUFBOEIsV0FBOUI7QUFDQSxxQkFBS0YsUUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBcEYrQkcsZUFBS0MsSTs7a0JBQWxCM0MsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGkuanMnO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSAnQC9jb21wb25lbnRzL2F1dGhvcml6YXRpb24nO1xyXG5pbXBvcnQgYXV0aG9yaXphdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXHJcbiAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnIzAwMCcsXHJcbiAgICBvblJlYWNoQm90dG9tRGlzdGFuY2U6IDUwLFxyXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtScsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgfTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIHNyYzogJycsXHJcbiAgICBpbWdMaXN0OiBbXSxcclxuICAgIGN1c3RvbURhdGE6IHt9XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIHRvYXN0LFxyXG4gICAgYXV0aG9yaXphdGlvblxyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBwcmV2aWV3SW1hZ2Uoc3JjKSB7XHJcbiAgICAgIHd4LnByZXZpZXdJbWFnZSh7IGN1cnJlbnQ6IHNyYywgdXJsczogdGhpcy5pbWdMaXN0IH0pO1xyXG4gICAgfSxcclxuICAgIHRha2VQaG90bygpIHtcclxuICAgICAgY29uc3QgY3R4ID0gd3guY3JlYXRlQ2FtZXJhQ29udGV4dCgpO1xyXG4gICAgICBjdHgudGFrZVBob3RvKHtcclxuICAgICAgICBxdWFsaXR5OiAnaGlnaCcsXHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1nTGlzdC5wdXNoKHJlcy50ZW1wSW1hZ2VQYXRoKTtcclxuICAgICAgICAgIHRoaXMuc3JjID0gcmVzLnRlbXBJbWFnZVBhdGg7XHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY2FtZXJhRXJyb3IoZSkge1xyXG4gICAgY29uc29sZS5sb2coZS5kZXRhaWwpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgR2V0QVBJKCkge1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGFwaS54eHgoKTtcclxuICAgIGxldCB7IGNvZGUsIGRhdGEgPSB7fSB9ID0gcmVzO1xyXG4gICAgaWYgKGNvZGUgIT09ICcxJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8g5rWF5ou36LSd77yM5aaC5pyJ6ZyA6KaB77yM6Ieq6KGM5aSE55CGZGF0YeWQjuWGjeS8oOWFpVxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmN1c3RvbURhdGEsIGRhdGEpO1xyXG4gICAgdGhpcy4kYXBwbHkoKTsgLy/lvLrliLbmm7TmlrDop4blm75cclxuICB9XHJcblxyXG4gIGFzeW5jIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YmN6aG16Z2i6LCD55So5aSa5Liq5o6l5Y+j5Yqg6L295pWw5o2u77yM55SobG9hZERhdGHkuLrkuobnroDljJZcclxuICAgKiDmlrnkvr/liLfmlrDmjqXlj6NcclxuICAgKi9cclxuICBsb2FkRGF0YSgpIHtcclxuICAgIC8vIHRoaXMuR2V0QVBJKCk7XHJcbiAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2dpbigpIHtcclxuICAgIHRoaXMuJGludm9rZSgnYXV0aG9yaXphdGlvbicsICdvcGVuTGF5ZXInKTtcclxuICAgIHRoaXMubG9hZERhdGEoKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIC8vIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICAvLyB3eC5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAvLyAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAvLyAgICAgbGV0IG5ldHdvcmtUeXBlID0gcmVzLm5ldHdvcmtUeXBlO1xyXG4gICAgLy8gICAgIGlmIChuZXR3b3JrVHlwZSA9PSAnbm9uZScpIHtcclxuICAgIC8vICAgICAgIF90aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCAn5peg572R57uc77yM6K+356iN5ZCO6YeN6K+VJyk7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIF90aGlzLmxvZ2luKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIHd4Lm9uTmV0d29ya1N0YXR1c0NoYW5nZShmdW5jdGlvbihyZXMpIHtcclxuICAgIC8vICAgcmVzLmlzQ29ubmVjdGVkICYmIF90aGlzLmxvZ2luKCk7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIGV2ZW50cyA9IHt9O1xyXG59XHJcbiJdfQ==