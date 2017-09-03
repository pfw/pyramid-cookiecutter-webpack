const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, '/assets'),
  entry: './index',
  output: {
    path: path.resolve('./{{ cookiecutter.repo_name }}/webpack/bundles/'),
    filename: "[name]-[hash].js",
  },
  plugins: [
    new BundleTracker({filename: './{{ cookiecutter.repo_name }}/webpack/stats.json'}),
    new ExtractTextPlugin('[name]-[hash].css'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
