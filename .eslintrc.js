module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: [
    '@typescript-eslint', // 讓 ESLint 載入 @typescript-eslint/eslint-plugin 這個套件，以在程式碼中套用規則
    'eslint-comments',
    'jest',
    'simple-import-sort',
  ],
  extends: [
    // instead of using airbnb, use airbnb-typescript with TS project
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#eslint-configs
    // 如果已經有使用 airbnb-typescript，就不需要加上下面這行
    // 'plugin:@typescript-eslint/recommended'

    // 讓 @typescript-eslint 能夠在 Lint 顯示型別資訊
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser', // 讓 ESLint 可以了解 TS 的語法
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',

    // 讓 @typescript-eslint 能夠在 Lint 顯示型別資訊
    tsconfigRootDir: __dirname, // 讓 @typescript-eslint 能夠知道專案根目錄的絕對路徑
    project: './tsconfig.eslint.json', // 讓 @typescript-eslint 透過相對路徑找到 tsconfig.json
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

    // new JSX transform
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

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

    // '@typescript-eslint/no-use-before-define': ['error'],
    /* 必須建議使用 default export */
    // 'import/prefer-default-export': 'warn',

    /**
     * 避免出現 'React' was used before it was defined 的錯誤
     * Use function hoisting to improve code readability
     */
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
  },
};
