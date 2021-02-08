
const path = require('path')
const commonConf = require('./webpack.base.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const devConf = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname,'../dist'),
    port: 8000,
    open: true,
    compress:true,
    hot: true,
    quiet: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'isDEV': 'true'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ]
}

module.exports = merge(commonConf, devConf)