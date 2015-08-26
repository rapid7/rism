var variables = require("./variables"),
    normalize = require("react-style-normalizer");

module.exports = {
    listGroup:normalize({
        border:"1px solid " + variables.white.darker(1.14).toString(), // #aaa
        borderRadius:variables.borderRadius,
        boxShadow:"2px 2px 2px " + variables.borderColor.toString(),
        listStyleType:"none",
        margin:0,
        padding:0,
        width:"100%"
    }),
    listGroupHeader:{
        backgroundColor:variables.white.darker(0.17).toString(), // #f0f0f0
        borderBottomWidth:1,
        borderColor:variables.borderColor.toString(),
        borderStyle:"solid",
        fontWeight:variables.headingFontWeight,
        padding:15,
        textTransform:"uppercase"
    },
    listGroupItem:{
        backgroundColor:variables.backgroundColor.toString(),
        borderBottomWidth:1,
        borderColor:variables.borderColor.toString(),
        borderStyle:"solid",
        padding:15
    }
};