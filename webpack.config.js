const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
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
                loader: 'file-loader',
                options: {}
              }
            ]
          }
    ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
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