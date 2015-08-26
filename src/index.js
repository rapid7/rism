import normalize from "react-style-normalizer";
import Recess from "./recess";

var recess = new Recess();

recess.stylesheet("Recess",normalize({
    "*,*:before,*:after":{
        boxSizing:"border-box"
    },
    ".clearFix:before,.clearFix:after":{
        content:"\"\"",
        display:"table"
    },
    ".clearFix:after":{
        clear:"both"
    }
}));

window.addEventListener("resize",recess.onResize.bind(recess),false);

export default recess;