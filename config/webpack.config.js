const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Paths
const dist = path.resolve(__dirname, '../dist');
const src = path.resolve(__dirname, '../src');
const static = path.resolve(__dirname, '../src/static');

// Config
module.exports = {
    entry: './src/entry.js',
    output: {
        filename: 'main.js',
        path: dist
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }, {
            test: /\.(png|jpg|svg)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 4096
                }
            },
        }]
    },
    plugins: [
        new CleanWebpackPlugin(dist),
        new CopyWebpackPlugin([
            { from: static, to: dist }
        ])
    ]
};