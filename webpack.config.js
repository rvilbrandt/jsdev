const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: debug ? 'development' : 'production',
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './src/main.jsx',
  output: {
    path: `${__dirname}/js`,
    filename: 'bundle.js',
  },
  plugins: debug ? [new HtmlWebpackPlugin({
    title: 'Custom template',
    // Load a custom template (lodash by default see the FAQ for details)
    template: './src/assets/index.html',
  })] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  // devServer: {
  //   lazy: false,
  //   filename: './build/bundle.js',
  //   overlay: true,
  // },
  serve: {
    port: 8080,
    // hot: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react',
            ],
            plugins: [
              'transform-object-rest-spread',
              'react-hot-loader/babel',
            ],
          },
        },
      },
    ],
  },
};
