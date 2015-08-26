"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = setResponsive;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var _sizes = require("./sizes");

var _sizes2 = _interopRequireDefault(_sizes);

var responsiveStyles = {
    headingFontSize: {
        lg: _lodash2["default"].ceil(_variables2["default"].fontSize * 1.25),
        md: _lodash2["default"].ceil(_variables2["default"].fontSize * 1.125),
        sm: _variables2["default"].fontSize,
        xl: _lodash2["default"].ceil(_variables2["default"].fontSize * 1.4),
        xs: _variables2["default"].fontSize
    }
};

function setResponsive(size) {
    return {
        containerFixed: {
            width: _sizes2["default"].sizes[size] - _variables2["default"].gutter
        },
        h1: {
            fontSize: _lodash2["default"].ceil(responsiveStyles.headingFontSize[size] * 2.5)
        },
        h2: {
            fontSize: _lodash2["default"].ceil(responsiveStyles.headingFontSize[size] * 2)
        },
        h3: {
            fontSize: _lodash2["default"].ceil(responsiveStyles.headingFontSize[size] * 1.5)
        },
        h4: {
            fontSize: _lodash2["default"].ceil(responsiveStyles.headingFontSize[size] * 1.25)
        },
        h5: {
            fontSize: _lodash2["default"].ceil(responsiveStyles.headingFontSize[size] * 1.125)
        },
        h6: {
            fontSize: responsiveStyles.headingFontSize[size]
        }
    };
}

;
module.exports = exports["default"];