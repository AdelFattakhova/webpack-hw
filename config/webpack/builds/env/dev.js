const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 5500
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    require('../../plugins/ESLintPlugin')(),
    require('../../plugins/DefinePlugin')('development')
  ]
}
