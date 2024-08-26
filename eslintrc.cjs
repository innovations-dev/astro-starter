module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:jsx-a11y/strict',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
      ecmaVersion: 'latest',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
  ],
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
};