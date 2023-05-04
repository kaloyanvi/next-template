module.exports = {
  env: {
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      excludedFiles: ['next-env.d.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@next/next/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      rules: {
        eqeqeq: ['error', 'always'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@next/next/no-html-link-for-pages': ['error', 'pages/'],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/self-closing-comp': 'error',
        'import/no-cycle': 'warn',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'no-console': 'warn',
      },
    },
  ],
}
