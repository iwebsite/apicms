var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
		app: path.resolve(APP_PATH, 'index.js')
	},
    output: {
        path: BUILD_PATH,
		publicPath:'/',
    	filename: 'bundle.js'
    },
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		port:8080,
		proxy:{
			//"/api/*" :'http://localhost'//服务器地址
			"/api/*" :'http://localhost/App/apicms'//本机地址
		}
	},
	plugins: [
		new HtmlwebpackPlugin({
			template: path.resolve(ROOT_PATH, 'index.html'),
			filename: 'index.html',
			chunks: ['app'],
			inject: 'body'
		})
	],
    module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['react-hot','babel'],
			include: path.join(__dirname, 'src')
		},{
			test: /\.css$/,
			loaders: ['style', 'css']
		},{
			test: /\.less$/,
			loaders: ['style', 'css', 'less']
		},{
			test: /\.woff$/,
      		loader: 'url?limit=100000'
		},{
			test: /\.(png|jpg)$/,
      		loader: 'url?limit=25000'
		}]
	}
};