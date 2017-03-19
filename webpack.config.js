const path = require("path");
const nodeExternals = require("webpack-node-externals");
const StrRep = require('string-replace-webpack-plugin');
const globby = require('globby');
const webpack = require('webpack');
const ts = require("typescript");

const config = {
    entry: globby.sync([
        "./src/_main.ts",
        "!./src/app.tsx",
        "./src/**/*.tsx",
        "./src/**/*.ts",
        "./src/app.tsx"
    ]),
    target: "node",
    externals: nodeExternals({
        whitelist: ["cerialize"]
    }),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {test: /\.json$/, loader: 'json-loader'},
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
        new StrRep()
    ]
};

module.exports = config;