# 8.9 죽은 코드 제거하기

> Remove Dead Code

### 배경

사용되지 않는 코드가 있다면 그 소프트웨어의 동작을 이해하는 데는 커다란 걸림돌이 될 수 있다. 이 코드들 스스로는 '절대 호출되지 않으니 무시해도 되는 함수다'라는 신호를 주지 않기 때문이다.  
코드가 더 이상 사용되지 않게 됐다면 지워야 한다. 혹시 다시 필요해질 날이 오지 않을까 걱정할 필요 없다. 우리에겐 버전 관리 시스템이 있다. 그러니 그런 날이 진짜로 온다면 그저 다시 살려내면 된다.

### 절차

1. 죽은 코드를 외부에서 참조할 수 있는 경우라면 혹시라도 호출하는 곳이 있는지 확인한다.
2. 없다면 죽은 코드를 제거한다.
3. 테스트한다.

### 예시

```jsx
if (false) {
  doSomethingThatUsedToMatter();
}
```

---

```jsx

```
