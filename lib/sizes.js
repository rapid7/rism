"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var sizes = {
    lg: 992,
    md: 768,
    sm: 568,
    xl: 1200,
    xs: 0
},
    mqls = {};

_lodash2["default"].forOwn(sizes, function (size, key) {
    mqls[key] = window.matchMedia("(min-width:" + size + "px)");
});

exports["default"] = {
    isLg: function isLg() {
        return mqls.lg.matches;
    },
    isMd: function isMd() {
        return mqls.md.matches;
    },
    isSm: function isSm() {
        return mqls.sm.matches;
    },
    isXl: function isXl() {
        return mqls.xl.matches;
    },
    isXs: function isXs() {
        return mqls.xs.matches;
    },
    sizeName: function sizeName() {
        if (mqls.xl.matches) {
            return "xl";
        } else if (mqls.lg.matches) {
            return "lg";
        } else if (mqls.md.matches) {
            return "md";
        } else if (mqls.sm.matches) {
            return "sm";
        }

        return "xs";
    },
    sizes: sizes
};
module.exports = exports["default"];