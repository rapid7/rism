import c from "d3-color";
import normalize from "react-style-normalizer";

var colors = {
        black:c.color("#111"),
        danger:c.color("#d9534f"),
        info:c.color("#5bc0de"),
        primary:c.color("#337ab7"),
        success:c.color("#5cb85c"),
        warning:c.color("#f0ad4e"),
        white:c.color("#fff")
    },
    sizes = {
        borderRadius:3,
        fontSize:13,
        fontWeight:400,
        headingFontWeight:400,
        headingMargin:"1em 0 0.5em",
        gutter:30
    };

export default normalize({
    black:colors.black,
    backgroundColor:colors.white,
    borderColor:colors.white.darker(0.625), // #ccc
    borderRadius: sizes.borderRadius,
    colorDanger:colors.danger,
    colorInfo:colors.info,
    colorPrimary:colors.primary,
    colorSuccess:colors.success,
    colorWarning:colors.warning,
    fontColor:colors.black.brighter(3.875), // #444
    fontSize: sizes.fontSize,
    fontWeight: sizes.fontWeight,
    gutter: sizes.gutter,
    headingFontWeight: sizes.headingFontWeight,
    headingMargin:sizes.headingMargin,
    white:colors.white
});