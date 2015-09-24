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

var buttons = {
    button: (0, _reactPrefixer2["default"])({
        border: "1px solid " + _variables2["default"].borderColor.toString(),
        backgroundColor: _variables2["default"].backgroundColor.toString(),
        borderRadius: _variables2["default"].borderRadius.toString(),
        color: _variables2["default"].fontColor.toString(),
        cursor: "pointer",
        display: "inline-block",
        fontFamily: "inherit",
        fontSize: 12,
        lineHeight: "normal",
        outline: 0,
        padding: "0.5em 1em",
        textAlign: "center",
        textDecoration: "none",
        textTransform: "uppercase",
        transition: "background-color " + _variables2["default"].transitionTiming + " " + _variables2["default"].transitionEase + ", color " + _variables2["default"].transitionTiming + " " + _variables2["default"].transitionEase,
        userSelect: "none",
        verticalAlign: "middle",
        whiteSpace: "nowrap"
    }),
    buttonDisabled: (0, _reactPrefixer2["default"])({
        border: 0,
        cursor: "not-allowed",
        opacity: 0.4
    })
},
    projectColors = ["Danger", "Info", "Primary", "Success", "Warning"];

buttons.buttonHover = _utils2["default"].merge(_utils2["default"].clone(buttons.button), {
    backgroundColor: _variables2["default"].backgroundColor.darker(0.5).toString()
});

_utils2["default"].forEach(projectColors, function (color) {
    var fontColor = (color === "Warning" ? _variables2["default"].fontColor : _variables2["default"].white).toString();

    buttons["button" + color] = _utils2["default"].merge(_utils2["default"].clone(buttons.button), {
        borderColor: _variables2["default"]["color" + color].darker(0.5).toString(),
        backgroundColor: _variables2["default"]["color" + color].toString(),
        color: fontColor
    });

    buttons["button" + color + "Hover"] = _utils2["default"].merge(_utils2["default"].clone(buttons["button" + color]), {
        backgroundColor: _variables2["default"]["color" + color].darker(0.5).toString(),
        color: fontColor
    });
});

buttons.buttonLink = _utils2["default"].merge(_utils2["default"].clone(buttons.button), {
    backgroundColor: "transparent",
    border: 0,
    color: _variables2["default"].colorPrimary.toString()
});

buttons.buttonLinkHover = _utils2["default"].merge(_utils2["default"].clone(buttons.buttonLink), {
    color: _variables2["default"].colorPrimary.darker(0.5).toString(),
    textDecoration: "underline"
});

exports["default"] = buttons;
module.exports = exports["default"];