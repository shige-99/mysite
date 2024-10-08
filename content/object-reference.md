---
title: ここで理解するオブジェクト参照
date: "2024-08-31"
tags: "dev"
---

### 基本のイメージ

オブジェクトはデータの塊で、参照はそのデータの「住所」を指します。

### 具体例

#### 1. **オブジェクトの作成**

まず、人間の情報を含むオブジェクトを作ります。TypeScript では、オブジェクトの型も指定できます。

```typescript
type Human = {
  name: string;
  age: number;
};

let human: Human = {
  name: "shige",
  age: 25,
};
```

ここで、`Human` は人間の情報の型です。`human` という変数は、この型のデータを持つオブジェクトです。

#### 2. **参照のコピー**

オブジェクトを別の変数にコピーするとき、実際のデータではなく、そのデータの「住所」をコピーします。

```typescript
let anotherHuman = human;
```

ここで、`anotherHuman` は `human` の参照を持っています。つまり、`human` と `anotherHuman` は同じ人間のデータを指しています。

#### 3. **データの変更**

もし、`anotherHuman` のデータを変更すると、`human` も同じように変更されます。なぜなら、どちらも同じデータを指しているからです。

```typescript
anotherHuman.age = 20;
console.log(human.age); // 20
```

この例では、`anotherHuman` の年齢を 20 に変更すると、`human` の年齢も自動的に 20 に変わります。

### TypeScript における値と参照の違い

- **値（プリミティブ型）**: 数字や文字列などの基本的なデータ型は値そのものです。例えば、`let x: number = 10;` という場合、`x` には 10 という値が直接代入されます。
- **参照（オブジェクト型）**: オブジェクトや配列などの複雑なデータ型は、実際のデータの「住所」を指します。例えば、`let y: number[] = [1, 2, 3];` という場合、`y` は配列 `[1, 2, 3]` の参照を持ちます。

### まとめ

- **オブジェクト参照**: オブジェクトの「住所」を指し示すものです。
- **複数の変数が同じオブジェクトを参照していると**: そのオブジェクトに対する変更は、すべての参照に影響を与えます。
- **オブジェクトの値そのものではなく**: オブジェクトがどこにあるかを指しています。
