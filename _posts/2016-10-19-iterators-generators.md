---
layout: post
title: Iterators and Generators
tags: javascript
---


## Iterators

- 객체의 요소를 순서대로 접근 할 수 있게 해주는 반복기(interator)
- next() 메서드를 제공하는 객체 => done, value 객체를 반환하는 메서드

{% highlight js %}
let iterable = {
  count: 10,
  next() {
    return this.count ?
    { value: this.count--, done: false} :
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
// => 10 9 8 7 6 5 4 3 2 1
/*
const it =  iterator[Symbol.iterator]();
console.log(it.next());   // => { value: current_value, done: false || true }
*/
{% endhighlight %}

## Generators

- generators는 iterator를 쉽게 생성하기 위한 팩토리, 대안 함수
- 하나 이상의 yield 표현을 가지며 function* 문법 사용
- iterable + [iterator protocol](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)를 모두 구현한 객체

{% highlight js %}
let generator = function* () {
  let count = 10;
  while(count)
    yield count--;
}
for (let v of generator()) {
  console.log(v);
}
// => 10 9 8 7 6 5 4 3 2 1
/*
const ge = generator();
console.log(ge.next());   // => { value: current_value, done: false || true }
*/
{% endhighlight %}

>기초 개념

- iterable
  - 반복 가능
    - @@iterator 메서드를 구현해야 함.
    - 즉, **[Symbol.iterator]** 키를 갖는 속성
  - 값이 for...of 구조 내에서 반복되는 구조
  - Bulit-in(내장) iterables
    - String, Array, [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), Map, Set
  - Syntaxes expecting iterables (구문)
    - for...of, spread operator(전개연산자), [yield* ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*), destructuring assignment(해체할당)

- [yield* ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*)
  - iterable 객체를 반환하는 표현식
  - 지연 위임 // => *g2* 에서 *yield* * *g1* 호출시 *g1*의 실행을 마치고 자신의 yield로 돌아옴

{% highlight js %}
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}
function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}
let iterator = g2();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
{% endhighlight %}

- spread &amp; destructuring

{% highlight js %}
// spread operator
[....'abc'] // => ['a', 'b', 'c']

// destructuring assignment
[a, b, c] = ['a', 'b', 'c'];
// => a 'a'
{% endhighlight %}

>참고

- [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- [ES6 projectBS](https://github.com/projectBS/s67/blob/master/s67_3.pdf)
- [ES2015 slideshare 자료 *23~33*](http://www.slideshare.net/shallaa/ecma2015-inside-65652426)

> 예제

<a href="{{site.baseurl}}/public/ex/index.html">Generators</a>
