"use strict";

var _ = require("lodash"),
    sizes = {
    lg: 992,
    md: 768,
    sm: 568,
    xl: 1200,
    xs: 0
},
    mqls = {};

_.forOwn(sizes, function (size, key) {
    mqls[key] = window.matchMedia("(min-width:" + size + "px)");
});

module.exports = {
    isLg: function isLg() {
        return mqls.lg.matches;
    },
    isMd: function isMd() {
        return mqls.md.matches;
    },
    isSm: function isSm() {
        return mqls.sm.matches;
    },
    isXl: function isXl() {
        return mqls.xl.matches;
    },
    isXs: function isXs() {
        return mqls.xs.matches;
    },
    size: function size() {
        if (mqls.xl.matches) {
            return sizes.xl;
        } else if (mqls.lg.matches) {
            return sizes.lg;
        } else if (mqls.md.matches) {
            return sizes.md;
        } else if (mqls.sm.matches) {
            return sizes.sm;
        }

        return window.innerWidth;
    },
    sizeName: function sizeName() {
        if (mqls.xl.matches) {
            return "xl";
        } else if (mqls.lg.matches) {
            return "lg";
        } else if (mqls.md.matches) {
            return "md";
        } else if (mqls.sm.matches) {
            return "sm";
        }

        return "xs";
    },
    sizes: sizes
};