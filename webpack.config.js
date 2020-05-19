module.exports={
  entry: __dirname + "/src/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./public",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
