import _ from "lodash";
import normalize from "react-style-normalizer";
import variables from "./variables";

var forms = {
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
            backgroundColor:variables.backgroundColor.toString(),
            border:"1px solid " + variables.borderColor.toString(),
            borderRadius:variables.borderRadius,
            boxShadow:"inset 0 1px 3px #ddd",
            color:variables.fontColor.toString(),
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
            color:variables.fontColor.toString(),
            display:"block",
            marginBottom:"0.3em",
            padding:"0.3em 0"
        },
        readOnly:{
            backgroundColor:variables.borderColor.toString(),
            color:variables.borderColor.darker().toString()
        }
    };

forms.inputColor = _.extend(_.cloneDeep(forms.input),{
    padding:"0.2em 0.5em"
});

forms.select = _.extend(_.cloneDeep(forms.input),{
    height:"2.25em"
});

forms.selectMultiple = _.extend(_.cloneDeep(forms.input),{
    height:"auto"
});

forms.textarea = _.cloneDeep(forms.input);

export default forms;