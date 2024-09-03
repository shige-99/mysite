---
title: Reactのオプショナルプロパティを使った親子コンポーネントの連携
date: "2024-09-03"
description: "Reactコンポーネントでオプショナルプロパティを使い、親コンポーネントから柔軟にプロパティを渡す方法を解説します。"
---

React では、子コンポーネントにプロパティを渡すとき、オプショナルプロパティ（`foo?` のように `?` をつけたやつ）は、渡さなくても OK です。じゃあ、それがどういう動きになるのか見てみよう。

```typescript
const ParentComponent = () => {
  return <Component />;
};
```

この例では、`Component` に `foo` プロパティが渡されていないですよね。そうすると、`props.foo` は `undefined` になります。そして、`undefined` は `if (props.foo)` の条件式で `false` として扱われるので、`<div>fuga</div>` が表示されます。

```typescript
const ParentComponent = () => {
  return <Component foo={true} />;
};
```

次に、`foo={true}` を渡してみます。この場合、`props.foo` は `true` なので、条件が `true` となり、`<div>foo</div>` が表示されます。

### オプショナルプロパティを使うと何がいいの？

オプショナルプロパティを使うと、親コンポーネント側が子コンポーネントに好きなタイミングでプロパティを渡せるようになります。これによって、子コンポーネントの処理を簡単にカスタマイズできるのがポイントです。
