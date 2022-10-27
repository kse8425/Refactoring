# 8.6 문장 슬라이드하기

> Slide Statements

### 배경

관련된 코드들이 가까이 모여 있다면 이해하기가 더 쉽다. 관련 코드끼리 모으는 작업은 다른 리팩터링(주로 [함수 추출하기][6.1])의 준비 단계로 자주 행해진다.  
코드 조각을 슬라이드할 때는 두 가지를 확인해야 한다. 무엇을 슬라이드할지와 슬라이드할 수 있는지 여부다. 무엇을 슬라이드할지는 맥락과 관련이 깊다.  
코드 조각을 슬라이드 하기로 했다면, 슬라이드할 코드 자체와 그 코드가 건너뛰어야 할 코드를 모두 살펴야 한다.

### 절차

1. 코드 조각(문장들)을 이동할 목표 위치를 찾는다. 코드 조각의 원래 위치와 목표 위치 사이의 코드들을 훎어보면서, 조각을 모으고 나면 동작이 달라지는 코드가 있는지 살핀다. 다음과 같은 간섭이 있다면 이 리팩터링을 포기한다.  
   -> 코드 조각에서 참조하는 요소를 선언하는 문장 앞으로는 이동할 수 없다.  
   -> 코드 조각을 참조하는 요소의 뒤로는 이동할 수 없다.  
   -> 코드 조각에서 참조하는 요소를 수정하는 문장을 건너뛰어 이동할 수 없다.  
   -> 코드 조각이 수정하는 요소를 참조하는 요소를 건너뛰어 이동할 수 없다.
2. 코드 조각을 원래 위치에서 잘라내어 목표 위치에 붙여 넣는다.
3. 테스트한다.

### 예시

```jsx
const pricingPlan = retrievePrincingPlan();
const order = retreiveOrder();
let charge;
const chargePerUnit = pricingPlan.unit;
```

---

```jsx
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;
```

[6.1]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.1
