const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    target: 'electron-main',
    output: {
        path: path.join(__dirname, '/build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'assets/Fonts'
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png)$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', 'css'],
        alias: {
            Fonts: path.join(__dirname, 'assets/Fonts/'),
            Images: path.join(__dirname, 'assets/Images/')
        }
    },
    plugins: [
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        title: "Physcademy"
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
    new webpack.HotModuleReplacementPlugin()
    ]
}