# 6.1 함수 추출하기

> Extract Function

### 배경

코드 조각을 찾아 무슨 일을 하는 지 파악한 다음, 독립된 함수로 추출하고 목적에 맞는 이름을 붙인다.  
<u>**목적과 구현을 분리**</u>하는 것이 가장 합리적인 기준이다.

### 절차

1. 함수를 새로 만들고 목적을 잘 드러내는 이름을 붙인다('어떻게'가 아닌 '무엇을' 하는지가 드러나야 한다)
2. 추출할 코드를 원본함수에서 복사하여 새 함수에 붙여넣는다.
3. 추출한 코드 중 원본 함수의 지역 변수를 참조하거나 추출한 함수의 유효범위를 벗어나는 변수는 없는지 검사한다. 있다면 매개변수로 전달한다.
4. 변수를 다 처리했다면 컴파일한다.
5. 원본 함수에서 추출한 코드 부분을 새로 만든 함수를 호출하는 문장으로 바꾼다.
6. 테스트한다.
7. 다른 코드에 방금 추출한 것과 똑같거나 비슷한 코드가 없는지 살핀다. 있다면 방금 추출한 새 함수를 호출하도록 바꿀지 검토한다([인라인 코드를 함수 호출로 바꾸기][8.5])

### 예시

```jsx
function printOwing(invoice) {
printBanner();
let outstanding = calculateOutstanding();

//세부 사항 출력
console.log(`고객명 : ${invoice.customer}`);
console.log(`채무액 : ${outstanding}`);
```

---

```jsx
function printOwing(invoice) {
printBanner();
let outstanding = calculateOutstanding();
printDetails(outstanding);

function printDetails(outstanding) {
	console.log(`고객명 : ${invoice.customer}`);
	console.log(`채무액 : ${outstanding}`);
}
```

[8.5]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.5
