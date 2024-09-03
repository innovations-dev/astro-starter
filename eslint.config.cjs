const eslintPluginAstro = require("eslint-plugin-astro");
// https://r44j.dev/blog/beginner-s-guide-to-setting-up-astro-astro-prettier-eslint-tailwind-css/
module.exports = {
  extends: [
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended",
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
