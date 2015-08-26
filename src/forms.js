import {
    cloneDeep,
    extend
} from "lodash";

import {
    backgroundColor,
    borderColor,
    borderRadius,
    fontColor
} from "./variables";

import normalize from "react-style-normalizer";

let forms = {
    fieldset:{
        border:0,
        margin:0,
        padding:"0.75em 0"

    },
    form:{
        display:"block"
    },
    formLabel:{
        display:"block",
        margin:"0.5em 0 0.2em"
    },
    input:normalize({
        backgroundColor:backgroundColor.toString(),
        border:"1px solid " + borderColor.toString(),
        borderRadius:borderRadius,
        boxShadow:"inset 0 1px 3px #ddd",
        color:fontColor.toString(),
        display:"block",
        outline:0,
        padding:"0.5em 0.6em",
        margin:"0.25em 0",
        width:"100%"
    }),
    legend:{
        borderColor:"#e5e5e5",
        borderStyle:"solid",
        borderBottomWidth:1,
        color:fontColor.toString(),
        display:"block",
        marginBottom:"0.3em",
        padding:"0.3em 0"
    },
    readOnly:{
        backgroundColor:borderColor.toString(),
        color:borderColor.darker().toString()
    }
};

forms.inputColor = extend(cloneDeep(forms.input),{
    padding:"0.2em 0.5em"
});

forms.select = extend(cloneDeep(forms.input),{
    height:"2.25em"
});

forms.selectMultiple = extend(cloneDeep(forms.input),{
    height:"auto"
});

forms.textarea = cloneDeep(forms.input);

export default forms;