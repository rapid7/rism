/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import prefix from "react-prefixer";
import variables from "./variables";
import utils from "./utils";

var buttons = {
        button:prefix({
            border:"1px solid " + variables.borderColor.toString(),
            backgroundColor:variables.backgroundColor.toString(),
            borderRadius:variables.borderRadius.toString(),
            color:variables.fontColor.toString(),
            cursor:"pointer",
            display:"inline-block",
            fontFamily:"inherit",
            fontSize:12,
            lineHeight:"normal",
            outline:0,
            padding:"0.5em 1em",
            textAlign:"center",
            textDecoration:"none",
            textTransform:"uppercase",
            transition:"background-color " +
                variables.transitionTiming + " " +
                variables.transitionEase + ", color " +
                variables.transitionTiming + " " +
                variables.transitionEase,
            userSelect:"none",
            verticalAlign:"middle",
            whiteSpace:"nowrap"
        }),
        buttonDisabled:prefix({
            border:0,
            cursor:"not-allowed",
            opacity:0.4
        })
    },
    projectColors = [
        "Danger",
        "Info",
        "Primary",
        "Success",
        "Warning"
    ];

buttons.buttonHover = utils.merge(utils.clone(buttons.button),{
    backgroundColor:variables.backgroundColor.darker(0.5).toString()
});

utils.forEach(projectColors,function(color){
    let fontColor = ((color === "Warning") ? variables.fontColor : variables.white).toString();

    buttons["button" + color] = utils.merge(utils.clone(buttons.button),{
        borderColor:variables["color" + color].darker(0.5).toString(),
        backgroundColor:variables["color" + color].toString(),
        color:fontColor
    });

    buttons["button" + color + "Hover"] = utils.merge(utils.clone(buttons["button" + color]),{
        backgroundColor:variables["color" + color].darker(0.5).toString(),
        color:fontColor
    });
});

buttons.buttonLink = utils.merge(utils.clone(buttons.button), {
    backgroundColor:"transparent",
    border:0,
    color:variables.colorPrimary.toString()
});

buttons.buttonLinkHover = utils.merge(utils.clone(buttons.buttonLink), {
    color:variables.colorPrimary.darker(0.5).toString(),
    textDecoration:"underline"
});

export default buttons;