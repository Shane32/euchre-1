module.exports = {
  entry: "./src/index.js",

  output: {
    path: "./build/",
    publicPath: "/assets/",
    filename: "app.js"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015", "react"]
      }
    }]
  },

  resolve: {
    root: [__dirname + "/src"]
  },

  plugins: []
};
