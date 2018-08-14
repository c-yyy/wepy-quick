'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tips = require('./tips.js');

var _tips2 = _interopRequireDefault(_tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Utils = function (_Tips) {
  _inherits(Utils, _Tips);

  function Utils() {
    _classCallCheck(this, Utils);

    return _possibleConstructorReturn(this, (Utils.__proto__ || Object.getPrototypeOf(Utils)).apply(this, arguments));
  }

  _createClass(Utils, null, [{
    key: 'param',


    /**
     * 
     * @param {Object} a 
     */
    value: function param() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var b = [];
      for (var i in a) {
        b.push(i + '=' + a[i]);
      }
      return b.join('&');
    }

    // 时间展示处理

  }, {
    key: 'dateFormate',
    value: function dateFormate(serverdate, datapldate) {
      var pldate = datapldate;
      var date = parseInt(new Date(serverdate) - new Date(pldate)) / 1000;
      // date = date - 8 * 60 * 60;
      if (0 < date && date < 60) {
        return '1分钟前';
      } else if (date > 60 && date < 3600) {
        return parseInt(date / 60) + '分钟前';
      } else if (date < 60 * 60 * 24 && date > 3600) {
        return parseInt(date / (60 * 60)) + '小时前';
      } else if (date > 60 * 60 * 24 && new Date(serverdate).getYear() == new Date(pldate).getYear()) {
        var getPldate = new Date(pldate);
        var getMonte = getPldate.getMonth() + 1 < 10 ? '0' + (getPldate.getMonth() + 1) : getPldate.getMonth() + 1;
        var getDate = getPldate.getDate() < 10 ? '0' + getPldate.getDate() : getPldate.getDate();
        getPldate.getDate();
        //截取到年月日分钟
        return getMonte + '月' + getDate + '日';
      } else if (new Date(serverdate).getYear() != new Date(pldate).getYear()) {
        return pldate;
      } else {
        return '';
      }
    }

    /** 
     * 返回当前系统时间 
     */

  }, {
    key: 'getCurrentTime',
    value: function getCurrentTime() {
      var keep = '';
      var date = new Date();
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
      return keep;
    }

    /**
       * 验证必填元素
       */

  }, {
    key: 'required',
    value: function required(value) {
      if (typeof value === 'number') {
        value = value.toString();
      } else if (typeof value === 'boolean') {
        return !0;
      }

      return value && value.length > 0;
    }

    /**
     * 重复验证
     */

  }, {
    key: 'noDuplicate',
    value: function noDuplicate(values) {
      for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < values.length; j++) {
          if (values[i] == values[j] && i != j) {
            return false;
          }
        }
      }
      return true;
    }
    /**
     * 验证电子邮箱格式
     */

  }, {
    key: 'email',
    value: function email(value) {
      return this.optional(value) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
    }
    /**
     * 验证手机格式
     */

  }, {
    key: 'tel',
    value: function tel(value) {
      return this.optional(value) || /^1[34578]\d{9}$/.test(value);
    }
    /**
     * 验证URL格式
     */

  }, {
    key: 'url',
    value: function url(value) {
      return this.optional(value) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }
    /**
     * 验证日期格式
     */

  }, {
    key: 'date',
    value: function date(value) {
      return this.optional(value) || !/Invalid|NaN/.test(new Date(value).toString());
    }
    /**
     * 验证ISO类型的日期格式
     */

  }, {
    key: 'dateISO',
    value: function dateISO(value) {
      return this.optional(value) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
    }
    /**
     * 验证十进制数字
     */

  }, {
    key: 'number',
    value: function number(value) {
      return this.optional(value) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    }
    /**
     * 验证整数
     */

  }, {
    key: 'digits',
    value: function digits(value) {
      return this.optional(value) || /^\d+$/.test(value);
    }
    /**
     * 验证身份证号码
     */

  }, {
    key: 'idcard',
    value: function idcard(value) {
      return this.optional(value) || /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
    }
    /**
     * 验证两个输入框的内容是否相同
     */

  }, {
    key: 'equalTo',
    value: function equalTo(value, param) {
      return this.optional(value) || value === that.scope.detail.value[param];
    }
    /**
     * 验证是否包含某个值
     */

  }, {
    key: 'contains',
    value: function contains(value, param) {
      return this.optional(value) || value.indexOf(param) >= 0;
    }
    /**
     * 验证最小长度
     */

  }, {
    key: 'minlength',
    value: function minlength(value, param) {
      return this.optional(value) || value.length >= param;
    }
    /**
     * 验证最大长度
     */

  }, {
    key: 'maxlength',
    value: function maxlength(value, param) {
      return this.optional(value) || value.length <= param;
    }
    /**
     * 验证一个长度范围[min, max]
     */

  }, {
    key: 'rangelength',
    value: function rangelength(value, param) {
      return this.optional(value) || value.length >= param[0] && value.length <= param[1];
    }
    /**
     * 验证最小值
     */

  }, {
    key: 'min',
    value: function min(value, param) {
      return this.optional(value) || Number(value) >= Number(param);
    }
    /**
     * 验证最大值
     */

  }, {
    key: 'max',
    value: function max(value, param) {
      return this.optional(value) || Number(value) <= Number(param);
    }

    /**
     * 验证时间
     */

  }, {
    key: 'after',
    value: function after(value, param) {
      return this.optional(value) || value >= param;
    }
    /**
     * 验证时间
     */

  }, {
    key: 'before',
    value: function before(value, param) {
      return this.optional(value) || value <= param;
    }

    /**
     * 验证一个值范围[min, max]
     */

  }, {
    key: 'range',
    value: function range(value, param) {
      return this.optional(value) || value >= param[0] && value <= param[1];
    }
    /**
     * 判断输入值是否为空
     */

  }, {
    key: 'optional',
    value: function optional(value) {
      return !this.required(value) && 'dependency-mismatch';
    }

    /***
     * 验证金额
     */

  }, {
    key: 'money',
    value: function money(value) {
      return this.optional(value) || /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(value);
    }

    /**
     * 兼容性判断
     */

  }, {
    key: 'canIUse',
    value: function canIUse(str) {
      if (wx.canIUse) {
        return wx.canIUse(str);
      } else {
        return false;
      }
    }

    /**
     * 检查SDK版本
     */

  }, {
    key: 'isSDKExipred',
    value: function isSDKExipred() {
      var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
          SDKVersion = _wx$getSystemInfoSync.SDKVersion;

      console.info('[version]sdk ' + SDKVersion);
      return SDKVersion == null || SDKVersion < '1.2.0';
    }
    /**
     * 检查SDK版本
     */

  }, {
    key: 'checkSDK',
    value: function checkSDK() {
      if (this.isSDKExipred()) {
        _tips2.default.modal('您的微信版本太低，为确保正常使用，请尽快升级');
      }
    }
  }]);

  return Utils;
}(_tips2.default);

