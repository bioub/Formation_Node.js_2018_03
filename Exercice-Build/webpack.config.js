const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    entryA: './src/js/index'
  },
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {
              targets: {
                browsers: ['IE 11', 'last 2 chrome versions']
              },
              modules: false,
            }]],
            plugins: ['syntax-dynamic-import']
          }
        }
      }
    ]
  }
};
