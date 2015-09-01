import prefix from "./prefix";
import properties from "./properties";

var div = document.createElement("div");

function applyPrefixes(obj) {
    var keys = Object.keys(obj);

    keys.forEach(function(key) {
        if (typeof obj[key] === "object" && !!obj[key]) {
            obj[key] = applyPrefixes(obj[key]);
        } else if (properties.indexOf(key) !== -1 && (typeof div.style[key] !== "string")) {
            let value = obj[key],
                prefixedKey = prefix.js + key.charAt(0).toUpperCase() + key.slice(1);

            if (key === "transition") {
                value = value.replace(/transform/g, prefix.css + "transform");
            }

            delete obj[key];
            obj[prefixedKey] = value;
        }
    });

    return obj;
}

export default applyPrefixes;