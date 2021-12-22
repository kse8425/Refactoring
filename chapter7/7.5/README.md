# 7.5 클래스 추출하기

> Extract Class

### 배경

클래스는 명확하게 추상화하고, 소수의 주어진 역할만 처리하는게 좋다.
데이터와 메서드가 너무 많은 클래스는 이해가 쉽지 않다. 데이터와 메서드를 따로 묶을 수 있다면 분리하라는 신호다.

### 절차

1. 클래스의 역할을 분리할 방법을 정한다.
2. 분리될 역할을 담당할 클래스를 새로 만든다.  
   -> 원래 클래스에 남은 역할과 클래스 이름이 어울리지 않는다면 적절히 바꾼다.
3. 원래 클래스의 생성자에서 새로운 클래스의 인스턴스를 생성하여 필드에 저장해둔다.
4. 분리될 역할에 필요한 필드들을 새 클래스로 옮긴다([필드 옮기기][8.2]).하나씩 옮길 때마다 테스트한다.
5. 메스드들도 새 클래스로 옮긴다.([함수 옮기기][8.1]). 이때 저수준 메스드, 즉 다른 메서드를 호출하기보다는 호출을 당하는 일이 많은 메서드부터 옮긴다. 하나씩 옮길 때마다 테스트한다.
6. 양쪽 클래스의 인터페이스를 살펴보면서 불필요한 메서드를 제거하고, 이름도 새로운 환경에 맞게 바꾼다.
7. 새 클래스를 외부로 노출할지 정한다. 노출하려거든 새 클래스에 [참조를 값으로 바꾸기][9.4]를 적용할지 고민해본다.

### 예시

```jsx
class Person {
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  get officeNumber() {
    return this._officeNumber;
  }
}
```

---

```jsx
class Person {
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
}
class TelephoneNumber {
  get areaCode() {
    return this._areaCode;
  }
  get number() {
    return this._number;
  }
}
```

[8.1]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.1
[8.2]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.2
[9.4]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.4
