/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var breakpoints = {
    lg: "(min-width:992px)",
    md: "(min-width:768px)",
    sm: "(min-width:568px)",
    xl: "(min-width:1200px)",
    xs: "(max-width:567px)"
},
    breakpointWidths = {},
    sizeFuncs = {},
    mqls = {};

function setBreakpoints() {
    _utils2["default"].forIn(breakpoints, function (query, key) {
        var width = query.split(":")[1].replace("px)", "");

        breakpointWidths[key] = /em/.test(width) ? _utils2["default"].parseInt(width.replace("em)", "")) * 16 : _utils2["default"].parseInt(width);
        mqls[key] = window.matchMedia(query);

        sizeFuncs["is" + key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()] = function () {
            return mqls[key].matches;
        };
    });
}

setBreakpoints();

var ret = {
    breakpoints: breakpoints,
    breakpointWidths: breakpointWidths,
    setBreakpoints: setBreakpoints,
    current: function current() {
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
    }
};

_utils2["default"].assign(ret, sizeFuncs);

exports["default"] = ret;
module.exports = exports["default"];