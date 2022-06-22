# 12.8 슈퍼클래스 추출하기

> Extract Superclass

### 배경

비슷한 일을 수행하는 두 클래스가 보이면 상속 메커니즘을 이용해서 비슷한 부분을 공통의 슈퍼클래스로 옮겨 담을 수 있다.  
상속은 프로그램이 성장하면서 깨우쳐가게 되며, 슈퍼클래스로 끌어 올리고 싶은 공통 요소를 찾았을 때 수행하는 사례가 잦았다.  
슈퍼클래스 추출하기의 대안으로는 [클래스 추출하기][7.5]가 있다. 어느 것을 선택하느냐는 중복 동작을 상속으로 해결하느냐 위임으로 해결하느냐에 달렸다.

### 절차

1. 빈 슈퍼클래스를 만든다. 원래의 클래스들이 새 클래스를 상속하도록 한다.  
   -> 필요하다면 생성자에 [함수 선언 바꾸기][6.5]를 적용한다.
2. 테스트한다.
3. [생성자 본문 올리기][12.3],[메서드 올리기][12.1],[필드 올리기][12.2]를 차례로 적용하여 공통 원소를 슈퍼클래스로 옮긴다.
4. 서브클래스에 남은 메서드들을 컴토한다. 공통되는 부분이 있다면 [함수로 추출][6.1]한 다음 [메서드 올리기][12.1]를 적용한다.
5. 원래 클래스들을 사용하는 코드를 컴토하여 슈퍼클래스의 인터페이스를 사용하게 할지 고민해본다.

### 예시

```jsx
class Department {
    get totalAnnualCost(){ ... }
    get name() { ... }
    get headCount() { ... }
}

class Employee {
    get annualCost() {...}
    get name() {...}
    get id () {...}
}
```

---

```jsx
class Party {
    get name() {...}
    get annualCost() {...}
}

class Department extends Party {
    get annualCost() {...}
    get headCount() {...}
}

class Employee extends Party {
    get annualCost() {...}
    get id() {...}
}
```

[6.1]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.1
[6.5]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.5
[12.1]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.1
[12.2]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.2
[12.3]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.3
