"use strict";

exports.__esModule = true;
exports.getter = getter;
function getter(constructor) {
    return function () {
        wx.$toast.show = false;
    };
};