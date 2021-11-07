# REFACTORING

---

## 3.1 기이한 이름(Mysterious Name)

이름만 보고도 각각이 무슨 일을 하고 어떻게 사용해야 하는지 명확히 알 수 있도록 엄청나게 신경 써서 이름을 지어야 한다.

- [함수 선언 바꾸기][6.5]
- [변수 이름 바꾸기][6.7]
- [필드 이름 바꾸기][9.2]

## 3.2 중복 코드(Duplicated Code)

- [함수 추출하기][6.1]
- [메서드 올리기][12.1]

코드가 비슷하기는 한데 완전히 똑같지는 않다면, [문장 슬라이드하기][8.6]로 비슷한 부분을 한곳으로 모은다.

## 3.3 긴 함수(Long Function)

오랜 기간 잘 활용되는 프로그램들은 하나같이 **_짧은 함수_**로 구성됐다. 함수 이름을 잘 지어두면 본문코드를 볼 이유가 사라진다. 주석 대신 함수이름을 **_의도_**가 드러나게 짓는다.

- [함수 추출하기][6.1]
- 매개변수가 많다면
  - [임시 변수를 질의 함수로 바꾸기][7.4] (임시 변수가 많을 때)
  - [매개변수 객체 만들기][6.8], [객체 통째로 넘기기][11.4] (매개 변수 많을 때)
  - [함수를 명령으로 바꾸기][11.9] (그래도 복잡할 때)
- 조건문,반복문
  - [조건문 분해하기][10.1]
  - [반복문 쪼개기][8.7]
- switch문
  - [함수 추출하기][6.1](case 마다)
  - [조건문을 다형성으로 바꾸기][10.4](다중 switch문)

## 3.4 긴 매개변수 목록(Long Parameter List)

매개변수 목록이 길어지면 그 자체로 이해하기 어려울 때가 많다.

- [매개변수를 질의 함수로 바꾸기][11.5]
- [객체 통째로 넘기기][11.4]
- [매개변수 객체 만들기][6.8]
- [플래그 인수 제거하기][11.3]
- [여러 함수를 클래스로 묶기][6.9]

## 3.5 전역 데이터(Global Data)

전역 데이터는 주의해야 한다. 코드 베이스 어디에서든 건드릴 수 있고 값을 누가 바꿨는지 찾아낼 메커니즘이 없다. 이를 위해 사용하는 대표적인 리팩터링은 [변수 캡슐화하기][6.6]다.

[ch6]: https://github.com/kse8425/Refactoring/tree/main/chapter6
[ch7]: https://github.com/kse8425/Refactoring/tree/main/chapter7
[ch8]: https://github.com/kse8425/Refactoring/tree/main/chapter8
[ch9]: https://github.com/kse8425/Refactoring/tree/main/chapter9
[ch10]: https://github.com/kse8425/Refactoring/tree/main/chapter10
[ch11]: https://github.com/kse8425/Refactoring/tree/main/chapter11
[ch12]: https://github.com/kse8425/Refactoring/tree/main/chapter12
[6.1]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.1
[6.2]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.2
[6.3]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.3
[6.4]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.4
[6.5]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.5
[6.6]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.6
[6.7]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.7
[6.8]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.8
[6.9]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.9
[6.10]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.10
[6.11]: https://github.com/kse8425/Refactoring/tree/main/chapter6/6.11
[7.1]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.1
[7.2]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.2
[7.3]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.3
[7.4]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.4
[7.5]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.5
[7.6]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.6
[7.7]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.7
[7.8]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.8
[7.9]: https://github.com/kse8425/Refactoring/tree/main/chapter7/7.9
[8.1]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.1
[8.2]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.2
[8.3]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.3
[8.4]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.4
[8.5]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.5
[8.6]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.6
[8.7]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.7
[8.8]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.8
[8.9]: https://github.com/kse8425/Refactoring/tree/main/chapter8/8.9
[9.1]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.1
[9.2]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.2
[9.3]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.3
[9.4]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.4
[9.5]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.5
[9.6]: https://github.com/kse8425/Refactoring/tree/main/chapter9/9.6
[10.1]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.1
[10.2]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.2
[10.3]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.3
[10.4]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.4
[10.5]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.5
[10.6]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.6
[10.7]: https://github.com/kse8425/Refactoring/tree/main/chapter10/10.7
[11.1]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.1
[11.2]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.2
[11.3]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.3
[11.4]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.4
[11.5]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.5
[11.6]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.6
[11.7]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.7
[11.8]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.8
[11.9]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.9
[11.10]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.10
[11.11]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.11
[11.12]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.12
[11.13]: https://github.com/kse8425/Refactoring/tree/main/chapter11/11.13
[12.1]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.1
[12.2]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.2
[12.3]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.3
[12.4]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.4
[12.5]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.5
[12.6]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.6
[12.7]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.7
[12.8]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.8
[12.9]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.9
[12.10]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.10
[12.11]: https://github.com/kse8425/Refactoring/tree/main/chapter12/12.11
