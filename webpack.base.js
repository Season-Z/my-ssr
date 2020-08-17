/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack')
const path = require('path')
const MiniCssPlugin = require('mini-css-extract-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src'), // 这样配置后 @ 可以指向 src 目录
      '@page': path.resolve(__dirname, './src/page'),
      '@client': path.resolve(__dirname, './src/client'),
      '@server': path.resolve(__dirname, './src/server'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@store': path.resolve(__dirname, './src/store'),
    },
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
                  browsers: ['last 2 versions'],
                },
              },
            ],
          ],
          plugins: ['transform-decorators-legacy', 'transform-class-properties'],
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].css',
    }),
  ],
}
