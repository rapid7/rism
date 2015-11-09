import utils from "./utils";
import prefix from "react-prefixer";

export default function() {
    var obj = {};

    utils.forEach(arguments,function(argument,i) {
        obj = utils.merge(obj, prefix(argument));
    });

    return obj;
}