# 8.7 반복문 쪼개기

> Split Loop

### 배경

반복문 하나에서 두가지 일을 수행하는 모습을 보게 된다. 하지만 이렇게 하면 반복문을 수정해야 할 때마다 두 가지 일 모두를 잘 이해하고 진행해야 한다.  
각각 반복문으로 분리해두면 수정할 동작 하나만 이해하면 된다.

### 절차

1. 반복문을 복제해 두 개로 만든다.
2. 반복문이 중복되어 생기는 부수효과를 파악해서 제거한다.
3. 테스트한다.
4. 완료됐으면, 각 반복문을 [함수로 추출][6.1]할지 고민해본다.

### 예시

```jsx
let averageAge = 0;
let totalSalary = 0;
for (const p of people) {
  averageAge += p.age;
  totalSalary += p.salary;
}
averageAge = averageAge / people.length;
```

---

```jsx
let averageAge = 0;
for (const p of people) {
  averageAge += p.age;
}

let totalSalary = 0;
for (const p of people) {
  totalSalary += p.salary;
}
averageAge = averageAge / people.length;
```

[6.1]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.1
