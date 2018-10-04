module.exports = function(api) {
  api.cache.never();
  return {
    presets: [['@babel/preset-env', {modules: false}], '@babel/preset-react'],
    plugins: [
      'babel-plugin-styled-components',
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
