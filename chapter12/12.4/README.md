# 12.4 메스드 내리기

> Push Down Method

### 배경

특정 서브클래스 소수와만 관련된 메서드는 슈퍼클래스에서 제거하고 해당 서브클래스들에 추가하는 편인 깔끔하다.

### 절차

1. 대상 메서드를 메든 서브클래스에 복사한다.
2. 슈퍼클래스에서 그 메서드를 제거한다.
3. 테스트한다.
4. 이 메서드를 사용하지 않는 모든 서브클래스에서 제거한다.
5. 테스트한다.

### 예시

```jsx
class Employee {
    get quota { ... }
}

class Engineer extends Employee { ... }
class Salesperson extends Employee { ... }
```

---

```jsx
class Employee { ... }

class Engineer extends Employee { ... }
class Salesperson extends Employee {
    get quota { ... }
}
```
