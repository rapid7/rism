"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _combineStyles = require("./combineStyles");

var _combineStyles2 = _interopRequireDefault(_combineStyles);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

function higherOrderComponent(Element) {
    return (function (_Component) {
        _inherits(RismElement, _Component);

        function RismElement(props) {
            _classCallCheck(this, RismElement);

            _get(Object.getPrototypeOf(RismElement.prototype), "constructor", this).call(this, props);

            this.displayName = Element.type.charAt(0).toUpperCase() + Element.type.slice(1) + "RismElement";
            this.state = {
                states: this.props.states || {},
                style: this.props.style
            };
            this.onBlur = this.onBlur.bind(this);
            this.onDrag = this.onDrag.bind(this);
            this.onDragEnter = this.onDragEnter.bind(this);
            this.onDragLeave = this.onDragLeave.bind(this);
            this.onFocus = this.onFocus.bind(this);
            this.onMouseDown = this.onMouseDown.bind(this);
            this.onMouseEnter = this.onMouseEnter.bind(this);
            this.onMouseLeave = this.onMouseLeave.bind(this);
            this.onMouseUp = this.onMouseUp.bind(this);
            this.onTouchEnd = this.onTouchEnd.bind(this);
            this.onTouchStart = this.onTouchStart.bind(this);
        }

        _createClass(RismElement, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(newProps) {
                this.setState({
                    states: newProps.states || {},
                    style: newProps.style
                });
            }
        }, {
            key: "onBlur",
            value: function onBlur(e) {
                this.setState({
                    style: this.props.style
                });

                if (this.props.onBlur) {
                    this.props.onBlur(e);
                }
            }
        }, {
            key: "onDrag",
            value: function onDrag(e) {
                this.setState({
                    style: this.state.states.drag
                });

                if (this.props.onDrag) {
                    this.props.onDrag(e);
                }
            }
        }, {
            key: "onDragEnter",
            value: function onDragEnter(e) {
                this.setState({
                    style: this.state.states.dragEnter
                });

                if (this.props.onDragEnter) {
                    this.props.onDragEnter(e);
                }
            }
        }, {
            key: "onDragLeave",
            value: function onDragLeave(e) {
                this.setState({
                    style: this.props.style
                });

                if (this.props.onDragLeave) {
                    this.props.onDragLeave(e);
                }
            }
        }, {
            key: "onFocus",
            value: function onFocus(e) {
                this.setState({
                    style: (0, _combineStyles2["default"])(this.state.states.active, this.state.states.focus)
                });

                if (this.props.onFocus) {
                    this.props.onFocus(e);
                }
            }
        }, {
            key: "onMouseDown",
            value: function onMouseDown(e) {
                this.setState({
                    style: (0, _combineStyles2["default"])(this.state.states.hover, this.state.states.active)
                });

                if (this.props.onMouseDown) {
                    this.props.onMouseDown(e);
                }
            }
        }, {
            key: "onMouseEnter",
            value: function onMouseEnter(e) {
                this.setState({
                    style: this.state.states.hover
                });

                if (this.props.onMouseEnter) {
                    this.props.onMouseEnter(e);
                }
            }
        }, {
            key: "onMouseLeave",
            value: function onMouseLeave() {
                this.setState({
                    style: this.props.style
                });

                if (this.props.onMouseLeave) {
                    this.props.onMouseLeave.call();
                }
            }
        }, {
            key: "onMouseUp",
            value: function onMouseUp(e) {
                this.setState({
                    style: this.state.states.hover
                });

                if (this.props.onMouseUp) {
                    this.props.onMouseUp(e);
                }
            }
        }, {
            key: "onTouchEnd",
            value: function onTouchEnd(e) {
                this.setState({
                    style: (0, _combineStyles2["default"])(this.props.style, this.state.states.active)
                });

                if (this.props.onTouchEnd) {
                    this.props.onTouchEnd(e);
                }
            }
        }, {
            key: "onTouchStart",
            value: function onTouchStart(e) {
                this.setState({
                    style: (0, _combineStyles2["default"])(this.props.style, this.state.states.active)
                });

                if (this.props.onTouchStart) {
                    this.props.onTouchStart(e);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var children = _props.children;
                var onDragEnter = _props.onDragEnter;
                var onDragExit = _props.onDragExit;
                var onDragLeave = _props.onDragLeave;
                var onDragOver = _props.onDragOver;
                var onLoad = _props.onLoad;
                var onMouseDown = _props.onMouseDown;
                var onMouseEnter = _props.onMouseEnter;
                var onMouseLeave = _props.onMouseLeave;
                var onMouseUp = _props.onMouseUp;
                var onTouchEnd = _props.onTouchEnd;
                var onTouchStart = _props.onTouchStart;
                var states = _props.states;
                var style = _props.style;
                var otherProps = _objectWithoutProperties(_props, ["children", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onLoad", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchStart", "states", "style"]);
                var after = states && _utils2["default"].clone(states.after);
                var before = states && _utils2["default"].clone(states.before);
                var afterContent;
                var beforeContent;

                style = (0, _combineStyles2["default"])(style, this.state.style);

                if (before) {
                    beforeContent = before.content;
                    delete before.content;
                }

                if (after) {
                    afterContent = after.content;
                    delete after.content;
                }

                if (this.props.disabled) {
                    style = (0, _combineStyles2["default"])(this.props.style, this.props.states.disabled);
                }

                if (this.props.readonly) {
                    style = (0, _combineStyles2["default"])(this.props.style, this.props.states.readonly);
                }

                switch (Element.type) {
                    case "area":
                    case "base":
                    case "br":
                    case "col":
                    case "hr":
                    case "img":
                    case "input":
                    case "keygen":
                    case "link":
                    case "menuitem":
                    case "meta":
                    case "param":
                    case "source":
                    case "track":
                    case "wbr":
                        return React.createElement(Element.type, _extends({
                            onBlur: this.onBlur,
                            onDrag: this.onDrag,
                            onDragEnter: this.onDragEnter,
                            onDragLeave: this.onDragLeave,
                            onFocus: this.onFocus,
                            onLoad: this.onLoad,
                            onMouseDown: this.onMouseDown,
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            onMouseUp: this.onMouseUp,
                            onTouchEnd: this.onTouchEnd,
                            onTouchStart: this.onTouchStart,
                            style: style
                        }, otherProps));
                    default:
                        return React.createElement(
                            Element.type,
                            _extends({
                                onBlur: this.onBlur,
                                onDrag: this.onDrag,
                                onDragEnter: this.onDragEnter,
                                onDragLeave: this.onDragLeave,
                                onFocus: this.onFocus,
                                onLoad: this.onLoad,
                                onMouseDown: this.onMouseDown,
                                onMouseEnter: this.onMouseEnter,
                                onMouseLeave: this.onMouseLeave,
                                onMouseUp: this.onMouseUp,
                                onTouchEnd: this.onTouchEnd,
                                onTouchStart: this.onTouchStart,
                                style: style
                            }, otherProps),
                            beforeContent && React.createElement(
                                "span",
                                { style: before },
                                beforeContent
                            ),
                            children,
                            afterContent && React.createElement(
                                "span",
                                { style: after },
                                afterContent
                            )
                        );
                }
            }
        }]);

        return RismElement;
    })(_react.Component);
}

exports["default"] = higherOrderComponent;
module.exports = exports["default"];