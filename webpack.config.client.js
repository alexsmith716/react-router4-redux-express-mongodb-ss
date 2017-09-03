
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
          babelrc: false,
          presets: [
            ['env', {'targets': { 'browsers': ['last 2 versions'] }}],
            'stage-2', 
            'react'
          ]
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