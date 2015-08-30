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

var _reactStyleNormalizer = require("react-style-normalizer");

var _reactStyleNormalizer2 = _interopRequireDefault(_reactStyleNormalizer);

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

exports["default"] = {
    label: (0, _reactStyleNormalizer2["default"])({
        backgroundColor: _variables2["default"].white.darker(0.4).toString(), // #ddd
        borderRadius: _variables2["default"].borderRadius * 2,
        display: "inline",
        fontSize: _variables2["default"].fontSize,
        marginLeft: 5,
        marginRight: 5,
        padding: 6,
        top: -2
    })
};
module.exports = exports["default"];