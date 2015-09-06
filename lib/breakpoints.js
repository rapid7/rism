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

function setBreakpoints(breakpoints) {
    var breakpointWidths = {},
        sizeFuncs = {},
        mqls = {};

    _utils2["default"].forIn(breakpoints, function (query, key) {
        var width = query.split(":")[1].replace("px)", "");

        breakpointWidths[key] = /em/.test(width) ? _utils2["default"].parseInt(width.replace("em)", "")) * 16 : _utils2["default"].parseInt(width);
        mqls[key] = window.matchMedia(query);

        sizeFuncs["is" + key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()] = function () {
            return mqls[key].matches;
        };
    });

    return {
        breakpoints: breakpoints,
        breakpointWidths: breakpointWidths,
        current: undefined,
        mqls: mqls,
        sizeFuncs: sizeFuncs
    };
}

var ret = {
    setBreakpoints: setBreakpoints
};

exports["default"] = ret;
module.exports = exports["default"];