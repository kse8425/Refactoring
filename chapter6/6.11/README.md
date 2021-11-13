# 6.11 단계 쪼개기

> Split Phase

### 배경

서로 다른 대상을 다루는 코드는 각각 별개의 모듈로 분리해야 한다. 코드를 수정할 때 다른 코드를 생각할 필요 없이 하나에만 집중하기 위해서다.  
분리하는 가장 간편한 방법은 동작을 연이은 두 단계로 쪼개는 것이다.  
컴파일러를 예로 생각해보자. 컴파일러는 텍스트를 입력받아서 실행 가능한 형태로 변환한다. 컴파일러 작업은 여러 단계가 순차적으로 연결된 형태로 분리되어 수행된다. 텍스트를 토큰화하고, 토큰을 파싱해서 구문 트리를 만들고, 구문 트리를 변환하는 단계를 거친 다음 목적 코드를 생성한다. 각 단계는 자신만의 문제에 집중하기 때문에 각 단계를 자세히 몰라도 이해할 수 있다.

### 절차

1. 두 번째 단계에 해당하는 코드를 독립 함수로 추출한다.
2. 테스트한다.
3. 중간 데이터 구조를 만들어서 앞에서 추출한 함수의 인수로 추가한다.
4. 테스트한다.
5. 추출한 두 번째 단계 함수의 매개변수를 하나씩 검토한다. 그중 첫 번째 단계에서 사용되는 것은 중간 데이터 구조로 옮긴다. 하나씩 옮길 때마다 테스트한다.  
   → 간혹 두 번째 단계에서 사용하면 안 되는 매개변수가 있다. 이럴 때는 각 매개변수를 사용한 결과를 중간 데이터 구조의 필드로 추출하고, 이 필드의 값을 설정하는 [문장을 호출한 곳으로 옮긴다][8.4].
6. 첫 번재 단계 코드를 [함수로 추출][6.1]하면서 중간 데이터 구조를 반환하도록 만든다.  
   → 이때 첫 번째 단계를 변환기 객체로 추출해도 좋다.

### 예시

```jsx
const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderDate[0].split("-")[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;
```

---

```jsx
const orderRecord = parseOrder(order);
const orderPrice = price(orderRecord, priceList);

function parseOrder(aString) {
  const values = aString.split(/\s+/);
  return {
    productID: values[0].split("-")[1],
    quantity: parseInt(values[1]),
  };
}
function price(order, priceList) {
  return order.quantity * priceList[order.productID];
}
```

[6.1]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.1
[8.4]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.4
