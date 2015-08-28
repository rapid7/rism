import React from "react";
import normalize from "react-style-normalizer";
import _ from "lodash";

import sqwish from "./sqwish";

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
    recess;

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

function setResponsive(size) {
    _.forOwn(responsive(size),function(style,key){
        _.assign(this.styles[key],style);
    }.bind(this));
}

function Recess() {
    setPropertyHidden(this,"_app",undefined);
    setPropertyHidden(this,"_appWarn",true);
    setPropertyReadonly(this,"_component",{});
    setPropertyReadonly(this,"_componentOptions",{});
    setPropertyReadonly(this,"_componentStyles",{});
    setPropertyPermanent(this,"size",sizes.sizeName());
    setPropertyPermanent(this,"styles",{});

    _.forEach(styleObjects,function(style){
        _.assign(this.styles,style);
    }.bind(this));

    setResponsive.call(this,this.size);

    Object.preventExtensions(this);

    return this;
}

_.assign(Recess.prototype,{
    application(app){
        setPropertyReadonly(this,"_app",app);
        return this;
    },

    combine() {
        var obj = {};

        _.forEach(arguments,function(argument,i) {
            _.merge(obj,argument);
        });

        return obj;
    },

    componentOptions(component,options) {
        var name;

        if(!this._app && this._appWarn) {
            console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " +
                "you are using a different library as your application base, however if you are using React + Flux then providing an application " +
                "will increase performance of Recess and is highly advised.");

            this._appWarn = false;
        }

        if(_.isUndefined(component)) {
            console.error("Error: No component has been specified.");
            return this;
        }

        if(_.isString(component)) {
            return this._componentOptions[component];
        }

        if(_.isObject(component)) {
            name = component._reactInternalInstance && component._reactInternalInstance._currentElement.type.displayName;

            if(!this._component[name]) {
                this._component[name] = {};
            }

            if(!this._componentOptions[name]) {
                this._componentOptions[name] = {};
            }

            if(_.isUndefined(options)) {
                return this._componentOptions[name];
            }

            this._component[name] = component;
            _.assign(this._componentOptions[name],options);
        }

        return this;
    },

    componentStyles(component,styles) {
        var name;

        if(!this._app && this._appWarn) {
            console.warn("Warning: You haven't created an application, which means each component will be managed independently. This is unavoidable if " +
                "you are using a different library as your application base, however if you are using React + Flux then providing an application " +
                "will increase performance of Recess and is highly advised.");

            this._appWarn = false;
        }

        if(_.isUndefined(component)) {
            console.error("Error: No component has been specified.");
            return this;
        }

        if(_.isString(component)) {
            return this._componentStyles[component];
        }

        if(_.isObject(component)) {
            name = component._reactInternalInstance && component._reactInternalInstance._currentElement.type.displayName;

            if(!this._component[name]) {
                this._component[name] = {};
            }

            if(!this._componentStyles[name]) {
                this._componentStyles[name] = {};
            }

            if(_.isUndefined(styles)) {
                return this._componentStyles[name];
            }

            this._component[name] = component;
            _.assign(this._componentStyles[name],styles);
        }

        return this;
    },

    element(Element) {
        var Component = React.createClass({
                componentWillReceiveProps(newProps) {
                    this.setState({
                        options:newProps.options || {},
                        style:newProps.style
                    });
                },

                getInitialState() {
                    return {
                        options:this.props.options || {},
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
                        style:_.assign({},this.props.style,this.state.options.drag)
                    });

                    if(this.props.onDrag) {
                        this.props.onDrag(e);
                    }
                },

                onDragEnter(e) {
                    this.setState({
                        style:_.assign({},this.props.style,this.state.options.dragEnter)
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
                        style:_.assign({},this.props.style,this.state.options.focus)
                    });

                    if(this.props.onFocus) {
                        this.props.onFocus(e);
                    }
                },

                onMouseDown(e) {
                    this.setState({
                        style:_.assign({},this.props.style,this.state.options.active)
                    });

                    if(this.props.onMouseDown) {
                        this.props.onMouseDown(e);
                    }
                },

                onMouseEnter(e) {
                    this.setState({
                        style:_.assign({},this.props.style,this.state.options.hover)
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
                        style:_.assign({},this.props.style,this.state.options.hover)
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
                            options,
                            style,
                            ...otherProps
                        } = this.props,
                        style = this.state.style;

                    if(this.props.disabled) {
                        style = this.props.options.disabled;
                    }

                    if(this.props.readonly) {
                        style = this.props.options.readonly;
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
                        style:_.assign({},this.props.style,this.state.options.active)
                    });

                    if(this.props.onTouchEnd) {
                        this.props.onTouchEnd(e);
                    }
                },

                onTouchStart(e) {
                    this.setState({
                        style:_.assign({},this.props.style,this.state.options.active)
                    });

                    if(this.props.onTouchStart) {
                        this.props.onTouchStart(e);
                    }
                }
            });

        return Component;
    },

    extend(styles) {
        _.forOwn(styles,function(value,key) {
            if(!this.styles[key]) {
                this.styles[key] = {}
            }

            if(_.isFunction(value)) {
                this.styles[key] = value;
            } else {
                assign(this.styles[key],value);
            }
        }.bind(this));

        return this;
    },

    onResize() {
        if(sizes.sizeName() !== this.size) {
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
            _.forOwn(this._components,function(component){
                component.forceUpdate();
            });
        }

        return this;
    },

    stylesheet(id, styles) {
        if(_.isUndefined(id)) {
            console.error("Error: generated stylesheets need to be given an id.");
            return this;
        }

        if(document.getElementById(id) !== null) {
            return this;
        }

        let style = document.createElement("style");

        style.type = "text/css";
        style.id = id;

        if(_.isString(styles)) {
            style.textContent = sqwish(styles);
        } else if(_.isObject(styles)) {
            let str = "";

            _.forOwn(styles,function(style,key) {
                str += key + "{";

                style = normalize(style);

                _.forOwn(style,function(value,property) {
                    if(property.charAt(0).toUpperCase() === property.charAt(0)) {
                        str += "-";
                    }

                    str += _.kebabCase(property) + ":" + value + ";";
                });

                str += "}"
            });

            style.textContent = sqwish(str);
        } else {
            console.error("Error: You either need to provide an object or a string when creating a new stylesheet");
            return this;
        }

        document.head.appendChild(style);

        return this;
    }
});

export default Recess;
