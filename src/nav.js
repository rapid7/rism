/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import normalize from "react-style-normalizer";
import variables from "./variables";
import utils from "./utils";

var nav = {
        nav:normalize({
            backgroundColor:variables.white.darker(0.17).toString(), // #f0f0f0
            boxShadow:"2px 2px 2px " + variables.borderColor.toString(),
            marginBottom:utils.ceil(variables.gutter / 2),
            minHeight:1
        }),
        navBrand:{
            color:"inherit",
            display:"inline-block",
            fontSize:variables.fontSize * 2,
            padding:10,
            textDecoration:"none",
            verticalAlign:"middle"
        },
        navMenu:{
            display:"inline-block",
            listStyleType:"none",
            margin:0,
            padding:0,
            verticalAlign:"middle"
        },
        navMenuItem:{
            display:"inline-block",
            listStyleType:"none",
            margin:0,
            verticalAlign:"middle"
        },
        navMenuLink:{
            display:"block",
            color:"inherit",
            padding:10,
            textDecoration:"none"
        }
    };

nav.navFixed = utils.merge(utils.clone(nav.nav),{
    position:"fixed"
});

export default nav;