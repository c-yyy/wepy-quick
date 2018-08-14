'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _fetch2 = require('./../utils/fetch.js');

var _fetch3 = _interopRequireDefault(_fetch2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseUrl = _wepy2.default.$instance.globalData.baseUrl;

var home = function (_fetch) {
  _inherits(home, _fetch);

  function home() {
    _classCallCheck(this, home);

    return _possibleConstructorReturn(this, (home.__proto__ || Object.getPrototypeOf(home)).apply(this, arguments));
  }

  _createClass(home, null, [{
    key: 'WeChatSns',
    value: function WeChatSns(data) {
      var url = baseUrl + '/wechat/sns';
      return this.post(url, data);
    }
  }]);

  return home;
}(_fetch3.default);

exports.default = home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwid2VweSIsIiRpbnN0YW5jZSIsImdsb2JhbERhdGEiLCJob21lIiwiZGF0YSIsInVybCIsInBvc3QiLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsVUFBVUMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxPQUExQzs7SUFFcUJJLEk7Ozs7Ozs7Ozs7OzhCQUNGQyxJLEVBQU07QUFDckIsVUFBTUMsTUFBU04sT0FBVCxnQkFBTjtBQUNBLGFBQU8sS0FBS08sSUFBTCxDQUFVRCxHQUFWLEVBQWVELElBQWYsQ0FBUDtBQUNEOzs7O0VBSitCRyxlOztrQkFBYkosSSIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBmZXRjaCBmcm9tICdAL3V0aWxzL2ZldGNoJ1xuXG5cbmNvbnN0IGJhc2VVcmwgPSB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLmJhc2VVcmw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBmZXRjaCB7XG4gIHN0YXRpYyBXZUNoYXRTbnMoZGF0YSkge1xuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L3dlY2hhdC9zbnNgXG4gICAgcmV0dXJuIHRoaXMucG9zdCh1cmwsIGRhdGEpXG4gIH1cbn1cbiJdfQ==