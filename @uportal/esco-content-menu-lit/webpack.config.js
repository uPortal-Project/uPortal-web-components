/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const fs = require('fs');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const header = fs.readFileSync(__dirname + '/samples/header.html');

const devComponents = [
  'lit-spinner',
  'lit-ellipsis',
  'action-favorites',
  'portlet-card',
  'content-grid',
  'header-buttons',
  'content-user',
  'content-favorites',
  'content-menu',
  'hamburger-menu',
  'content-grid-filter',
];

const prodComponents = ['hamburger-menu', 'content-grid-filter'];

const PACKAGE = require('./package.json');

const currentDate = new Date().toLocaleString('en-US');

const banner = () => {
  return `package : ${PACKAGE.name}\nversion : ${PACKAGE.version}\nauthor : ${PACKAGE.author}\nbuild time : ${currentDate}`;
};

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
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@use 'sass:math';
              @import "src/styles/vars.scss";
              @import "src/styles/common.scss";`,
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
    exportsFields: [],
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
        extractComments: false,
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
      new webpack.BannerPlugin({
        banner: banner,
      }),
    ].concat(
      devComponents.map((component) => {
        switch (component) {
          case 'content-grid-filter':
            return new HtmlWebpackPlugin({
              filename: 'content-grid-filter.html',
              title: 'content-grid-filter',
              header: header,
              chunks: ['content-grid', 'content-grid-filter'],
              template: './samples/content-grid-filter.html',
            });
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
    config.plugins = [
      new Dotenv(),
      new webpack.BannerPlugin({
        banner: banner,
      }),
    ];
    if (env.profiling) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
    if (env.fortest) config.devtool = 'source-map';
  }

  return config;
};
