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

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var _sizes = require("./sizes");

var _sizes2 = _interopRequireDefault(_sizes);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var responsiveStyles = {
    headingFontSize: {
        lg: _utils2["default"].ceil(_variables2["default"].fontSize * 1.25),
        md: _utils2["default"].ceil(_variables2["default"].fontSize * 1.125),
        sm: _variables2["default"].fontSize,
        xl: _utils2["default"].ceil(_variables2["default"].fontSize * 1.4),
        xs: _variables2["default"].fontSize
    }
};

exports["default"] = function (size) {
    return {
        containerFixed: {
            width: (size === "xs" ? window.innerWidth : _sizes2["default"].sizes[size]) - _variables2["default"].gutter
        },
        h1: {
            fontSize: _utils2["default"].ceil(responsiveStyles.headingFontSize[size] * 2.5)
        },
        h2: {
            fontSize: _utils2["default"].ceil(responsiveStyles.headingFontSize[size] * 2)
        },
        h3: {
            fontSize: _utils2["default"].ceil(responsiveStyles.headingFontSize[size] * 1.5)
        },
        h4: {
            fontSize: _utils2["default"].ceil(responsiveStyles.headingFontSize[size] * 1.25)
        },
        h5: {
            fontSize: _utils2["default"].ceil(responsiveStyles.headingFontSize[size] * 1.125)
        },
        h6: {
            fontSize: responsiveStyles.headingFontSize[size]
        }
    };
};

;
module.exports = exports["default"];