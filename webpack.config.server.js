
const path = require('path');
const entryPath = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'dist');
const nodeExternals = require('webpack-node-externals');

module.exports = {

  context: entryPath,

  entry: './server/index.js',

  output: {
    path: outputPath,
    filename: 'serverBundle.js'
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

  target: 'node',

  externals: nodeExternals(),

  node: {
    __dirname: false,
    __filename: false
  }

};