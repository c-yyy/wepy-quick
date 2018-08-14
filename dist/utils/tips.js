'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);
  }

  _createClass(Tips, null, [{
    key: 'success',


    /**
     * 弹出提示框
     */

    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      wx.showToast({
        title: title,
        icon: 'success',
        mask: true,
        duration: duration
      });
      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'modal',
    value: function modal(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示';

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: false,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            reject(res);
          }
        });
      });
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'confirm',
    value: function confirm(text) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '提示';

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: 'toast',
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'fail';

      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 警告框
     */

  }, {
    key: 'alert',
    value: function alert(title) {
      wx.showToast({
        title: title,
        mask: true,
        duration: 500
      });
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, 500);
      });
    }

    /**
     * 错误框
     */

  }, {
    key: 'error',
    value: function error(title, onHide) {
      wx.showToast({
        title: title,
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 弹出加载提示
     */

  }, {
    key: 'loading',
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';

      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      if (wx.showLoading) {
        wx.showLoading({
          title: title,
          mask: true
        });
      } else {
        wx.showNavigationBarLoading();
      }
    }

    /**
     * 加载完毕
     */

  }, {
    key: 'loaded',
    value: function loaded() {
      if (this.isLoading) {
        this.isLoading = false;
        if (wx.hideLoading) {
          wx.hideLoading();
        } else {
          wx.hideNavigationBarLoading();
        }
      }
    }

    /**
     * 弹出下拉动作栏
     */

  }, {
    key: 'action',
    value: function action() {
      for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        wx.showActionSheet({
          itemList: items,
          success: function success(res) {
            var result = {
              index: res.tapIndex,
              text: items[res.tapIndex]
            };
            resolve(result);
          },
          fail: function fail(res) {
            reject(res.errMsg);
          }
        });
      });
    }
  }, {
    key: 'actionWithFunc',
    value: function actionWithFunc(items) {
      for (var _len2 = arguments.length, functions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        functions[_key2 - 1] = arguments[_key2];
      }

      wx.showActionSheet({
        itemList: items,
        success: function success(res) {
          var index = res.tapIndex;
          if (index >= 0 && index < functions.length) {
            functions[index]();
          }
        }
      });
    }
  }, {
    key: 'share',
    value: function share(title, url, desc) {
      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast('分享成功');
        }
      };
    }
  }, {
    key: 'setLoading',
    value: function setLoading() {
      this.isLoading = true;
    }
  }]);

  return Tips;
}();

