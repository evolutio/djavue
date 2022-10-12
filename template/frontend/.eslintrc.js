module.exports = {
  root: true,
  env: {
    // commonjs: true,
    // es2021: true,
    browser: true,
    node: true
  },
  extends: [
    // 'eslint:recommended',
    'standard',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-debugger': 0,
    camelcase: 0,
    indent: ['error', 2],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'space-before-function-paren': ['error', 'always'],
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
    'vue/no-v-html': 'off',
    'vue/no-v-text-v-html-on-component': 'off'
  }
}
