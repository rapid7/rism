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

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

exports["default"] = {
    "@media (max-width:567px)": {
        containerFixed: {
            width: "100%"
        },
        h1: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2.5)
        },
        h2: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2)
        },
        h3: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.5)
        },
        h4: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.25)
        },
        h5: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.125)
        },
        h6: {
            fontSize: _variables2["default"].fontSize
        }
    },
    "@media (min-width:568px)": {
        containerFixed: {
            width: 568 - _variables2["default"].gutter
        },
        h1: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2.5)
        },
        h2: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2)
        },
        h3: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.5)
        },
        h4: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.25)
        },
        h5: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.125)
        },
        h6: {
            fontSize: _variables2["default"].fontSize
        }
    },
    "@media (min-width:768px)": {
        containerFixed: {
            width: 768 - _variables2["default"].gutter
        },
        h1: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2.5 * 1.125)
        },
        h2: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2 * 1.125)
        },
        h3: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.5 * 1.125)
        },
        h4: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.25 * 1.125)
        },
        h5: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.125 * 1.125)
        },
        h6: {
            fontSize: _variables2["default"].fontSize * 1.125
        }
    },
    "@media (min-width:992px)": {
        containerFixed: {
            width: 992 - _variables2["default"].gutter
        },
        h1: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2.5 * 1.25)
        },
        h2: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2 * 1.25)
        },
        h3: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.5 * 1.25)
        },
        h4: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.25 * 1.25)
        },
        h5: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.125 * 1.25)
        },
        h6: {
            fontSize: _variables2["default"].fontSize * 1.25
        }
    },
    "@media (min-width:1200px)": {
        containerFixed: {
            width: 1200 - _variables2["default"].gutter
        },
        h1: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2.5 * 1.4)
        },
        h2: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2 * 1.4)
        },
        h3: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.5 * 1.4)
        },
        h4: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.25 * 1.4)
        },
        h5: {
            fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.125 * 1.4)
        },
        h6: {
            fontSize: _variables2["default"].fontSize * 1.4
        }
    }
};
module.exports = exports["default"];