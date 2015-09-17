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

var _dropdowns = require("./dropdowns");

var _dropdowns2 = _interopRequireDefault(_dropdowns);

var _breakpoints = require("./breakpoints");

var _breakpoints2 = _interopRequireDefault(_breakpoints);

var _responsive = require("./responsive");

var _responsive2 = _interopRequireDefault(_responsive);

var _unitlessValues = require("./unitlessValues");

var _unitlessValues2 = _interopRequireDefault(_unitlessValues);

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
        obj = _utils2["default"].merge(obj, (0, _reactPrefixer2["default"])(argument));
    });

    return obj;
}

// set responsive values
function setResponsive(name) {
    if (name) {
        setResponsiveComponents.call(this, name);
    } else {
        _utils2["default"].forEach(Object.keys(this._component), (function (name) {
            setResponsiveComponents.call(this, name);
        }).bind(this));
    }

    if (_utils2["default"].isUndefined(name)) {
        _utils2["default"].forEach(this._matchMedias._orders, (function (query) {
            if (this._matchMedias[query].matches) {
                _utils2["default"].forIn(this._responsiveStyles[query], (function (style, key) {
                    if (!this._styles[key]) {
                        this._styles[key] = {};
                    }

                    this[key] = _utils2["default"].merge(this._styles[key], (0, _reactPrefixer2["default"])(style));
                }).bind(this));
            }
        }).bind(this));
    }
}

function setResponsiveComponents(name) {
    if (this._componentStyles[name]._matchMedias) {
        _utils2["default"].forIn(this._componentStyles[name], (function (style, key) {
            this._componentStyles[name][key] = _utils2["default"].clone(this._componentStyles[name]._styles[key]);
        }).bind(this));

        _utils2["default"].forEach(this._componentStyles[name]._matchMedias._orders, (function (query) {
            if (this._componentStyles[name]._matchMedias[query].matches) {
                _utils2["default"].forIn(this._componentStyles[name]._responsiveStyles[query], (function (style, key) {
                    if (!this._componentStyles[name][key]) {
                        this._componentStyles[name][key] = {};
                    }

                    if (!this._componentStyles[name]._styles[key]) {
                        this._componentStyles[name]._styles[key] = {};
                    }

                    this._componentStyles[name][key] = _utils2["default"].merge(this._componentStyles[name]._styles[key], (0, _reactPrefixer2["default"])(style));
                }).bind(this));
            }
        }).bind(this));
    }
}