exports.default = Utils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIlV0aWxzIiwiYSIsImIiLCJpIiwicHVzaCIsImpvaW4iLCJzZXJ2ZXJkYXRlIiwiZGF0YXBsZGF0ZSIsInBsZGF0ZSIsImRhdGUiLCJwYXJzZUludCIsIkRhdGUiLCJnZXRZZWFyIiwiZ2V0UGxkYXRlIiwiZ2V0TW9udGUiLCJnZXRNb250aCIsImdldERhdGUiLCJrZWVwIiwieSIsImdldEZ1bGxZZWFyIiwibSIsImQiLCJoIiwiZ2V0SG91cnMiLCJmIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwidmFsdWUiLCJ0b1N0cmluZyIsImxlbmd0aCIsInZhbHVlcyIsImoiLCJvcHRpb25hbCIsInRlc3QiLCJwYXJhbSIsInRoYXQiLCJzY29wZSIsImRldGFpbCIsImluZGV4T2YiLCJOdW1iZXIiLCJyZXF1aXJlZCIsInN0ciIsInd4IiwiY2FuSVVzZSIsImdldFN5c3RlbUluZm9TeW5jIiwiU0RLVmVyc2lvbiIsImNvbnNvbGUiLCJpbmZvIiwiaXNTREtFeGlwcmVkIiwiVGlwcyIsIm1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7O0FBRW5COzs7OzRCQUlxQjtBQUFBLFVBQVJDLENBQVEsdUVBQUosRUFBSTs7QUFDbkIsVUFBSUMsSUFBSSxFQUFSO0FBQ0EsV0FBSyxJQUFJQyxDQUFULElBQWNGLENBQWQsRUFBaUI7QUFDZkMsVUFBRUUsSUFBRixDQUFVRCxDQUFWLFNBQWVGLEVBQUVFLENBQUYsQ0FBZjtBQUNEO0FBQ0QsYUFBT0QsRUFBRUcsSUFBRixDQUFPLEdBQVAsQ0FBUDtBQUNEOztBQUVEOzs7O2dDQUNtQkMsVSxFQUFZQyxVLEVBQVk7QUFDekMsVUFBSUMsU0FBU0QsVUFBYjtBQUNBLFVBQUlFLE9BQU9DLFNBQVMsSUFBSUMsSUFBSixDQUFTTCxVQUFULElBQXVCLElBQUlLLElBQUosQ0FBU0gsTUFBVCxDQUFoQyxJQUFvRCxJQUEv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Z0I7QUFBQSxVQUVsQkMsVUFGa0IseUJBRWxCQSxVQUZrQjs7QUFJcEJDLGNBQVFDLElBQVIsbUJBQTZCRixVQUE3QjtBQUNBLGFBQU9BLGNBQWMsSUFBZCxJQUFzQkEsYUFBYSxPQUExQztBQUNEO0FBQ0Q7Ozs7OzsrQkFHa0I7QUFDaEIsVUFBSSxLQUFLRyxZQUFMLEVBQUosRUFBeUI7QUFDdkJDLHVCQUFLQyxLQUFMLENBQVcsd0JBQVg7QUFDRDtBQUNGOzs7O0VBblBnQ0QsYzs7a0JBQWRsRCxLIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpcHMgZnJvbSAnLi90aXBzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMgZXh0ZW5kcyBUaXBzIHtcblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhIFxuICAgKi9cbiAgc3RhdGljIHBhcmFtKGEgPSB7fSkge1xuICAgIHZhciBiID0gW11cbiAgICBmb3IgKHZhciBpIGluIGEpIHtcbiAgICAgIGIucHVzaChgJHtpfT0ke2FbaV19YClcbiAgICB9XG4gICAgcmV0dXJuIGIuam9pbignJicpXG4gIH1cblxuICAvLyDml7bpl7TlsZXnpLrlpITnkIZcbiAgc3RhdGljIGRhdGVGb3JtYXRlKHNlcnZlcmRhdGUsIGRhdGFwbGRhdGUpIHtcbiAgICBsZXQgcGxkYXRlID0gZGF0YXBsZGF0ZTtcbiAgICBsZXQgZGF0ZSA9IHBhcnNlSW50KG5ldyBEYXRlKHNlcnZlcmRhdGUpIC0gbmV3IERhdGUocGxkYXRlKSkgLyAxMDAwO1xuICAgIC8vIGRhdGUgPSBkYXRlIC0gOCAqIDYwICogNjA7XG4gICAgaWYgKDAgPCBkYXRlICYmIGRhdGUgPCA2MCkge1xuICAgICAgcmV0dXJuICcx5YiG6ZKf5YmNJztcbiAgICB9IGVsc2UgaWYgKGRhdGUgPiA2MCAmJiBkYXRlIDwgMzYwMCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGRhdGUgLyA2MCkgKyAn5YiG6ZKf5YmNJztcbiAgICB9IGVsc2UgaWYgKGRhdGUgPCA2MCAqIDYwICogMjQgJiYgZGF0ZSA+IDM2MDApIHtcbiAgICAgIHJldHVybiBwYXJzZUludChkYXRlIC8gKDYwICogNjApKSArICflsI/ml7bliY0nO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBkYXRlID4gNjAgKiA2MCAqIDI0ICYmXG4gICAgICBuZXcgRGF0ZShzZXJ2ZXJkYXRlKS5nZXRZZWFyKCkgPT0gbmV3IERhdGUocGxkYXRlKS5nZXRZZWFyKClcbiAgICApIHtcbiAgICAgIGxldCBnZXRQbGRhdGUgPSBuZXcgRGF0ZShwbGRhdGUpO1xuICAgICAgbGV0IGdldE1vbnRlID1cbiAgICAgICAgZ2V0UGxkYXRlLmdldE1vbnRoKCkgKyAxIDwgMTAgP1xuICAgICAgICAgICcwJyArIChnZXRQbGRhdGUuZ2V0TW9udGgoKSArIDEpIDpcbiAgICAgICAgICBnZXRQbGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICBsZXQgZ2V0RGF0ZSA9XG4gICAgICAgIGdldFBsZGF0ZS5nZXREYXRlKCkgPCAxMCA/XG4gICAgICAgICAgJzAnICsgZ2V0UGxkYXRlLmdldERhdGUoKSA6XG4gICAgICAgICAgZ2V0UGxkYXRlLmdldERhdGUoKTtcbiAgICAgIGdldFBsZGF0ZS5nZXREYXRlKCk7XG4gICAgICAvL+aIquWPluWIsOW5tOaciOaXpeWIhumSn1xuICAgICAgcmV0dXJuIGdldE1vbnRlICsgJ+aciCcgKyBnZXREYXRlICsgJ+aXpSc7XG4gICAgfSBlbHNlIGlmIChuZXcgRGF0ZShzZXJ2ZXJkYXRlKS5nZXRZZWFyKCkgIT0gbmV3IERhdGUocGxkYXRlKS5nZXRZZWFyKCkpIHtcbiAgICAgIHJldHVybiBwbGRhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICAvKiogXG4gICAqIOi/lOWbnuW9k+WJjeezu+e7n+aXtumXtCBcbiAgICovXG4gIHN0YXRpYyBnZXRDdXJyZW50VGltZSgpIHtcbiAgICB2YXIga2VlcCA9ICcnO1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICB2YXIgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB2YXIgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgbSA9IG0gPCAxMCA/ICcwJyArIG0gOiBtO1xuICAgIHZhciBkID0gZGF0ZS5nZXREYXRlKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0RGF0ZSgpIDogZGF0ZS5nZXREYXRlKCk7XG4gICAgdmFyIGggPSBkYXRlLmdldEhvdXJzKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0SG91cnMoKSA6IGRhdGUuZ2V0SG91cnMoKTtcbiAgICB2YXIgZiA9IGRhdGUuZ2V0TWludXRlcygpIDwgMTAgPyAnMCcgKyBkYXRlLmdldE1pbnV0ZXMoKSA6IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIHZhciBzID0gZGF0ZS5nZXRTZWNvbmRzKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0U2Vjb25kcygpIDogZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAga2VlcCA9IHkgKyAnJyArIG0gKyAnJyArIGQgKyAnJyArIGggKyAnJyArIGYgKyAnJyArIHM7XG4gICAgcmV0dXJuIGtlZXA7XG4gIH1cblxuICAvKipcbiAgICAgKiDpqozor4Hlv4XloavlhYPntKBcbiAgICAgKi9cbiAgc3RhdGljIHJlcXVpcmVkKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiAhMFxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwXG4gIH1cblxuICAvKipcbiAgICog6YeN5aSN6aqM6K+BXG4gICAqL1xuICBzdGF0aWMgbm9EdXBsaWNhdGUodmFsdWVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsdWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbaV0gPT0gdmFsdWVzW2pdICYmIGkgIT0gaikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog6aqM6K+B55S15a2Q6YKu566x5qC85byPXG4gICAqL1xuICBzdGF0aWMgZW1haWwodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgL15bYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC8udGVzdCh2YWx1ZSlcbiAgfVxuICAvKipcbiAgICog6aqM6K+B5omL5py65qC85byPXG4gICAqL1xuICBzdGF0aWMgdGVsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IC9eMVszNDU3OF1cXGR7OX0kLy50ZXN0KHZhbHVlKVxuICB9XG4gIC8qKlxuICAgKiDpqozor4FVUkzmoLzlvI9cbiAgICovXG4gIHN0YXRpYyB1cmwodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgL14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSkuPykoPzo6XFxkezIsNX0pPyg/OlsvPyNdXFxTKik/JC9pLnRlc3QodmFsdWUpXG4gIH1cbiAgLyoqXG4gICAqIOmqjOivgeaXpeacn+agvOW8j1xuICAgKi9cbiAgc3RhdGljIGRhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgIS9JbnZhbGlkfE5hTi8udGVzdChuZXcgRGF0ZSh2YWx1ZSkudG9TdHJpbmcoKSlcbiAgfVxuICAvKipcbiAgICog6aqM6K+BSVNP57G75Z6L55qE5pel5pyf5qC85byPXG4gICAqL1xuICBzdGF0aWMgZGF0ZUlTTyh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKHZhbHVlKSB8fCAvXlxcZHs0fVtcXC9cXC1dKDA/WzEtOV18MVswMTJdKVtcXC9cXC1dKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKSQvLnRlc3QodmFsdWUpXG4gIH1cbiAgLyoqXG4gICAqIOmqjOivgeWNgei/m+WItuaVsOWtl1xuICAgKi9cbiAgc3RhdGljIG51bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKHZhbHVlKSB8fCAvXig/Oi0/XFxkK3wtP1xcZHsxLDN9KD86LFxcZHszfSkrKT8oPzpcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKVxuICB9XG4gIC8qKlxuICAgKiDpqozor4HmlbTmlbBcbiAgICovXG4gIHN0YXRpYyBkaWdpdHModmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgL15cXGQrJC8udGVzdCh2YWx1ZSlcbiAgfVxuICAvKipcbiAgICog6aqM6K+B6Lqr5Lu96K+B5Y+356CBXG4gICAqL1xuICBzdGF0aWMgaWRjYXJkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IC9eWzEtOV1cXGR7NX1bMS05XVxcZHszfSgoMFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxkKXwzWzAtMV0pXFxkezN9KFswLTldfFgpJC8udGVzdCh2YWx1ZSlcbiAgfVxuICAvKipcbiAgICog6aqM6K+B5Lik5Liq6L6T5YWl5qGG55qE5YaF5a655piv5ZCm55u45ZCMXG4gICAqL1xuICBzdGF0aWMgZXF1YWxUbyh2YWx1ZSwgcGFyYW0pIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgdmFsdWUgPT09IHRoYXQuc2NvcGUuZGV0YWlsLnZhbHVlW3BhcmFtXVxuICB9XG4gIC8qKlxuICAgKiDpqozor4HmmK/lkKbljIXlkKvmn5DkuKrlgLxcbiAgICovXG4gIHN0YXRpYyBjb250YWlucyh2YWx1ZSwgcGFyYW0pIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgdmFsdWUuaW5kZXhPZihwYXJhbSkgPj0gMFxuICB9XG4gIC8qKlxuICAgKiDpqozor4HmnIDlsI/plb/luqZcbiAgICovXG4gIHN0YXRpYyBtaW5sZW5ndGgodmFsdWUsIHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA+PSBwYXJhbVxuICB9XG4gIC8qKlxuICAgKiDpqozor4HmnIDlpKfplb/luqZcbiAgICovXG4gIHN0YXRpYyBtYXhsZW5ndGgodmFsdWUsIHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA8PSBwYXJhbVxuICB9XG4gIC8qKlxuICAgKiDpqozor4HkuIDkuKrplb/luqbojIPlm7RbbWluLCBtYXhdXG4gICAqL1xuICBzdGF0aWMgcmFuZ2VsZW5ndGgodmFsdWUsIHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8ICh2YWx1ZS5sZW5ndGggPj0gcGFyYW1bMF0gJiYgdmFsdWUubGVuZ3RoIDw9IHBhcmFtWzFdKVxuICB9XG4gIC8qKlxuICAgKiDpqozor4HmnIDlsI/lgLxcbiAgICovXG4gIHN0YXRpYyBtaW4odmFsdWUsIHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IE51bWJlcih2YWx1ZSkgPj0gTnVtYmVyKHBhcmFtKTtcbiAgfVxuICAvKipcbiAgICog6aqM6K+B5pyA5aSn5YC8XG4gICAqL1xuICBzdGF0aWMgbWF4KHZhbHVlLCBwYXJhbSkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKHZhbHVlKSB8fCBOdW1iZXIodmFsdWUpIDw9IE51bWJlcihwYXJhbSk7XG4gIH1cblxuICAvKipcbiAgICog6aqM6K+B5pe26Ze0XG4gICAqL1xuICBzdGF0aWMgYWZ0ZXIodmFsdWUsIHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IHZhbHVlID49IHBhcmFtO1xuICB9XG4gIC8qKlxuICAgKiDpqozor4Hml7bpl7RcbiAgICovXG4gIHN0YXRpYyBiZWZvcmUodmFsdWUsIHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IHZhbHVlIDw9IHBhcmFtO1xuICB9XG5cbiAgLyoqXG4gICAqIOmqjOivgeS4gOS4quWAvOiMg+WbtFttaW4sIG1heF1cbiAgICovXG4gIHN0YXRpYyByYW5nZSh2YWx1ZSwgcGFyYW0pIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgKHZhbHVlID49IHBhcmFtWzBdICYmIHZhbHVlIDw9IHBhcmFtWzFdKVxuICB9XG4gIC8qKlxuICAgKiDliKTmlq3ovpPlhaXlgLzmmK/lkKbkuLrnqbpcbiAgICovXG4gIHN0YXRpYyBvcHRpb25hbCh2YWx1ZSkge1xuICAgIHJldHVybiAhdGhpcy5yZXF1aXJlZCh2YWx1ZSkgJiYgJ2RlcGVuZGVuY3ktbWlzbWF0Y2gnXG4gIH1cblxuICAvKioqXG4gICAqIOmqjOivgemHkeminVxuICAgKi9cbiAgc3RhdGljIG1vbmV5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IC8oXlsxLTldKFswLTldKyk/KFxcLlswLTldezEsMn0pPyQpfCheKDApezF9JCl8KF5bMC05XVxcLlswLTldKFswLTldKT8kKS8udGVzdCh2YWx1ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiDlhbzlrrnmgKfliKTmlq1cbiAgICovXG4gIHN0YXRpYyBjYW5JVXNlKHN0cikge1xuICAgIGlmICh3eC5jYW5JVXNlKSB7XG4gICAgICByZXR1cm4gd3guY2FuSVVzZShzdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICog5qOA5p+lU0RL54mI5pysXG4gICAqL1xuICBzdGF0aWMgaXNTREtFeGlwcmVkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIFNES1ZlcnNpb25cbiAgICB9ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICBjb25zb2xlLmluZm8oYFt2ZXJzaW9uXXNkayAke1NES1ZlcnNpb259YCk7XG4gICAgcmV0dXJuIFNES1ZlcnNpb24gPT0gbnVsbCB8fCBTREtWZXJzaW9uIDwgJzEuMi4wJ1xuICB9XG4gIC8qKlxuICAgKiDmo4Dmn6VTREvniYjmnKxcbiAgICovXG4gIHN0YXRpYyBjaGVja1NESygpIHtcbiAgICBpZiAodGhpcy5pc1NES0V4aXByZWQoKSkge1xuICAgICAgVGlwcy5tb2RhbCgn5oKo55qE5b6u5L+h54mI5pys5aSq5L2O77yM5Li656Gu5L+d5q2j5bi45L2/55So77yM6K+35bC95b+r5Y2H57qnJyk7XG4gICAgfVxuICB9XG59XG4iXX0=