module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'func-names': 0,
    'react/prop-types': 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'consistent-return': 0,
    'react/function-component-definition': 0,
  },
};
