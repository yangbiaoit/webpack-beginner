var webpack = require("webpack");
var path = require("path");

module.exports =(function(){
    var config={
          
          entry: [
              'webpack-dev-server/client?http://127.0.0.1:3000',
              'webpack/hot/dev-server',
              './src/main.js' //入口文件,webpack会从入口文件出开始查找依赖递归进行打包
          ], 
          output: {
              path       : path.join(__dirname, 'www'),　　//打包后的文件位置
              filename   : 'js/bundle.js',　　//打包后的文件名
              publicPath : '/www/'
          },
          module: {
              loaders: [　　//配置模块加载器,数组形式
             
              ],
          }
    };
    
    config.plugins =[
          
          //new webpack.NoErrorPlugin(),
          new webpack.HotModuleReplacementPlugin(),

    ];
    
    return config;
})();

  

