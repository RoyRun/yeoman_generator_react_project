
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router-dom', 'zrender', 'antd']
    },
    output: {
        path: path.join(__dirname, 'dll'),
        filename: '[name].js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: path.join(__dirname, 'dll', '[name]-manifest.json'),
            context: __dirname
        })
    ]
}