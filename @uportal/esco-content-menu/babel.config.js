module.exports = {
  presets: [['@vue/app', {useBuiltIns: false}]],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-transform-custom-element-classes',
  ],
};
