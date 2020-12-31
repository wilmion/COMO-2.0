const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const webpack = require('webpack');

module.exports = {
    entry : path.resolve(__dirname , './src/index.js'),
    output : {
        path: path.resolve(__dirname , 'dist/'),
        filename : 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/      
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename : path.resolve(__dirname , './dist/index.html'),
            template : path.resolve(__dirname , './public/index.html'),
        }),
        new HtmlWebpackPugPlugin()
    ]
}