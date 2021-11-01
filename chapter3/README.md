# REFACTORING

---

## 3.1 기이한 이름(Mysterious Name)

이름만 보고도 각각이 무슨 일을 하고 어떻게 사용해야 하는지 명확히 알 수 있도록 엄청나게 신경 써서 이름을 지어야 한다.

- [함수 선언 바꾸기](../chapter_6)
- [변수 이름 바꾸기](https://www.notion.so/6-7-86022edea8314d6f87f94702606252b6)
- [필드 이름 바꾸기](https://www.notion.so/9-2-b52222ab444f4661a8a4d3e3374147f9)

## 3.2 중복 코드(Duplicated Code)

- [함수 추출하기](https://www.notion.so/6-1-6c0d1a2193e44e1b8d216d5ee9f6426e)
- [메서드 올리기](https://www.notion.so/12-1-c91b0d479d514fd9b74910bfdaed5fac)

코드가 비슷하기는 한데 완전히 똑같지는 않다면, [문장 슬라이드하기](https://www.notion.so/8-6-34d1c3cd6ab849cd904fa861b4a9f377)로 비슷한 부분을 한곳으로 모은다.

## 3.3 긴 함수(Long Function)

오랜 기간 잘 활용되는 프로그램들은 하나같이 **짧은 함수**로 구성됐다. 함수 이름을 잘 지어두면 본문코드를 볼 이유가 사라진다. 주석 대신 함수이름을 **의도**가 드러나게 짓는다.

- [함수 추출하기](https://www.notion.so/6-1-6c0d1a2193e44e1b8d216d5ee9f6426e)
- 매개변수가 많다면
  - [임시 변수를 질의 함수로 바꾸기](https://www.notion.so/7-4-b4366ce715fe40ce9eae09bd25bf7141) (임시 변수가 많을 때)
  - [매개변수 객체 만들기](https://www.notion.so/6-8-4219a13830044012a4946c120fbb2351), [객체 통째로 넘기기](https://www.notion.so/11-4-5083128c3ec649ec86d3b66c5b977b47) (매개 변수 많을 때)
  - [함수를 명령으로 바꾸기](https://www.notion.so/11-9-24aaa964d4114ee4b114e85efa0e38e8)(그래도 복잡할 때)
- 조건문,반복문
  - [조건문 분해하기](https://www.notion.so/10-1-9c85925542214157bfbc32a97e807605)
  - [반복문 쪼개기](https://www.notion.so/8-7-efb00da8f80f4f3d8e7764c5975d5074)
- switch문
  - [함수 추출하기](https://www.notion.so/6-1-6c0d1a2193e44e1b8d216d5ee9f6426e)(case 마다)
  - [조건문을 다형성으로 바꾸기](https://www.notion.so/10-4-89f2cd7eb57c459391f51102c36e35b3)(다중 switch문)

## 3.4 긴 매개변수 목록(Long Parameter List)

매개변수 목록이 길어지면 그 자체로 이해하기 어려울 때가 많다.

- 매개변수를 질의 함수로 바꾸기
- [객체 통째로 넘기기](https://www.notion.so/11-4-5083128c3ec649ec86d3b66c5b977b47)
- [매개변수 객체 만들기](https://www.notion.so/6-8-4219a13830044012a4946c120fbb2351)
- 플래그 인수 제거하기
- 여러 함수를 클래스로 묶기
