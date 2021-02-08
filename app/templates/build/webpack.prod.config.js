var path = require('path')
const webpack = require('webpack');
const commonConf = require('./webpack.base.config');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConf = {
    mode: 'production',
    optimization: {
      splitChunks: {
              minChunks: 2,
              chunks: 'all'
          }
    },
    plugins: [
      new webpack.DefinePlugin({
        'isProduction': 'true'
      }),
      new OptimizeCssAssetsPlugin()
    ]
}

module.exports = merge(commonConf, prodConf)