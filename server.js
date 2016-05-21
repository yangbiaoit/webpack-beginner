var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
// webpack server.js 很好玩  
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,　　//开启热调试
    historyApiFallback: true
}).listen(3000, '127.0.0.1', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('server start');
});