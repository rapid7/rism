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

var buttons = {
    button: (0, _reactStyleNormalizer2["default"])({
        border: "1px solid " + _variables2["default"].borderColor.toString(),
        backgroundColor: _variables2["default"].backgroundColor.toString(),
        borderRadius: _variables2["default"].borderRadius.toString(),
        color: _variables2["default"].fontColor.toString(),
        cursor: "pointer",
        display: "inline-block",
        fontFamily: "inherit",
        lineHeight: "normal",
        outline: 0,
        padding: "0.5em 1em",
        textAlign: "center",
        textDecoration: "none",
        textTransform: "uppercase",
        transition: "background-color 150ms ease-in-out",
        userSelect: "none",
        verticalAlign: "middle",
        whiteSpace: "nowrap"
    }),
    buttonDisabled: (0, _reactStyleNormalizer2["default"])({
        border: 0,
        cursor: "not-allowed",
        opacity: 0.4
    })
},
    projectColors = ["Danger", "Info", "Primary", "Success", "Warning"];

buttons.buttonHover = _lodash2["default"].extend(_lodash2["default"].cloneDeep(buttons.button), {
    backgroundColor: _variables2["default"].backgroundColor.darker(0.5).toString()
});

_lodash2["default"].forEach(projectColors, function (color) {
    var fontColor = (color === "Warning" ? _variables2["default"].fontColor : _variables2["default"].white).toString();

    buttons["button" + color] = _lodash2["default"].extend(_lodash2["default"].cloneDeep(buttons.button), {
        borderColor: _variables2["default"]["color" + color].darker(0.5).toString(),
        backgroundColor: _variables2["default"]["color" + color],
        color: fontColor
    });

    buttons["button" + color + "Hover"] = _lodash2["default"].extend(_lodash2["default"].cloneDeep(buttons["button" + color]), {
        backgroundColor: _variables2["default"]["color" + color].darker(0.5).toString(),
        color: fontColor
    });
});

exports["default"] = buttons;
module.exports = exports["default"];