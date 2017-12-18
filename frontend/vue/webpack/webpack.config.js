/* 引入操作路径模块和webpack */
var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    /* 输入文件 */
    entry: './src/js/main.js',
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, './dist'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '',
        /* 文件名 */
        filename: '[name].js'
    },
    module: {
        rules: [
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html', // html模板路径,模板路径是支持传参调用loader的,
            inject: 'body', //打包之后的js插入的位置，true/'head'/'body'/false,
            hash: true,
            // chunks: ['build']
        }),
        new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'})
    ]
}