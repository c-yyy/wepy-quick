'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.data = {};
        this.components = {};
        this.methods = {};
        this.events = {};
    }

    _class.prototype.$init = function $init(parent) {
        var _this = this;

        var k = void 0;

        Object.getOwnPropertyNames(this).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(this))).forEach(function (k) {
            if (k[0] + k[1] !== 'on' && k !== 'constructor') {
                if (!parent[k]) parent[k] = _this[k];
            }
        });

        ['data', 'events', 'components'].forEach(function (item) {
            Object.getOwnPropertyNames(_this[item]).forEach(function (k) {
                if (k !== 'init' && !parent[item][k]) parent[item][k] = _this[item][k];
            });
        });
    };

    return _class;
}();

exports.default = _class;