module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: [
    "node_modules/*",
    ".next/*",
    ".out/*",
    "!.prettierrc.js",
    "tailwind.config-ref.js",
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed with Next.js
    "@typescript-eslint/no-unused-vars": ["error"], // Error on unused vars
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    // Custom rule to allow console.log only in catch blocks
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "TryStatement > CatchClause > BlockStatement > ExpressionStatement > CallExpression[callee.object.name='console'][callee.property.name='log']",
        message: "Unexpected console.log outside of a catch block.",
      },
    ],
  },
};