// set up stuff for creation of normal object
var setBreakpoints = _breakpoints2["default"].setBreakpoints;
var current = _breakpoints2["default"].current;
var otherSizeProps = _objectWithoutProperties(_breakpoints2["default"], ["setBreakpoints", "current"]);
var styleObjects = [_base2["default"], _buttons2["default"], _card2["default"], _forms2["default"], _grid2["default"], _headings2["default"], _helpers2["default"], _images2["default"], _labels2["default"], _listGroup2["default"], _nav2["default"], _dropdowns2["default"], _extends({}, otherSizeProps)];
var defaultBreakpoints = {
    lg: "(min-width:992px)",
    md: "(min-width:768px)",
    sm: "(min-width:568px)",
    xl: "(min-width:1200px)",
    xs: "(max-width:567px)"
};
var sizesSet = false;
var rism = Object.create({
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
                var after = states && _utils2["default"].clone(states.after);
                var before = states && _utils2["default"].clone(states.before);
                var afterContent;
                var beforeContent;

                if (before) {
                    beforeContent = before.content;
                    delete before.content;
                }

                if (after) {
                    afterContent = after.content;
                    delete after.content;
                }

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
                    beforeContent && _react2["default"].createElement(
                        "span",
                        { style: before },
                        beforeContent
                    ),
                    children,
                    afterContent && _react2["default"].createElement(
                        "span",
                        { style: after },
                        afterContent
                    )
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
            if (/@media/.test(key)) {
                var cleanKey = key.replace("@media ", "").replace(/:(?![ ])/, ":");

                if (!this._responsiveStyles[cleanKey]) {
                    this._responsiveStyles[cleanKey] = {};
                }

                if (!this._matchMedias[cleanKey]) {
                    this._matchMedias[cleanKey] = window.matchMedia(cleanKey);

                    if (this._matchMedias._orders.indexOf(cleanKey) === -1) {
                        this._matchMedias._orders[this._matchMedias._orders.length] = cleanKey;

                        this._matchMedias._orders.sort(function (previous, current) {
                            var p = previous.split(":")[1].replace("px)", ""),
                                c = current.split(":")[1].replace("px)", "");

                            p = /em/.test(p) ? _utils2["default"].parseInt(p.replace("em)", "")) * 16 : _utils2["default"].parseInt(p);
                            c = /em/.test(c) ? _utils2["default"].parseInt(c.replace("em)", "")) * 16 : _utils2["default"].parseInt(c);

                            return p > c;
                        });
                    }
                }

                _utils2["default"].forIn(style, (function (responsiveStyle, responsiveKey) {
                    if (!this._responsiveStyles[cleanKey][responsiveKey]) {
                        this._responsiveStyles[cleanKey][responsiveKey] = {};
                    }

                    _utils2["default"].assign(this._responsiveStyles[cleanKey][responsiveKey], responsiveStyle);
                }).bind(this));
            } else {
                if (!this[key]) {
                    this[key] = {};
                }

                this[key] = _utils2["default"].isFunction(style) ? style : _utils2["default"].merge(this[key], (0, _reactPrefixer2["default"])(style));
                this._styles[key] = _utils2["default"].clone(this[key]);
            }
        }).bind(this));

        setResponsive.call(this);

        return this;
    },

    onResize: _.debounce(function () {
        var size = _breakpoints2["default"].current();

        if (size === "xs" || size !== this.size) {
            this.size = _breakpoints2["default"].current();
        }

        this.render();
    }, 1),

    prefix: _reactPrefixer2["default"],

    render: function render(component) {
        setResponsive.call(this);

        if (this._app) {
            this._app.forceUpdate();
        } else if (component) {
            component.forceUpdate();
        } else {
            _utils2["default"].forIn(this._components, function (component) {
                component.forceUpdate();
            });
        }

        return this;
    },

    sizes: function sizes(bps) {
        var bpObj = setBreakpoints(bps),
            orderArr = Object.keys(bps).sort(function (previous, current) {
            return bpObj.breakpointWidths[previous] > bpObj.breakpointWidths[current];
        });

        if (sizesSet) {
            console.warn("Warning: you are overriding the default sizing for application-wide responsive styles, and therefore will" + "erase any existing responsive styles that are not component-specific.");
        } else {
            sizesSet = true;
        }

        this._matchMedias = {
            _orders: []
        };
        this._responsiveStyles = {};
        this.breakpoints = bps;
        this.breakpointWidths = bpObj.breakpointWidths;

        _utils2["default"].forEach(orderArr, (function (key) {
            this._matchMedias[bps[key]] = bpObj.mqls[key];
            this._matchMedias._orders[this._matchMedias._orders.length] = bps[key];
        }).bind(this));

        _utils2["default"].forIn(bpObj.sizeFuncs, (function (func, key) {
            this[key] = func;
        }).bind(this));

        _breakpoints2["default"].current = function () {
            var s = "";

            _utils2["default"].forEachRight(orderArr, function (size) {
                if (bpObj.mqls[size].matches) {
                    s = size;
                    return false;
                }
            });

            return s;
        };

        this.size = _breakpoints2["default"].current();

        setResponsive.call(this);

        return this;
    },

    states: function states(component, _states) {
        if (!this._app && this._appWarn) {
            console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " + "you are using a different library as your application base, however if you are using React + Flux then providing an application " + "will increase performance of rism and is highly advised.");

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

            var _name = component.displayName;

            if (!this._component[_name]) {
                this._component[_name] = component;
            }

            if (!this._componentStyles[_name]) {
                this._componentStyles[_name] = {};
                this._componentStyles[_name]._stateStyles = {};
                setPropertyHidden(this._componentStyles[_name], "_stateStyles", {});
            }

            if (_utils2["default"].isUndefined(_states)) {
                return this._componentStyles[_name]._stateStyles;
            }

            _states = (0, _reactPrefixer2["default"])(_states);

            this._componentStyles[_name]._stateStyles = _utils2["default"].merge(this._componentStyles[_name]._stateStyles, (0, _reactPrefixer2["default"])(_states));
        }

        return this;
    },

    styles: function styles(component, _styles) {
        var _this = this;

        if (!this._app && this._appWarn) {
            console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " + "you are using a different library as your application base, however if you are using React + Flux then providing an application " + "will increase performance of rism and is highly advised.");

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
            var _ret = (function () {
                if (_.isUndefined(component._reactInternalInstance)) {
                    console.error("Error: object passed is not a React constructor.");
                    return {
                        v: _this
                    };
                }

                var name = component.displayName;

                if (_utils2["default"].isUndefined(_styles)) {
                    return {
                        v: _this._componentStyles[name]
                    };
                }

                if (!_this._component[name]) {
                    _this._component[name] = component;
                }

                if (!_this._componentStyles[name]) {
                    _this._componentStyles[name] = {};
                    setPropertyHidden(_this._componentStyles[name], "_styles", {});
                    setPropertyHidden(_this._componentStyles[name], "_matchMedias", {});
                    setPropertyHidden(_this._componentStyles[name]._matchMedias, "_orders", []);
                    setPropertyHidden(_this._componentStyles[name], "_responsiveStyles", {});
                }

                // if there is a media query in there, we need to do some extra parsing,
                // otherwise we can just do a straight merge
                if (/@media/.test(JSON.stringify(_styles))) {
                    _utils2["default"].forIn(_styles, (function (style, key) {
                        if (/@media/.test(key)) {
                            var cleanKey = key.replace("@media ", "").replace(/:(?![ ])/, ': ');

                            if (!this._componentStyles[name]._responsiveStyles[cleanKey]) {
                                this._componentStyles[name]._responsiveStyles[cleanKey] = {};
                            }

                            if (!this._componentStyles[name]._matchMedias[cleanKey]) {
                                this._componentStyles[name]._matchMedias[cleanKey] = window.matchMedia(cleanKey);

                                if (this._componentStyles[name]._matchMedias._orders.indexOf(cleanKey) === -1) {
                                    this._componentStyles[name]._matchMedias._orders[this._componentStyles[name]._matchMedias._orders.length] = cleanKey;

                                    this._componentStyles[name]._matchMedias._orders.sort(function (previous, current) {
                                        var p = previous.split(/\:\s+/)[1].replace("px)", ""),
                                            c = current.split(/\:\s+/)[1].replace("px)", "");

                                        p = /em/.test(p) ? _utils2["default"].parseInt(p.replace("em)", "")) * 16 : _utils2["default"].parseInt(p);
                                        c = /em/.test(c) ? _utils2["default"].parseInt(c.replace("em)", "")) * 16 : _utils2["default"].parseInt(c);

                                        return p > c;
                                    });
                                }
                            }

                            _utils2["default"].forIn(style, (function (responsiveStyle, responsiveKey) {
                                if (!this._componentStyles[name]._responsiveStyles[cleanKey][responsiveKey]) {
                                    this._componentStyles[name]._responsiveStyles[cleanKey][responsiveKey] = {};
                                }

                                responsiveStyle = (0, _reactPrefixer2["default"])(responsiveStyle);

                                _utils2["default"].assign(this._componentStyles[name]._responsiveStyles[cleanKey][responsiveKey], responsiveStyle);
                            }).bind(this));
                        } else {
                            if (!this._componentStyles[name][key]) {
                                this._componentStyles[name][key] = {};
                            }

                            this._componentStyles[name][key] = combineStyles(this._componentStyles[name][key], style);
                            this._componentStyles[name]._styles[key] = _utils2["default"].clone(this._componentStyles[name][key]);
                        }
                    }).bind(_this));

                    setResponsive.call(_this, name);
                } else {
                    _this._componentStyles[name] = combineStyles(_this._componentStyles[name], _styles);
                }
            })();

            if (typeof _ret === "object") return _ret.v;
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

                _utils2["default"].forIn(style, function (value, property) {
                    if (_utils2["default"].isNumber(value) && _unitlessValues2["default"].indexOf(property) === -1) {
                        style[property] = value + "px";
                    }
                });

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
setPropertyHidden(rism, "_app", undefined);
setPropertyHidden(rism, "_appWarn", true);
setPropertyReadonly(rism, "_component", {});
setPropertyReadonly(rism, "_componentStyles", {});
setPropertyHidden(rism, "_matchMedias", {});
setPropertyHidden(rism._matchMedias, "_orders", []);
setPropertyHidden(rism, "_responsiveStyles", {});
setPropertyHidden(rism, "_styles", {});
setPropertyReadonly(rism, "_stylesheets", {});
setPropertyPermanent(rism, "size", "");

// set default breakpoints
rism.sizes(defaultBreakpoints);

// assign responsive styles
rism.extend(_responsive2["default"]);

// add external styles to main object
_utils2["default"].forEach(styleObjects, function (style) {
    _utils2["default"].assign(rism, style);
});

rism._styles = _utils2["default"].clone(rism);

// set responsive properties
setResponsive.call(rism);

// add the basic stylesheet
rism.stylesheet("rism", (0, _reactPrefixer2["default"])({
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
window.addEventListener("resize", rism.onResize.bind(rism), false);

// let's go!
exports["default"] = rism;
module.exports = exports["default"];