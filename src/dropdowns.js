/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import prefix from "react-prefixer";
import variables from "./variables";
import utils from "./utils";

var dropdowns = {
        dropdownContainer:{
            position:"relative"
        },
        dropdown:prefix({
            backgroundColor:variables.white.toString(),
            border:"1px solid #ccc",
            borderRadius:variables.borderRadius,
            boxShadow:"2px 2px 2px #ccc",
            color:variables.fontColor.toString(),
            display:"none",
            left:0,
            margin:0,
            padding:0,
            position:"absolute",
            top:"100%",
            zIndex:1000
        }),
        dropdownItem:{
            display:"block",
            margin:0,
            padding:"0.5em 1em",
            transition:"background-color " + variables.transitionTiming + " " + variables.transitionEase,
            whiteSpace:"nowrap"
        }
    };

dropdowns.dropdownRight = utils.merge(utils.clone(dropdowns.dropdown), {
    left:"auto",
    right:0
});

dropdowns.dropdownActive = utils.merge(utils.clone(dropdowns.dropdown), {
    display:"block"
});

dropdowns.dropdownRightActive = utils.merge(utils.clone(dropdowns.dropdownRight), {
    display:"block"
});

dropdowns.dropdownItemHover = utils.merge(utils.clone(dropdowns.dropdownItem), {
    backgroundColor:variables.white.darker(0.5).toString()
});

export default dropdowns;