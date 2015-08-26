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
    imgCircle: (0, _reactStyleNormalizer2["default"])({
        borderRadius: "50%"
    }),
    imgResponsive: {
        display: "block",
        height: "auto",
        maxWidth: "100%"
    },
    imgThumbnail: (0, _reactStyleNormalizer2["default"])({
        border: "5px solid " + _variables2["default"].white.toString(),
        borderRadius: _variables2["default"].borderRadius
    })
};
module.exports = exports["default"];