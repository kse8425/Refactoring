# 7.4 임시 변수를 질의 함수로 바꾸기 임시변수 바꾸기

> Replace Temp with Query

### 배경

긴 함수의 한 부분을 별도 함수로 추출하고자 할 때 먼저 변수들을 각각의 함수로 만들면 일이 수월해진다. 추출한 함수에 변수를 따로 전달할 필요가 없어지기 때문이다. 그리고 부자연스러운 의존 관계나 부수효과를 찾고 제거하는 데 도움이 된다.  
비슷한 계산을 수행하는 변수도 함수로 바꾸면 중복이 줄어든다.

### 절차

1. 변수가 사용되기 전에 값이 확실히 결정되는지, 변수를 사용할 때마다 계산 로직이 매번 다른 결과를 내지는 않는지 확인한다.
2. 읽기전용으로 만들 수 있는 변수는 읽기전용으로 만든다.
3. 테스트한다.
4. 변수 대입문을 함수로 추출한다.  
   ->변수와 함수가 같은 이름을 가질 수 없다면 함수 이름을 임시로 짓는다. 또한, 추출한 함수가 부수 효과를 일으키지는 않는지 확인한다. 부수효과가 있다면 [질의 함수와 변경 함수 분리하기][11.1]로 대처한다.
5. 테스트한다.
6. [변수 인라인하기][6.4]로 임시 변수를 제거한다.

### 예시

```jsx
const basePrice = this._quantity * this._itemPrice;
if (basePrice > 1000) return basePrice * 0.95;
else return basePrice * 0.98;
```

---

```jsx
get basePrice() { this._quantity * this._itemPrice;}
...
if ( basePrice > 1000 )
    return basePrice * 0.95;
else
    return basePrice * 0.98;

```

[6.4]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.4
[11.1]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.1
