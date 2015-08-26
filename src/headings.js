import {
    ceil,
    cloneDeep,
    extend
} from "lodash";

import {
    fontSize,
    headingFontWeight,
    headingMargin
} from "./variables";

let headings = {
    h1:{
        display:"block",
        fontWeight:headingFontWeight,
        margin:headingMargin
    }
};

headings.h2 = cloneDeep(headings.h1);
headings.h3 = cloneDeep(headings.h1);
headings.h4 = cloneDeep(headings.h1);
headings.h5 = cloneDeep(headings.h1);
headings.h6 = cloneDeep(headings.h1);

export default headings;