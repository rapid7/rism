/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import utils from "./utils";

var breakpoints = {
        lg:"(min-width:992px)",
        md:"(min-width:768px)",
        sm:"(min-width:568px)",
        xl:"(min-width:1200px)",
        xs:"(max-width:567px)"
    },
    sizeFuncs = {},
    sizes = {},
    mqls = {};

function setBreakpoints() {
    utils.forIn(breakpoints,function(query,key) {
        var width = query.split(":")[1].replace("px)","");
        sizes[key] = /em/.test(width) ? utils.parseInt(width.replace("em)","")) * 16 : utils.parseInt(width);
        mqls[key] = window.matchMedia(query);
        sizeFuncs["is" + key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()] = function() {
            return mqls[key].matches;
        };
    });
}

setBreakpoints();

let ret = {
    breakpoints:breakpoints,
    setBreakpoints:setBreakpoints,
    sizeName() {
        if(mqls.xl.matches) {
            return "xl";
        } else if(mqls.lg.matches) {
            return "lg";
        } else if(mqls.md.matches) {
            return "md";
        } else if(mqls.sm.matches) {
            return "sm";
        }

        return "xs";
    },
    sizes:sizes
};

utils.assign(ret,sizeFuncs);

export default ret;