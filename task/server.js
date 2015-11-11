var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot-update.js');

var hmrPort = 9527;

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
}).listen(hmrPort, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('🌎HMR Listening at %d',hmrPort);
});
