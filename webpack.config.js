const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    /* @param hash */
    filename: 'provider-[contenthash].js',
    /* @param optimization  */
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: 'none',
};
