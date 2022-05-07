# REFACTORING

> _코드에서 나는 악취_

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

오랜 기간 잘 활용되는 프로그램들은 하나같이 **짧은 함수**로 구성됐다. 함수 이름을 잘 지어두면 본문코드를 볼 이유가 사라진다. 주석 대신 함수이름을 **의도**가 드러나게 짓는다.

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

## 3.6 가변 데이터(Mutable Data)

데이터를 변경했더니 예상치 못한 결과나 골치 아픈 버그로 이어지는 경우가 종종 있다.

- [변수 캡슐화하기][6.6]
- [변수 쪼개기][9.1]

## 3.7 뒤엉킨 변경(Divergent Change)

우리는 소프트웨어의 구조를 변경하기 쉬운 형태로 조직한다. 코드를 수정할 때는 시스템에서 딱 한 군데를 찾아서 그 부분만 수정할 수 있기를 바란다. 그렇지 않다면 뒤엉킨 변경과 산탄총 수술 중 하나의 냄새가 풍기는 것이다.

뒤엉킨 변경은 단일 책임 원칙(SRP)이 제대로 지켜지지 않을 때 나타난다. 서로 다른 맥락에서 이뤄지는 코드는 독립된 모듈로 분리해야 한다.

- 순차적으로 실행되는 게 자연스러운 맥락이라면, 다음 맥락에 필요한 데이터를 전달하는 식으로 단계를 분리 ([단계 쪼개기][6.11])
- 전체 처리 과정 곳곳에서 다른 맥락의 함수가 호출 된다면, 각 맥락에 해당하는 적당한 모듈들을 만들어서 관련 함수 모은다. ([함수 옮기기][8.1] , [함수 추출하기][6.1])
- 모듈이 클래스라면 ([클래스 추출하기][7.5])

## 3.8 산탄총 수술(Shotgun Surgery)

이 냄새는 코드를 변경할 때마다 자잘하게 수정해야 하는 클래스가 많을 때 풍긴다. 변경할 부분이 코드 전반에 퍼져 있다면 찾기도 어렵고 꼭 수정해야 할 곳을 지나치기 쉽다.

이럴 때는 함께 변경되는 대상들을 [함수 옮기기][8.1]와 [필드 옮기기][8.2]로 한 모듈에 묶어두면 좋다.  
비슷한 데이터를 다루는 함수가 많다면 [여러 함수를 클래스로 묶기][6.9]  
데이터 구조를 변환하거나 보강하는 함수들에는 [여러 함수를 변환 함수로 묶기][6.10]  
묶은 함수들의 출력 결과를 묶어서 다음 단계의 로직을 전달할 수 있다면 [단계 쪼개기][6.11]  
[함수 인라인하기][6.2]나 [클래스 인라인][7.6] 같은 인라인 리펙터링으로 하나로 합치는 것도 산탄총 수술에 대처하는 좋은 방법이다.

작은 함수와 클래스에 지나칠 정도로 집착하지만, 코드를 재구성하는 중간 과정에서는 큰 덩어리로 뭉쳐지는데 개의치 않는다.

## 3.9 기능 편애 (Feature Envy)

프로그램을 모듈화할 때는 코드를 여러 영역으로 나눈 뒤 영역 안에서 이뤄지는 상호작용은 최대한 늘리고 영역 사이에서 이뤄지는 상호작용은 최소로 줄이는 데 주력한다. 기능 편애는 어떤 함수가 자기가 속한 모듈의 함수나 데이터 보다 외부 모듈의 함수나 데이터와 더 많이 상호작용 할 때 풍기는 냄새다. 해결하기는 쉽다. 그 함수가 많이 상호작용 하는 데이터 근처로 옮겨 주면 된다.
[함수 옮기기][8.1],[함수 추출하기][6.1]

## 3.10 데이터 뭉치 (Data Clumps)

