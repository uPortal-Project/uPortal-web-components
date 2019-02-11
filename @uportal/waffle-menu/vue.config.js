module.exports = {
  filenameHashing: false,
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: {
        // chunks: 'all',
        // name: false,
        cacheGroups: {
          default: false,
        },
      },
    },
  },
};
