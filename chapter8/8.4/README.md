# 8.4 문장을 호출한 곳으로 옮기기

> Move Statements to Callers

### 배경

여러 곳에서 사용하던 기능이 일부 호출자에게는 다르게 동작하도록 바뀌어야 한다면 달라진 동작을 함수에서 꺼내 해당 호출자로 옮겨야 한다.  
호출잘와 호출 대상의 경계를 완전히 다시 그어야 할 때는 [함수 인라인하기][6.2]부터 적용한 다음, [문장 슬라이드하기][8.6]와 [함수 추출하기][6.1]로 더 적합한 경계를 설정하면 된다.

### 절차

1. 호출자가 한두 개뿐이고 피호출 함수도 간단한 단순한 상황이면, 피호출 함수의 처음(혹은 마지막) 줄(들)을 잘라내어 호출자(들)로 복사해 넣는다(필요하면 적당히 수정한다). 테스트만 통과하면 이번 리팩터링은 여기서 끝이다.
2. 더 복잡한 상황에서는, 이동하지 '않길' 원하는 모든 문장을 [함수로 추출][6.1]한 다음 검색하기 쉬운 임시 이름을 지어준다.  
   -> 대상 함수가 서브클래스에서 오버라이드됐다면 오버라이드한 서브클래스들의 메서드 모두에서 동일하게, 남길 부분을 메서드로 추출한다. 이때 남겨질 메서드의 본문은 모든 클래스에서 똑같아야 한다. 그런 다음 (슈퍼클래스의 메서드만 남기고) 서브클래스들의 메서드를 제거한다.
3. 원래 [함수를 인라인][6.2]한다.
4. 추출된 함수의 이름을 원래 함수의 이름으로 변경한다.([함수 이름 바꾸기][6.5])  
   -> 더 나은 이름이 떠오르면 그 이름을 사용하자.

### 예시

```jsx
emitPhotoData(outStream, person.photo);

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>위치: ${photo.location}</p>\n`);
}
```

---

```jsx
emitPhotoData(outStream, person.photo);
outStream.write(`<p>위치: ${photo.location}</p>\n`);

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
}
```

[6.1]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.1
[6.2]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.2
[6.5]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.5
[8.6]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.6
