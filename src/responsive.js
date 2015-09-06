/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import variables from "./variables";
import sizes from "./sizes";
import utils from "./utils";

export default {
    "@media screen and (max-width:567px)":{
        containerFixed:{
            width:"100%"
        },
        h1:{
            fontSize:utils.ceil(variables.fontSize * 2.5)
        },
        h2:{
            fontSize:utils.ceil(variables.fontSize * 2)
        },
        h3:{
            fontSize:utils.ceil(variables.fontSize * 1.5)
        },
        h4:{
            fontSize:utils.ceil(variables.fontSize * 1.25)
        },
        h5:{
            fontSize:utils.ceil(variables.fontSize * 1.125)
        },
        h6:{
            fontSize:variables.fontSize
        }
    },
    "@media screen and (min-width:568px)":{
        containerFixed:{
            width:sizes.sizes.sm - variables.gutter
        },
        h1:{
            fontSize:utils.ceil(variables.fontSize * 2.5)
        },
        h2:{
            fontSize:utils.ceil(variables.fontSize * 2)
        },
        h3:{
            fontSize:utils.ceil(variables.fontSize * 1.5)
        },
        h4:{
            fontSize:utils.ceil(variables.fontSize * 1.25)
        },
        h5:{
            fontSize:utils.ceil(variables.fontSize * 1.125)
        },
        h6:{
            fontSize:variables.fontSize
        }
    },
    "@media screen and (min-width:768px)":{
        containerFixed:{
            width:sizes.sizes.md - variables.gutter
        },
        h1:{
            fontSize:utils.ceil(variables.fontSize * 2.5 * 1.125)
        },
        h2:{
            fontSize:utils.ceil(variables.fontSize * 2 * 1.125)
        },
        h3:{
            fontSize:utils.ceil(variables.fontSize * 1.5 * 1.125)
        },
        h4:{
            fontSize:utils.ceil(variables.fontSize * 1.25 * 1.125)
        },
        h5:{
            fontSize:utils.ceil(variables.fontSize * 1.125 * 1.125)
        },
        h6:{
            fontSize:variables.fontSize * 1.125
        }
    },
    "@media screen and (min-width:992px)":{
        containerFixed:{
            width:sizes.sizes.lg - variables.gutter
        },
        h1:{
            fontSize:utils.ceil(variables.fontSize * 2.5 * 1.25)
        },
        h2:{
            fontSize:utils.ceil(variables.fontSize * 2 * 1.25)
        },
        h3:{
            fontSize:utils.ceil(variables.fontSize * 1.5 * 1.25)
        },
        h4:{
            fontSize:utils.ceil(variables.fontSize * 1.25 * 1.25)
        },
        h5:{
            fontSize:utils.ceil(variables.fontSize * 1.125 * 1.25)
        },
        h6:{
            fontSize:variables.fontSize * 1.25
        }
    },
    "@media screen and (min-width:1200px)":{
        containerFixed:{
            width:sizes.sizes.xl - variables.gutter
        },
        h1:{
            fontSize:utils.ceil(variables.fontSize * 2.5 * 1.4)
        },
        h2:{
            fontSize:utils.ceil(variables.fontSize * 2 * 1.4)
        },
        h3:{
            fontSize:utils.ceil(variables.fontSize * 1.5 * 1.4)
        },
        h4:{
            fontSize:utils.ceil(variables.fontSize * 1.25 * 1.4)
        },
        h5:{
            fontSize:utils.ceil(variables.fontSize * 1.125 * 1.4)
        },
        h6:{
            fontSize:variables.fontSize * 1.4
        }
    }
};