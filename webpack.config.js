import path from 'path'
import {DefinePlugin, HotModuleReplacementPlugin} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
export default {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  entry: [
    './app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new DefinePlugin({
      __DEV__: !process.env.NODE_ENV || process.env.NODE_ENV !== 'production'
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body'
    }),
    new HotModuleReplacementPlugin()
  ]
}
