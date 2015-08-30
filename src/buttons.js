/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import normalize from "react-style-normalizer";
import variables from "./variables";
import utils from "./utils";

var buttons = {
        button:normalize({
            border:"1px solid " + variables.borderColor.toString(),
            backgroundColor:variables.backgroundColor.toString(),
            borderRadius:variables.borderRadius.toString(),
            color:variables.fontColor.toString(),
            cursor:"pointer",
            display:"inline-block",
            fontFamily:"inherit",
            lineHeight:"normal",
            outline:0,
            padding:"0.5em 1em",
            textAlign:"center",
            textDecoration:"none",
            textTransform:"uppercase",
            transition:"background-color 150ms ease-in-out",
            userSelect:"none",
            verticalAlign:"middle",
            whiteSpace:"nowrap"
        }),
        buttonDisabled:normalize({
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

export default buttons;