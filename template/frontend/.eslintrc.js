module.exports = {
  root: true,
  env: {
    // commonjs: true,
    // es2021: true,
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/recommended", "prettier"],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "vue/no-v-text-v-html-on-component": "off",
    "vue/require-default-prop": "off",
  },
}
