"use strict";

var _ = require("lodash"),
    variables = require("./variables"),
    headings = {
    h1: {
        display: "block",
        fontWeight: variables.headingFontWeight,
        margin: variables.headingMargin
    }
};

headings.h2 = _.cloneDeep(headings.h1);
headings.h3 = _.cloneDeep(headings.h1);
headings.h4 = _.cloneDeep(headings.h1);
headings.h5 = _.cloneDeep(headings.h1);
headings.h6 = _.cloneDeep(headings.h1);

module.exports = headings;