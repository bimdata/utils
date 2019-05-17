const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./dist"
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '')
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin([
      { from: 'node_modules/@bimdata/utils/dist/fonts', to: 'fonts' },
      { from: 'node_modules/@bimdata/utils/dist/img', to: 'img' },
    ]),
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          { loader: 'url-loader',
            options: {
              limit: 10000,
              name: ('fonts/[name].[ext]')
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: ('img/[name].[ext]')
            }
          }
        ]
      },
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
          { loader: "resolve-url-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
}