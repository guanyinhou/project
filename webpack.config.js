const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'html', 'index.html'),
            filename: path.resolve(__dirname, 'index.html'),
            title: "Home"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'html', 'about.html'),
            filename: path.resolve(__dirname, 'dist', 'about.html'),
            title: "About"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'html', 'todolist.html'),
            filename: path.resolve(__dirname, 'dist', 'todolist.html'),
            title: "Todolist"
        }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src', 'icon'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'src', 'sprite', 'sprite.png'),
                css: path.resolve(__dirname, 'src', 'sprite', 'sprite.css')
            },
            apiOptions: {
                cssImageRef: 'sprite.png'
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new UglifyJsPlugin(),
        new CompressionPlugin(),
        new OptimizeCssAssetsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ["env"]
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // esModule: false,
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    }
}