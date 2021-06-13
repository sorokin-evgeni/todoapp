const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/ui/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist', 'static'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/ui/index.ejs'
    })],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.(css|less)/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
};
