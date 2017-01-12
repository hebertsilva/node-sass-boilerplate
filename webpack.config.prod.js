var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var webpackUtils = require("./js-tools/webpack/webpack.utils.js");

module.exports = Object.assign(webpackConfig, webpackUtils.getDistConfig('production'));
