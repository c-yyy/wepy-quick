'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _utils = require('./utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

var _storageKey = require('./utils/storageKey.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var APP = function (_wepy$app) {
  _inherits(APP, _wepy$app);

  function APP() {
    _classCallCheck(this, APP);

    var _this = _possibleConstructorReturn(this, (APP.__proto__ || Object.getPrototypeOf(APP)).call(this));

    _this.config = {
      pages: ['pages/my/index', 'pages/home/index'],
      /**
       * 若需求页面过多，首页需要优化加载速度可以试试分包(tip:总包小于10M)
       * 配置如下，项目目录结构务必如下(tip:静态资源也能分离过去)
       */
      subPackages: [{
        root: 'subpages',
        pages: ['pages/homeB/index']
      }],
      window: {
        backgroundTextStyle: 'light',
        backgroundColor: '#f5f5f5',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        selectedColor: '#000',
        color: '#A7A7A7',
        list: [{
          pagePath: 'pages/home/index',
          text: '首页',
          iconPath: 'images/home.png',
          selectedIconPath: 'images/home_active.png'
        }, {
          pagePath: 'pages/my/index',
          text: '我',
          iconPath: 'images/me.png',
          selectedIconPath: 'images/me_active.png'
        }]
      },
      networkTimeout: {
        request: 10000,
        downloadFile: 10000
      }
    };
    _this.globalData = {
      appid: 'wx1234567',
      version: 'v0.0.1',
      // baseUrl: 'https://xxx.com' // 线上接口地址
      baseUrl: 'http://xxx/com' // 测试接口地址
    };

    _this.use('requestfix');
    _this.use('promisify');

    // 拦截request请求
    _this.intercept('request', {
      config: function config(p) {
        return p;
      },
      success: function success(p) {
        var data = p.data,
            statusCode = p.statusCode;


        if (statusCode < 300 && statusCode >= 200) {
          return { code: 1, data: data };
        } else {
          if (data.code == '2002' || data.code == '2001') {
            wx.setStorageSync(_storageKey.TOKEN, '');
            wx.setStorageSync(_storageKey.EXPIRETOKEN, '');
            return { code: -999, desc: data.msg }; //去登录
          } else {
            return { code: -1, desc: data.msg };
          }
        }
      },
      fail: function fail(p) {
        console.log('request fail: ', p);
        return p;
      },
      complete: function complete(p) {}
    });
    return _this;
  }

  /**
   * 启动项目时
   */


  _createClass(APP, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
        var ext;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('%c', "padding:50px 300px;line-height:150px;background:url('http://cdn.duitang.com/uploads/item/201410/27/20141027205515_RZ43x.gif') no-repeat;");
                // 校验SDK
                _utils2.default.checkSDK();
                // 同步开放平台EXT数据
                _context.next = 4;
                return _wepy2.default.getExtConfigSync();

              case 4:
                ext = _context.sent;

                if (ext.globalConfig) {
                  Object.assign(ext, ext.globalConfig);
                }
                Object.assign(_wepy2.default.$instance.globalData, ext);
                // 同步权限数据
                this.syncStoreConfig('scene');
                // 获取保存场景值
                if (param && param.scene) {
                  _wepy2.default.$instance.globalData.scene = param.scene;
                }

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch(_x) {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }, {
    key: 'syncStoreConfig',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key) {
        var value;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _wepy2.default.getStorageSync(key);

              case 3:
                value = _context2.sent;

                if (value !== '') {
                  console.info(key + ' sync success ');
                  _wepy2.default.$instance.globalData.scene[key] = value;
                }
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                console.warn(key + ' sync fail ');

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function syncStoreConfig(_x2) {
        return _ref2.apply(this, arguments);
      }

      return syncStoreConfig;
    }()
  }]);

  return APP;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(APP, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIkFQUCIsImNvbmZpZyIsInBhZ2VzIiwic3ViUGFja2FnZXMiLCJyb290Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsInNlbGVjdGVkQ29sb3IiLCJjb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwiYXBwaWQiLCJ2ZXJzaW9uIiwiYmFzZVVybCIsInVzZSIsImludGVyY2VwdCIsInAiLCJzdWNjZXNzIiwiZGF0YSIsInN0YXR1c0NvZGUiLCJjb2RlIiwid3giLCJzZXRTdG9yYWdlU3luYyIsIlRPS0VOIiwiRVhQSVJFVE9LRU4iLCJkZXNjIiwibXNnIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZSIsInBhcmFtIiwiVSIsImNoZWNrU0RLIiwid2VweSIsImdldEV4dENvbmZpZ1N5bmMiLCJleHQiLCJnbG9iYWxDb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCIkaW5zdGFuY2UiLCJzeW5jU3RvcmVDb25maWciLCJzY2VuZSIsImtleSIsImdldFN0b3JhZ2VTeW5jIiwidmFsdWUiLCJpbmZvIiwid2FybiIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7SUFFcUJDLEc7OztBQW1EbkIsaUJBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQWxEZEMsTUFrRGMsR0FsREw7QUFD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LE1BQU1XLEtBQW5CLEVBQTBCO0FBQ3hCUixpQ0FBS00sU0FBTCxDQUFlOUIsVUFBZixDQUEwQmdDLEtBQTFCLEdBQWtDWCxNQUFNVyxLQUF4QztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUVtQkMsRzs7Ozs7Ozs7dUJBRUVULGVBQUtVLGNBQUwsQ0FBb0JELEdBQXBCLEM7OztBQUFkRSxxQjs7QUFDTixvQkFBSUEsVUFBVSxFQUFkLEVBQWtCO0FBQ2hCakIsMEJBQVFrQixJQUFSLENBQWdCSCxHQUFoQjtBQUNBVCxpQ0FBS00sU0FBTCxDQUFlOUIsVUFBZixDQUEwQmdDLEtBQTFCLENBQWdDQyxHQUFoQyxJQUF1Q0UsS0FBdkM7QUFDRDs7Ozs7Ozs7QUFFRGpCLHdCQUFRbUIsSUFBUixDQUFnQkosR0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuSDJCVCxlQUFLYyxHOztrQkFBakI1RCxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcclxuXHJcbmltcG9ydCB7IHNldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCc7XHJcbmltcG9ydCBVIGZyb20gJ0AvdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IFRPS0VOLCBFWFBJUkVUT0tFTiB9IGZyb20gJy4vdXRpbHMvc3RvcmFnZUtleSc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKCk7XHJcbnNldFN0b3JlKHN0b3JlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQUCBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogWydwYWdlcy9teS9pbmRleCcsICdwYWdlcy9ob21lL2luZGV4J10sXHJcbiAgICAvKipcclxuICAgICAqIOiLpemcgOaxgumhtemdoui/h+Wkmu+8jOmmlumhtemcgOimgeS8mOWMluWKoOi9vemAn+W6puWPr+S7peivleivleWIhuWMhSh0aXA65oC75YyF5bCP5LqOMTBNKVxyXG4gICAgICog6YWN572u5aaC5LiL77yM6aG555uu55uu5b2V57uT5p6E5Yqh5b+F5aaC5LiLKHRpcDrpnZnmgIHotYTmupDkuZ/og73liIbnprvov4fljrspXHJcbiAgICAgKi9cclxuICAgIHN1YlBhY2thZ2VzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb290OiAnc3VicGFnZXMnLFxyXG4gICAgICAgIHBhZ2VzOiBbJ3BhZ2VzL2hvbWVCL2luZGV4J11cclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzAwMCcsXHJcbiAgICAgIGNvbG9yOiAnI0E3QTdBNycsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2hvbWUvaW5kZXgnLFxyXG4gICAgICAgICAgdGV4dDogJ+mmlumhtScsXHJcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy9ob21lLnBuZycsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL2hvbWVfYWN0aXZlLnBuZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbXkvaW5kZXgnLFxyXG4gICAgICAgICAgdGV4dDogJ+aIkScsXHJcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy9tZS5wbmcnLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy9tZV9hY3RpdmUucG5nJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XHJcbiAgICAgIHJlcXVlc3Q6IDEwMDAwLFxyXG4gICAgICBkb3dubG9hZEZpbGU6IDEwMDAwXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIGFwcGlkOiAnd3gxMjM0NTY3JyxcclxuICAgIHZlcnNpb246ICd2MC4wLjEnLFxyXG4gICAgLy8gYmFzZVVybDogJ2h0dHBzOi8veHh4LmNvbScgLy8g57q/5LiK5o6l5Y+j5Zyw5Z2AXHJcbiAgICBiYXNlVXJsOiAnaHR0cDovL3h4eC9jb20nIC8vIOa1i+ivleaOpeWPo+WcsOWdgFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XHJcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XHJcblxyXG4gICAgLy8g5oum5oiqcmVxdWVzdOivt+axglxyXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XHJcbiAgICAgIGNvbmZpZyhwKSB7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocCkge1xyXG4gICAgICAgIGxldCB7IGRhdGEsIHN0YXR1c0NvZGUgfSA9IHA7XHJcblxyXG4gICAgICAgIGlmIChzdGF0dXNDb2RlIDwgMzAwICYmIHN0YXR1c0NvZGUgPj0gMjAwKSB7XHJcbiAgICAgICAgICByZXR1cm4geyBjb2RlOiAxLCBkYXRhIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChkYXRhLmNvZGUgPT0gJzIwMDInIHx8IGRhdGEuY29kZSA9PSAnMjAwMScpIHtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoVE9LRU4sICcnKTtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoRVhQSVJFVE9LRU4sICcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY29kZTogLTk5OSwgZGVzYzogZGF0YS5tc2cgfTsgLy/ljrvnmbvlvZVcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNvZGU6IC0xLCBkZXNjOiBkYXRhLm1zZyB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbChwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbDogJywgcCk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlKHApIHt9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWQr+WKqOmhueebruaXtlxyXG4gICAqL1xyXG4gIGFzeW5jIG9uTGF1bmNoKHBhcmFtKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgJyVjJyxcclxuICAgICAgXCJwYWRkaW5nOjUwcHggMzAwcHg7bGluZS1oZWlnaHQ6MTUwcHg7YmFja2dyb3VuZDp1cmwoJ2h0dHA6Ly9jZG4uZHVpdGFuZy5jb20vdXBsb2Fkcy9pdGVtLzIwMTQxMC8yNy8yMDE0MTAyNzIwNTUxNV9SWjQzeC5naWYnKSBuby1yZXBlYXQ7XCJcclxuICAgICk7XHJcbiAgICAvLyDmoKHpqoxTREtcclxuICAgIFUuY2hlY2tTREsoKTtcclxuICAgIC8vIOWQjOatpeW8gOaUvuW5s+WPsEVYVOaVsOaNrlxyXG4gICAgY29uc3QgZXh0ID0gYXdhaXQgd2VweS5nZXRFeHRDb25maWdTeW5jKCk7XHJcbiAgICBpZiAoZXh0Lmdsb2JhbENvbmZpZykge1xyXG4gICAgICBPYmplY3QuYXNzaWduKGV4dCwgZXh0Lmdsb2JhbENvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuYXNzaWduKHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEsIGV4dCk7XHJcbiAgICAvLyDlkIzmraXmnYPpmZDmlbDmja5cclxuICAgIHRoaXMuc3luY1N0b3JlQ29uZmlnKCdzY2VuZScpO1xyXG4gICAgLy8g6I635Y+W5L+d5a2Y5Zy65pmv5YC8XHJcbiAgICBpZiAocGFyYW0gJiYgcGFyYW0uc2NlbmUpIHtcclxuICAgICAgd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zY2VuZSA9IHBhcmFtLnNjZW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBzeW5jU3RvcmVDb25maWcoa2V5KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZVN5bmMoa2V5KTtcclxuICAgICAgaWYgKHZhbHVlICE9PSAnJykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgJHtrZXl9IHN5bmMgc3VjY2VzcyBgKTtcclxuICAgICAgICB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnNjZW5lW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYCR7a2V5fSBzeW5jIGZhaWwgYCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==