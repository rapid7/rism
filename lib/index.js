"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactStyleNormalizer = require("react-style-normalizer");

var _reactStyleNormalizer2 = _interopRequireDefault(_reactStyleNormalizer);

var _recess = require("./recess");

var _recess2 = _interopRequireDefault(_recess);

var recess = new _recess2["default"]();

recess.stylesheet("Recess", (0, _reactStyleNormalizer2["default"])({
    "*,*:before,*:after": {
        boxSizing: "border-box"
    },
    ".clearFix:before,.clearFix:after": {
        content: "\"\"",
        display: "table"
    },
    ".clearFix:after": {
        clear: "both"
    }
}));

window.addEventListener("resize", recess.onResize.bind(recess), false);

exports["default"] = recess;
module.exports = exports["default"];