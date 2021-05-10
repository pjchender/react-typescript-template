# React TypeScript Template

## ESLint

- `eslint-config-prettier`: used for disable all formatting-related ESLint rules.
- `React Error : is declared but its value is never read`：參考 [Introducing the New JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint)，升級到 react v17 後，不需要 `import React` 的 ESLint 設定

### @typescript-eslint/parser

![@typescript-eslint/parser](https://i.imgur.com/9BdhAj0.png)

出現錯誤訊息：

```
Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: .eslintrc.js.
The file must be included in at least one of the projects provided
```

這個錯誤的意思是該檔案（`.eslintrc.js`）並沒有被包含在 tsconfig 的設定（`include`）中。之所以會有這個錯誤是因為 `@typescript-eslint/parser` 會試著去解析這隻檔案。

根據要不要實際讓 ESLint 去解析這支檔案的需求不同會有不同的設定方式，可以參考下方的文件。

- 最簡單的解決方式是把 `.eslintrc.js` 放到 `.eslintignore` 中，這樣 ESLint 就不會去解析 `.eslintrc.js` 這支檔案。
- 如果需要 lint 這隻檔案，但不需要出現 type-aware linting，則可以使用 ESLint 提供的 overrides 設定（可參考[這裡](https://stackoverflow.com/a/64488474/5135452)）
- 

#### 參考

- [I get errors telling me "The file must be included in at least one of the projects provided"](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information) @ typescript-eslint Github
- [Getting Started - Linting with Type Information](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md) @ typescript-eslint Github

## Lint Staged

- from lint-staged v10, `git add` part is automatic and not necessary to include in configuration. [Some of your tasks use git add command.(#775)](https://github.com/okonet/lint-staged/issues/775)