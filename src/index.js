var normalize = require("react-style-normalizer"),
    Recess = require("./recess"),
    recess = new Recess();

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

module.exports = recess;