'use strict';

exports.__esModule = true;
exports.resolveQuery = resolveQuery;
exports.stringifyQuery = stringifyQuery;


var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
    return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

var encode = function encode(str) {
    return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function parseQuery(query) {
    var res = {};

    query = query.trim().replace(/^(\?|#|&)/, '');

    if (!query) {
        return res;
    }

    query.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        var key = decode(parts.shift());
        var val = parts.length > 0 ? decode(parts.join('=')) : null;

        if (res[key] === undefined) {
            res[key] = val;
        } else if (Array.isArray(res[key])) {
            res[key].push(val);
        } else {
            res[key] = [res[key], val];
        }
    });

    return res;
}

function resolveQuery(query, extraQuery, _parseQuery) {
    var parse = _parseQuery || parseQuery;
    var parsedQuery = void 0;
    try {
        parsedQuery = parse(query || '');
    } catch (e) {
        parsedQuery = {};
    }
    for (var key in extraQuery) {
        var val = extraQuery[key];
        parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
    }
    return parsedQuery;
}

function stringifyQuery(obj) {
    var res = obj ? Object.keys(obj).map(function (key) {
        var val = obj[key];

        if (val === undefined) {
            return '';
        }

        if (val === null) {
            return encode(key);
        }

        if (Array.isArray(val)) {
            var result = [];
            val.slice().forEach(function (val2) {
                if (val2 === undefined) {
                    return;
                }
                if (val2 === null) {
                    result.push(encode(key));
                } else {
                    result.push(encode(key) + '=' + encode(val2));
                }
            });
            return result.join('&');
        }

        return encode(key) + '=' + encode(val);
    }).filter(function (x) {
        return x.length > 0;
    }).join('&') : null;

    return res ? '?' + res : '';
}