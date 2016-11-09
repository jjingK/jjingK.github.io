---
layout: post
title: javascript
tags: javascript
---

## JS

사용하고 있지만 잘 알지 못했던 것 + 추가 문법

- [Object.keys(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

{% highlight js %}
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj));  // => [0, 1, 2];
console.log(Object.keys(obj).length);   // => 빈배열인지 여부 체크
{% endhighlight %}

- [Array.prototype.map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

  callback 인자로 타입을 넘겨주면 해당 타입으로 변환된 배열을 반환해 줌

  `
  ['1', '2', '3', '4', '5'].map(Number); // => [1,2,3,4,5]
  `


- [Array.prototype.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

  두번째 인자로 *initialValue* 를 지정해줄 수 있음.<br>
    빈 배열의 경우 **TypeError**가 발생하는데 *initialValue* 를 지정할 경우 첫번째 값으로 인식해 0을 반환.

{% highlight js %}
[1,2,3,4,5].reduce((a, b) => a + b); // => 15
[].reduce((a, b) => a + b, 0);  // =>  빈 배열의 경우 0을 리턴해줌
{% endhighlight %}

- [Array.prototype.reverse()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

  배열 반전

- [Array.from()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

  유사 배열 혹은 반복 가능한 배열로 부터 새 Array instance를 반환.

{% highlight js %}
const n = '12345';
Array.from(n, Number);  // => [1,2,3,4,5]
{% endhighlight %}

- [String.prototype.replace()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

{% highlight js %}
String.prototype.replace(regexp|substr, newSubStr|function)
{% endhighlight %}

  1. 정규표현식 수행 후, 두번째 함수의 매개변수

   - match 매치된 문자열
   - p1, p2 ... 정규표현식의 매치된 문자
   - offset 매치된 문자열의 index
   - string 조사된 전체 문자열

{% highlight js %}
function toCamelCase(str){
  return str.replace(
    /[-_]\w/ig,
    (...args) => args[0].charAt(1).toUpperCase()
  );
}
toCamelCase('the-stealth-warrior'); // => theStealthWarrior
{% endhighlight %}

>출처 [codewar](https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript)
