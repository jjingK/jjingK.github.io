---
layout: post
title: Iterators and Generators
tags: javascript
---


## Iterators

- 객체의 요소를 순서대로 접근 할 수 있게 해주는 반복기(interator)
- next() 메서드를 제공하는 객체 => done, value 객체를 반환하는 메서드

```javaScript
let iterable = {
  count: 1,
  next() {
    return this.count < 4 ?
    { value: this.count++, done: false} :
    { done: true }
  }
};
let iterator = {
  [Symbol.iterator]() {
    return iterable;
  }
}
for (let v of iterator) {
  console.log(v);
}
// => 1 2 3
```

## Generators

- generators는 iterator를 쉽게 생성하기 위한 팩토리, 대안 함수
- 하나 이상의 yield 표현을 가지며 function* 문법 사용
- iterable + [iterator protocol](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)를 모두 구현한 객체

```javaScript
let generator = function* () {
  let count = 1;
  while(count < 4)
    yield count++;
}
for (let v of generator()) {
  console.log(v);
}
// => 1 2 3
```

>기초 개념

- iterable
  - 반복 가능
    - @@iterator 메서드를 구현해야 함.
    - 즉, **[Symbol.iterator]** 키를 갖는 속성
  - 값이 for...of 구조 내에서 반복되는 구조
  - Bulit-in(내장) iterables
    - String, Array, [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), Map, Set
  - Syntaxes expecting iterables (구문)
    - for...of, spread operator(전개연산자), yield*, destructuring assignment(해체할당)

- yield*
  - iterable 객체를 반환하는 표현식

- spread &amp; destructuring

```javascript
// spread operator
[....'abc'] // => ['a', 'b', 'c']

// destructuring assignment
[a, b, c] = ['a', 'b', 'c'];
// => a 'a'
```

>참고

- [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- []
