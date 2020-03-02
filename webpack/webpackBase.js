const webpack = require('webpack');
const path = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve('src') // 这样配置后 @ 可以指向 src 目录
    }
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        options: {
          cacheDirectory: '.tmp/babel-loader',
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
          ],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].css'
    })
  ]
};