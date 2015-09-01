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

var _reactPrefixer = require("./react-prefixer");

var _reactPrefixer2 = _interopRequireDefault(_reactPrefixer);

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var defaultCard;

function getMaxHeight() {
    return window.innerHeight - _variables2["default"].gutter;
}

function getMaxWidth() {
    return window.innerWidth - _variables2["default"].gutter;
}

function getCardStyle(type, isActive, styles) {
    var cardStyle, xy, translate, axis;

    if (styles && styles.width && _utils2["default"].isString(styles.width) && /%/.test(styles.width)) {
        styles.width = window.innerWidth * (_utils2["default"].parseInt(styles.width) / 100) - _variables2["default"].gutter / 2;
    }

    if (styles && styles.height && _utils2["default"].isString(styles.height) && /%/.test(styles.height)) {
        styles.height = window.innerHeight * (_utils2["default"].parseInt(styles.height) / 100) - _variables2["default"].gutter / 2;
    }

    switch (type) {
        case "bottom":
            xy = {
                bottom: _utils2["default"].ceil(_variables2["default"].gutter / 2),
                height: styles.height || 200,
                left: _utils2["default"].ceil(_variables2["default"].gutter / 2)
            };
            axis = "Y";
            break;
        case "left":
            xy = {
                left: _utils2["default"].ceil(_variables2["default"].gutter / 2),
                top: _utils2["default"].ceil(_variables2["default"].gutter / 2),
                width: styles.width || 200
            };
            axis = "X";
            break;
        case "right":
            xy = {
                right: _utils2["default"].ceil(_variables2["default"].gutter / 2),
                top: _utils2["default"].ceil(_variables2["default"].gutter / 2),
                width: styles.width || 200
            };
            axis = "X";
            break;
        case "top":
            xy = {
                height: styles.height || 200,
                left: _utils2["default"].ceil(_variables2["default"].gutter / 2),
                top: _utils2["default"].ceil(_variables2["default"].gutter / 2)
            };
            axis = "Y";
            break;
    }

    cardStyle = _utils2["default"].merge(_utils2["default"].clone(defaultCard), xy);
    cardStyle = _utils2["default"].merge(cardStyle, styles);

    translate = isActive ? 0 : (xy.width || xy.height) + _utils2["default"].ceil(_variables2["default"].gutter / 2);

    _utils2["default"].assign(cardStyle, {
        maxHeight: getMaxHeight(),
        maxWidth: getMaxWidth()
    });

    switch (type) {
        case "left":
        case "top":
            translate = -1 * translate;
            break;
    }

    _utils2["default"].assign(cardStyle, (0, _reactPrefixer2["default"])({
        transform: "translate" + axis + "(" + translate + "px)"
    }));

    return cardStyle;
}

defaultCard = (0, _reactPrefixer2["default"])({
    backgroundColor: _variables2["default"].backgroundColor.toString(),
    border: "1px solid " + _variables2["default"].borderColor.toString(),
    borderRadius: _variables2["default"].borderRadius,
    boxShadow: "2px 2px 2px #ccc",
    color: _variables2["default"].fontColor.toString(),
    maxHeight: getMaxHeight(),
    maxWidth: getMaxWidth(),
    position: "fixed",
    transition: "transform 150ms ease-in-out, height 150ms ease-in-out",
    zIndex: 1000
});

exports["default"] = {
    card: function card(type, isActive, styles) {
        return getCardStyle(type, isActive, styles);
    }
};
module.exports = exports["default"];