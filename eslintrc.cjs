const eslintPluginAstro = require('eslint-plugin-astro');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
};