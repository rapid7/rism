/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

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