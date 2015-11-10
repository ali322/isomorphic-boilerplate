var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot-update.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo:true,
  // inline:true,
  stats:{colors:true},
  //contentBase:"http://localhost:3000/",
  watchOptions:{
      aggregateTimeout:800
  },
  historyApiFallback: true
}).listen(9527, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('🌎 Listening at localhost:9527');
});
