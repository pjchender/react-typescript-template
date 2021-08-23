module.exports = {
  root: true,
  extends: ['pjchender'],
  parser: '@typescript-eslint/parser', // 讓 ESLint 可以了解 TS 的語法
  parserOptions: {
    // 讓 @typescript-eslint 能夠在 Lint 顯示型別資訊
    tsconfigRootDir: __dirname, // 讓 @typescript-eslint 能夠知道專案根目錄的絕對路徑
    project: './tsconfig.eslint.json', // 讓 @typescript-eslint 透過相對路徑找到 tsconfig.json
  },
};
