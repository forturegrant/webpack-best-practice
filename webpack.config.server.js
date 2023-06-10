const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  entry: path.join(__dirname, "src/client/ServerApp"),
  output: {
    filename: "ServerApp.js",
    path: `${__dirname}/dist`,
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        // 命中 less 文件
        test: /\.less$/,
        // 从右到左依次使用 less-loader、css-loader、style-loader
        use: ["style-loader", "css-loader", "less-loader"],
        // 排除 node_modules 下面的 less 文件
        exclude: "/node_modules/",
      },
      {
        test: /\.png|jpg|gif|jpeg|svg/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "images/[base]",
        },
      },
    ],
  },
};
