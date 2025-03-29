module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:boundaries/recommended",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        "@/*": ["src/*"],
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react-refresh", "@typescript-eslint", "prettier", "import"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react-hooks/exhaustive-deps": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/namespace": "off",
    "import/first": "error",
    "import/no-unresolved": "off",
    "import/newline-after-import": "error",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "@/infrastructure/@fixtures/render",
            group: "internal",
          },
          {
            pattern: "**/@fixtures/**",
            group: "internal",
            position: "before",
          },
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../../", "../../../", "../../../../"],
      },
    ],
  },
};
