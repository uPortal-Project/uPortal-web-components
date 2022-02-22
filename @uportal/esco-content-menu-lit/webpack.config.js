/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const fs = require('fs');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const header = fs.readFileSync(__dirname + '/samples/header.html');

const devComponents = [];

const prodComponents = [];

let config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@use 'sass:math';
              @import "src/styles/vars.scss";
              @import "src/styles/common.scss";`,
              sassOptions: {
                includePaths: [__dirname, 'src', 'src/styles'],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
    alias: {
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@mixins': path.resolve(__dirname, 'src/mixins/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@locales': path.resolve(__dirname, 'src/locales/'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    },
    compress: true,
    port: 8080,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        parallel: true,
      }),
    ],
    sideEffects: true,
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.entry = {};
    devComponents.forEach((component) => {
      config.entry[component] = `./src/${component}.ts`;
      config.entry[`${component}.min`] = `./src/${component}.ts`;
    });
    config.devtool = 'source-map';
    config.plugins = [
      new Dotenv(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'Menu',
        header: header,
        chunks: [],
        template: './samples/index.html',
      }),
    ].concat(
      devComponents.map((component) => {
        switch (component) {
          default:
            return new HtmlWebpackPlugin({
              filename: component + '.html',
              title: component,
              header: header,
              chunks: [component],
              template: './samples/' + component + '.html',
            });
        }
      })
    );
  }

  if (argv.mode === 'production') {
    const entryFiles = prodComponents.map(
      (component) => `./src/${component}.ts`
    );
    config.entry = {
      'esco-content-menu': entryFiles,
      'esco-content-menu.min': entryFiles,
    };
    config.plugins = [new Dotenv()];
    if (env.fortest) config.devtool = 'source-map';
    if (env.profiling) config.plugins.concat([new BundleAnalyzerPlugin()]);
  }

  return config;
};
