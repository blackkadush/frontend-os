const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './components/root.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        cache: true,
    })
  ],
  devServer: {
    hot: true,
    port: 9000
  },
};



