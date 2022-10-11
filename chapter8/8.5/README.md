# 8.5 인라인 코드를 함수 호출로 바꾸기

> Replace Inline Code with Function Call

### 배경

이미 존재하는 함수와 똑같은 일을 하는 인라인 코드를 발견하면 보통은 해당 코드를 함수 호출로 대체하길 원할 것이다. 예외가 있다면 기존 함수의 코드를 수정하더라도 인라인 코드의 동작은 바뀌지 않아야 할 때뿐이다.

### 절차

1. 인라인 코드를 함수 호출로 대체한다.
2. 테스트한다.

### 예시

```jsx
let appliesToMass = false;
for (const s of states) {
  if (s === 'MA') appliesToMass = true;
}
```

---

```jsx
appliesToMass = states.include('MA');
```
