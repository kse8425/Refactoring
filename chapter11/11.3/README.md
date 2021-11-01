# 11.3 플래그 인수 제거하기

> Remove Flag Argument

### 배경

플래그 인수란 호출되는 함수가 실행할 로직을 호출하는 쪽에서 선택하기 위해 전달하는 인수다.  
특정한 기능 하나만 수행하는 명시적인 함수를 제공하는 편이 훨씬 깔끔하다.

### 절차

1. 매개변수로 주어질 수 있는 값 각각에 대응하는 명시적 함수들을 생성한다.

   - 주가 되는 함수에 깔끔한 분배 조건문이 포함되어 있다면 [조건문 분해하기](../chapter6/10.1)로 명시적 함수들을 생성하자.  
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
