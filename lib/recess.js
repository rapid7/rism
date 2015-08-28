"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactStyleNormalizer = require("react-style-normalizer");

var _reactStyleNormalizer2 = _interopRequireDefault(_reactStyleNormalizer);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _sqwish = require("./sqwish");

var _sqwish2 = _interopRequireDefault(_sqwish);

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

var styleObjects = [_base2["default"], _buttons2["default"], _card2["default"], _forms2["default"], _grid2["default"], _headings2["default"], _helpers2["default"], _images2["default"], _labels2["default"], _listGroup2["default"], _nav2["default"], _sizes2["default"]],
    recess;

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

function setResponsive(size) {
    _lodash2["default"].forOwn((0, _responsive2["default"])(size), (function (style, key) {
        _lodash2["default"].assign(this.styles[key], style);
    }).bind(this));
}

function Recess() {
    setPropertyHidden(this, "_app", undefined);
    setPropertyHidden(this, "_appWarn", true);
    setPropertyReadonly(this, "_component", {});
    setPropertyReadonly(this, "_componentOptions", {});
    setPropertyReadonly(this, "_componentStyles", {});
    setPropertyPermanent(this, "size", _sizes2["default"].sizeName());
    setPropertyPermanent(this, "styles", {});

    _lodash2["default"].forEach(styleObjects, (function (style) {
        _lodash2["default"].assign(this.styles, style);
    }).bind(this));

    setResponsive.call(this, this.size);

    Object.preventExtensions(this);

    return this;
}

