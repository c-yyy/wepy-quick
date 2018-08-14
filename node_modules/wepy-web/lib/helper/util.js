'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var uuid = exports.uuid = function uuid() {
    var random = function random() {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };
    return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
};

var numberValidator = exports.numberValidator = function numberValidator(min, max) {
    return function (v) {
        var valid = true,
            num = Number(v);
        if (isNaN(num)) {
            valid = false;
        }
        if (min !== undefined) {
            valid = valid && num >= min;
        }
        if (max !== undefined) {
            valid = valid && num <= max;
        }
        return valid;
    };
};

var stringToBoolean = exports.stringToBoolean = function stringToBoolean() {
    return function (v) {
        if (typeof v === 'string' && (v === '0' || v === 'false')) return false;
        return !!v;
    };
};

var merge = exports.merge = function merge(elem, defaultOptions) {
    var o = {};
    for (var k in defaultOptions) {
        var val = elem.getAttribute(k);
        switch (defaultOptions[k].type) {
            case Boolean:
                val = !!val;
                break;
            case String:
                val = !val ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
                break;
            case Number:
                var n = parseFloat(val);
                val = isNaN(n) ? val : n;
        }
        o[k] = val ? val : defaultOptions[k].default;
    }
    return o;
};
var wxCallback = exports.wxCallback = function wxCallback(type, name, options, data) {
    if (typeof options[type] === 'function') {
        setTimeout(function () {
            if (name === 'login') {
                options[type].call(window.wx, { errMsg: name + ':' + (type === 'fail' ? 'fail' : 'ok'), code: data.code, data: data });
            } else if (name === 'scanCode') {
                options[type].call(window.wx, { errMsg: name + ':' + (type === 'fail' ? 'fail' : 'ok'), result: data.result, charSet: 'utf-8', scanType: data.scanType });
            } else {
                options[type].call(window.wx, { errMsg: name + ':' + (type === 'fail' ? 'fail' : 'ok'), data: data });
            }
        }, 0);
    }
};
var wxSuccess = exports.wxSuccess = function wxSuccess(name, options, data) {
    wxCallback('success', name, options, data);
    wxCallback('complete', name, options, data);
};
var wxFail = exports.wxFail = function wxFail(name, options, data) {
    wxCallback('fail', name, options, data);
    wxCallback('complete', name, options, data);
};