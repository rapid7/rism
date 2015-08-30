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
    listGroup: (0, _reactStyleNormalizer2["default"])({
        border: "1px solid " + _variables2["default"].white.darker(1.14).toString(), // #aaa
        borderRadius: _variables2["default"].borderRadius,
        boxShadow: "2px 2px 2px " + _variables2["default"].borderColor.toString(),
        listStyleType: "none",
        margin: 0,
        padding: 0,
        width: "100%"
    }),
    listGroupHeader: {
        backgroundColor: _variables2["default"].white.darker(0.17).toString(), // #f0f0f0
        borderBottomWidth: 1,
        borderColor: _variables2["default"].borderColor.toString(),
        borderStyle: "solid",
        fontWeight: _variables2["default"].headingFontWeight,
        padding: 15,
        textTransform: "uppercase"
    },
    listGroupItem: {
        backgroundColor: _variables2["default"].backgroundColor.toString(),
        borderBottomWidth: 1,
        borderColor: _variables2["default"].borderColor.toString(),
        borderStyle: "solid",
        padding: 15
    }
};
module.exports = exports["default"];