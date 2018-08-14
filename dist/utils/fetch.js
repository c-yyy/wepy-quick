'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _storageKey = require('./storageKey.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fetch = function () {
  function fetch() {
    _classCallCheck(this, fetch);
  }

  _createClass(fetch, null, [{
    key: 'request',
    value: function request(method, url, data) {
      var param = {
        url: url,
        method: method,
        data: data,
        header: {
          'X-Channel': 'wechatApp',
          'Content-type': 'application/json',
          'X-Token': wx.getStorageSync('TOKEN'),
          'cache-control': 'no-cache'
        }
      };
      return _wepy2.default.request(param);
    }
  }, {
    key: 'get',
    value: function get(url, data) {
      if (data) {
        url = url + '?' + _utils2.default.param(data);
      }
      return this.request('GET', url);
    }
  }, {
    key: 'post',
    value: function post(url, data) {
      return this.request('POST', url, data);
    }
  }, {
    key: 'delete',
    value: function _delete(url, data) {
      return this.request('DELETE', url, data);
    }
  }, {
    key: 'put',
    value: function put(url, data) {
      return this.request('PUT', url, data);
    }
  }]);

  return fetch;
}();

exports.default = fetch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLmpzIl0sIm5hbWVzIjpbImZldGNoIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInBhcmFtIiwiaGVhZGVyIiwid3giLCJnZXRTdG9yYWdlU3luYyIsIndlcHkiLCJyZXF1ZXN0IiwiVSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLEs7Ozs7Ozs7NEJBQ0pDLE0sRUFBUUMsRyxFQUFLQyxJLEVBQU07QUFDaEMsVUFBSUMsUUFBUTtBQUNWRixhQUFLQSxHQURLO0FBRVZELGdCQUFRQSxNQUZFO0FBR1ZFLGNBQU1BLElBSEk7QUFJVkUsZ0JBQVE7QUFDTix1QkFBYSxXQURQO0FBRU4sMEJBQWdCLGtCQUZWO0FBR04scUJBQVdDLEdBQUdDLGNBQUgsQ0FBa0IsT0FBbEIsQ0FITDtBQUlOLDJCQUFpQjtBQUpYO0FBSkUsT0FBWjtBQVdBLGFBQU9DLGVBQUtDLE9BQUwsQ0FBYUwsS0FBYixDQUFQO0FBQ0Q7Ozt3QkFDVUYsRyxFQUFLQyxJLEVBQU07QUFDcEIsVUFBSUEsSUFBSixFQUFVO0FBQ1JELGNBQVNBLEdBQVQsU0FBZ0JRLGdCQUFFTixLQUFGLENBQVFELElBQVIsQ0FBaEI7QUFDRDtBQUNELGFBQU8sS0FBS00sT0FBTCxDQUFhLEtBQWIsRUFBb0JQLEdBQXBCLENBQVA7QUFDRDs7O3lCQUNXQSxHLEVBQUtDLEksRUFBTTtBQUNyQixhQUFPLEtBQUtNLE9BQUwsQ0FBYSxNQUFiLEVBQXFCUCxHQUFyQixFQUEwQkMsSUFBMUIsQ0FBUDtBQUNEOzs7NEJBQ2FELEcsRUFBS0MsSSxFQUFNO0FBQ3ZCLGFBQU8sS0FBS00sT0FBTCxDQUFhLFFBQWIsRUFBdUJQLEdBQXZCLEVBQTRCQyxJQUE1QixDQUFQO0FBQ0Q7Ozt3QkFDVUQsRyxFQUFLQyxJLEVBQU07QUFDcEIsYUFBTyxLQUFLTSxPQUFMLENBQWEsS0FBYixFQUFvQlAsR0FBcEIsRUFBeUJDLElBQXpCLENBQVA7QUFDRDs7Ozs7O2tCQTdCa0JILEsiLCJmaWxlIjoiZmV0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFUgZnJvbSAnLi91dGlscydcbmltcG9ydCB7IFRPS0VOIH0gZnJvbSAnLi9zdG9yYWdlS2V5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBmZXRjaCB7XG4gIHN0YXRpYyByZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhKSB7XG4gICAgbGV0IHBhcmFtID0ge1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ1gtQ2hhbm5lbCc6ICd3ZWNoYXRBcHAnLFxuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnWC1Ub2tlbic6IHd4LmdldFN0b3JhZ2VTeW5jKCdUT0tFTicpLFxuICAgICAgICAnY2FjaGUtY29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3ZXB5LnJlcXVlc3QocGFyYW0pXG4gIH1cbiAgc3RhdGljIGdldCh1cmwsIGRhdGEpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdXJsID0gYCR7dXJsfT8ke1UucGFyYW0oZGF0YSl9YFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdHRVQnLCB1cmwpXG4gIH1cbiAgc3RhdGljIHBvc3QodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUE9TVCcsIHVybCwgZGF0YSlcbiAgfVxuICBzdGF0aWMgZGVsZXRlKHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0RFTEVURScsIHVybCwgZGF0YSlcbiAgfVxuICBzdGF0aWMgcHV0KHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BVVCcsIHVybCwgZGF0YSlcbiAgfVxufVxuIl19