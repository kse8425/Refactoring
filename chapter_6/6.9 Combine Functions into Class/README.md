# 6.9 여러 함수를 클래스로 묶기

> Combine Functions into Class

### 배경

공통 데이터를 중심으로 긴밀하게 엮여 작동하는 함수 무리를 발견하면 클래스 하나로 묶는다.  
클래스로 묶으면 이 함수들이 공유하는 공통 환경을 더 명확하게 표현할 수 있고, 각 함수에 전달 되는 인수를 줄여서 객체안에서의 함수 호출을 간결하게 만들 수 있다.

### 절차

1. 함수들이 공유하는 공통 데이터 [레코드를 캡슐화](#)한다.  
   -> 공통 데이터가 레코드 구조로 묶여 있지 않다면 먼저 [매개변수 객체 만들기](#)로 데이터를 하나로 묶는 레코드를 만든다.
2. 공통 레코드를 사용하는 함수 각각을 새 클래스로 옮긴다.([함수 옮기기](#))
3. 데이터를 조작하는 로직들은 [함수로 추출](#)해서 새 클래스로 옮긴다.

### 예시

```jsx
function base(aReading) {...}
function taxableCharge(aReading) {...}
function calculateBaseCharge(aReading) {...}
```

---

```jsx
class Reading {
    base() {...}
    taxableCharge() {...}
    calculateBaseCharge() {...}
}
```
