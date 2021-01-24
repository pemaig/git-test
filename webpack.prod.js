const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[contenthash].js',
  },
});
