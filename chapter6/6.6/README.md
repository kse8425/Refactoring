# 6.6 변수 캡슐화하기

> Encapsulate Variable

### 배경

함수는 데이터보다 다루기가 수월하다. 함수의 이름을 바꾸거나 다른 모듈로 옮기기는 어렵지 않다.  
반대로 데이터는 함수보다 다루기가 까다롭다. 데이터는 참조하는 모든 부분을 한 번에 바꿔야 코드가 제대로 작동한다.
그래서 접근할 수 있는 범위가 넓은 데이터를 옮길 때는 그 데이터로 접근을 독점하는 함수를 만드는 식으로 **캡슐화**하는 것이 가장 좋은 방법일 때가 많다.

### 절차

1. 변수로의 접근과 갱신을 전담하는 캡슐화 함수들을 만든다.
2. 정적 검사를 수행한다.
3. 변수를 직접 참조하던 부분을 모두 적절한 캡슐화 함수 호출로 바꾼다. 하나씩 바꿀 때마다 테스트한다.
4. 변수의 접근 범위를 제한한다.  
   -> 변수로의 직접 접근을 막을 수 없을 때도 있다. 그럴 때는 변수 이름을 바꿔서 테스트해보면 해당 변수를 참조하는 곳을 쉽게 찾아낼 수 있다.
5. 테스트한다.
6. 변수 값이 레코드라면 [레코드 캡슐화하기][7.1]를 적용할지 고려해본다.

### 예시

```jsx
let defaultOwner = { firstName: "마틴", lastName: "파울러" };
```

---

```jsx
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };
export function defaultOwner() {
  return defaultOwnerData;
}
export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}
```

[7.1]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.1
