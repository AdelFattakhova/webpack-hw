const { merge } = require('webpack-merge');
const common = require('./config/webpack/builds/common');
const devConfig = require('./config/webpack/builds/env/dev');
const prodConfig = require('./config/webpack/builds/env/prod');

const currentConfig = process.env.BUILD_ENV === 'development' ? devConfig : prodConfig;

module.exports = merge(common(__dirname), currentConfig);
