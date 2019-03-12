const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.dev.js');
const compile=webpack(config);
new WebpackDevServer(compile,{
	 inline: true,
     hot: true,
     stats: {
         colors: true
     }
}).listen(9001,'localhost',(err)=>{
	console.log(err)
})