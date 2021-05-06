module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    // instead of using airbnb, use airbnb-typescript with TS project
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#eslint-configs
    // 如果已經有使用 airbnb-typescript，就不需要加上下面這行
    // 'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',

    // add this line if using 'airbnb-typescript'
    project: './tsconfig.json',
  },
  settings: {
    // // 避免出現 Unable to resolve path to module
    // 'import/resolver': {
    //   node: {
    //     paths: ['src'], // 加上這行才能用 absolute import
    //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //   },
    // },
  },

  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': 'off',

    /* 避免出現 JSX not allowed in files with extension '.tsx' */
    // 'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    /* 避免出現 'React' was used before it was defined */
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
    /* 避免出現 'React' was used before it was defined 的錯誤 */
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': ['error'],
    /* 必須建議使用 default export */
    // 'import/prefer-default-export': 'warn',
  },
};