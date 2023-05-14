const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, 'src/client/index.tsx')
  },
  devtool: 'cheap-module-source-map',
  output: {
    // filename: 'bundle.js',
    path: `${__dirname}/dist`
    // publicPath: '/public'
  },
  // externals: {
  //   lodash: "_",
  // }, 
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // {
      //     test: /\.tsx?$/,
      //     use: 'ts-loader',
      //     exclude: '/node_modules/'
      // },
      {
        // 命中 less 文件
        test: /\.less$/,
        // 从右到左依次使用 less-loader、css-loader、style-loader
        use: [this.mode === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
        // 排除 node_modules 下面的 less 文件
        exclude: '/node_modules/'
      },
      {
        test: /\.md$/,
        use: path.resolve('./src/myLoader/index.js')
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/client/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    hot: true,
    port: '3000'
  }
};
