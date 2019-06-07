const path = require('path');
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./src/scss/style.scss",
  output: {
    filename: "js/styleguide.js",
    path: path.resolve(__dirname, "./dist")
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styleguide.css",
      chunkFilename: "[id].css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss?$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          {
            loader: "resolve-url-loader",
            options: {
              debug: true,
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
}