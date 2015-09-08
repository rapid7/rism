/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import utils from "./utils";

function setBreakpoints(breakpoints) {
    var breakpointWidths = {},
        sizeFuncs = {},
        mqls = {};

    utils.forIn(breakpoints,function(query,key) {
        var width = query.split(":")[1].replace("px)","");

        breakpointWidths[key] = /em/.test(width) ? utils.parseInt(width.replace("em)","")) * 16 : utils.parseInt(width);
        mqls[key] = window.matchMedia(query);

        sizeFuncs["is" + key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()] = function() {
            return mqls[key].matches;
        };
    });

    return {
        breakpoints:breakpoints,
        breakpointWidths:breakpointWidths,
        current:undefined,
        mqls:mqls,
        sizeFuncs:sizeFuncs
    };
}

let ret = {
    setBreakpoints:setBreakpoints
};

export default ret;