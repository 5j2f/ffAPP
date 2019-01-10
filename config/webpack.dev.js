const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	mode:'development',
	entry:path.resolve(__dirname,'../src/index.js'),
	output:{
		filename:'main.js',
		path:path.resolve(__dirname,'../build')
	},
	devtool: 'source-map',
	module:{
		rules:[
				{
					test:/\.(js|jsx)$/,
					exclude:/node_modules/,
					 use: {
				        loader: 'babel-loader',
				        options: {
				          presets: ['@babel/preset-env','@babel/preset-react']
				        }
				      }
				},
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:path.resolve(__dirname,'../public/index.html')
		})
	],
	devServer:{
		port:9001,
		historyApiFallback:true
	}
	
}