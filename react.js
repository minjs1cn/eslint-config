module.exports = {
  extends: [
    './typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': [ 'error', 2 ],
  },
};
