module.exports = {
  entry: './app/app.js',

  output: {
    filename: 'public/bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  node: {
    fs: "empty"
  },
  devtool: 'eval-source-map',
}