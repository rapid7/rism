import variables from "./variables";

import {
    ceil,
    cloneDeep,
    extend,
    parseInt
} from "lodash";

import normalize from "react-style-normalizer";

function getMaxHeight() {
    return window.innerHeight - variables.gutter;
}

function getMaxWidth() {
    return window.innerWidth - variables.gutter;
}

function getCardStyle(type,isActive,styles) {
    var cardStyle,
        xy,
        translate,
        axis;

    if(styles && styles.width && _.isString(styles.width) && /%/.test(styles.width)) {
        styles.width = (window.innerWidth * (parseInt(styles.width) / 100)) - (variables.gutter / 2);
    }

    if(styles && styles.height && _.isString(styles.height) && /%/.test(styles.height)) {
        styles.height = (window.innerHeight * (parseInt(styles.height) / 100)) - (variables.gutter / 2);
    }

    switch(type) {
        case "bottom":
            xy = {
                bottom:_.ceil(variables.gutter / 2),
                height:styles.height || 200,
                left:_.ceil(variables.gutter / 2)
            };
            axis = "Y";
            break;
        case "left":
            xy = {
                left:_.ceil(variables.gutter / 2),
                top:_.ceil(variables.gutter / 2),
                width:styles.width || 200
            };
            axis = "X";
            break;
        case "right":
            xy = {
                right:_.ceil(variables.gutter / 2),
                top:_.ceil(variables.gutter / 2),
                width:styles.width || 200
            };
            axis = "X";
            break;
        case "top":
            xy = {
                height:styles.height || 200,
                left:_.ceil(variables.gutter / 2),
                top:_.ceil(variables.gutter / 2)
            };
            axis = "Y";
            break;
    }

    cardStyle = extend(cloneDeep(defaultCard),xy,styles);

    translate = isActive ? 0 : (xy.width || xy.height) + ceil(variables.gutter / 2);

    extend(cardStyle,{
        maxHeight:getMaxHeight(),
        maxWidth:getMaxWidth()
    });

    switch(type) {
        case "left":
        case "top":
            translate = -1 * translate;
            break;
    }

    extend(cardStyle,normalize({
        transform:"translate" + axis + "(" + translate + "px)"
    }));

    return cardStyle;
}

let defaultCard = normalize({
        backgroundColor:variables.backgroundColor.toString(),
        border:"1px solid " + variables.borderColor.toString(),
        borderRadius:variables.borderRadius,
        boxShadow:"2px 2px 2px #ccc",
        color:variables.fontColor.toString(),
        maxHeight:getMaxHeight(),
        maxWidth:getMaxWidth(),
        position:"fixed",
        transition:"transform 150ms ease-in-out, height 150ms ease-in-out",
        zIndex:1000
    });

const card = {
    card:function(type,isActive,styles){
        return getCardStyle(type,isActive,styles);
    }
};

export default card;