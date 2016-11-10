---
layout: post
title: Review
tags: development review
---

## 이슈 1 - 중첩 컴포넌트 props 전달 하기

라우터를 중첩 구조로 사용하면서 PostContainer 하위 컴포넌트에 동적 속성을 넘겨줘야 하는 문제가 생김.

{% highlight jsx %}
// routes.js
<Route path="post" component={PostContainer} >
  { /* Post Routes */ }
  <IndexRoute component={PostLists} />
  <Route path="add" component={PostCreate} />
  <Route path=":cuid" component={PostDetail} />
</Route>
{% endhighlight %}

 this.props.children 를 map이나 forEach 시킬 수 있는 *React.Chidren* helper 함수 제공 <br>
 immutable 한 데이터를 위해 *React.cloneElement* 를 사용 리턴 시켜주면 된다.

{% highlight js %}
// Parent(PostContainer) component
React.Children.map(this.props.children, (child) => {        
  // => [PostLists, PostCreate, PostDetail..]
  if (child.type === Child) {
    return React.cloneElement(child, {
        props   // => 전달하고 싶은 props 전달
    })
  }
  else  
    return child;
});
{% endhighlight %}

## 이슈 2 -

## 참고
- [React API](https://facebook.github.io/react/docs/react-api.html#cloneelement)
- [Send Props to Children in React](http://jaketrent.com/post/send-props-to-children-react/)
