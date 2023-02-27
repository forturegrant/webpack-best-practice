module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 5%', 'IE 10', 'iOS 7', 'Firefox > 20']
        },
        useBuiltIns: 'usage', // 按需加载polyfill
        corejs: 2,
        modules: false
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    [require('./babelPluginBtoC.js')],
    [
      require('babel-plugin-async-await-add-try-catch'),
      {
        exclude: ['build'], // 默认值 ['node_modules']
        include: ['src/client/index.tsx'], // 默认值 []
        customLog: 'My customLog' // 默认值 'Error'
      }
    ]
  ]
};
