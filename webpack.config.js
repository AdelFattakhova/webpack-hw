const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const currentConfig = process.env.BUILD_ENV === 'development' ? devConfig : prodConfig;

module.exports = merge(common, currentConfig);
