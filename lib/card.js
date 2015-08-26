"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactStyleNormalizer = require("react-style-normalizer");

var _reactStyleNormalizer2 = _interopRequireDefault(_reactStyleNormalizer);

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var defaultCard;

function getMaxHeight() {
    return window.innerHeight - _variables2["default"].gutter;
}

function getMaxWidth() {
    return window.innerWidth - _variables2["default"].gutter;
}

function getCardStyle(type, isActive, styles) {
    var cardStyle, xy, translate, axis;

    if (styles && styles.width && _lodash2["default"].isString(styles.width) && /%/.test(styles.width)) {
        styles.width = window.innerWidth * (_lodash2["default"].parseInt(styles.width) / 100) - _variables2["default"].gutter / 2;
    }

    if (styles && styles.height && _lodash2["default"].isString(styles.height) && /%/.test(styles.height)) {
        styles.height = window.innerHeight * (_lodash2["default"].parseInt(styles.height) / 100) - _variables2["default"].gutter / 2;
    }

    switch (type) {
        case "bottom":
            xy = {
                bottom: _lodash2["default"].ceil(_variables2["default"].gutter / 2),
                height: styles.height || 200,
                left: _lodash2["default"].ceil(_variables2["default"].gutter / 2)
            };
            axis = "Y";
            break;
        case "left":
            xy = {
                left: _lodash2["default"].ceil(_variables2["default"].gutter / 2),
                top: _lodash2["default"].ceil(_variables2["default"].gutter / 2),
                width: styles.width || 200
            };
            axis = "X";
            break;
        case "right":
            xy = {
                right: _lodash2["default"].ceil(_variables2["default"].gutter / 2),
                top: _lodash2["default"].ceil(_variables2["default"].gutter / 2),
                width: styles.width || 200
            };
            axis = "X";
            break;
        case "top":
            xy = {
                height: styles.height || 200,
                left: _lodash2["default"].ceil(_variables2["default"].gutter / 2),
                top: _lodash2["default"].ceil(_variables2["default"].gutter / 2)
            };
            axis = "Y";
            break;
    }

    cardStyle = _lodash2["default"].extend(_lodash2["default"].cloneDeep(defaultCard), xy, styles);

    translate = isActive ? 0 : (xy.width || xy.height) + _lodash2["default"].ceil(_variables2["default"].gutter / 2);

    _lodash2["default"].extend(cardStyle, {
        maxHeight: getMaxHeight(),
        maxWidth: getMaxWidth()
    });

    switch (type) {
        case "left":
        case "top":
            translate = -1 * translate;
            break;
    }

    _lodash2["default"].extend(cardStyle, (0, _reactStyleNormalizer2["default"])({
        transform: "translate" + axis + "(" + translate + "px)"
    }));

    return cardStyle;
}

defaultCard = (0, _reactStyleNormalizer2["default"])({
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