_lodash2["default"].assign(Recess.prototype, {
    application: function application(app) {
        setPropertyReadonly(this, "_app", app);
        return this;
    },

    combine: function combine() {
        var obj = {};

        _lodash2["default"].forEach(arguments, function (argument, i) {
            _lodash2["default"].merge(obj, argument);
        });

        return obj;
    },

    componentOptions: function componentOptions(component, options) {
        var name;

        if (!this._app && this._appWarn) {
            console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " + "you are using a different library as your application base, however if you are using React + Flux then providing an application " + "will increase performance of Recess and is highly advised.");

            this._appWarn = false;
        }

        if (_lodash2["default"].isUndefined(component)) {
            console.error("Error: No component has been specified.");
            return this;
        }

        if (_lodash2["default"].isString(component)) {
            return this._componentOptions[component];
        }

        if (_lodash2["default"].isObject(component)) {
            name = component._reactInternalInstance && component._reactInternalInstance._currentElement.type.displayName;

            if (!this._component[name]) {
                this._component[name] = {};
            }

            if (!this._componentOptions[name]) {
                this._componentOptions[name] = {};
            }

            if (_lodash2["default"].isUndefined(options)) {
                return this._componentOptions[name];
            }

            this._component[name] = component;
            _lodash2["default"].assign(this._componentOptions[name], options);
        }

        return this;
    },

    componentStyles: function componentStyles(component, styles) {
        var name;

        if (!this._app && this._appWarn) {
            console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " + "you are using a different library as your application base, however if you are using React + Flux then providing an application " + "will increase performance of Recess and is highly advised.");

            this._appWarn = false;
        }

        if (_lodash2["default"].isUndefined(component)) {
            console.error("Error: No component has been specified.");
            return this;
        }

        if (_lodash2["default"].isString(component)) {
            return this._componentStyles[component];
        }

        if (_lodash2["default"].isObject(component)) {
            name = component._reactInternalInstance && component._reactInternalInstance._currentElement.type.displayName;

            if (!this._component[name]) {
                this._component[name] = {};
            }

            if (!this._componentStyles[name]) {
                this._componentStyles[name] = {};
            }

            if (_lodash2["default"].isUndefined(styles)) {
                return this._componentStyles[name];
            }

            this._component[name] = component;
            _lodash2["default"].assign(this._componentStyles[name], styles);
        }

        return this;
    },

    element: function element(Element) {
        var Component = _react2["default"].createClass({
            displayName: "Component",

            componentWillReceiveProps: function componentWillReceiveProps(newProps) {
                this.setState({
                    options: newProps.options || {},
                    style: newProps.style
                });
            },

            getInitialState: function getInitialState() {
                return {
                    options: this.props.options || {},
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
                    style: _lodash2["default"].assign({}, this.props.style, this.state.options.drag)
                });

                if (this.props.onDrag) {
                    this.props.onDrag(e);
                }
            },

            onDragEnter: function onDragEnter(e) {
                this.setState({
                    style: _lodash2["default"].assign({}, this.props.style, this.state.options.dragEnter)
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
                    style: _lodash2["default"].assign({}, this.props.style, this.state.options.focus)
                });

                if (this.props.onFocus) {
                    this.props.onFocus(e);
                }
            },

            onMouseDown: function onMouseDown(e) {
                this.setState({
                    style: _lodash2["default"].assign({}, this.props.style, this.state.options.active)
                });

                if (this.props.onMouseDown) {
                    this.props.onMouseDown(e);
                }
            },

            onMouseEnter: function onMouseEnter(e) {
                this.setState({
                    style: _lodash2["default"].assign({}, this.props.style, this.state.options.hover)
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
                    style: _lodash2["default"].assign({}, this.props.style, this.state.options.hover)
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
                var options = _props.options;
                var style = _props.style;
                var otherProps = _objectWithoutProperties(_props, ["children", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onLoad", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchStart", "options", "style"]);
                var style = this.state.style;

                if (this.props.disabled) {
                    style = this.props.options.disabled;
                }

                if (this.props.readonly) {
                    style = this.props.options.readonly;
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
                    style: _lodash2["default"].assign({}, this.props.style, this.state.options.active)
                });

                if (this.props.onTouchEnd) {
                    this.props.onTouchEnd(e);
                }
            },

            onTouchStart: function onTouchStart(e) {
                this.setState({
                    style: _lodash2["default"].assign({}, this.props.style, this.state.options.active)
                });

                if (this.props.onTouchStart) {
                    this.props.onTouchStart(e);
                }
            }
        });

        return Component;
    },

    extend: function extend(styles) {
        _lodash2["default"].forOwn(styles, (function (value, key) {
            if (!this.styles[key]) {
                this.styles[key] = {};
            }

            if (_lodash2["default"].isFunction(value)) {
                this.styles[key] = value;
            } else {
                _lodash2["default"].assign(this.styles[key], value);
            }
        }).bind(this));

        return this;
    },

    onResize: function onResize() {
        if (_sizes2["default"].sizeName() !== this.size) {
            this.size = _sizes2["default"].sizeName();
            this.render();
        }
    },

    prefix: _reactStyleNormalizer2["default"],

    render: function render() {
        setResponsive.call(this, this.size);

        if (this._app) {
            this._app.forceUpdate();
        } else {
            _lodash2["default"].forOwn(this._components, function (component) {
                component.forceUpdate();
            });
        }

        return this;
    },

    stylesheet: function stylesheet(id, styles) {
        if (_lodash2["default"].isUndefined(id)) {
            console.error("Error: generated stylesheets need to be given an id.");
            return this;
        }

        if (document.getElementById(id) !== null) {
            return this;
        }

        var style = document.createElement("style");

        style.type = "text/css";
        style.id = id;

        if (_lodash2["default"].isString(styles)) {
            style.textContent = (0, _sqwish2["default"])(styles);
        } else if (_lodash2["default"].isObject(styles)) {
            var str = "";

            _lodash2["default"].forOwn(styles, function (style, key) {
                str += key + "{";

                style = (0, _reactStyleNormalizer2["default"])(style);

                _lodash2["default"].forOwn(style, function (value, property) {
                    if (property.charAt(0).toUpperCase() === property.charAt(0)) {
                        str += "-";
                    }

                    str += _lodash2["default"].kebabCase(property) + ":" + value + ";";
                });

                str += "}";
            });

            style.textContent = (0, _sqwish2["default"])(str);
        } else {
            console.error("Error: You either need to provide an object or a string when creating a new stylesheet");
            return this;
        }

        document.head.appendChild(style);

        return this;
    }
});

exports["default"] = Recess;
module.exports = exports["default"];