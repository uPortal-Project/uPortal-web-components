module.exports = {
  transpileDependencies: ['@uportal/open-id-connect'],
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
    loaderOptions: {
      css: {
        modules: true,
        localIdentName: '[name]-[local]',
        camelCase: 'only',
      },
    },
  },
};
