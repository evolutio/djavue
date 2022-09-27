module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'standard',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-debugger': 0,
    camelcase: 0,
    'require-await': 'error',
    'vue/no-unused-properties': ['error', {
      groups: ['props', 'data', 'computed', 'methods'],
      ignorePublicMembers: true
    }],
    'vue/no-unused-refs': 'error',
    'vue/this-in-template': 'error',
    'vue/order-in-components': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-v-html': 'off'
  }
}
