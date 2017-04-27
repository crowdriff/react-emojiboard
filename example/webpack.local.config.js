var webpack = require('webpack');

module.exports = {

  devtool: "eval",

  entry:  [
    "webpack-dev-server/client?http://localhost:9090",
    "webpack/hot/only-dev-server",
    "./example/main"
  ],

  output: {
    path: __dirname + "/build/",
    filename: "app.js",
    publicPath: "http://localhost:9090/build/"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader"]},
      { test: /\.scss?$/, exclude: /node_modules/, loaders:  ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
  
}
