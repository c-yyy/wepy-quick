'use strict';

exports.__esModule = true;

var _cookie = require('../helper/cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _util = require('../helper/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wx = window.wx || {};

wx.login = function (options) {
    var cookies = _cookie2.default.all();
    cookies.code = cookies.skey;
    (0, _util.wxSuccess)('login', options, cookies);
};

wx.requestPayment = function (params) {
    if (mqq && mqq.tenpay && mqq.tenpay.pay) {
        mqq.tenpay.pay({
            tokenId: params.token,
            appInfo: params.appinfo,
            pubAcc: params.pubAcc,
            pubAccHint: params.pubAccHint
        }, function (result) {
            if (+result.resultCode === 0) {
                (0, _util.wxSuccess)('requestPayment', params, result);
            } else {
                (0, _util.wxFail)('requestPayment', params, result);
            }
        });
    }
};

wx.__initShare = function (share) {
    if (mqq && mqq.ui && mqq.ui.setOnShareHandler) {
        mqq.ui.setOnShareHandler(function (type) {
            mqq.ui.shareMessage({
                title: share.title,
                desc: share.desc,
                share_type: type,
                share_url: share.url,
                image_url: share.img,
                back: true
            });
        }, function () {});
    }
};

wx.__hideShare = function () {};

wx.__platform = 'qq';

if (typeof window !== 'undefined') {
    window.wx = wx;
}

exports.default = wx;