Tips.isLoading = false;
Tips.pause = false;
exports.default = Tips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcHMuanMiXSwibmFtZXMiOlsiVGlwcyIsInRpdGxlIiwiZHVyYXRpb24iLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwidGV4dCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJwYXlsb2FkIiwiY29uZmlybSIsImNhbmNlbCIsIm9uSGlkZSIsImlzTG9hZGluZyIsInNob3dMb2FkaW5nIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJpdGVtcyIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwicmVzdWx0IiwiaW5kZXgiLCJ0YXBJbmRleCIsImVyck1zZyIsImZ1bmN0aW9ucyIsImxlbmd0aCIsInVybCIsImRlc2MiLCJwYXRoIiwidG9hc3QiLCJwYXVzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHcUJBLEk7Ozs7Ozs7OztBQUluQjs7Ozs0QkFJZ0JDLEssRUFBdUI7QUFBQSxVQUFoQkMsUUFBZ0IsdUVBQUwsR0FBSzs7QUFDckNDLFNBQUdDLFNBQUgsQ0FBYTtBQUNYSCxlQUFPQSxLQURJO0FBRVhJLGNBQU0sU0FGSztBQUdYQyxjQUFNLElBSEs7QUFJWEosa0JBQVVBO0FBSkMsT0FBYjtBQU1BLFVBQUlBLFdBQVcsQ0FBZixFQUFrQjtBQUNoQixlQUFPLElBQUlLLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLHFCQUFXLFlBQU07QUFDZkY7QUFDRCxXQUZELEVBRUdOLFFBRkg7QUFHRCxTQUpNLENBQVA7QUFLRDtBQUNGOztBQUVEOzs7Ozs7MEJBR2NTLEksRUFBb0I7QUFBQSxVQUFkVixLQUFjLHVFQUFOLElBQU07O0FBQ2hDLGFBQU8sSUFBSU0sT0FBSixDQUFZ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KlxuICog5o+Q56S65LiO5Yqg6L295bel5YW357G7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcHMge1xuICBzdGF0aWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHN0YXRpYyBwYXVzZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiDlvLnlh7rmj5DnpLrmoYZcbiAgICovXG5cbiAgc3RhdGljIHN1Y2Nlc3MgKHRpdGxlLCBkdXJhdGlvbiA9IDUwMCkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICBtYXNrOiB0cnVlLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfSk7XG4gICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5by55Ye656Gu6K6k56qX5Y+jXG4gICAqL1xuICBzdGF0aWMgbW9kYWwgKHRleHQsIHRpdGxlID0gJ+aPkOekuicpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBjb250ZW50OiB0ZXh0LFxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IHJlcyA9PiB7XG4gICAgICAgICAgcmVqZWN0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOW8ueWHuuehruiupOeql+WPo1xuICAgKi9cbiAgc3RhdGljIGNvbmZpcm0gKHRleHQsIHBheWxvYWQgPSB7fSwgdGl0bGUgPSAn5o+Q56S6Jykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6IHRleHQsXG4gICAgICAgIHNob3dDYW5jZWw6IHRydWUsXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICByZXNvbHZlKHBheWxvYWQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogcmVzID0+IHtcbiAgICAgICAgICByZWplY3QocGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRvYXN0ICh0aXRsZSwgb25IaWRlLCBpY29uID0gJ2ZhaWwnKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGljb246IGljb24sXG4gICAgICBtYXNrOiB0cnVlLFxuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pO1xuICAgIC8vIOmakOiXj+e7k+adn+Wbnuiwg1xuICAgIGlmIChvbkhpZGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvbkhpZGUoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOitpuWRiuahhlxuICAgKi9cbiAgc3RhdGljIGFsZXJ0ICh0aXRsZSkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBtYXNrOiB0cnVlLFxuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDplJnor6/moYZcbiAgICovXG5cbiAgc3RhdGljIGVycm9yICh0aXRsZSwgb25IaWRlKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSk7XG4gICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXG4gICAgaWYgKG9uSGlkZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9uSGlkZSgpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5by55Ye65Yqg6L295o+Q56S6XG4gICAqL1xuICBzdGF0aWMgbG9hZGluZyAodGl0bGUgPSAn5Yqg6L295LitJykge1xuICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgaWYgKHd4LnNob3dMb2FkaW5nKSB7XG4gICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDliqDovb3lrozmr5VcbiAgICovXG4gIHN0YXRpYyBsb2FkZWQgKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGlmICh3eC5oaWRlTG9hZGluZykge1xuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8ueWHuuS4i+aLieWKqOS9nOagj1xuICAgKi9cbiAgc3RhdGljIGFjdGlvbiAoLi4uaXRlbXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgaXRlbUxpc3Q6IGl0ZW1zLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgaW5kZXg6IHJlcy50YXBJbmRleCxcbiAgICAgICAgICAgIHRleHQ6IGl0ZW1zW3Jlcy50YXBJbmRleF1cbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHJlamVjdChyZXMuZXJyTXNnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYWN0aW9uV2l0aEZ1bmMgKGl0ZW1zLCAuLi5mdW5jdGlvbnMpIHtcbiAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgaXRlbUxpc3Q6IGl0ZW1zLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHJlcy50YXBJbmRleDtcbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBmdW5jdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgZnVuY3Rpb25zW2luZGV4XSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hhcmUgKHRpdGxlLCB1cmwsIGRlc2MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgcGF0aDogdXJsLFxuICAgICAgZGVzYzogZGVzYyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgVGlwcy50b2FzdCgn5YiG5Lqr5oiQ5YqfJyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRMb2FkaW5nICgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gIH1cbn1cbiJdfQ==