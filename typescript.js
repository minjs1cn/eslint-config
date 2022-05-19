module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [ './basic', 'plugin:@typescript-eslint/recommended' ],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': [ 'error', 2 ],
  },
};
