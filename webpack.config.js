import {DefinePlugin} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
export default {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)?$/,
        loaders: ['react-hot-loader', 'istanbul-instrumenter-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
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
    extensions: ['.js', '.jsx', '.json']
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
    port: 3000,
    historyApiFallback: true
  }
}
