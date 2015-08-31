/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import variables from "./variables";
import utils from "./utils";

var headings = {
        h1:{
            display:"block",
            fontWeight:variables.headingFontWeight,
            margin:variables.headingMargin
        }
    };

headings.h2 = utils.clone(headings.h1);
headings.h3 = utils.clone(headings.h1);
headings.h4 = utils.clone(headings.h1);
headings.h5 = utils.clone(headings.h1);
headings.h6 = utils.clone(headings.h1);

export default headings;