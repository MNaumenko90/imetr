const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        filename: 'js/[name].js',
        publicPath: '/',
        path: '/var/www/web',
        library: '[name]'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.(png|jpg|)$/, loader: 'url-loader?limit=200000'},
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }

        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'iMetr',
        template: 'src/index.ejs'
    })]
};
