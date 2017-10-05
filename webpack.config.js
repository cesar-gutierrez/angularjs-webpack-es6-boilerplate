const webpack = require('webpack')
const path = require('path')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules:[{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    }, {
      test: /\.(scss|css)$/,
      loader: ['style-loader', 'css-loader','sass-loader']
    }, {
      test: /\.(png|gif|jpg|woff|woff2|eot|ttf|svg)$/,
      use: [{
        loader: 'url-loader',
        options: { limit: 10000 }
      }]
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}

module.exports = config