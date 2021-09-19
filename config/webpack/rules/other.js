const path = require('path');

module.exports = (_path) => {
  return {
    test: /\.(png|ico|jpg|jpeg|gif|svg|woff|woff2)$/,
    use: {
      loader: 'file-loader',
      options: {
        context: path.join(_path, 'src', 'assets'),
        name: '[path][name].[hash:8].[ext]'
      }
    },
  }
}