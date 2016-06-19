var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');


module.exports = {
    entry: [
    	'webpack/hot/only-dev-server',
    	'webpack-dev-server/client?http://localhost:8080',
    	path.resolve(APP_PATH, 'index.js')
    ],
    output: {
        path: BUILD_PATH,
    	filename: 'bundle.js',
    	publicPath:'static'
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
	}
};