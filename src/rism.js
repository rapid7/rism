/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import React from "react";
import prefix from "react-prefixer";

import sqwish from "./sqwish";
import utils from "./utils";

import base from "./base";
import buttons from "./buttons";
import card from "./card";
import forms from "./forms";
import grid from "./grid";
import headings from "./headings";
import helpers from "./helpers";
import images from "./images";
import labels from "./labels";
import listGroup from "./listGroup";
import nav from "./nav";
import dropdowns from "./dropdowns";

import breakpoints from "./breakpoints";
import responsive from "./responsive";
import unitlessValues from "./unitlessValues";

import "normalize.css";

// debounce function
function debounce(func, wait, immediate) {
    var timeout;

    return function() {
        let context = this,
            args = arguments,
            later = function() {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            },
            callNow = immediate && !timeout;

        window.clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);

        if (callNow) {
            func.apply(context, args);
        }
    };
}

// functions to set properties in different ways
function setPropertyHidden(obj,prop,value) {
    Object.defineProperty(obj,prop,{
        configurable: false,
        enumerable: false,
        value: value,
        writable: true
    });
}

function setPropertyPermanent(obj,prop,value) {
    Object.defineProperty(obj,prop,{
        configurable: false,
        enumerable: true,
        value: value,
        writable: true
    });
}

function setPropertyReadonly(obj,prop,value) {
    Object.defineProperty(obj,prop,{
        configurable: false,
        enumerable: false,
        value: value,
        writable: false
    });
}

// since I use it in the element
function combineStyles() {
    var obj = {};

    utils.forEach(arguments,function(argument,i) {
        obj = utils.merge(obj, prefix(argument));
    });

    return obj;
}

// set responsive values
function setResponsive(name) {
    if(name) {
        setResponsiveComponents.call(this,name);
    } else {
        utils.forEach(Object.keys(this._component), function(name) {
            setResponsiveComponents.call(this,name);
        }.bind(this));
    }

    if(utils.isUndefined(name)) {
        utils.forEach(this._matchMedias._orders, function(query) {
            if (this._matchMedias[query].matches) {
                utils.forIn(this._responsiveStyles[query],function(style,key){
                    if(!this._styles[key]) {
                        this._styles[key] = {};
                    }

                    this[key] = utils.merge(this._styles[key],prefix(style));
                }.bind(this));
            }
        }.bind(this));
    }
}

function setResponsiveComponents(name) {
    if(this._componentStyles[name]._matchMedias) {
        utils.forIn(this._componentStyles[name], function(style, key) {
            this._componentStyles[name][key] = utils.clone(this._componentStyles[name]._styles[key]);
        }.bind(this));

        utils.forEach(this._componentStyles[name]._matchMedias._orders, function(query) {
            if (this._componentStyles[name]._matchMedias[query].matches) {
                utils.forIn(this._componentStyles[name]._responsiveStyles[query],function(style,key){
                    if(!this._componentStyles[name][key]) {
                        this._componentStyles[name][key] = {};
                    }

                    if(!this._componentStyles[name]._styles[key]) {
                        this._componentStyles[name]._styles[key] = {};
                    }

                    this._componentStyles[name][key] = utils.merge(this._componentStyles[name]._styles[key],prefix(style));
                }.bind(this));
            }
        }.bind(this));
    }
}

