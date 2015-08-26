var variables = require("./variables"),
    normalize = require("react-style-normalizer");

module.exports = {
    label:normalize({
        backgroundColor:variables.white.darker(0.4).toString(), // #ddd
        borderRadius:variables.borderRadius * 2,
        display:"inline",
        fontSize:variables.fontSize,
        marginLeft:5,
        marginRight:5,
        padding:6,
        top:-2
    })
};