# 11.3 플래그 인수 제거하기

> Remove Flag Argument

### 배경

플래그 인수란 호출되는 함수가 실행할 로직을 호출하는 쪽에서 선택하기 위해 전달하는 인수다.  
특정한 기능 하나만 수행하는 명시적인 함수를 제공하는 편이 훨씬 깔끔하다.

### 절차

1. 매개변수로 주어질 수 있는 값 각각에 대응하는 명시적 함수들을 생성한다.

   - 주가 되는 함수에 깔끔한 분배 조건문이 포함되어 있다면 [조건문 분해하기][10.1]로 명시적 함수들을 생성하자.  
     그렇지 않다면 래핑 함수 형태로 만든다.

2. 원래 함수를 호출하는 코드들을 모두 찾아서 각 리터럴 값에 대응되는 명시적 함수를 호출하도록 수정한다.

### 예시

```jsx
function setDimension(name, value) {
  if (name == "height") {
    this._height = value;
    return;
  }
  if (name == "width") {
    this._width = value;
    return;
  }
}
```

---

```jsx
function setHeight(value) {
  this._height = value;
}
function setwidth(value) {
  this._width = value;
}
```

[ch6]: https://github.com/kse8425/Refactoring/tree/main/chapter6
[ch7]: https://github.com/kse8425/Refactoring/tree/main/chapter7
[ch8]: https://github.com/kse8425/Refactoring/tree/main/chapter8
[ch9]: https://github.com/kse8425/Refactoring/tree/main/chapter9
[ch10]: https://github.com/kse8425/Refactoring/tree/main/chapter10
[ch11]: https://github.com/kse8425/Refactoring/tree/main/chapter11
[ch12]: https://github.com/kse8425/Refactoring/tree/main/chapter12
[6.1]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.1
[6.2]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.2
[6.3]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.3
[6.4]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.4
[6.5]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.5
[6.6]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.6
[6.7]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.7
[6.8]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.8
[6.9]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.9
[6.10]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.10
[6.11]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.11
[7.1]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.1
[7.2]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.2
[7.3]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.3
[7.4]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.4
[7.5]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.5
[7.6]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.6
[7.7]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.7
[7.8]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.8
[7.9]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.9
[8.1]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.1
[8.2]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.2
[8.3]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.3
[8.4]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.4
[8.5]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.5
[8.6]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.6
[8.7]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.7
[8.8]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.8
[8.9]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.9
[9.1]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.1
[9.2]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.2
[9.3]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.3
[9.4]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.4
[9.5]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.5
[9.6]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.6
[10.1]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.1
[10.2]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.2
[10.3]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.3
[10.4]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.4
[10.5]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.5
[10.6]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.6
[10.7]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.7
[11.1]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.1
[11.2]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.2
[11.3]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.3
[11.4]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.4
[11.5]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.5
[11.6]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.6
[11.7]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.7
[11.8]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.8
[11.9]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.9
[11.10]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.10
[11.11]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.11
[11.12]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.12
[11.13]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.13
[12.1]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.1
[12.2]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.2
[12.3]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.3
[12.4]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.4
[12.5]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.5
[12.6]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.6
[12.7]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.7
[12.8]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.8
[12.9]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.9
[12.10]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.10
[12.11]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.11
