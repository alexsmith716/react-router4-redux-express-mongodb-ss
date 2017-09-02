
const path = require('path');
const entryPath = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {

  context: entryPath,

  entry: {
    app: './client/index.js',
    vendor: [
      'react'
    ],
  },

  output: {
    path: outputPath,
    filename: 'clientBundle.js'
    publicPath: '/',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        /node_modules/
      ],
      use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          } 
        }]
    }]
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.jsx', '.json']
  },

  devtool: 'source-map',

  target: 'web'

};