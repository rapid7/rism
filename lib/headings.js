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

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var headings = {
    h1: {
        display: "block",
        fontWeight: _variables2["default"].headingFontWeight,
        margin: _variables2["default"].headingMargin
    }
};

headings.h2 = _utils2["default"].clone(headings.h1);
headings.h3 = _utils2["default"].clone(headings.h1);
headings.h4 = _utils2["default"].clone(headings.h1);
headings.h5 = _utils2["default"].clone(headings.h1);
headings.h6 = _utils2["default"].clone(headings.h1);

exports["default"] = headings;
module.exports = exports["default"];