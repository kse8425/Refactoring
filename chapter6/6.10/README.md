# 6.10 여러 함수를 변환 함수로 묶기

> Combine Functions into Transform

### 배경

소프트웨어는 데이터를 입력 받아 여러가지 정보를 도출한다. 도출된 정보는 여러 곳에서 사용되는데, 그러다 보면 이 정보가 사용되는 곳 마다 같은 로직이 반복되기도 한다. 이런 도출 작업을 한데로 모아두면, 검색과 갱신을 일관된 장소에서 처리할 수 있고 로직 중복도 막을 수 있다.

### 절차

1. 변환할 레코드를 입력받아서 값을 그대로 반환하는 변환 함수를 만든다.  
   -> 이 작업은 대체로 깊은 복사로 처리해야 한다. 변환 함수가 원본 레코드를 바꾸지 않는지 검사하는 테스트를 마련해두면 도움될 때가 많다.
2. 묶을 함수 중 함수 하나를 골라서 본문 코드를 변환 함수로 옮기고, 처리 결과를 레코드에 새 필드로 기록한다. 그런 다음 클라이언트 코드가 이 필드를 사용하도록 수정한다.  
   -> 로직이 복잡하면 [함수 추출하기][6.1]부터 한다.
3. 테스트한다.
4. 나머지 관련 함수도 위 과정에 따라 처리한다.

### 예시

```jsx
function base(aReading){ ... }
function taxableCharge(aReading){ ... }
```

---

```jsx
function enrichReading(argReading) {
  const aReading = _.cloneDeep(argReading);
  argReading.baseCharge = base(aReading);
  aReading.taxableCharge = taxableCharge(aReading);
  return aReading;
}
```

[6.1]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.1
