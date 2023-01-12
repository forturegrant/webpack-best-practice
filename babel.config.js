module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  plugins: [
    [require("./babelPluginBtoC.js")],
    [
      require("babel-plugin-async-await-add-try-catch"),
      {
        exclude: ["build"], // 默认值 ['node_modules']
        include: ["src/client/index.tsx"], // 默认值 []
        customLog: "My customLog", // 默认值 'Error'
      },
    ],
  ],
};
