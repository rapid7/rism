var _ = require("lodash"),
    sizes = {
        lg:992,
        md:768,
        sm:568,
        xl:1200,
        xs:0
    },
    mqls = (function(){
        var ret = {};

        _.forOwn(sizes,function(size,key){
            ret[key] = window.matchMedia("(min-width:" + size + "px)");
        });

        return ret;
    })(),
    size = function(){
        if(mqls.xl.matches) {
            return sizes.xl;
        } else if(mqls.lg.matches) {
            return sizes.lg;
        } else if(mqls.md.matches) {
            return sizes.md;
        } else if(mqls.sm.matches) {
            return sizes.sm;
        }

        return window.innerWidth;
    },
    sizeName = function(){
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
    };



module.exports = {
    isLg() {
        return mqls.lg.matches;
    },
    isMd() {
        return mqls.md.matches;
    },
    isSm() {
        return mqls.sm.matches;
    },
    isXl() {
        return mqls.xl.matches;
    },
    isXs() {
        return mqls.xs.matches;
    },
    size:size,
    sizeName:sizeName,
    sizes:sizes
};