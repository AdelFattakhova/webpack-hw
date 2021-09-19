module.exports = {
  mode: 'production',
  devtool: false,
  
  optimization: {
    minimize: true,
    minimizer: [
      // для использования дефолтных минимайзеров
      `...`,
      require('../../plugins/CssMinimizerPlugin')()
    ]
  },

  plugins: [
    require('../../plugins/DefinePlugin')('production')
  ]
}
