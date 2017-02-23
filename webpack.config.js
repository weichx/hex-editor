const path = require("path");
const StrRep = require('string-replace-webpack-plugin');
const globby = require('globby');
const webpack = require('webpack');

const config = {
    entry: {
        app: globby.sync([
            "./src/global.ts",
            "./src/_main.ts",
            "!./src/app.tsx",
            "./src/**/*.ts",
            "./src/**/*.tsx",
            "./src/app.tsx"
        ]),
        vendor: ["pixi.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        loaders: [

            {test: /\.ts$/, loader: 'ts-loader'},
            {
                test: /\.tsx$/, loaders: ['ts-loader', StrRep.replace({
                replacements: [
                    require('./src/_meta/x_if_matcher'),
                    require('./src/_meta/x_binding_matcher'),
                    require('./src/_meta/x_if_eval_matcher'),
                    require('./src/_meta/x_binding_eval_matcher')
                ]
            })]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new StrRep()
    ]
};

module.exports = config;