import {
    ceil,
    cloneDeep,
    extend
} from "lodash";

import {
    borderColor,
    gutter,
    fontSize,
    white
} from "./variables";

import normalize from "react-style-normalizer";

let nav = {
    nav:normalize({
        backgroundColor:white.darker(0.17).toString(), // #f0f0f0
        boxShadow:"2px 2px 2px " + borderColor.toString(),
        marginBottom:ceil(gutter / 2),
        minHeight:1
    }),
    navBrand:{
        color:"inherit",
        display:"inline-block",
        fontSize:fontSize * 2,
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

nav.navFixed = extend(cloneDeep(nav.nav),{
    position:"fixed"
});

export default nav;