// set up stuff for creation of normal object
var {
        setBreakpoints,
        current,
        ...otherSizeProps
        } = breakpoints,
    styleObjects = [
        base,
        buttons,
        card,
        forms,
        grid,
        headings,
        helpers,
        images,
        labels,
        listGroup,
        nav,
        dropdowns,
        {...otherSizeProps}
    ],
    defaultBreakpoints = {
        lg:"(min-width:992px)",
        md:"(min-width:768px)",
        sm:"(min-width:568px)",
        xl:"(min-width:1200px)",
        xs:"(max-width:567px)"
    },
    sizesSet = false,
    rism = Object.create({
        application(app){
            setPropertyReadonly(this,"_app",app);
            return this;
        },

        combine:combineStyles,

        element(Element) {
            return React.createClass({
                componentWillReceiveProps(newProps) {
                    this.setState({
                        states:newProps.states || {},
                        style:newProps.style
                    });
                },

                getInitialState() {
                    return {
                        states:this.props.states || {},
                        style:this.props.style
                    };
                },

                onBlur(e) {
                    this.setState({
                        style:this.props.style
                    });

                    if(this.props.onBlur) {
                        this.props.onBlur(e);
                    }
                },

                onDrag(e) {
                    this.setState({
                        style:this.state.states.drag
                    });

                    if(this.props.onDrag) {
                        this.props.onDrag(e);
                    }
                },

                onDragEnter(e) {
                    this.setState({
                        style:this.state.states.dragEnter
                    });

                    if(this.props.onDragEnter) {
                        this.props.onDragEnter(e);
                    }
                },

                onDragLeave(e) {
                    this.setState({
                        style:this.props.style
                    });

                    if(this.props.onDragLeave) {
                        this.props.onDragLeave(e);
                    }
                },

                onFocus(e) {
                    this.setState({
                        style:combineStyles(this.state.states.active, this.state.states.focus)
                    });

                    if(this.props.onFocus) {
                        this.props.onFocus(e);
                    }
                },

                onMouseDown(e) {
                    this.setState({
                        style:combineStyles(this.state.states.hover, this.state.states.active)
                    });

                    if(this.props.onMouseDown) {
                        this.props.onMouseDown(e);
                    }
                },

                onMouseEnter(e) {
                    this.setState({
                        style:this.state.states.hover
                    });

                    if(this.props.onMouseEnter) {
                        this.props.onMouseEnter(e);
                    }
                },

                onMouseLeave() {
                    this.setState({
                        style:this.props.style
                    });

                    if(this.props.onMouseLeave) {
                        this.props.onMouseLeave.call();
                    }
                },

                onMouseUp(e) {
                    this.setState({
                        style:this.state.states.hover
                    });

                    if(this.props.onMouseUp) {
                        this.props.onMouseUp(e);
                    }
                },

                render() {
                    var {
                            children,
                            onDragEnter,
                            onDragExit,
                            onDragLeave,
                            onDragOver,
                            onLoad,
                            onMouseDown,
                            onMouseEnter,
                            onMouseLeave,
                            onMouseUp,
                            onTouchEnd,
                            onTouchStart,
                            states,
                            style,
                            ...otherProps
                            } = this.props,
                        after = states && utils.clone(states.after),
                        before = states && utils.clone(states.before),
                        afterContent,
                        beforeContent;

                    style = combineStyles(style, this.state.style);

                    if (before) {
                        beforeContent = before.content;
                        delete before.content;
                    }

                    if (after) {
                        afterContent = after.content;
                        delete after.content;
                    }

                    if(this.props.disabled) {
                        style = combineStyles(this.props.style, this.props.states.disabled);
                    }

                    if(this.props.readonly) {
                        style = combineStyles(this.props.style, this.props.states.readonly);
                    }

                    return (
                        <Element.type
                            onBlur={this.onBlur}
                            onDrag={this.onDrag}
                            onDragEnter={this.onDragEnter}
                            onDragLeave={this.onDragLeave}
                            onFocus={this.onFocus}
                            onLoad={this.onLoad}
                            onMouseDown={this.onMouseDown}
                            onMouseEnter={this.onMouseEnter}
                            onMouseLeave={this.onMouseLeave}
                            onMouseUp={this.onMouseUp}
                            onTouchEnd={this.onTouchEnd}
                            onTouchStart={this.onTouchStart}
                            style={style}
                            {...otherProps}>
                            {beforeContent && <span style={before}>
                                {beforeContent}
                            </span>}

                            {children}

                            {afterContent && <span style={after}>
                                {afterContent}
                            </span>}
                        </Element.type>
                    );
                },

                onTouchEnd(e) {
                    this.setState({
                        style:combineStyles(this.props.style,this.state.states.active)
                    });

                    if(this.props.onTouchEnd) {
                        this.props.onTouchEnd(e);
                    }
                },

                onTouchStart(e) {
                    this.setState({
                        style:combineStyles(this.props.style,this.state.states.active)
                    });

                    if(this.props.onTouchStart) {
                        this.props.onTouchStart(e);
                    }
                }
            });
        },

        extend(styles) {
            utils.forIn(styles,function(style,key) {
                if(/@media/.test(key)) {
                    var cleanKey = key.replace("@media ","").replace(/:(?![ ])/, ":");

                    if(!this._responsiveStyles[cleanKey]) {
                        this._responsiveStyles[cleanKey] = {};
                    }

                    if(!this._matchMedias[cleanKey]) {
                        this._matchMedias[cleanKey] = window.matchMedia(cleanKey);

                        if(this._matchMedias._orders.indexOf(cleanKey) === -1) {
                            this._matchMedias._orders[this._matchMedias._orders.length] = cleanKey;

                            this._matchMedias._orders.sort(function(previous, current) {
                                var p = previous.split(":")[1].replace("px)",""),
                                    c = current.split(":")[1].replace("px)","");

                                p = /em/.test(p) ? utils.parseInt(p.replace("em)","")) * 16 : utils.parseInt(p);
                                c = /em/.test(c) ? utils.parseInt(c.replace("em)","")) * 16 : utils.parseInt(c);

                                return p > c;
                            });
                        }
                    }

                    utils.forIn(style,function(responsiveStyle,responsiveKey) {
                        if(!this._responsiveStyles[cleanKey][responsiveKey]) {
                            this._responsiveStyles[cleanKey][responsiveKey] = {};
                        }

                        utils.assign(this._responsiveStyles[cleanKey][responsiveKey],responsiveStyle);
                    }.bind(this));
                } else {
                    if(!this[key]) {
                        this[key] = {}
                    }

                    this[key] = utils.isFunction(style) ? style : utils.merge(this[key],prefix(style));
                    this._styles[key] = utils.clone(this[key]);
                }
            }.bind(this));

            setResponsive.call(this);

            return this;
        },

        prefix:prefix,

        render(component) {
            setResponsive.call(this);

            if(this._app) {
                this._app.forceUpdate();
            } else if(component) {
                component.forceUpdate();
            } else {
                utils.forIn(this._components,function(component){
                    component.forceUpdate();
                });
            }

            return this;
        },

        sizes(bps) {
            var bpObj = setBreakpoints(bps),
                orderArr = Object.keys(bps).sort(function(previous, current) {
                    return bpObj.breakpointWidths[previous] > bpObj.breakpointWidths[current];
                });

            if (sizesSet) {
                console.warn("Warning: you are overriding the default sizing for application-wide responsive styles, and therefore will" +
                    "erase any existing responsive styles that are not component-specific.");
            } else {
                sizesSet = true;
            }

            this._matchMedias = {
                _orders:[]
            };
            this._responsiveStyles = {};
            this.breakpoints = bps;
            this.breakpointWidths = bpObj.breakpointWidths;

            utils.forEach(orderArr, function(key) {
                this._matchMedias[bps[key]] = bpObj.mqls[key];
                this._matchMedias._orders[this._matchMedias._orders.length] = bps[key];
            }.bind(this));

            utils.forIn(bpObj.sizeFuncs, function(func, key) {
                this[key] = func;
            }.bind(this));

            breakpoints.current = function() {
                var s = "";

                utils.forEachRight(orderArr, function(size) {
                    if (bpObj.mqls[size].matches) {
                        s = size;
                        return false;
                    }
                });

                return s;
            };

            this.size = breakpoints.current();

            setResponsive.call(this);

            return this;
        },

        states(component,states) {
            if(!this._app && this._appWarn) {
                console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " +
                    "you are using a different library as your application base, however if you are using React + Flux then providing an application " +
                    "will increase performance of rism and is highly advised.");

                this._appWarn = false;
            }

            if(utils.isUndefined(component)) {
                console.error("Error: No component has been specified.");
                return this;
            }

            if(utils.isString(component)) {
                return this._componentStateStyles[component];
            }

            if(utils.isObject(component)) {
                if(utils.isUndefined(component._reactInternalInstance)) {
                    console.error("Error: object passed is not a React constructor.");
                    return this;
                }

                let name = component.displayName;

                if(!this._component[name]) {
                    this._component[name] = component;
                }

                if(!this._componentStyles[name]) {
                    this._componentStyles[name] = {};
                    this._componentStyles[name]._stateStyles = {};
                    setPropertyHidden(this._componentStyles[name],"_stateStyles",{});
                }

                if(utils.isUndefined(states)) {
                    return this._componentStyles[name]._stateStyles;
                }

                states = prefix(states);

                this._componentStyles[name]._stateStyles = utils.merge(this._componentStyles[name]._stateStyles,prefix(states));
            }

            return this;
        },

        styles(component,styles) {
            if(!this._app && this._appWarn) {
                console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " +
                    "you are using a different library as your application base, however if you are using React + Flux then providing an application " +
                    "will increase performance of rism and is highly advised.");

                this._appWarn = false;
            }

            if(utils.isUndefined(component)) {
                console.error("Error: No component has been specified.");
                return this;
            }

            if(utils.isString(component)) {
                return this._componentStyles[component];
            }

            if(utils.isObject(component)) {
                if(utils.isUndefined(component._reactInternalInstance)) {
                    console.error("Error: object passed is not a React constructor.");
                    return this;
                }

                let name = component.displayName;

                if(utils.isUndefined(styles)) {
                    return this._componentStyles[name];
                }

                if(!this._component[name]) {
                    this._component[name] = component;
                }

                if(!this._componentStyles[name]) {
                    this._componentStyles[name] = {};
                    setPropertyHidden(this._componentStyles[name],"_styles",{});
                    setPropertyHidden(this._componentStyles[name],"_matchMedias",{});
                    setPropertyHidden(this._componentStyles[name]._matchMedias,"_orders",[]);
                    setPropertyHidden(this._componentStyles[name],"_responsiveStyles",{});
                }

                // if there is a media query in there, we need to do some extra parsing,
                // otherwise we can just do a straight merge
                if(/@media/.test(JSON.stringify(styles))) {
                    utils.forIn(styles, function(style,key) {
                        if(/@media/.test(key)) {
                            var cleanKey = key.replace("@media ","").replace(/:(?![ ])/, ': ');

                            if(!this._componentStyles[name]._responsiveStyles[cleanKey]) {
                                this._componentStyles[name]._responsiveStyles[cleanKey] = {};
                            }

                            if(!this._componentStyles[name]._matchMedias[cleanKey]) {
                                this._componentStyles[name]._matchMedias[cleanKey] = window.matchMedia(cleanKey);

                                if(this._componentStyles[name]._matchMedias._orders.indexOf(cleanKey) === -1) {
                                    this._componentStyles[name]._matchMedias._orders[this._componentStyles[name]._matchMedias._orders.length] = cleanKey;

                                    this._componentStyles[name]._matchMedias._orders.sort(function(previous, current) {
                                        var p = previous.split(/\:\s+/)[1].replace("px)",""),
                                            c = current.split(/\:\s+/)[1].replace("px)","");

                                        p = /em/.test(p) ? utils.parseInt(p.replace("em)","")) * 16 : utils.parseInt(p);
                                        c = /em/.test(c) ? utils.parseInt(c.replace("em)","")) * 16 : utils.parseInt(c);

                                        return p > c;
                                    });
                                }
                            }

                            utils.forIn(style,function(responsiveStyle,responsiveKey) {
                                if(!this._componentStyles[name]._responsiveStyles[cleanKey][responsiveKey]) {
                                    this._componentStyles[name]._responsiveStyles[cleanKey][responsiveKey] = {};
                                }

                                responsiveStyle = prefix(responsiveStyle);

                                utils.assign(this._componentStyles[name]._responsiveStyles[cleanKey][responsiveKey],responsiveStyle);
                            }.bind(this));
                        } else {
                            if (!this._componentStyles[name][key]) {
                                this._componentStyles[name][key] = {}
                            }

                            this._componentStyles[name][key] = combineStyles(this._componentStyles[name][key], style);
                            this._componentStyles[name]._styles[key] = utils.clone(this._componentStyles[name][key]);
                        }
                    }.bind(this));

                    setResponsive.call(this,name);
                } else {
                    this._componentStyles[name] = combineStyles(this._componentStyles[name], styles);
                }
            }

            return this;
        },

        stylesheet(id, styles) {
            if(utils.isUndefined(id)) {
                console.error("Error: generated stylesheets need to be given an id.");
                return this;
            }

            id = utils.isObject(id) ? id.displayName : id;

            let existingStyle = document.getElementById(id);

            if(existingStyle !== null) {
                document.head.removeChild(existingStyle);
            }

            let style = document.createElement("style");

            style.type = "text/css";
            style.id = id;

            if(utils.isString(styles)) {
                style.textContent = sqwish(styles);
            } else if(utils.isObject(styles)) {
                let str = "";

                utils.forIn(styles,function(style,key) {
                    str += key + "{";

                    utils.forIn(style, function(value, property) {
                        if (utils.isNumber(value) && unitlessValues.indexOf(property) === -1  && !/px/.test(value)) {
                            style[property] = value + "px";
                        }
                    });

                    style = prefix(style);

                    utils.forIn(style,function(value,property) {
                        str += utils.kebabCase(property) + ":" + value + ";";
                    });

                    str += "}"
                });

                style.textContent = sqwish(str);
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
setPropertyHidden(rism,"_app",undefined);
setPropertyHidden(rism,"_appWarn",true);
setPropertyReadonly(rism,"_component",{});
setPropertyReadonly(rism,"_componentStyles",{});
setPropertyHidden(rism,"_matchMedias",{});
setPropertyHidden(rism._matchMedias,"_orders",[]);
setPropertyHidden(rism,"_responsiveStyles",{});
setPropertyHidden(rism,"_styles",{});
setPropertyReadonly(rism,"_stylesheets",{});
setPropertyPermanent(rism,"size","");

// set default breakpoints
rism.sizes(defaultBreakpoints);

// assign responsive styles
rism.extend(responsive);

// add external styles to main object
utils.forEach(styleObjects,function(style){
    utils.assign(rism,style);
});

rism._styles = utils.clone(rism);

// set responsive properties
setResponsive.call(rism);

// add the basic stylesheet
rism.stylesheet("rism",prefix({
    "*, *:before, *:after":{
        boxSizing:"border-box"
    },
    ".clearFix:before, .clearFix:after":{
        content:"\"\"",
        display:"table"
    },
    ".clearFix:after":{
        clear:"both"
    }
}));

let onResize = debounce(() => {
    if (!utils.isUndefined(rism.application)) {
        rism.render();
    }
}, 1);

// add the listener for responsive items
window.addEventListener("resize", onResize);

// let's go!
export default rism;
