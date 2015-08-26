import {
    assign,
    ceil
} from "lodash";

// Recess defaults
import {
    fontSize,
    gutter
} from "./variables";

import base from "./base";
import headings from "./headings";

import sizes from "./sizes";

let responsiveStyles = {
        headingFontSize:{
            lg:ceil(fontSize * 1.25),
            md:ceil(fontSize * 1.125),
            sm:fontSize,
            xl:ceil(fontSize * 1.4),
            xs:fontSize
        }
    };

function setResponsive(size) {
    return {
        containerFixed:{
            width:sizes.sizes[size] - gutter
        },
        h1:{
            fontSize:ceil(responsiveStyles.headingFontSize[size] * 2.5)
        },
        h2:{
            fontSize:ceil(responsiveStyles.headingFontSize[size] * 2)
        },
        h3:{
            fontSize:ceil(responsiveStyles.headingFontSize[size] * 1.5)
        },
        h4:{
            fontSize:ceil(responsiveStyles.headingFontSize[size] * 1.25)
        },
        h5:{
            fontSize:ceil(responsiveStyles.headingFontSize[size] * 1.125)
        },
        h6:{
            fontSize:responsiveStyles.headingFontSize[size]
        }
    };
}

export default setResponsive;