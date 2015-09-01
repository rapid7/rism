/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactPrefixer = require("react-prefixer");

var _reactPrefixer2 = _interopRequireDefault(_reactPrefixer);

var _sqwish = require("./sqwish");

var _sqwish2 = _interopRequireDefault(_sqwish);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var _base = require("./base");

var _base2 = _interopRequireDefault(_base);

var _buttons = require("./buttons");

var _buttons2 = _interopRequireDefault(_buttons);

var _card = require("./card");

var _card2 = _interopRequireDefault(_card);

var _forms = require("./forms");

var _forms2 = _interopRequireDefault(_forms);

var _grid = require("./grid");

var _grid2 = _interopRequireDefault(_grid);

var _headings = require("./headings");

var _headings2 = _interopRequireDefault(_headings);

var _helpers = require("./helpers");

var _helpers2 = _interopRequireDefault(_helpers);

var _images = require("./images");

var _images2 = _interopRequireDefault(_images);

var _labels = require("./labels");

var _labels2 = _interopRequireDefault(_labels);

var _listGroup = require("./listGroup");

var _listGroup2 = _interopRequireDefault(_listGroup);

var _nav = require("./nav");

var _nav2 = _interopRequireDefault(_nav);

var _sizes = require("./sizes");

var _sizes2 = _interopRequireDefault(_sizes);

var _responsive = require("./responsive");

var _responsive2 = _interopRequireDefault(_responsive);

require("normalize.css");

// functions to set properties in different ways
function setPropertyHidden(obj, prop, value) {
    Object.defineProperty(obj, prop, {
        configurable: false,
        enumerable: false,
        value: value,
        writable: true
    });
}

function setPropertyPermanent(obj, prop, value) {
    Object.defineProperty(obj, prop, {
        configurable: false,
        enumerable: true,
        value: value,
        writable: true
    });
}

function setPropertyReadonly(obj, prop, value) {
    Object.defineProperty(obj, prop, {
        configurable: false,
        enumerable: false,
        value: value,
        writable: false
    });
}

// since I use it in the element
function combineStyles() {
    var obj = {};

    _utils2["default"].forEach(arguments, function (argument, i) {
        obj = _utils2["default"].merge(obj, argument);
    });

    return obj;
}

// set responsive values
function setResponsive(size) {
    _utils2["default"].forIn((0, _responsive2["default"])(size), (function (style, key) {
        _utils2["default"].assign(this[key], (0, _reactPrefixer2["default"])(style));
    }).bind(this));
}

