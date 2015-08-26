var _ = require("lodash"),
    variables = require("./variables"),
    normalize = require("react-style-normalizer"),
    nav = {
        nav:normalize({
            backgroundColor:variables.white.darker(0.17).toString(), // #f0f0f0
            boxShadow:"2px 2px 2px " + variables.borderColor.toString(),
            marginBottom:_.ceil(variables.gutter / 2),
            minHeight:1
        }),
        navBrand:{
            color:"inherit",
            display:"inline-block",
            fontSize:variables.fontSize * 2,
            padding:10,
            textDecoration:"none",
            verticalAlign:"middle"
        },
        navMenu:{
            display:"inline-block",
            listStyleType:"none",
            margin:0,
            padding:0,
            verticalAlign:"middle"
        },
        navMenuItem:{
            display:"inline-block",
            listStyleType:"none",
            margin:0,
            verticalAlign:"middle"
        },
        navMenuLink:{
            display:"block",
            color:"inherit",
            padding:10,
            textDecoration:"none"
        }
    };

nav.navFixed = _.extend(_.cloneDeep(nav.nav),{
    position:"fixed"
});

module.exports = nav;