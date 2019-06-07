const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../dist")
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin([
      { from: 'src/img', to: 'img' },
      { from: 'src/fonts', to: 'fonts' },
      { from: 'styleguide/src/css', to: 'css' },
      { from: 'styleguide/src/js/prism.js', to: 'js' },
      { from: 'styleguide/dist/js/styleguide.js', to: 'js' }
    ]),
    new HtmlWebpackPlugin({
      svgoConfig: {
        removeTitle: false,
        removeViewBox: true,
      },
    }),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
    })
  ],

  module: {
    rules: [
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: ('img/[name].[hash:7].[ext]')
          }
        }
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
  },
}