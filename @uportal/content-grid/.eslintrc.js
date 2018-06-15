module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  rules: {
    // allow console and debugger in development
    //'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-console": 0,
    //'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-debugger": 0
  }
};
