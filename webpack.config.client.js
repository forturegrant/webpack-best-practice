const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/client/index.tsx'),
    //devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist`,
        publicPath: '/public'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, 'src/client/index.html')
        })
    ],
    devServer: {
        hot: true,
        port: '3000'
    },
    optimization: {
        usedExports: true,
    },
}