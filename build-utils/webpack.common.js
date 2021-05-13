const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
 
module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, '..', './index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/mystyles.css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Aaron Key\'s Portfolio',
      favicon: './src/css/photos/icons/favicon.ico',
      template: path.resolve(__dirname, '/src/index.html'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '/src/index.html'),
      inject: true,
      filename: 'about.html',
    }),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, '../site.webmanifest'),
					to: path.resolve(__dirname, '../dist')
				},
				{
					from: path.resolve(__dirname, '../src/css/photos/icons'),
					to: path.resolve(__dirname, '../dist')
				}
			]
		})
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
  },
};