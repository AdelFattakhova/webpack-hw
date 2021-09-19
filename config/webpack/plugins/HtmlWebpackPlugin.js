const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_path) => new HtmlWebpackPlugin({
  template: path.resolve(_path, 'src', 'index.html')
});
