var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var webpackUtils = require("./js-tools/webpack/webpack.utils.js");

webpackConfig.plugins = webpackUtils.devPlugins;

module.exports = webpackConfig;
