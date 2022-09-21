# 8.3 문장을 함수로 옮기기

> Move Statements into Function

### 배경

특정 함수를 호출하는 코드가 나올 때마다 그 앞이나 뒤에서 똑같은 코드가 추가로 실행되는 모습을 보면, 그 반복되는 부분을 피호출 함수로 합치는 방법을 찾는다. 혹시 나중에 이 코드의 동작을 여러 변형들로 나눠야 하는 순간이 오면 [문장을 호출한 곳으로 옮기기][8.4]를 적용하여 쉽게 다시 뽑아낼 수 있다.

### 절차

1. 반복 코드가 함수 호출 부분과 멀리 떨어져 있다면 [문장 슬라이드하기][8.6]를 적용해 근처로 옮긴다.
2. 타깃 함수를 호출하는 곳이 한 곳뿐이면, 단순히 소스 위치에서 해당 코드를 잘라내어 피호출 함수로 복사하고 테스트한다. 이 경우라면 나머지 단계는 무시한다.
3. 호출자가 둘 이상이면 호출자 중 하나에서 '타깃 함수 호출 부분과 그 함수로 옮기려는 문장들을 함께' [다른 함수로 추출][6.1]한다. 추출한 함수에 기억하기 쉬운 임시 이름을 지어준다.
4. 다른 호출자 모두가 방금 추출한 함수를 사용하도록 수정한다. 하나씩 수정할 때마다 테스트한다.
5. 모든 호출자가 새로운 함수를 사용하게 되면 원래 함수를 새로운 [함수 안으로 인라인][6.2] 한 후 원래 함수를 제거한다.
6. 새오룬 함수의 이름을 원래 함수의 이름으로 바꿔준다.([함수 이름 바꾸기][6.5])  
   -> 더 나은 이름이 있다면 그 이름을 쓴다.

### 예시

```jsx
result.push(`<p>제목: ${person.photo.title}</p>`);
result.concat(photoData(person.photo));

function photoData(aPhoto) {
  return [`<p>위치: ${aPhoto.location}</p>`, `<p>날짜: ${aPhoto.date.toDateString()}</p>`];
}
```

---

```jsx
result.concat(photoData(person.photo));

function photoData(aPhoto) {
  return [
    `<p>제목: ${aphoto.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ];
}
```

[6.1]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.1
[6.2]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.2
[6.5]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.5
[8.4]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.4
[8.6]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.6
