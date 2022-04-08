# 12.6 타입 코드를 서브클래스로 바꾸기

> Replace Type Code with Subclasses

### 배경

소프트웨어 시스템에서는 비슷한 대상들을 특정 특성에 따라 구분해야 할 때가 자주 있다. 예컨대 직원을 담당 업무(엔지니어, 디자이너, 관리자 등)으로 구분하기도 한다. 이런 일을 다루는 수단으로 타입 코드(type code) 필드가 있다. 타입 코드는 프로그래밍 언어에 따라 열거형,심볼,문자열,숫자 등으로 표현하며, 외부 서비스가 제공하는 데이터를 다루려 할 때 딸려오는 일이 흔하다.  
타입 코드만으로도 특별히 불편한 상황은 별로 없지만 그 이상의 무언가가 필요할 때가 있다. 여기서 '그 이상'이라 하면 바로 서브클래스를 가리킨다. 서브클래스는 두 가지 면에서 매력적이다. 첫째, 조건에 따라 다르게 동작하는 다형성을 제공한다. 둘째, 특정 타입에서만 의미가 있는 필드나 메서드를 사용할 수 있다.

### 절차

1. 타입 코드 필드를 자가 캡슐화한다.
2. 타입 코드 값 하나를 선택하여 그 값에 해당하는 서브클래스를 만든다. 타입 코드 게터 매소드를 오버라이딩하여 해당 타입 코드의 리터럴 값을 반환하게 한다.
3. 매개변수로 받은 타입 코드와 방금 만든 서브클래스를 매핑하는 선택 로직을 만든다.  
   -> 직접 상속일 때는 [생성자를 팩터리 함수로 바꾸기][11.8]를 적용하고 선택 로직을 팩터리에 넣는다. 간접 상속일 때는 선택로직을 생성자에 두면 될 것이다.
4. 테스트한다.
5. 타입 코드 값 각각에 대해 서브클래스 생성과 선택 로직 추가를 반복한다. 클래스 하나가 완성될 때마다 테스트한다.
6. 타입 코드 필드를 제거한다.
7. 테스트 한다.
8. 타입 코드 접근자를 이용하는 메서드 모두에 [메서드 내리기][12.4]와 [조건부 로직을 다형성으로 바꾸기][10.4]를 적용한다.

### 예시

```jsx
function createEmployee(name, type) {
  return new Employee(name, type);
}
```

---

```jsx
function createEmployee(name, type) {
  switch (type) {
    case 'engineer':
      return new Engineer(name);
    case 'salesperson':
      return new Salesperson(name);
    case 'manager':
      return new Manager(name);
  }
}
```

[10.4]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.4
[11.8]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.8
[12.4]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.4
