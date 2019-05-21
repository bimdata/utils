const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',

  devServer: {
    publicPath: "../dist/",
    contentBase: path.join(__dirname, '../')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
   }),
  ],
});