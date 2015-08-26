var _ = require("lodash"),
    variables = require("./variables"),
    sizes = require("./sizes"),
    responsiveStyles = {
        headingFontSize:{
            lg:_.ceil(variables.fontSize * 1.25),
            md:_.ceil(variables.fontSize * 1.125),
            sm:variables.fontSize,
            xl:_.ceil(variables.fontSize * 1.4),
            xs:variables.fontSize
        }
    };

module.exports = function setResponsive(size) {
    return {
        containerFixed:{
            width:sizes.sizes[size] - variables.gutter
        },
        h1:{
            fontSize:_.ceil(responsiveStyles.headingFontSize[size] * 2.5)
        },
        h2:{
            fontSize:_.ceil(responsiveStyles.headingFontSize[size] * 2)
        },
        h3:{
            fontSize:_.ceil(responsiveStyles.headingFontSize[size] * 1.5)
        },
        h4:{
            fontSize:_.ceil(responsiveStyles.headingFontSize[size] * 1.25)
        },
        h5:{
            fontSize:_.ceil(responsiveStyles.headingFontSize[size] * 1.125)
        },
        h6:{
            fontSize:responsiveStyles.headingFontSize[size]
        }
    };
};