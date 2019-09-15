const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve('src') // 这样配置后 @ 可以指向 src 目录
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            'es2015',
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions']
                }
              }
            ]
          ]
        }
      }
    ]
  }
};