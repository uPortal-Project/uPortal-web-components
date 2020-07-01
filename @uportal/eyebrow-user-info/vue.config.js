module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader');
  },

  pluginOptions: {
    i18n: {
      enableInSFC: true,
    },
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[name]-[local]',
        },
        localsConvention: 'camelCaseOnly',
      },
    },
  },
};
