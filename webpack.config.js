const path = require("path");
const StrRep = require('string-replace-webpack-plugin');
const globby = require('globby');

const config = {
    entry: globby.sync([
         "./src/**/*.ts"
    ]),
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

        new StrRep()
    ]
};

module.exports = config;