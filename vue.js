module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [ './basic', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended' ],
  overrides: [
    {
      files: [ '*.vue' ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
};
