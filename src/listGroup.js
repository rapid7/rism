import {
    borderColor,
    borderRadius,
    backgroundColor,
    headingFontWeight,
    white
} from "./variables";

import normalize from "react-style-normalizer";

let listGroup = {
    listGroup:normalize({
        border:"1px solid " + white.darker(1.14).toString(), // #aaa
        borderRadius:borderRadius,
        boxShadow:"2px 2px 2px " + borderColor.toString(),
        listStyleType:"none",
        margin:0,
        padding:0,
        width:"100%"
    }),
    listGroupHeader:{
        backgroundColor:white.darker(0.17).toString(), // #f0f0f0
        borderBottomWidth:1,
        borderColor:borderColor.toString(),
        borderStyle:"solid",
        fontWeight:headingFontWeight,
        padding:15,
        textTransform:"uppercase"
    },
    listGroupItem:{
        backgroundColor:backgroundColor.toString(),
        borderBottomWidth:1,
        borderColor:borderColor.toString(),
        borderStyle:"solid",
        padding:15
    }
};

export default listGroup;