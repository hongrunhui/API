
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
var wait = Array(30).fill('=').join('');
console.log( wait + ' webpack.config.js is running ' + wait)
module.exports = {
    entry: {
        index: __dirname + "/src/index.js"
    },
    output: {
        filename: "[name].bundle.js",        
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './templates/index.html',
            filename: './index.html',
            version: new Date().getTime()
        }),
        new CleanWebpackPlugin(__dirname + '/dist/', {
        }),
    ],
    devServer: {
        port: 9999,
        contentBase: __dirname + '/dist/',
        compress: true,
        disableHostCheck: true,
        host: '127.0.0.1',
        open: true,
        hot: true,
        progress: true,
        inline: true,
        overlay: {
            warnings: false,
            errors: true
        },
        stats: {
            colors: true,
            cached: true,
            modules: true,
            children: false,
            chunks: false,
            chunkModules: false,
            performance: true,
        }
    }
};