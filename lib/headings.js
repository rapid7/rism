"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var headings = {
    h1: {
        display: "block",
        fontWeight: _variables2["default"].headingFontWeight,
        margin: _variables2["default"].headingMargin
    }
};

headings.h2 = _lodash2["default"].cloneDeep(headings.h1);
headings.h3 = _lodash2["default"].cloneDeep(headings.h1);
headings.h4 = _lodash2["default"].cloneDeep(headings.h1);
headings.h5 = _lodash2["default"].cloneDeep(headings.h1);
headings.h6 = _lodash2["default"].cloneDeep(headings.h1);

exports["default"] = headings;
module.exports = exports["default"];