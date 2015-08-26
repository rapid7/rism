import {
    ceil,
    cloneDeep,
    extend
} from "lodash";

// Recess defaults
import {
    backgroundColor,
    fontColor,
    fontSize,
    fontWeight,
    gutter
} from "./variables";

import {size} from "./sizes";

import normalize from "react-style-normalizer";

let base = {
        a:{
            color:"blue",
            cursor:"pointer",
            textDecoration:"underline"
        },
        hr:{
            borderColor:"#eee",
            borderStyle:"solid none",
            borderWidth:"1px 0",
            marginBottom:10,
            marginTop:10
        },
        p:{
            margin:"1em 0"
        },
        wrapAll:{
            backgroundColor:backgroundColor.toString(),
            color:fontColor.toString(),
            fontFamily:"TypoPRO Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize:fontSize,
            fontWeight:fontWeight,
            height:"auto",
            minHeight:"100vh"
        }
    };

export default base;