const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const uglifyPluginInstance = new UglifyJsPlugin({
  uglifyOptions: {
    output: {
      comments: false,
    }
  }
});

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
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
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
  optimization: {
    minimizer: [ uglifyPluginInstance ]
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: 3000,
    publicPath: "http://localhost:3000/dist"
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};