
const path = require('path')
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(process.cwd(), 'dist')
    },
    optimization: {
		splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
	},
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader?cacheDirectory=true'
            }]
        }, {
            test: /\.(jpg|png|git)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 10000
                    }
                }
            ]
        }, {
            test: /\.(css|less)$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                      }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    },
                },
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            javascriptEnabled: true,
                        }
                    }
                }
            ]
            }, {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('../dll/vendor-manifest.json')
        // }),
        new MiniCssExtractPlugin(),
        new CaseSensitivePathPlugin(),
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: 'roy redux title',
            template: path.resolve(process.cwd(),'template/index.html')
        }),
      
    ]
}