---
layout: post
title: javascript
tags: javascript
---

## JS

사용하고 있지만 잘 알지 못했던 것 + 추가 문법

- [Array.prototype.map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

  callback 인자로 타입을 넘겨주면 해당 타입으로 변환된 배열을 반환해 줌

  `
  ['1', '2', '3', '4', '5'].map(Number); // => [1,2,3,4,5]
  `


- [Array.prototype.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

  두번째 인자로 *initialValue* 를 지정해줄 수 있음.<br>
    빈 배열의 경우 **TypeError**가 발생하는데 *initialValue* 를 지정할 경우 첫번째 값으로 인식해 0을 반환.

  `
  [1,2,3,4,5].reduce((a, b) => a + b); // => 15
  `

  `
  [].reduce((a, b) => a + b, 0);  // =>  빈 배열의 경우 0을 리턴해줌
  `

- [Array.prototype.reverse()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

  배열 반전

- [Array.from()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

  유사 배열 혹은 반복 가능한 배열로 부터 새 Array instance를 반환.

  `
  const n = 12345;
  `

  `
  Array.from(String(n), Number);  // => [1,2,3,4,5]
  `
