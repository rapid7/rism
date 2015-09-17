/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import c from "d3-color";
import prefix from "react-prefixer";
import utils from "./utils";

var colors = {
        black:c.color("#111"),
        danger:c.color("#d9534f"),
        info:c.color("#5bc0de"),
        primary:c.color("#337ab7"),
        success:c.color("#5cb85c"),
        warning:c.color("#f0ad4e"),
        white:c.color("#fff")
    },
    sizes = {
        borderRadius:3,
        fontSize:13,
        fontWeight:400,
        headingFontWeight:400,
        headingMargin:"1em 0 0.5em",
        gutter:30
    },
    transitions = {
        ease:"ease-in-out",
        timing:"150ms"
    };

export default {
    black:colors.black,
    backgroundColor:colors.white,
    borderRadius:sizes.borderRadius,
    borderColor:colors.white.darker(0.625), // #ccc
    colorDanger:colors.danger,
    colorInfo:colors.info,
    colorPrimary:colors.primary,
    colorSuccess:colors.success,
    colorWarning:colors.warning,
    fontColor:colors.black.brighter(3.875), // #444
    fontSize: sizes.fontSize,
    fontWeight: sizes.fontWeight,
    gutter: sizes.gutter,
    headingFontWeight: sizes.headingFontWeight,
    headingMargin:sizes.headingMargin,
    transitionEase:transitions.ease,
    transitionTiming:transitions.timing,
    white:colors.white
};