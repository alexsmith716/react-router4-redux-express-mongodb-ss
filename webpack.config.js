
module.exports = {

  entry: {
    app: __dirname + '/chapter4.js',
    vendor: [
      'react', 'react-dom', 'react-router', 'react-bootstrap', 'react-router-bootstrap', 'isomorphic-fetch', 'babel-polyfill', 'react-select',
    ],
  },

  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /public/
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          } 
        }
      ]
    }]
  }
};