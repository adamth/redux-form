const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: { 
            bundle: './index.jsx'
        },
    externals: {
        jquery: 'jQuery'
        },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({ template: 'index.html' }),
        new CleanWebpackPlugin(['dist/*.*'])
        ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: [/node_modules/],
                use: 'babel-loader'
            }
        ]
    },
    devtool: 'cheap-source-map'
};
