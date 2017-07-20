
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '  source-map',
  entry:[
    'webpack-hot-middleware/client',
    './src/index.jsx'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, 
      { 
        test: /\.o?t?tf$/,
        use: {
          loader: 'file-loader',  
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};