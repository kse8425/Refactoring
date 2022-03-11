# 11.4 객체 통째로 넘기기

> Preserve Whole Object

### 배경

하나의 레코드에서 두어개의 값을 가져와 인수로 넘기는 코드를 보면 , 함수에 레코드를 통째로 넘겨 함수 본문에서 필요한 값들을 꺼내 쓰도록 수정한다. 레코드를 통째로 넘기면 변화에 대응하기도 쉽다.  
하지만 함수가 레코드 자체에 의존하기를 원치 않을 때는 이 리팩터링을 수행하지 않는데, 레코드와 함수가 다른 모듈에 속한 상황이면 특히 더 그렇다.  
어떤 객체로부터 값 몇개를 가져와 그 값들만 사용하는 로직이 있다면 그 로직을 객체 안으로 집어넣어야 함을 알려주는 악취로 봐야한다. 그래서 객체 통째로 넘기기는 특히 [매개변수 객체 만들기][6.8]후 적용하곤 한다.  
한편, 한 객체가 제공하는 기능 중 항상 똑같은 일부만을 사용하는 코드가 많다면, 그 기능만 따로 묶어서 [클래스로 추출][7.5]하라는 신호일 수 있다.

### 절차

1. 매개변수들을 원하는 형태로 받는 빈 함수를 만든다.  
   -> 마지막 단계에서 이 함수의 이름을 변경해야 하니 검색하기 쉬운 이름으로 지어준다.
2. 새 함수의 본문에서는 원래 함수를 호출하도록 하며, 새 매개변수와 원래 함수의 매개변수를 매핑한다.
3. 정적 검사를 수행한다.
4. 모든 호출자가 새 함수를 사용하게 수정한다. 하나씩 수정하며 테스트하자.  
   -> 수정 후에는 원래의 매개변수를 만들어내는 코드 일부가 필요 없어질 수 있다. 따라서 [죽은 코드 제거하기][8.9]로 없앨 수 있을 것이다.
5. 호출자를 모두 수정했다면 원래 [함수를 인라인][6.2] 한다.
6. 새 함수의 이름을 적절히 수정하고 모든 호출자에 반영한다.

### 예시

```jsx
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (aPlan.withinRange(low.high))
```

---

```jsx
if (aPlan.withinRange(aRoom.daysTempRange))
```

[6.2]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.2
[6.8]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.8
[7.5]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.5
[8.9]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.9
