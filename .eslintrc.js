const { off } = require('process');

module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  ignorePatterns: ['**/*.js', 'declarations.d.ts'],

  plugins: ['@typescript-eslint'],

  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest-dom/recommended',
    'plugin:storybook/recommended',
  ],

  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-plusplus': 'off',
    'import/first': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/webpack.common.js',
      },
    },
  },

  overrides: [
    {
      parserOptions: { project: './cypress/tsconfig.json' },
      extends: ['plugin:cypress/recommended'],
      files: ['cypress/**/*.ts'],
      rules: {},
    },
  ],
};
