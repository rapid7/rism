import _ from "lodash";
import normalize from "react-style-normalizer";
import variables from "./variables";

var buttons = {
        button:normalize({
            border:"1px solid " + variables.borderColor.toString(),
            backgroundColor:variables.backgroundColor.toString(),
            borderRadius:variables.borderRadius.toString(),
            color:variables.fontColor.toString(),
            cursor:"pointer",
            display:"inline-block",
            fontFamily:"inherit",
            lineHeight:"normal",
            outline:0,
            padding:"0.5em 1em",
            textAlign:"center",
            textDecoration:"none",
            textTransform:"uppercase",
            transition:"background-color 150ms ease-in-out",
            userSelect:"none",
            verticalAlign:"middle",
            whiteSpace:"nowrap"
        }),
        buttonDisabled:normalize({
            border:0,
            cursor:"not-allowed",
            opacity:0.4
        })
    },
    projectColors = [
        "Danger",
        "Info",
        "Primary",
        "Success",
        "Warning"
    ];

buttons.buttonHover = _.extend(_.cloneDeep(buttons.button),{
    backgroundColor:variables.backgroundColor.darker(0.5).toString()
});

_.forEach(projectColors,function(color){
    let fontColor = ((color === "Warning") ? variables.fontColor : variables.white).toString();

    buttons["button" + color] = _.extend(_.cloneDeep(buttons.button),{
        borderColor:variables["color" + color].darker(0.5).toString(),
        backgroundColor:variables["color" + color],
        color:fontColor
    });

    buttons["button" + color + "Hover"] = _.extend(_.cloneDeep(buttons["button" + color]),{
        backgroundColor:variables["color" + color].darker(0.5).toString(),
        color:fontColor
    });
});

export default buttons;