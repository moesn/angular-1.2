/**
 * Created by zhaohuaming.
 */
'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function makeWebpackConfig() {
    var config = {
        entry: {
            admin: './src/app/app.js'
        }
    };

    config.resolve = {
        alias: {
            test: path.join(__dirname)
        }
    };

    config.output = {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].min.js',
        chunkFilename: '[name].min.js'
    };

    config.plugins = [
        new CopyWebpackPlugin([{
            from: './public'
        }])
    ];

    return config;
};