// set up stuff for creation of normal object
var styleObjects = [_base2["default"], _buttons2["default"], _card2["default"], _forms2["default"], _grid2["default"], _headings2["default"], _helpers2["default"], _images2["default"], _labels2["default"], _listGroup2["default"], _nav2["default"], _sizes2["default"]],
    recess = Object.create({
    application: function application(app) {
        setPropertyReadonly(this, "_app", app);
        return this;
    },

    combine: combineStyles,

    element: function element(Element) {
        return _react2["default"].createClass({
            componentWillReceiveProps: function componentWillReceiveProps(newProps) {
                this.setState({
                    states: newProps.states || {},
                    style: newProps.style
                });
            },

            getInitialState: function getInitialState() {
                return {
                    states: this.props.states || {},
                    style: this.props.style
                };
            },

            onBlur: function onBlur(e) {
                this.setState({
                    style: this.props.style
                });

                if (this.props.onBlur) {
                    this.props.onBlur(e);
                }
            },

            onDrag: function onDrag(e) {
                this.setState({
                    style: combineStyles(this.props.style, this.state.states.drag)
                });

                if (this.props.onDrag) {
                    this.props.onDrag(e);
                }
            },

            onDragEnter: function onDragEnter(e) {
                this.setState({
                    style: combineStyles(this.props.style, this.state.states.dragEnter)
                });

                if (this.props.onDragEnter) {
                    this.props.onDragEnter(e);
                }
            },

            onDragLeave: function onDragLeave(e) {
                this.setState({
                    style: this.props.style
                });

                if (this.props.onDragLeave) {
                    this.props.onDragLeave(e);
                }
            },

            onFocus: function onFocus(e) {
                this.setState({
                    style: combineStyles(this.props.style, this.state.states.focus)
                });

                if (this.props.onFocus) {
                    this.props.onFocus(e);
                }
            },

            onMouseDown: function onMouseDown(e) {
                this.setState({
                    style: combineStyles(this.props.style, this.state.states.active)
                });

                if (this.props.onMouseDown) {
                    this.props.onMouseDown(e);
                }
            },

            onMouseEnter: function onMouseEnter(e) {
                this.setState({
                    style: combineStyles(this.props.style, this.state.states.hover)
                });

                if (this.props.onMouseEnter) {
                    this.props.onMouseEnter(e);
                }
            },

            onMouseLeave: function onMouseLeave() {
                this.setState({
                    style: this.props.style
                });

                if (this.props.onMouseLeave) {
                    this.props.onMouseLeave.call();
                }
            },

            onMouseUp: function onMouseUp(e) {
                this.setState({
                    style: combineStyles(this.props.style, this.state.states.hover)
                });

                if (this.props.onMouseUp) {
                    this.props.onMouseUp(e);
                }
            },

            render: function render() {
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
                var style = this.state.style;

                if (this.props.disabled) {
                    style = combineStyles(this.props.style, this.props.states.disabled);
                }

                if (this.props.readonly) {
                    style = combineStyles(this.props.style, this.props.states.readonly);
                }

                return _react2["default"].createElement(
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
                    children
                );
            },

            onTouchEnd: function onTouchEnd(e) {
                this.setState({
                    style: combineStyles(this.props.style, this.state.states.active)
                });

                if (this.props.onTouchEnd) {
                    this.props.onTouchEnd(e);
                }
            },

            onTouchStart: function onTouchStart(e) {
                this.setState({
                    style: combineStyles(this.props.style, this.state.states.active)
                });

                if (this.props.onTouchStart) {
                    this.props.onTouchStart(e);
                }
            }
        });
    },

    extend: function extend(styles) {
        _utils2["default"].forIn(styles, (function (style, key) {
            if (!this[key]) {
                this[key] = {};
            }

            if (_utils2["default"].isFunction(style)) {
                this[key] = style;
            } else {
                _utils2["default"].assign(this[key], (0, _reactPrefixer2["default"])(style));
            }
        }).bind(this));

        return this;
    },

    onResize: function onResize() {
        var size = _sizes2["default"].sizeName();

        if (size === "xs" || size !== this.size) {
            this.size = _sizes2["default"].sizeName();
            this.render();
        }
    },

    prefix: _reactPrefixer2["default"],

    render: function render() {
        setResponsive.call(this, this.size);

        if (this._app) {
            this._app.forceUpdate();
        } else {
            _utils2["default"].forIn(this._components, function (component) {
                component.forceUpdate();
            });
        }

        return this;
    },

    states: function states(component, _states) {
        if (!this._app && this._appWarn) {
            console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " + "you are using a different library as your application base, however if you are using React + Flux then providing an application " + "will increase performance of Recess and is highly advised.");

            this._appWarn = false;
        }

        if (_utils2["default"].isUndefined(component)) {
            console.error("Error: No component has been specified.");
            return this;
        }

        if (_utils2["default"].isString(component)) {
            return this._componentStateStyles[component];
        }

        if (_utils2["default"].isObject(component)) {
            if (_.isUndefined(component._reactInternalInstance)) {
                console.error("Error: object passed is not a React constructor.");
                return this;
            }

            var type = component._reactInternalInstance._currentElement.type,
                _name = type.displayName || type.name;

            if (_utils2["default"].isUndefined(_states)) {
                return this._componentStateStyles[_name];
            }

            if (_utils2["default"].isUndefined(this._component[_name])) {
                this._component[_name] = component;
            }

            if (_utils2["default"].isUndefined(this._componentStateStyles[_name])) {
                this._componentStateStyles[_name] = {};
            }

            this._componentStateStyles[_name] = _utils2["default"].merge(this._componentStateStyles[_name], (0, _reactPrefixer2["default"])(_states));
        }

        return this;
    },

    styles: function styles(component, _styles) {
        if (!this._app && this._appWarn) {
            console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " + "you are using a different library as your application base, however if you are using React + Flux then providing an application " + "will increase performance of Recess and is highly advised.");

            this._appWarn = false;
        }

        if (_utils2["default"].isUndefined(component)) {
            console.error("Error: No component has been specified.");
            return this;
        }

        if (_utils2["default"].isString(component)) {
            return this._componentStyles[component];
        }

        if (_utils2["default"].isObject(component)) {
            if (_.isUndefined(component._reactInternalInstance)) {
                console.error("Error: object passed is not a React constructor.");
                return this;
            }

            var type = component._reactInternalInstance._currentElement.type,
                _name2 = type.displayName || type.name;

            if (_utils2["default"].isUndefined(_styles)) {
                return this._componentStyles[_name2];
            }

            if (_utils2["default"].isUndefined(this._component[_name2])) {
                this._component[_name2] = component;
            }

            if (_utils2["default"].isUndefined(this._componentStyles[_name2])) {
                this._componentStyles[_name2] = {};
            }

            this._componentStyles[_name2] = _utils2["default"].merge(this._componentStyles[_name2], (0, _reactPrefixer2["default"])(_styles));
        }

        return this;
    },

    stylesheet: function stylesheet(id, styles) {
        if (_utils2["default"].isUndefined(id)) {
            console.error("Error: generated stylesheets need to be given an id.");
            return this;
        }

        if (document.getElementById(id) !== null) {
            return this;
        }

        var style = document.createElement("style");

        style.type = "text/css";
        style.id = id;

        if (_utils2["default"].isString(styles)) {
            style.textContent = (0, _sqwish2["default"])(styles);
        } else if (_utils2["default"].isObject(styles)) {
            var str = "";

            _utils2["default"].forIn(styles, function (style, key) {
                str += key + "{";

                style = (0, _reactPrefixer2["default"])(style);

                _utils2["default"].forIn(style, function (value, property) {
                    str += _utils2["default"].kebabCase(property) + ":" + value + ";";
                });

                str += "}";
            });

            style.textContent = (0, _sqwish2["default"])(str);
        } else {
            console.error("Error: You either need to provide an object or a string when creating a new stylesheet");
            return this;
        }

        this._stylesheets[id] = style;

        document.head.appendChild(style);

        return this;
    }
});

// set up internal properties
setPropertyHidden(recess, "_app", undefined);
setPropertyHidden(recess, "_appWarn", true);
setPropertyReadonly(recess, "_component", {});
setPropertyReadonly(recess, "_componentStateStyles", {});
setPropertyReadonly(recess, "_componentStyles", {});
setPropertyReadonly(recess, "_stylesheets", {});
setPropertyPermanent(recess, "size", _sizes2["default"].sizeName());

// add external styles to main object
_utils2["default"].forEach(styleObjects, function (style) {
    _utils2["default"].assign(recess, style);
});

// set responsive properties
setResponsive.call(recess, recess.size);

// add the basic stylesheet
recess.stylesheet("Recess", (0, _reactPrefixer2["default"])({
    "*, *:before, *:after": {
        boxSizing: "border-box"
    },
    ".clearFix:before, .clearFix:after": {
        content: "\"\"",
        display: "table"
    },
    ".clearFix:after": {
        clear: "both"
    }
}));

// add the listener for responsive items
window.addEventListener("resize", recess.onResize.bind(recess), false);

// let's go!
exports["default"] = recess;
module.exports = exports["default"];