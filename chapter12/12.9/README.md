# 12.9 계층 합치기

> Collapse Hierarchy

### 배경

클래스 계층구조를 리팩터링하다 보면 기능들을 위로 올리거나 아래로 내리는 일은 다반사로 벌어진다. 예컨대 계층구조도 진화하면서 어떤 클래스와 그 부모가 너무 비슷해져서 더는 독립적으로 존재해야 할 이유가 사라지는 경우가 생기기도 한다. 바로 그 둘을 하나로 합쳐야 할 시점이다.

### 절차

1. 두 클래스 중 제거할 것을 고른다.  
   -> 미래를 생각하여 더 적합한 이름의 클래스를 남기자. 둘 다 적철치 않다면 임의로 하나를 고른다.
2. [필드 올리기][12.2]와 [메서드 올리기][12.1] 혹은 [필드 내리기][12.5]와 [메서드 내리기][12.4]를 적용하여 모든 요소를 하나의 클래스로 옮긴다.
3. 제거할 클래스를 참조하던 모든 코드가 남겨질 클래스를 참조하도록 고친다.
4. 빈 클래스를 제거한다.
5. 테스트한다.

### 예시

```jsx
class Employee {...}
class Saleperson extends Employee {...}
```

---

```jsx
class Employee {...}
```

[12.1]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.1
[12.2]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.2
[12.3]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.3
[12.4]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.4
[12.5]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.5
