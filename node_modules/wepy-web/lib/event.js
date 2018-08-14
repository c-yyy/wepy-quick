"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class(name, source, type) {
        _classCallCheck(this, _class);

        this.active = true;


        this.name = name;
        this.source = source;
        this.type = type;
    }

    _class.prototype.$destroy = function $destroy() {
        this.active = false;
    };

    _class.prototype.$transfor = function $transfor(wxevent) {
        var k = 0;
        for (k in wxevent) {
            this[k] = wxevent[k];
        }
    };

    return _class;
}();

exports.default = _class;