var express = require('express');
var app = express();

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.local.config');

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true,
  headers: { "Access-Control-Allow-Origin": "*" }
}).listen(9090, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('react-emojiboard dev server listening at http://%s:%s', host, port);
});