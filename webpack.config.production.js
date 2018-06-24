const path = require('path');
const webpack = require('webpack');

const bundlePath = path.resolve(__dirname, 'dist/');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const uglifyPluginInstance = new UglifyJsPlugin({
  uglifyOptions: {
    output: {
      comments: false,
    },
  },
});

const miniCssExtractPluginInstance = new MiniCssExtractPlugin({
  filename: '[name].css',
});

module.exports = {
  entry: {
    bundle: './src/index.js',
    loader: './src/loader.js',
    page1: './src/pages/page1/index.js',
    home: './src/pages/home/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@basepath': path.resolve(__dirname, './src/'),
    },
  },
  output: {
    publicPath: bundlePath,
    filename: '[name].js',
  },
  optimization: {
    namedChunks: true,
    splitChunks: {
      name: 'libraries',
      cacheGroups: {
        libraries: {
          test: /[\\/]node_modules[\\/]/,
          name: 'libraries',
          chunks: 'initial',
        },
      },
    },
    minimizer: [uglifyPluginInstance, new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } },
    })],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist',
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), miniCssExtractPluginInstance],
};
