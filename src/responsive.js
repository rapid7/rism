/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import variables from "./variables";
import utils from "./utils";

export default {
    containerFixed:{
        "@media (max-width:567px)":{
            width:"100%"
        },
        "@media (min-width:568px)":{
            width:568 - variables.gutter
        },
        "@media (min-width:768px)":{
            width:768 - variables.gutter
        },
        "@media (min-width:992px)":{
            width:992 - variables.gutter
        },
        "@media (min-width:1200px)": {
            width:1200 - variables.gutter
        }
    },
    h1:{
        "@media (max-width:567px)":{
            fontSize:utils.ceil(variables.fontSize * 2.5)
        },
        "@media (min-width:568px)":{
            fontSize:utils.ceil(variables.fontSize * 2.5)
        },
        "@media (min-width:768px)":{
            fontSize:utils.ceil(variables.fontSize * 2.5 * 1.125)
        },
        "@media (min-width:992px)":{
            fontSize:utils.ceil(variables.fontSize * 2.5 * 1.25)
        },
        "@media (min-width:1200px)": {
            fontSize:utils.ceil(variables.fontSize * 2.5 * 1.4)
        }
    },
    h2:{
        "@media (max-width:567px)":{
            fontSize:utils.ceil(variables.fontSize * 2)
        },
        "@media (min-width:568px)":{
            fontSize:utils.ceil(variables.fontSize * 2)
        },
        "@media (min-width:768px)":{
            fontSize:utils.ceil(variables.fontSize * 2 * 1.125)
        },
        "@media (min-width:992px)":{
            fontSize:utils.ceil(variables.fontSize * 2 * 1.25)
        },
        "@media (min-width:1200px)": {
            fontSize:utils.ceil(variables.fontSize * 2 * 1.4)
        }
    },
    h3:{
        "@media (max-width:567px)":{
            fontSize:utils.ceil(variables.fontSize * 1.5)
        },
        "@media (min-width:568px)":{
            fontSize:utils.ceil(variables.fontSize * 1.5)
        },
        "@media (min-width:768px)":{
            fontSize:utils.ceil(variables.fontSize * 1.5 * 1.125)
        },
        "@media (min-width:992px)":{
            fontSize:utils.ceil(variables.fontSize * 1.5 * 1.25)
        },
        "@media (min-width:1200px)": {
            fontSize:utils.ceil(variables.fontSize * 1.5 * 1.4)
        }
    },
    h4:{
        "@media (max-width:567px)":{
            fontSize:utils.ceil(variables.fontSize * 1.25)
        },
        "@media (min-width:568px)":{
            fontSize:utils.ceil(variables.fontSize * 1.25)
        },
        "@media (min-width:768px)":{
            fontSize:utils.ceil(variables.fontSize * 1.25 * 1.125)
        },
        "@media (min-width:992px)":{
            fontSize:utils.ceil(variables.fontSize * 1.25 * 1.25)
        },
        "@media (min-width:1200px)": {
            fontSize:utils.ceil(variables.fontSize * 1.25 * 1.4)
        }
    },
    h5:{
        "@media (max-width:567px)":{
            fontSize:utils.ceil(variables.fontSize * 1.125)
        },
        "@media (min-width:568px)":{
            fontSize:utils.ceil(variables.fontSize * 1.125)
        },
        "@media (min-width:768px)":{
            fontSize:utils.ceil(variables.fontSize * 1.125 * 1.125)
        },
        "@media (min-width:992px)":{
            fontSize:utils.ceil(variables.fontSize * 1.125 * 1.25)
        },
        "@media (min-width:1200px)": {
            fontSize:utils.ceil(variables.fontSize * 1.125 * 1.4)
        }
    },
    h6:{
        "@media (max-width:567px)":{
            fontSize:variables.fontSize
        },
        "@media (min-width:568px)":{
            fontSize:variables.fontSize
        },
        "@media (min-width:768px)":{
            fontSize:utils.ceil(variables.fontSize * 1.125)
        },
        "@media (min-width:992px)":{
            fontSize:utils.ceil(variables.fontSize * 1.25)
        },
        "@media (min-width:1200px)": {
            fontSize:utils.ceil(variables.fontSize * 1.4)
        }
    }
};