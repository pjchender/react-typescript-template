# React TypeScript Template

## ESLint

> 參考設定：
>
> - [create-exposed-app](https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js)：eslint-config-airbnb-typescript 的參考設定。

- `eslint-config-prettier`: used for disable all formatting-related ESLint rules.
- `React Error : is declared but its value is never read`：參考 [Introducing the New JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint)，升級到 react v17 後，不需要 `import React` 的 ESLint 設定

### @typescript-eslint/eslint-plugin

> - [Getting Started - Linting your TypeScript Codebase](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)：說明整個安裝設定流程 @ Github
> - [Getting Started - Linting with Type Information](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md)：讓 Lint 可以顯示型別的訊息 @ Github

#### 錯誤處理：Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser

![@typescript-eslint/parser](https://i.imgur.com/9BdhAj0.png)

出現錯誤訊息：

```txt
Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: .eslintrc.js.
The file must be included in at least one of the projects provided
```

這個錯誤的意思是該檔案（`.eslintrc.js`）並沒有被包含在 tsconfig 的設定（`include`）中。之所以會有這個錯誤是因為 `@typescript-eslint/parser` 會試著去解析這隻檔案。

根據要不要實際讓 ESLint 去解析這支檔案的需求不同會有不同的設定方式，可以參考下方的文件。

- 最簡單的解決方式是把 `.eslintrc.js` 放到 `.eslintignore` 中，這樣 ESLint 就不會去解析 `.eslintrc.js` 這支檔案。
- 如果需要 lint 這隻檔案，但不需要出現 type-aware linting，則可以使用 ESLint 提供的 overrides 設定（可參考[這裡](https://stackoverflow.com/a/64488474/5135452)）

#### 參考

- [I get errors telling me "The file must be included in at least one of the projects provided"](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information) @ typescript-eslint Github
- [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) @ Official Github
  - [TypeScript ESLint/Parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)
  - [TypeScript ESLint/ESLint Plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [Learn TypeScript Linting Part 1](https://blog.matterhorn.dev/posts/learn-typescript-linting-part-1/) @ Mountain Top

### eslint-config-airbnb-typescript

> [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)：安裝與設定方式 @ Github

#### 錯誤處理："The file must be included in at least one of the projects provided"

> [I get this error when running ESLint: "The file must be included in at least one of the projects provided"](https://github.com/iamturns/eslint-config-airbnb-typescript#i-get-this-error-when-running-eslint-the-file-must-be-included-in-at-least-one-of-the-projects-provided) @ eslint-config-airbnb-typescript

### eslint-plugin-eslint-comments

針對的是 ESLint 在檔案中提供的指令，例如 `/* eslint-disable */`。

### eslint prettier

[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) 可以透過 ESLint 的規則來達到 prettier 的效果，為了要讓此 plugin 正確運作，最好可以把和 code formatting 有關的 ESLint 規則都關閉，只使用 ESLint 來確保程式碼品質、並偵測出可能的問題。要把和 code formatting 有關的 ESLint 規則都關閉，則可以使用 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) 這個工具。

:::note
Prettier 的原則是，透過 Prettier 來編排程式碼（code formatting）；透過 linter 來確保程式碼的品質（code-quality）及避免可能的 bug。
:::

#### 安裝

```bash
npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier
```

#### 設定方式

```javascript
// .eslintrc.js
{
  // 這會套用 eslint-config-prettier 設定好的規則
 extends: ['plugin:prettier/recommended'] // 放在陣列中最後一個
}
```

在根目錄建立 `.prettierrc` 後，eslint-config-prettier 則預設就會去讀取這支檔案。

在 `extends` 中使用 `plugin:prettier/recommend` 後，即可省略下述設定：

```json
// 使用 plugin:prettier/recommend 的話，即可省略下述設定
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error", // 預設就會讀 .prettierrc
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```

#### 參考

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)：將和 Prettier 無關或可能導致衝突的規則關閉 @ github
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)：透過 ESLint 的規則來達到 prettier 的效果@ github
- [Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html) @ Prettier Docs

## Lint Staged

- from lint-staged v10, `git add` part is automatic and not necessary to include in configuration. [Some of your tasks use git add command.(#775)](https://github.com/okonet/lint-staged/issues/775)
