var webpack = require('webpack');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: "./src/react-emojiboard",

  output: {
    library: 'ReactEmojiboard',
    libraryTarget: 'umd',
    path: __dirname + "/dist/",
    filename: "react-emojiboard.js"
  },

  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    }
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" 
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
