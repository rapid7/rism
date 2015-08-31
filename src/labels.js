/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import normalize from "react-style-normalizer";
import variables from "./variables";
import utils from "./utils";

var labels = {
        label:normalize({
            backgroundColor:variables.white.darker(0.4).toString(), // #ddd
            borderRadius:variables.borderRadius * 2,
            display:"inline",
            fontSize:variables.fontSize,
            marginLeft:5,
            marginRight:5,
            padding:6,
            top:-2
        })
    },
    projectColors = [
        "Danger",
        "Info",
        "Primary",
        "Success",
        "Warning"
    ];

utils.forEach(projectColors,function(color){
    let fontColor = ((color === "Warning") ? variables.fontColor : variables.white).toString();

    labels["labels" + color] = utils.merge(utils.clone(labels.label),{
        backgroundColor:variables["color" + color].toString(),
        color:fontColor
    });
});

export default labels;