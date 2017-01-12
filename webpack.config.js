'use strict';

// postcss-loader
// var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;

var isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {
    var config = {
        resolve: {
            extensions: ['.js', '.css', '.json'],
            modules: ['./src', './node_modules']
        }
    };

    config.entry = {
        app: './src/app/app.js'
    };

    config.output = {
        path: 'dist',
        publicPath: isProd ? '/' : 'http://localhost:8080/',
        filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
        chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
    };

    config.devtool = isProd ? 'cheap-source-map' : 'cheap-eval-source-map';

    config.module = {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap'
                ]
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.woff(2)?(\?v=.+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=.+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: ['./src/index.html']
            }
        ]
    };

    config.plugins = [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        new ExtractTextPlugin({filename: '[name].[hash].css', disable: !isProd}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ];

    if (isProd) {
        config.plugins.push(
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.CommonsChunkPlugin('common'),
            new CopyWebpackPlugin([{
                from: './src/public'
            }])
        );
    }

    config.devServer = {
        contentBase: './src/public',
        stats: 'minimal'
    };

    return config;
};
