const webpack = require('webpack');

module.exports = (env) => new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(env),
});