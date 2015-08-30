import React from "react";
import normalize from "react-style-normalizer";

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
import sizes from "./sizes";
import responsive from "./responsive";

import "normalize.css";

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
        obj = utils.merge(obj,argument);
    });

    return obj;
}

// set responsive values
function setResponsive(size) {
    utils.forIn(responsive(size),function(style,key){
        utils.assign(this[key],style);
    }.bind(this));
}

// polyfill for setPrototypeOf
Object.setPrototypeOf = Object.setPrototypeOf || function(obj,proto) {
        obj.__proto__ = proto;
        return obj;
    };

// set up stuff for creation of normal object
var styleObjects = [
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
        sizes
    ],
    recess = {};

// set up internal properties
setPropertyHidden(recess,"_app",undefined);
setPropertyHidden(recess,"_appWarn",true);
setPropertyReadonly(recess,"_component",{});
setPropertyReadonly(recess,"_componentStateStyles",{});
setPropertyReadonly(recess,"_componentStyles",{});
setPropertyReadonly(recess,"_stylesheets",{});
setPropertyPermanent(recess,"size",sizes.sizeName());

// add external styles to main object
utils.forEach(styleObjects,function(style){
    utils.assign(recess,style);
});

// set responsive properties
setResponsive.call(recess,recess.size);

// create the methods for this object
Object.setPrototypeOf(recess,{
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
                    style:combineStyles(this.props.style,this.state.states.drag)
                });

                if(this.props.onDrag) {
                    this.props.onDrag(e);
                }
            },

            onDragEnter(e) {
                this.setState({
                    style:combineStyles(this.props.style,this.state.states.dragEnter)
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
                    style:combineStyles(this.props.style,this.state.states.focus)
                });

                if(this.props.onFocus) {
                    this.props.onFocus(e);
                }
            },

            onMouseDown(e) {
                this.setState({
                    style:combineStyles(this.props.style,this.state.states.active)
                });

                if(this.props.onMouseDown) {
                    this.props.onMouseDown(e);
                }
            },

            onMouseEnter(e) {
                this.setState({
                    style:combineStyles(this.props.style,this.state.states.hover)
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
                    style:combineStyles(this.props.style,this.state.states.hover)
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
                    style = this.state.style;

                if(this.props.disabled) {
                    style = this.props.states.disabled;
                }

                if(this.props.readonly) {
                    style = this.props.states.readonly;
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
                        {children}
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
        utils.forIn(styles,function(value,key) {
            if(!this[key]) {
                this[key] = {}
            }

            if(utils.isFunction(value)) {
                this[key] = value;
            } else {
                utils.assign(this[key],value);
            }
        }.bind(this));

        return this;
    },

    onResize() {
        var size = sizes.sizeName();

        if(size === "xs" || size !== this.size) {
            this.size = sizes.sizeName();
            this.render();
        }
    },

    prefix:normalize,

    render() {
        setResponsive.call(this,this.size);

        if(this._app) {
            this._app.forceUpdate();
        } else {
            utils.forIn(this._components,function(component){
                component.forceUpdate();
            });
        }

        return this;
    },

    states(component,states) {
        var name;

        if(!this._app && this._appWarn) {
            console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " +
                "you are using a different library as your application base, however if you are using React + Flux then providing an application " +
                "will increase performance of Recess and is highly advised.");

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
            name = component._reactInternalInstance && component._reactInternalInstance._currentElement.type.displayName;

            if(!this._component[name]) {
                this._component[name] = {};
            }

            if(!this._componentStateStyles[name]) {
                this._componentStateStyles[name] = {};
            }

            if(utils.isUndefined(states)) {
                return this._componentStateStyles[name];
            }

            this._component[name] = component;
            utils.assign(this._componentStateStyles[name],states);
        }

        return this;
    },

    styles(component,styles) {
        var name;

        if(!this._app && this._appWarn) {
            console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " +
                "you are using a different library as your application base, however if you are using React + Flux then providing an application " +
                "will increase performance of Recess and is highly advised.");

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
            name = component._reactInternalInstance && component._reactInternalInstance._currentElement.type.displayName;

            if(!this._component[name]) {
                this._component[name] = {};
            }

            if(!this._componentStyles[name]) {
                this._componentStyles[name] = {};
            }

            if(utils.isUndefined(styles)) {
                return this._componentStyles[name];
            }

            this._component[name] = component;
            utils.assign(this._componentStyles[name],styles);
        }

        return this;
    },

    stylesheet(id, styles) {
        if(utils.isUndefined(id)) {
            console.error("Error: generated stylesheets need to be given an id.");
            return this;
        }

        if(document.getElementById(id) !== null) {
            return this;
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

                style = normalize(style);

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

// add the basic stylesheet
recess.stylesheet("Recess",normalize({
    "*,*:before,*:after":{
        boxSizing:"border-box"
    },
    ".clearFix:before,.clearFix:after":{
        content:"\"\"",
        display:"table"
    },
    ".clearFix:after":{
        clear:"both"
    }
}));

// add the listener for responsive items
window.addEventListener("resize",recess.onResize.bind(recess),false);

// let's go!
export default recess;
