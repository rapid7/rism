"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactStyleNormalizer = require("react-style-normalizer");

var _reactStyleNormalizer2 = _interopRequireDefault(_reactStyleNormalizer);

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var nav = {
    nav: (0, _reactStyleNormalizer2["default"])({
        backgroundColor: _variables2["default"].white.darker(0.17).toString(), // #f0f0f0
        boxShadow: "2px 2px 2px " + _variables2["default"].borderColor.toString(),
        marginBottom: _utils2["default"].ceil(_variables2["default"].gutter / 2),
        minHeight: 1
    }),
    navBrand: {
        color: "inherit",
        display: "inline-block",
        fontSize: _variables2["default"].fontSize * 2,
        padding: 10,
        textDecoration: "none",
        verticalAlign: "middle"
    },
    navMenu: {
        display: "inline-block",
        listStyleType: "none",
        margin: 0,
        padding: 0,
        verticalAlign: "middle"
    },
    navMenuItem: {
        display: "inline-block",
        listStyleType: "none",
        margin: 0,
        verticalAlign: "middle"
    },
    navMenuLink: {
        display: "block",
        color: "inherit",
        padding: 10,
        textDecoration: "none"
    }
};

nav.navFixed = _utils2["default"].merge(_utils2["default"].clone(nav.nav), {
    position: "fixed"
});

exports["default"] = nav;
module.exports = exports["default"];