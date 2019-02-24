'use strict'

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

const publicPath = path.resolve(__dirname, 'src/main/resources/', 'static');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const appPath = path.resolve(__dirname, 'src/main/resources/app/web', 'App.js');

const isProd = process.env.NODE_ENV === 'production' ? true : false;

console.log('Client: process.env.NODE_ENV: ' + process.env.NODE_ENV);

module.exports = {
    devtool: (isProd ? 'source-map' : 'eval'),
    entry: {
        app: appPath,
    },
    output: {
        path: publicPath,
        publicPath: 'js/',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [nodeModulesPath],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.json$/,
                exclude: [nodeModulesPath],
                use: 'json-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: [nodeModulesPath],
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isProd ? '[name].[hash].css' : '[name].css',
            chunkFilename: isProd ? '[id].[hash].css' : '[id].css',
        }),

        // enable HMR globally
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    devServer: {
        contentBase: publicPath,
        compress: true,
        host: 'localhost',
        port: 8081,
        stats: 'errors-only',
        hot: true,
        clientLogLevel: 'none',
        watchContentBase: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
            'Access-Control-Max-Age': '1000',
            'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token',
        },
        proxy: {
            '*': {
                target: 'http://localhost:8080',
                'changeOrigin': true,
                secure: false
            }
        }
    }
}