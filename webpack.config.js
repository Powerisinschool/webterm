const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.ts',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Portfolio',
            template: "src/index.html"
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        static: './dist',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
};