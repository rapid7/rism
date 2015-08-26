var path = require("path"),
    webpack = require("webpack"),
    webpackPlugins = [
        new webpack.ProvidePlugin({
            _: "lodash",
            React:"react"
        })
    ],
    isMinified = process.env.MINIFIED === "true";

if(isMinified) {
    webpackPlugins[webpackPlugins.length] = new webpack.optimize.UglifyJsPlugin({
        compress:{
            booleans:true,
            conditionals:true,
            drop_console:true,
            drop_debugger:true,
            join_vars:true,
            sequences:true,
            warnings:false
        },
        sourceMap:false
    })
}

module.exports = {
    entry: [
        "./src/index.js"
    ],

    module: {
        /* Make sure no other languages besides English are pulled in */
        noParse: [
            /moment.js/
        ],

        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel-loader",
                test: /\.jsx?$/
            },{
                loader: "style!css!less",
                test: /\.(css|less)$/
            },{
                loader: "url-loader?name=fonts/[hash].[ext]&limit=10000&mimetype=application/font-woff&content",
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/
            },{
                loader: "file-loader?name=fonts/[hash].[ext]",
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/
            },{
                test: /\.(jpe?g|png|gif)(?:\?.*|)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=img/[hash].[ext]',
                    'image-webpack'
                ]
            }
        ]
    },

    output: {
        filename: (isMinified ? "Recess.min.js" : "Recess.js"),
        path: __dirname + "/dist/",
        publicPath: "http://localhost:8080/"
    },

    plugins: webpackPlugins,

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
