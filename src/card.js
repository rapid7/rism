/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import prefix from "./react-prefixer";
import variables from "./variables";
import utils from "./utils";

var defaultCard;

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

    if(styles && styles.width && utils.isString(styles.width) && /%/.test(styles.width)) {
        styles.width = (window.innerWidth * (utils.parseInt(styles.width) / 100)) - (variables.gutter / 2);
    }

    if(styles && styles.height && utils.isString(styles.height) && /%/.test(styles.height)) {
        styles.height = (window.innerHeight * (utils.parseInt(styles.height) / 100)) - (variables.gutter / 2);
    }

    switch(type) {
        case "bottom":
            xy = {
                bottom:utils.ceil(variables.gutter / 2),
                height:styles.height || 200,
                left:utils.ceil(variables.gutter / 2)
            };
            axis = "Y";
            break;
        case "left":
            xy = {
                left:utils.ceil(variables.gutter / 2),
                top:utils.ceil(variables.gutter / 2),
                width:styles.width || 200
            };
            axis = "X";
            break;
        case "right":
            xy = {
                right:utils.ceil(variables.gutter / 2),
                top:utils.ceil(variables.gutter / 2),
                width:styles.width || 200
            };
            axis = "X";
            break;
        case "top":
            xy = {
                height:styles.height || 200,
                left:utils.ceil(variables.gutter / 2),
                top:utils.ceil(variables.gutter / 2)
            };
            axis = "Y";
            break;
    }

    cardStyle = utils.merge(utils.clone(defaultCard),xy);
    cardStyle = utils.merge(cardStyle,styles);

    translate = isActive ? 0 : (xy.width || xy.height) + utils.ceil(variables.gutter / 2);

    utils.assign(cardStyle,{
        maxHeight:getMaxHeight(),
        maxWidth:getMaxWidth()
    });

    switch(type) {
        case "left":
        case "top":
            translate = -1 * translate;
            break;
    }

    utils.assign(cardStyle,prefix({
        transform:"translate" + axis + "(" + translate + "px)"
    }));

    return cardStyle;
}

defaultCard = prefix({
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

export default {
    card:function(type,isActive,styles){
        return getCardStyle(type,isActive,styles);
    }
};