import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "indent": ["error", 2],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "no-useless-catch": "off",
      "no-empty": "off",
      "no-empty-function": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-trailing-spaces": "warn",
      "prefer-const": "warn",
      semi: ["warn", "never"],
      quotes: ["warn", "double"],
      "jsx-quotes": ["warn", "prefer-double"],
      "object-curly-spacing": ["warn", "always"],
      "eol-last": ["warn", "always"],
      "array-bracket-spacing": ["warn", "never"],
      "computed-property-spacing": ["warn", "never"],
      "comma-dangle": ["warn",],
      "comma-spacing": [
        "warn",
        {
          before: false,
          after: true,
        },
      ],
      "no-multiple-empty-lines": [
        "warn",
        {
          max: 1,
          maxEOF: 0,
        },
      ],
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
      "keyword-spacing": [
        "warn",
        {
          before: true,
          after: true,
        },
      ],
    },
  },
)
