import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: true,
});

const eslintConfig = [
  ...compat.extends(
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "next/core-web-vitals",
    "next/typescript"
  ),
  {
    rules: {
      "no-unused-vars": "warn",
      "prettier/prettier": ["error"],
      "react/prop-types": "off",
      "no-console": "off",
      "no-extra-boolean-cast": "off",
      "react/react-in-jsx-scope": "off",
      "functional/no-conditional-statement": "off",
      "functional/no-expression-statement": "off",
      "functional/immutable-data": "off",
      "functional/functional-parameters": "off",
      "functional/no-try-statement": "off",
      "functional/no-throw-statement": "off",
      "no-underscore-dangle": ["error", { allow: ["__filename", "__dirname"] }],
      "testing-library/no-debug": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
      "no-case-declarations": "off",
      "react-hooks/exhaustive-deps": "warn",
      "no-shadow": "warn",
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
      "import/no-absolute-path": "error",
    },
    ignores: [
      "**/node_modules/**",
      "**/.vscode/**",
      "**/dist/**",
      "**/.next/**",
      "**/prettier.config.js",
    ],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
  },
  {
    plugins: ["@typescript-eslint"],
    parserOptions: {
      project: "./tsconfig.json",
    },
  },
];

export default eslintConfig;
