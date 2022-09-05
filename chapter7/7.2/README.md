# 7.2 컬렉션 캡슐화하기

> Encapsulate Collection

### 배경

컬렉션 변수로의 접근을 캡슐화 하면서 게터가 컬렉션 자체를 반환하도록 한다면, 그 컬렉션을 감싼 클래스가 눈치재지 못하는 상태에서 컬렉션의 원소들이 바뀌어버릴 수 있다.  
이런 문제를 방지하기 위해 컬렉션을 감싼 클래스에 add()와 remove()라는 이름의 컬렉션 변경자 메서드를 만든다. 그리고 컬렉션 게터가 원본 컬렉션을 반환하지 않게 만들어서 클라이언트가 실수로 컬렉션을 바꿀 가능성을 차단하는 게 낫다.

### 절차

1. 아직 컬렉션을 캡슐화하지 않았다면 [변수 캡슐화하기][6.6]부터 한다.
2. 컬렉션에 원소를 추가/제거하는 함수를 추가한다.  
   -> 컬렉션 자체를 통째로 바꾸는 [세터는 제거][11.7]한다. 세터를 제거할 수 없다면 인수로 받은 컬렉션을 복제해 저장하도록 만든다.
3. 정적 검사를 수행한다
4. 컬렉션을 참조하는 부분을 모두 찾는다. 컬렉션의 변경자를 호출하는 코드가 모두 앞에서 추가한 추가/제거 함수를 호출하도록 수정한다. 하나씩 수정할 때마다 테스트한다.
5. 컬렉션 게터를 수정해서 원본 내용을 수정할 수 없는 읽기전용 프락시나 본제본을 반환하게 한다.
6. 테스트한다.

### 예시

```jsx
class Person {
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList;
  }
}
```

---

```jsx
class Person {
  get courses() {
    return this._courses.slice();
  }
  addCourse(aCourse) { ... }
  removeCourse(aCourse) { ... }
}
```

[6.6]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.6
[11.7]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.7
