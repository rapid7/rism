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

var _reactStyleNormalizer = require("react-style-normalizer");

var _reactStyleNormalizer2 = _interopRequireDefault(_reactStyleNormalizer);

exports["default"] = {
    a: {
        color: "blue",
        cursor: "pointer",
        textDecoration: "underline"
    },
    hr: {
        borderColor: "#eee",
        borderStyle: "solid none",
        borderWidth: "1px 0",
        marginBottom: 10,
        marginTop: 10
    },
    p: {
        margin: "1em 0"
    },
    wrapAll: {
        backgroundColor: _variables2["default"].backgroundColor.toString(),
        color: _variables2["default"].fontColor.toString(),
        fontFamily: "TypoPRO Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: _variables2["default"].fontSize,
        fontWeight: _variables2["default"].fontWeight,
        height: "auto",
        minHeight: "100vh"
    }
};
module.exports = exports["default"];