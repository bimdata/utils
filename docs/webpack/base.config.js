const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/index.js",
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
      filename: "css/style.css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin([
      { from: '../dist/img', to: './img' },
      { from: '../dist/fonts', to: './fonts' },
      { from: '../dist/js', to: './js' },
      { from: '../dist/css', to: './css' }
    ])
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