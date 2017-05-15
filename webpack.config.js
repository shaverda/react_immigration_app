module.exports = {
  entry: './app/config/routes.js',

  output: {
    filename: 'public/bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  devtool: 'eval-source-map',
}