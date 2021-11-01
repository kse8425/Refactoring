# 6.9 여러 함수를 클래스로 묶기

> Combine Functions into Class

### 배경

공통 데이터를 중심으로 긴밀하게 엮여 작동하는 함수 무리를 발견하면 클래스 하나로 묶는다.  
클래스로 묶으면 이 함수들이 공유하는 공통 환경을 더 명확하게 표현할 수 있고, 각 함수에 전달 되는 인수를 줄여서 객체안에서의 함수 호출을 간결하게 만들 수 있다.

### 절차

1. 함수들이 공유하는 공통 데이터 [레코드를 캡슐화][7.1]한다.  
   -> 공통 데이터가 레코드 구조로 묶여 있지 않다면 먼저 [매개변수 객체 만들기][6.8]로 데이터를 하나로 묶는 레코드를 만든다.
2. 공통 레코드를 사용하는 함수 각각을 새 클래스로 옮긴다.([함수 옮기기][8.1])
3. 데이터를 조작하는 로직들은 [함수로 추출][6.1]해서 새 클래스로 옮긴다.

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

[ch6]: https://github.com/kse8425/Refactoring/tree/main/chapter6
[ch7]: https://github.com/kse8425/Refactoring/tree/main/chapter7
[ch8]: https://github.com/kse8425/Refactoring/tree/main/chapter8
[ch9]: https://github.com/kse8425/Refactoring/tree/main/chapter9
[ch10]: https://github.com/kse8425/Refactoring/tree/main/chapter10
[ch11]: https://github.com/kse8425/Refactoring/tree/main/chapter11
[ch12]: https://github.com/kse8425/Refactoring/tree/main/chapter12
[6.1]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.1
[6.2]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.2
[6.3]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.3
[6.4]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.4
[6.5]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.5
[6.6]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.6
[6.7]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.7
[6.8]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.8
[6.9]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.9
[6.10]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.10
[6.11]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.11
[7.1]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.1
[7.2]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.2
[7.3]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.3
[7.4]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.4
[7.5]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.5
[7.6]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.6
[7.7]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.7
[7.8]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.8
[7.9]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.9
[8.1]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.1
[8.2]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.2
[8.3]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.3
[8.4]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.4
[8.5]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.5
[8.6]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.6
[8.7]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.7
[8.8]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.8
[8.9]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.9
[9.1]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.1
[9.2]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.2
[9.3]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.3
[9.4]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.4
[9.5]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.5
[9.6]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.6
[10.1]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.1
[10.2]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.2
[10.3]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.3
[10.4]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.4
[10.5]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.5
[10.6]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.6
[10.7]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.7
[11.1]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.1
[11.2]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.2
[11.3]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.3
[11.4]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.4
[11.5]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.5
[11.6]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.6
[11.7]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.7
[11.8]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.8
[11.9]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.9
[11.10]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.10
[11.11]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.11
[11.12]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.12
[11.13]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.13
[12.1]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.1
[12.2]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.2
[12.3]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.3
[12.4]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.4
[12.5]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.5
[12.6]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.6
[12.7]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.7
[12.8]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.8
[12.9]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.9
[12.10]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.10
[12.11]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.11
