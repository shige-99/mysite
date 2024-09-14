---
title: Reactのオプショナルプロパティを使った親子コンポーネントの連携
date: "2024-09-03"
tags: "dev"
---

React では、子コンポーネントにプロパティを渡すとき、オプショナルプロパティ（`foo?` のように `?` をつけたやつ）は、渡さなくても OK です。じゃあ、それがどういう動きになるのか見てみよう。

### 子コンポーネントの定義

まず、子コンポーネントを定義してみましょう。

```typescript
const Component = (props: { foo?: boolean }) => {
  if (props.foo) {
    return <div>foo</div>;
  }
  return <div>fuga</div>;
};
```

この `Component` は、`foo` というオプショナルプロパティを持っています。`foo` が `true` なら `<div>foo</div>` を表示し、そうでない場合は `<div>fuga</div>` を表示します。

### 親コンポーネントからの使用例

次に、親コンポーネントからこの子コンポーネントを使ってみます。

```typescript
const ParentComponent = () => {
  return <Component />;
};
```

この場合、`Component` に `foo` プロパティが渡されていないので、`props.foo` は `undefined` となり、結果的に `<div>fuga</div>` が表示されます。

```typescript
const ParentComponent = () => {
  return <Component foo={true} />;
};
```

次に、`foo={true}` を渡すと、`props.foo` は `true` となり、`<div>foo</div>` が表示されます。

### オプショナルプロパティを使うと何がいいの？

オプショナルプロパティを使うと、親コンポーネント側が子コンポーネントに好きなタイミングでプロパティを渡せるようになります。これによって、子コンポーネントの処理を簡単にカスタマイズできるのがポイントです。
