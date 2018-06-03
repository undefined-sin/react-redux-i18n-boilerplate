const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const uglifyPluginInstance = new UglifyJsPlugin({
  uglifyOptions: {
    output: {
      comments: false,
    }
  }
});

const miniCssExtractPluginInstance = new MiniCssExtractPlugin({
  filename: "[name].css"
})

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
        use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ]
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
  plugins: [ new webpack.HotModuleReplacementPlugin(), miniCssExtractPluginInstance ]
};