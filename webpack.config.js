// noinspection JSUnresolvedVariable
import {DefinePlugin} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
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
        plugins: [
          'transform-runtime',
          'transform-react-jsx-source'
        ],
        presets: ['latest', 'stage-0', 'react'],
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
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/
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
    })
  ],
  devServer: {
    port: 3000
  }
}
