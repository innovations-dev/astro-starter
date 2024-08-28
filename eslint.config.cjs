const eslintPluginAstro = require("eslint-plugin-astro");

module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
    },
  ],
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  env: {
    node: true,
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn",
  },
};
