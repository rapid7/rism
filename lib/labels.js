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

var _reactPrefixer = require("react-prefixer");

var _reactPrefixer2 = _interopRequireDefault(_reactPrefixer);

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var labels = {
    label: (0, _reactPrefixer2["default"])({
        backgroundColor: _variables2["default"].white.darker(0.4).toString(), // #ddd
        borderRadius: _variables2["default"].borderRadius * 2,
        display: "inline",
        fontSize: _variables2["default"].fontSize,
        marginLeft: 5,
        marginRight: 5,
        padding: 6,
        top: -2
    })
},
    projectColors = ["Danger", "Info", "Primary", "Success", "Warning"];

_utils2["default"].forEach(projectColors, function (color) {
    var fontColor = (color === "Warning" ? _variables2["default"].fontColor : _variables2["default"].white).toString();

    labels["label" + color] = _utils2["default"].merge(_utils2["default"].clone(labels.label), {
        backgroundColor: _variables2["default"]["color" + color].toString(),
        color: fontColor
    });
});

exports["default"] = labels;
module.exports = exports["default"];