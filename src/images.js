import normalize from "react-style-normalizer";

import {
    borderRadius,
    white
} from "./variables";

let images = {
        imgCircle:normalize({
            borderRadius:"50%"
        }),
        imgResponsive:{
            display:"block",
            height:"auto",
            maxWidth:"100%"
        },
        imgThumbnail:normalize({
            border:"5px solid " + white.toString(),
            borderRadius:borderRadius
        })
    };

export default images;