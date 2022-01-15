const path = require('path');
// importuję bibliotękę [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importuję odpowiedni plugin
module.exports = {
  entry: "./src/app.js",
  target: "web",
  // definiuje plik wejściowy
  output: {
    path: path.resolve(__dirname, "build"),
    // definiuje ścieżką wyjściową
    filename: "app.min.js",
    // definiuję nazwę pliku wyjściowego
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // określam jakie pliki
        // będą brane pod uwagę
        exclude: /node_modules/,
        // określam wykluczenia
        use: "babel-loader",
        // określam jaki [loader]
        // ma być wykorzystany
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
    // obecnie brak dodatkowych ustawień
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // wskazuje plik źródłowy
      filename: "index.html",
      // określan nazwę dla pliku
    }),
  ],
};
// eksportuję ustawienia dla webpack-a