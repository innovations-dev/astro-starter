const eslintPluginAstro = require("eslint-plugin-astro");

module.exports = {
  extends: [
    "plugin:astro/recommended",
    "plugin:jsx-a11y/strict",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "latest"
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        project: "./tsconfig.json"
      },
      rules: {}
    }
  ],
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  env: {
    node: true
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn"
  }
};
