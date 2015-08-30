/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import variables from "./variables";
import sizes from "./sizes";
import utils from "./utils";

var responsiveStyles = {
        headingFontSize:{
            lg:utils.ceil(variables.fontSize * 1.25),
            md:utils.ceil(variables.fontSize * 1.125),
            sm:variables.fontSize,
            xl:utils.ceil(variables.fontSize * 1.4),
            xs:variables.fontSize
        }
    };

export default function(size) {
    return {
        containerFixed:{
            width:((size === "xs") ? window.innerWidth : sizes.sizes[size]) - variables.gutter
        },
        h1:{
            fontSize:utils.ceil(responsiveStyles.headingFontSize[size] * 2.5)
        },
        h2:{
            fontSize:utils.ceil(responsiveStyles.headingFontSize[size] * 2)
        },
        h3:{
            fontSize:utils.ceil(responsiveStyles.headingFontSize[size] * 1.5)
        },
        h4:{
            fontSize:utils.ceil(responsiveStyles.headingFontSize[size] * 1.25)
        },
        h5:{
            fontSize:utils.ceil(responsiveStyles.headingFontSize[size] * 1.125)
        },
        h6:{
            fontSize:responsiveStyles.headingFontSize[size]
        }
    };
};