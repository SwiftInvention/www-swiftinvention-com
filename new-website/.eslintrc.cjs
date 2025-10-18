module.exports = {
  root: true,
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:astro/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'react-hooks', 'prettier', 'astro'],
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'postcss.config.js', 'prettier.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: { react: { version: '18.2' } },
  rules: {
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-interface': 0,
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['*.astro'], // Target Astro files specifically
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'react/jsx-filename-extension': 0
      },
    },
  ],
};
