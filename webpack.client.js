const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const MiniCssPlugin = require('mini-css-extract-plugin');

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'style-loader',
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

module.exports = merge(baseConfig, clientConfig);
