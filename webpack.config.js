const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
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
            test: /\.scss$/,
            use: [
                // fallback to style-loader in development
                process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(woff|woff2|ttf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/fonts/katex'
                    }
                }
            ]
        }
    ]
    },
    resolve: {
        extensions: ['.js'],
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
      })
    ]
};