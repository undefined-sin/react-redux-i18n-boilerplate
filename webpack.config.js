const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");



module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(less|css)$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      }
      ,
    ]
  },
  resolve: { 
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@basepath': path.resolve(__dirname, './src/')
    }
  },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    publicPath: "http://localhost:3000/dist",
    historyApiFallback: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};