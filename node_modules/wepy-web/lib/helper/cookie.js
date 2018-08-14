'use strict';

exports.__esModule = true;
exports.default = {
    all: function all() {
        if (document.cookie === '') return {};

        var cookies = document.cookie.split('; '),
            result = {};

        document.cookie.split('; ').forEach(function (v) {
            var item = item = v.split('=');
            var key = decodeURIComponent(item.shift());
            var value = decodeURIComponent(item.join('='));
            result[key] = value;
        });
        return result;
    },
    get: function get(keys) {
        var cookies = this.all();

        if (Object.prototype.toString.call(keys) === '[object Array]') {
            var rst = {};
            keys.forEach(function (v) {
                rst[v] = cookies[v];
            });
        } else {
            return cookies[keys];
        }
    }
};