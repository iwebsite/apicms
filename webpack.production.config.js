var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
    vendors: ['react','antd']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel']
    },{
      test: /\.css$/,
      loader: 'style!css'
    },{
      test: /\.less$/,
          loader: 'style!css!less'
    },{
      test: /\.woff$/,
          loader: 'url?limit=100000'
    },{
      test: /\.(png|jpg)$/,
          loader: 'url?limit=25000'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlwebpackPlugin({
      template: path.resolve(ROOT_PATH, 'index.html'),
      filename: 'index.html',
      //chunks这个参数告诉插件要引用entry里面的哪几个入口
      chunks: [ 'vendors'],
      //要把script插入到标签里
      inject: 'body'
    })
  ]
};
