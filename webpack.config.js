var path = require("path"),
    webpack = require("webpack");

module.exports = {
    cache:true,

    entry: path.join(__dirname,"src/rism.js"),

    externals:[
        {
            "react":{
                amd:"react",
                commonjs:"react",
                commonjs2:"react",
                root:"React"
            }
        }
    ],

    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel-loader",
                test: /\.(js|jsx)?$/
            },{
                loader: "css",
                test: /\.(css)$/
            }
        ]
    },

    output: {
        filename:"rism.js",
        library:"rism",
        libraryTarget:"umd",
        path:path.join(__dirname,"/dist")
    },

    resolve: {
        extensions: [
            "",
            ".js",
            ".jsx"
        ],

            /* Allows you to require("models/myModel") instead of needing relative paths */
            fallback : [
            path.join(__dirname, "./src")
        ],

        root : __dirname
    }
};
