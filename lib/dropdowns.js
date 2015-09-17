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

var dropdowns = {
    dropdownContainer: {
        position: "relative"
    },
    dropdown: (0, _reactPrefixer2["default"])({
        backgroundColor: _variables2["default"].white.toString(),
        border: "1px solid #ccc",
        borderRadius: _variables2["default"].borderRadius,
        boxShadow: "2px 2px 2px #ccc",
        color: _variables2["default"].fontColor.toString(),
        display: "none",
        left: 0,
        position: "absolute",
        top: "100%"
    }),
    dropdownList: {
        display: "block",
        margin: 0,
        padding: 0
    },
    dropdownListItem: {
        display: "block",
        margin: 0,
        padding: "0.5em 1em",
        transition: "background-color " + _variables2["default"].transitionTiming + " " + _variables2["default"].transitionEase
    }
};

dropdowns.dropdownRight = _utils2["default"].merge(_utils2["default"].clone(dropdowns.dropdown), {
    left: "auto",
    right: 0
});

dropdowns.dropdownActive = _utils2["default"].merge(_utils2["default"].clone(dropdowns.dropdown), {
    display: "block"
});

dropdowns.dropdownRightActive = _utils2["default"].merge(_utils2["default"].clone(dropdowns.dropdownRight), {
    display: "block"
});

dropdowns.dropdownListItemHover = _utils2["default"].merge(_utils2["default"].clone(dropdowns.dropdownListItem), {
    backgroundColor: _variables2["default"].white.darker(0.5).toString()
});

exports["default"] = dropdowns;
module.exports = exports["default"];