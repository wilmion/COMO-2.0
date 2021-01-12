const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const  { CleanWebpackPlugin }  =  require ( 'clean-webpack-plugin' );
module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: './',
        path : path.resolve(__dirname , 'dist'),
        filename: '[hash].js'
    },
    resolve: {
        extensions : ['.js' , '.jsx']
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.pug$/,
                use:[
                    'html-loader',
                    {
                        loader: 'pug-html-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use : [
                    'html-loader'
                ]
            },
            {
                test : /\.(s*)css$/,
                use : [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            esModule: true,
                            modules: {
                                namedExport: true,
                            },
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash][name].[ext]',
                            outputPath: "assets/images/",
                        }
                    }
                ]
            },
            {
                test: /\.(svg|eot|woff|otf|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash][name].[ext]',
                            outputPath: "assets/fonts/",
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new  CleanWebpackPlugin (), 
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: path.resolve(__dirname , 'public/index.html')
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[hash][id].css',
            linkType: 'text/css',
            chunkFilename: '[hash].css'
        })
    ]
}