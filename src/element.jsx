import {
    Component
} from "react";

import combineStyles from "./combineStyles";
import utils from "./utils";

function higherOrderComponent(Element) {
    return class RismElement extends Component {
        displayName = Element.type.charAt(0).toUpperCase() + Element.type.slice(1) + "RismElement";

        constructor(props) {
            super(props);

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

        componentWillReceiveProps(newProps) {
            this.setState({
                states:newProps.states || {},
                style:newProps.style
            });
        }

        state = {
            states:this.props.states || {},
            style:this.props.style
        };

        onBlur(e) {
            this.setState({
                style:this.props.style
            });

            if(this.props.onBlur) {
                this.props.onBlur(e);
            }
        }

        onDrag(e) {
            this.setState({
                style:this.state.states.drag
            });

            if(this.props.onDrag) {
                this.props.onDrag(e);
            }
        }

        onDragEnter(e) {
            this.setState({
                style:this.state.states.dragEnter
            });

            if(this.props.onDragEnter) {
                this.props.onDragEnter(e);
            }
        }

        onDragLeave(e) {
            this.setState({
                style:this.props.style
            });

            if(this.props.onDragLeave) {
                this.props.onDragLeave(e);
            }
        }

        onFocus(e) {
            this.setState({
                style:combineStyles(this.state.states.active, this.state.states.focus)
            });

            if(this.props.onFocus) {
                this.props.onFocus(e);
            }
        }

        onMouseDown(e) {
            this.setState({
                style:combineStyles(this.state.states.hover, this.state.states.active)
            });

            if(this.props.onMouseDown) {
                this.props.onMouseDown(e);
            }
        }

        onMouseEnter(e) {
            this.setState({
                style:this.state.states.hover
            });

            if(this.props.onMouseEnter) {
                this.props.onMouseEnter(e);
            }
        }

        onMouseLeave() {
            this.setState({
                style:this.props.style
            });

            if(this.props.onMouseLeave) {
                this.props.onMouseLeave.call();
            }
        }

        onMouseUp(e) {
            this.setState({
                style:this.state.states.hover
            });

            if(this.props.onMouseUp) {
                this.props.onMouseUp(e);
            }
        }

        onTouchEnd(e) {
            this.setState({
                style:combineStyles(this.props.style,this.state.states.active)
            });

            if(this.props.onTouchEnd) {
                this.props.onTouchEnd(e);
            }
        }

        onTouchStart(e) {
            this.setState({
                style:combineStyles(this.props.style,this.state.states.active)
            });

            if(this.props.onTouchStart) {
                this.props.onTouchStart(e);
            }
        }

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
                    return <Element.type
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
                        {...otherProps}
                        />;
                default:
                    return <Element.type
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
                    </Element.type>;
            }
        }
    }
}

export default higherOrderComponent;