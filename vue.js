module.exports = {
  extends: [
    './typescript',
    'plugin:vue/vue3-recommended',
  ],
  overrides: [
    {
      files: [ '*.vue' ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
};
