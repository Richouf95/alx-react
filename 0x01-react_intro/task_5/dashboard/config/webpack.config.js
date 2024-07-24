const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Point d'entrée du code JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Nom du fichier bundle
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Regarde les fichiers JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Regarde les fichiers CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Regarde les fichiers images
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Les images seront placées dans dist/images
              publicPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  devtool: 'inline-source-map', // Génère une source map inline pour le débogage
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
    hot: true, // Active le rechargement à chaud
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html', // Fichier HTML à utiliser comme modèle
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
