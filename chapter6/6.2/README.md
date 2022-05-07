# 6.2 함수 인라인하기

> Inline Function

### 배경

이 책은 목적이 분명히 드러나는 이름의 짤막한 함수를 이용하기를 권한다. 그래야 코드가 명료해지고 이해하기 쉬워지기 때문이다. 하지만 때로는 함수 본문이 이름만큼 명확한 경우도 있고, 함수 본문을 깔끔하게 리팩토링할 때도 있다. 이럴 때는 쓸데없는 간접 호출을 줄이기 위해 함수를 인라인한다.  
리팩터링 과정에서 잘못 추출된 함수들도 다시 인라인한다. 잘못 추출된 함수들을 원래 함수로 합친 다음, 필요하면 원하는 형태로 다시 추출하는 것이다.  
간접 호출을 너무 과하게 쓰는 코드도 흔한 인라인 대상이다. 가령 다른 함수로 단순히 위힘하기만 하는 함수들이 너무 많아서 위임 관계가 복잡하게 얽혀 있으면 인라인하는 것이 낫다.

### 절차

1. 다형 메서드(polymorphic method)인지 확인한다.
   -> 서브클래스에서 오버라이드하는 메서드는 인라인하면 안 된다.
2. 인라인할 함수를 호출하는 곳을 모두 찾는다.
3. 각 호출문을 함수 본문으로 교체한다.
4. 하나씩 교체할 때마다 테스트한다.
   -> 인라인 작업을 한 번에 처리할 필요는 없다. 인라인하기가 까다로운 부분이 있다면 일단 남겨두고 여유가 생길 때마다 틈틈히 처리한다.
5. 함수 정의(원래 함수)를 삭제한다.

### 예시

```jsx
function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}
```

---

```jsx
function getRating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}
```
