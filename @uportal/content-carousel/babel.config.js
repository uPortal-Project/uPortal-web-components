module.exports = function(api) {
  api.cache.never();
  return {
    presets: ['@vue/app'],
  };
};
