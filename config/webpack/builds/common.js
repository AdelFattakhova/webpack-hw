const path = require('path');

module.exports = (_path) => {
  return {
    entry: path.resolve(_path, 'src', 'index.jsx'),

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },

    module: {
      rules: [
        {
          oneOf: [
            require('../rules/js-react')(),
            require('../rules/styl')(),
            require('../rules/other')(_path)
          ]
        }
      ],
    },

    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    
    plugins: [
      require('../plugins/HtmlWebpackPlugin')(_path),
    ],
  }
} 
