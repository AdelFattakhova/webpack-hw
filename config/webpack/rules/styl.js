module.exports = () => {
  return {
    test: /\.styl$/,
    use: ['style-loader', 'css-loader', 'stylus-loader'],
  }
}