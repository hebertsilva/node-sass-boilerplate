var webpack = require("webpack");
var assign = require("object-assign");
var Clean = require("clean-webpack-plugin");
var BundleTracker  = require("webpack-bundle-tracker");
var Md5Hash = require("webpack-md5-hash");
var webpackConfig = require("../../webpack.config.js");
var options = require("../options.js");
var moment = require("moment");

var path = require("path");
var basePath =  __dirname + "/../../";
var staticPath = basePath + "/src/";
var jsPath = staticPath + "js/";

function getDistConfig(env) {
    var publicPath = options[env] ? options[env].SRC_URL : "/src/";

    return {
        plugins: webpackConfig.plugins.concat(
            new Clean(["build/"+env], jsPath),
            new Md5Hash(),
            new BundleTracker({
                path: staticPath + "js/stats", filename: (env+".json")
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                sourceMap: true
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
            new webpack.DefinePlugin({
                "process.env": {NODE_ENV: JSON.stringify("production")},
                "__BUILD_TIME__": JSON.stringify("Build time: " + moment().format("DD/MM/YYYY HH:mm:ss"))
            })
        ),
        output: assign({}, webpackConfig.output, {
            publicPath: publicPath + "js/build/"+env+"/",
            path: staticPath + "js/build/" + env,
        })
    }
}

var devPlugins = webpackConfig.plugins.concat(
    new Clean(["build/development"], jsPath),
    new BundleTracker({
        path: staticPath + "js/stats", filename: "development.json"
    }),
    new webpack.DefinePlugin({
        "__BUILD_TIME__": JSON.stringify("Build time: " + moment().format("DD/MM/YYYY HH:mm:ss"))
    })
);

exports.getDistConfig = getDistConfig;
exports.devPlugins = devPlugins;
