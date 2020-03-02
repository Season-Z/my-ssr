const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const MiniCssPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()], // 解决【the request of a dependency is an expression】报错
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'isomorphic-style-loader',
          MiniCssPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};

module.exports = merge(baseConfig, serverConfig);
