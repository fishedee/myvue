var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path:'dist',
    filename: 'bundle.js'       
  },
  module:{
    loaders: [
      { test: /\.vue$/, loader: 'vue'},
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css?$/,loaders: ["style-loader","css-loader"],include: __dirname}
    ]
  },
  vue: {
   loaders: {
      js: 'babel'
    }
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    extensions: ['', '.js', '.css', '.scss','.vue'],
  },
  plugins:[
  ]
}