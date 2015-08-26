"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _d3Color = require("d3-color");

var _d3Color2 = _interopRequireDefault(_d3Color);

var _reactStyleNormalizer = require("react-style-normalizer");

var _reactStyleNormalizer2 = _interopRequireDefault(_reactStyleNormalizer);

var colors = {
    black: _d3Color2["default"].color("#111"),
    danger: _d3Color2["default"].color("#d9534f"),
    info: _d3Color2["default"].color("#5bc0de"),
    primary: _d3Color2["default"].color("#337ab7"),
    success: _d3Color2["default"].color("#5cb85c"),
    warning: _d3Color2["default"].color("#f0ad4e"),
    white: _d3Color2["default"].color("#fff")
},
    sizes = {
    borderRadius: 3,
    fontSize: 13,
    fontWeight: 400,
    headingFontWeight: 400,
    headingMargin: "1em 0 0.5em",
    gutter: 30
};

exports["default"] = (0, _reactStyleNormalizer2["default"])({
    black: colors.black,
    backgroundColor: colors.white,
    borderColor: colors.white.darker(0.625), // #ccc
    borderRadius: sizes.borderRadius,
    colorDanger: colors.danger,
    colorInfo: colors.info,
    colorPrimary: colors.primary,
    colorSuccess: colors.success,
    colorWarning: colors.warning,
    fontColor: colors.black.brighter(3.875), // #444
    fontSize: sizes.fontSize,
    fontWeight: sizes.fontWeight,
    gutter: sizes.gutter,
    headingFontWeight: sizes.headingFontWeight,
    headingMargin: sizes.headingMargin,
    white: colors.white
});
module.exports = exports["default"];