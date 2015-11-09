"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var _reactPrefixer = require("react-prefixer");

var _reactPrefixer2 = _interopRequireDefault(_reactPrefixer);

exports["default"] = function () {
    var obj = {};

    _utils2["default"].forEach(arguments, function (argument, i) {
        obj = _utils2["default"].merge(obj, (0, _reactPrefixer2["default"])(argument));
    });

    return obj;
};

module.exports = exports["default"];