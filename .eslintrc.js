module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        strict: 0,
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-whitespace-before-property': 2,
        'no-unused-vars': 1,
        'react/prop-types': 0,
        'react/jsx-key': 1,
        'react/react-in-jsx-scope': 0,
        'react/display-name': 0,
        'no-unreachable': 1,
        'use-isnan': 1,
        'dot-notation': 1,
        eqeqeq: 2,
        'no-extra-bind': 2,
        'no-empty-function': 1,
        'no-restricted-imports': 0
      },
    },
  ],
};
