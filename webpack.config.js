module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/,
      },
    ],
  },
}
