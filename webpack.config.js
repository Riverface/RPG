const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  // new line

module.exports = {
  
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './docs'
  },
  plugins: [
    new UglifyJsPlugin(),    // new line
    new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({
      title: 'RPG',
      template: './src/index.html',  
      inject: 'head'
    })

  ],
  module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'

      ]
    },
    {
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /spec/
      ],
      loader: "eslint-loader"
    },
{
  test: /\.(wav|mp3|png|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'media',
        name: '[name].[ext]',
      }
}
   ]
}
  ]
}

};
