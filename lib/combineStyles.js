// since I use it in the element
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function () {
    var obj = {};

    utils.forEach(arguments, function (argument, i) {
        obj = utils.merge(obj, prefix(argument));
    });

    return obj;
};

module.exports = exports["default"];