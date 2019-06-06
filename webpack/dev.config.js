const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',

  watch: true,

  devServer: {
    publicPath: "../dist/",
    contentBase: path.join(__dirname, '../'),
    openPage: '../docs/index.html'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'docs/index.html'
   }),
  ],
});