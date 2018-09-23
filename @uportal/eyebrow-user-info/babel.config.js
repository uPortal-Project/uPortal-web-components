module.exports = function(api) {
  api.cache.never();
  return {
    plugins: ["babel-plugin-transform-custom-element-classes"],
    presets: ["@babel/preset-env"]
  };
};
