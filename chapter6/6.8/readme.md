# 6.8 매개변수 객체 만들기

> Introduce Parameter Object

### 배경

데이터 항목 여러 개가 이 함수에서 저 함수로 함께 몰려다니는 경우를 자주 본다. 이런 데이터 무리를 발견하면 하나의 데이터 구조로 모아준다.  
데이터 뭉치를 하나로 묶으면 데이터 사이의 관계가 명확해 진다는 이점을 얻는다. 게다가 함수가 이 데이터 구조를 받게 하면 매개변수 수도 줄어든다. 같은 데이터 구조를 사용하는 함수들이 원소를 참조할 때 같은 이름을 사용하기 때문에 일관성도 높여준다.  
하지만 이 리팩터링의 진정한 힘은 코드를 근복적으로 바꿔준다는 데 있다. 이런 데이터 구조를 발견하면 이 데이터 구조를 활용하는 형태로 코드를 재구성한다. 데이터 구조에 담긴 데이터에 공통으로 적용되는 동작을 추출해서 함수를 만드는 것이다. 이 과정에서 새로운 데이터 구조가 문제 영역을 훨씬 간결하게 표현하는 새로운 추상 개념으로 격상되면서, 코드의 개념적인 그림을 다시 그릴 수도 있다.

### 절차

1. 적당한 데이터 구조가 아직 마련되어 있지 않다면 새로 만든다.
2. 테스트한다.
3. [함수 선언 바꾸기][6.5]로 새 데이터 구조를 매개변수로 추가한다.
4. 테스트한다.
5. 함수 호출 시 새로운 데이터 구조 인스턴스를 넘기도록 수정한다. 하나씩 수정할 때마다 테스트한다.
6. 기존 매개변수를 사용하던 코드를 새 데이터 구조의 원소를 사용하도록 바꾼다.
7. 다 바꿨다면 기존 매개변수를 제거하고 테스트한다.

### 예시

```jsx
function amountInvoiced(startDate,endDate){ ... }
function amountReceived(startDate,endDate){ ... }
function amountOverdue(startDate,endDate){ ... }
```

---

```jsx
function amountInvoiced(aDateRange){ ... }
function amountReceived(aDateRange){ ... }
function amountOverdue(aDateRange){ ... }
```

[6.5]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.5
