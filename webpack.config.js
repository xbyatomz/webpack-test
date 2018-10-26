var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')

var html = new htmlWebpackPlugin();

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-webpack-plugin'
            }
        ]
    },
    plugins: [
        new html()
    ]
}
