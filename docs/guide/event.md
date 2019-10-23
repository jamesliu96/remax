---
title: 事件
order: 27
---

## 阻止冒泡

由于小程序本身没有阻止事件冒泡的方式，而是采用不同的方法属性来声明阻止冒泡（如 微信小程序的 catchtap），所以 Remax 自己实现了 stopPropagation 方法。

_我们建议在 remax 中不要使用 catchtap 的方式，以免出现未知的问题_

用法如下：

```jsx
function Page() {
  function handleFooClick(event) {
    event.stopPropagation();
  }

  function handleBarClick() {
    ...
  }

  return (
    <View onClick={handleBarClick}>
        bar
      <View onClick={handleFooClick}>
        foo
      </View>
    </View>
  )
}
```

当你点击 foo 标签时，将会触发 `handleFooClick` 回调，但不会执行 `handleBarClick`。

_目前 stopPropagation 特性在 next 版本上，你可以通过 npm install remax@next remax-cli@next 来尝试。_
