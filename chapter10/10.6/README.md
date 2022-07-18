# 10.6 어서션 추가하기

> Introduce Assertion

### 배경

특정 조건이 참일 때만 제대로 동작하는 코드 영역이 있을 수 있다. 이런 가정을 코드에 명시적으로 기술 하는 방법은 어서션을 이용해서 코드 자체에 삽입해놓는 것이다.  
어서션은 프로그램이 어떤 상태임을 가정한 채 실행되는지를 다른 개발자에게 알여주는 훌륭한 소통 도구인 것이다.  
단위 테스트를 꾸준히 추가하여 사각을 좁히면 어서션보다 나을 때가 많다. 하지만 소통 측면에서는 어서션이 여전히 매력적이다

### 절차

1. 참이라고 가정하는 조건이 보이면 그 조건을 명시하는 어서션을 추가한다.

### 예시

```jsx
if (this.discountRate) base = base - this.discountRate * base;
```

---

```jsx
assert(this.discountRate >= 0);
if (this.discountRate) base = base - this.discountRate * base;
```