데이터 항목 서너 개가 여러 곳에서 항상 함께 뭉쳐다니는 모습을 흔히 목격할 수 있다. 이렇게 몰려다니는 데이터 뭉치는 보금자리를 따로 마련해줘야 한다.  
가장 먼저 필드 형태의 데이터 뭉치를 찾아서 [클래스 추출하기][7.5]로 하나의 객체로 묶는다. 메서드 시그니처에 있는 데이터 뭉치는 [매개변수 객체 만들기][6.8]나 [객체 통째로 넘기기][11.4]를 적용해서 매개변수 수를 줄여본다.  
데이터 뭉치인지 판별하려면 값 하나를 삭제해보자. 그랬을 때 나머지 데이터만으로는 의미가 없다면 객체로 환생하길 갈망하는 데이터 뭉치다.

## 3.11 기본형 집착 (Primitive Obsession)

대부분의 프로그래밍 언어에서는 정수,부동소수점 수, 문자열 같은 기본 자료형을 제공한다.  
한편 프로그래머 중에는 자신의 문제에 딱 맞는 기본 자료형(화폐,좌표,구간 등)을 직접 정의하기를 꺼려하는 사람이 많다.  
이 냄새는 특히 문자열을 다루는 코드에서 흔하다. 전화번호를 단순히 문자열만으로 표현하기에는 아쉬움이 많다. 사용자들에게 보여줄 때는 일관된 형식으로 출력해주는 기능이라도 갖춰야한다.  
[기본형을 객체로 바꾸기][7.3]으로 기본형을 의미 있는 자료형으로 바꿀 수 있다.  
기본형으로 표현된 코드가 조건부 동작을 제어하는 타입코드로 쓰였다면 [타입 코드를 서브클래스로 바꾸기][12.6]와 [조건부 로직을 다형성으로 바꾸기][10.4]를 차례로 적용한다.  
자주 함께 몰려다니는 기본형 그룹도 데이터 뭉치다. 따라서 [클래스 추출하기][7.5]와 [매개변수 객체 만들기][6.8]로 리팩터링 한다.

## 3.12 반복되는 switch문 (Repeated Switches)

초판 때와 비교해 지금은 다형성이 널리 자리 잡아서 단순히 switch문을 썻다고 해서 자동으로 검토 대상은 되지 않는다. 게다가 분기 조건에 몇 가지 기본형만 쓸 수 있던 예전과 달리, 문자열 등의 더 복잡한 타입까지 지원하는 발전된 switch문을 제공하는 언어도 많아졌다. 그러니 이제는 똑같은 족건부 로직 (switch/case문이나 길게 나열된 if/else문)이 여러 곳에서 반복해 등장하는 코드에 집중해보자.  
중복된 switch문이 문제가 되는 이유는 조건절을 하나 추가할 때마다 다른 switch문들도 모두 찾아서 함께 수정해야 하기 때문이다. 이럴 때 다형성은 반복된 switch문이 내뿜는 사악한 기운을 제압하여 코드베이스를 최신 스타일로 바꿔주는 세련된 무기인 셈이다.

## 3.13 반복문(Loops)

반복문은 프로그래밍 언어가 등장할 때부터 함께 한 핵심 프로그래밍 요소다. 하지만 지금은 불필요한 존재가 됐다. 초판을 쓸 당시에도 주요 언어들은 더 나은 대안을 제시하지 못했다. 지금은 일급 함수를 지원하는 언어가 많아졌기 때문에 [반복문을 파이프라인으로 바꾸기][8.8]를 적용해서 시대에 걸맞지 않은 반복문을 제거할 수 있게 됐다.

## 3.14 성의 없는 요소(Lazy Element)

우리는 코드의 구조를 잡을 때 프로그램 요소를 이용하는 걸 좋아한다. 그래야 구조를 변경하거나, 재활용할 수 있는 기회가 생기고, 단순히 더 의미 있는 이름을 가지고 있기 때문이다. 하지만 프로그램 요소를 불필요하게 사용하는 경우도 있다. 본문 코드를 그대로 쓰는 것과 다름없는 함수도 있고, 메서드가 하나뿐인 클래스도 있다. 사정이 어떠하든 이런 프로그램 요소는 고이 보내드리는게 좋다. 이 제거 작업은 흔히 [함수 인라인하기][6.2]나 [클래스 인라인하기][7.6]로 처리한다. 상속을 사용했다면 [계층 합치기][12.9]를 적용한다.

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
