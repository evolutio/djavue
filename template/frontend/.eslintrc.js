module.exports = {
  root: true,
  env: {
    // commonjs: true,
    // es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    // 'eslint:recommended',
    "standard",
    "plugin:vue/recommended",
  ],
  // required to lint *.vue files
  plugins: [
    "vue",
  ],
  // add your custom rules here
  rules: {
    "no-debugger": 0,
    camelcase: 0,
    indent: ["error", 2],
    quotes: [
      "error",
      "double",
    ],
    semi: [
      "error",
      "never",
    ],
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "never",
      exports: "never",
      functions: "never",
    }],
    "linebreak-style": [
      "error",
      "unix",
    ],
    "space-before-function-paren": ["error", "always"],
    "require-await": "error",
    "vue/html-closing-bracket-newline": ["error", {
      multiline: "never",
    }],
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 4,
      },
      multiline: {
        max: 4,
      },
    }],
    "vue/no-unused-properties": ["error", {
      groups: ["props", "data", "computed", "methods"],
      ignorePublicMembers: true,
    }],
    "vue/no-unused-refs": "error",
    "vue/this-in-template": "error",
    "vue/order-in-components": "off",
    "vue/require-default-prop": "off",
    "vue/require-prop-types": "off",
    "vue/no-v-html": "off",
    "vue/no-v-text-v-html-on-component": "off",
  },
}
