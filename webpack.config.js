const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      // Use esbuild to compile JavaScript & TypeScript
      {
          // Match `.js`, `.jsx`, `.ts` or `.tsx` files
          test: /\.[jt]sx?$/,
          loader: 'esbuild-loader',
          options: {
              // JavaScript version to compile to
              target: 'es2015'
          }
      },
      
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '...'],
  }
};
