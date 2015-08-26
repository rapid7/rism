import normalize from "react-style-normalizer";
import variables from "./variables";

export default {
    imgCircle:normalize({
        borderRadius:"50%"
    }),
    imgResponsive:{
        display:"block",
        height:"auto",
        maxWidth:"100%"
    },
    imgThumbnail:normalize({
        border:"5px solid " + variables.white.toString(),
        borderRadius:variables.borderRadius
    })
};