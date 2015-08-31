/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import normalize from "react-style-normalizer";
import variables from "./variables";

export default {
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
};