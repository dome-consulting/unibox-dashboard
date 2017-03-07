'use strict';

/* Dependencies */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* Build Paths */
const SRCDIR = path.resolve(__dirname, 'src');
const OUTDIR = path.resolve(__dirname, 'lib');

module.exports = (env = {}) => {

  /* Webpack configuration */
  return {
    /* Main entry point */
    entry: ['babel-polyfill', path.resolve(__dirname, 'test', 'dev.js')],

    /* JavaScript bundle output */
    output: {
      path: OUTDIR,
      publicPath: '/',
      filename: 'bundle.js'
    },

    /* Additional modules */
    module: {
      loaders: [
        /* Loader for js and jsx files */
        {
          test: /\.jsx?$/,
          loader: 'babel-loader'
        }
      ]
    },

    /* Extensions to resolve */
    resolve: {
      extensions: [".js", ".json", ".jsx", "*"]
    },

    /* Plugins: https://github.com/webpack/docs/wiki/list-of-plugins */
    plugins: [
      /* Build index.html and inject bundles */
      new HtmlWebpackPlugin({ hash: true, inject: true }),
      /* Ignore watch node_modules */
      new webpack.WatchIgnorePlugin([path.join(__dirname, 'node_modules')]),
      /* Enable hot deploy */
      new webpack.HotModuleReplacementPlugin()
    ],

    /* Local development server configuration */
    devServer: {
      contentBase: OUTDIR,
      publicPath: '/',
      hot: true,
      inline: true,
      historyApiFallback: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      host: env.host || '0.0.0.0',
      port: env.port || '8000',
      quiet: false
    }
  };

};
