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

## 3.15 추측성 일반화(Speculative Generality)

추측성 일반화는 '나중에 필요할 거야'라는 생각으로 당장은 필요 없는 모든 종류의 후킹 포인트와 특이 케이스 처리 로직을 작성해둔 코드에서 풍긴다. 그 결과는 이해하거나 관리하기 어려워진 코드다.  
하는 일이 거의 없는 추상 클래스는 [계층 합치기][12.9]로 제거한다. 쓸데없이 위임하는 코드는 [함수 인라인하기][6.2]나 [클래스 인라인하기][7.6]로 삭제한다. 본문에서 사용되지 않는 매개변수는 [함수 선언 바꾸기][6.5]로 없앤다.  
추측성 일반화는 테스트 코드 말고는 사용하는 곳이 없는 함수나 클래스에서 흔히 볼 수 있다. 이런 코드를 발견하면 테스트 케이스부터 삭제한 뒤에 [죽은 코드 제거하기][8.9]로 날려버리자.

## 3.16 임시 필드(Temporary Field)

간혹 특정 상황에서만 값이 설정되는 필드를 가진 클래스도 있다. 하지만 객체를 가져올 때는 당연히 모든 필드가 채워져 있으리라 기대하는게 보통이라, 이렇게 임시 필드를 갖도록 작성하면 코드를 이해하기 어렵다. 그래서 사용자는 쓰이지 않는 것처럼 보이는 필드가 존재하는 이유를 파악하느라 머리르 싸매게 된다.  
이렇게 덩그러니 떨어져 있는 필드들을 발견하면 [클래스 추출하기][7.5]로 제 살 곳을 찾아준다. 그런 다음 [함수 옮기기][8.1]로 임시 필드들과 관련된 모드를 모조리 새 클래스에 몰아넣는다. 또한, 임시 필드들이 유효한지를 확인한 후 동작하는 조건부 로직이 있을 수 있는데, [특이 케이스 추가하기][10.5]로 필드들이 유효하지 않을 때를 위한 대안 클래스를 만들어서 제거할 수 있다.

## 3.17 메시지 체인(Message Chains)

메시지 체인은 다른 객체를 요청하는 작업이 연쇄적으로 이어지는 코드를 말한다. 이는 클라이언트가 객체 내비게이션 구조에 종속됐음을 의미한다. 그래서 내비게이션 중간 단계를 수정하면 클라이언트 코드도 수정해야 한다.

이 문제는 [위임 숨기기][7.7]로 해결한다. 이 리팩터링은 다양한 연결점에 적용할 수 있지만, 그러다 보면 중간 객체들이 모두 중개자가 돼버리기 쉽다. 따라서 최종 결과 객체가 어떻게 쓰이는지부터 살펴보는 게 좋다.

## 3.18 중개자(Middle Man)

객체의 대표적인 기능 하나로, 외부로부터 세부사항을 숨겨주는 캡슐화가 있다. 캡슐화하는 과정에서는 위임이 자주 활용된다.  
하지만 지나치면 문제가 된다. 클래스가 제공하는 메서드 중 절반이 다른 클래스에 구현을 위임하고 있다면, [중재자 제거하기][7.8]를 활용하여 실제로 일을 하는 객체와 직접 소통하게 하자.

## 3.19 내부자 거래(Insider Trading)

개발자는 모듈 사이에 벽을 두껍게 세우기를 좋아하며, 그래서 모듈 사이의 데이터 거래가 많으면 결합도가 높아진다고 투덜댄다. 일이 돌아가게 하려면 거래가 이뤄질 수 밖에 없지만, 그 양을 최소로 줄이고 모두 투명하게 처리해야 한다.  
은밀히 데이터를 주고 받는 모듈들이 있다면 [함수 옮기기][8.1]와 [필드 옮기기][8.2]기법으로 떼어놓아서 사적으로 처리하는 부분을 줄인다. 여러 모듈이 같은 관심사를 공유한다면 공통 부분을 정식으로 처리하는 제3의 모듈을 새로 만들거나 [위임 숨기기][7.7]를 이용하여 다른 모듈이 중간자 역할을 하게 만든다.  
상속 구조에서는 부모 자식 사이에 결탁이 생길 때가 있는데, 그러다가 부모 품을 떠나야 할 때가 온다면 [서브클래스 위임으로 바꾸기][12.10]나 [슈퍼클래스를 위임으로 바꾸기][12.11]를 활용하자.

## 3.20 거대한 클래스(Large Class)

한 클래스가 너무 많은 일을 하려다 보면 필드 수가 상당히 늘어난다. 그리고 클래스에 필드가 너무 많으면 중복 코드가 생기기 쉽다.  
이럴 때는 [클래스 추출하기][7.5]로 필드들 일부를 따로 묶는다. 한 클래스 안에서 접두어나 접미어가 같은 필드들이 함께 추출할 후보들이다.  
분리할 컴포넌트를 원래 클래스와 상속 관계로 만드는 게 좋다면 [슈퍼클래스 추출하기][12.8]나 [타입 코드를 서브클래스로 바꾸기][12.6]를 적용한다.
클라이언트들이 거대 클래스를 이용하는 패턴을 파악해 클래스를 어떻게 쪼갤지 단서를 얻을 수도 있다. 클라이언트들이 거대 클래스의 거대 클래스의 특정 기능 그룹만 주로 사용하는 살피고, 각각 기능 그룹을 클래스로 추출한다.

## 3.21 서로 다른 인터페이스의 대안 클래스들(Alternative Classes with Different Interfaces)

클래스를 사용할 때의 큰 장점은 필요에 따라 언제든 다른 클래스로 교체할 수 있다는 것이다. 단, 교체하려면 인터페이스가 같아야 한다. 따라서 [함수 선언 바꾸기][6.5]로 메서드 시크니처를 일치시키거나 [함수 옮기기][8.1]를 이용하여 인터페이스가 같아질 때까지 필요한 동작들을 클래스 안으로 밀어 넣는다.

## 3.22 데이터 클래스(Data Class)

데이터 클래스란 데이터 필드와 게터/세터 메서드로만 구성된 클래스를 말한다. public 필드가 있다면 누가 보기 전에 얼른 [레코드 캡슐화하기][7.1]로 숨기자. 변경하면 안 되는 필드는 [세터 제거하기][11.7]로 접근을 원천 봉쇄한다.  
한편, 데이터 클래스는 필요한 동작이 엉뚱한 곳에 정의돼 있다는 신호일 수 있다. 이런 경우라면 클라이언트 코드를 데이터 클래스로 옮기기만 해도 대폭 개선된다.

## 3.23 상속 포기(Refused Bequest)

서브클래스는 부모로부터 메서드와 데이터를 물려받는다. 하지만 수많은 유산 중에서 관심 있는 몇 개만 받고 끝내려는 경우는 얼마든지 있을 수 있다.  
이 관점에서의 해법은, 먼저 같은 계층에 서브클래스를 한 새로 만들고, [메서드 내리기][12.4]와 [필드 내리기][12.5]를 활용해서 물려받지 않을 부모 코드를 모조리 새로 만든 서브클래스로 넘긴다. 항상 이렇게 해야 한다는 입장은 아니다. 일부 동작을 재활용하기 위한 목적으로 상속을 활용하기도 하는데, 실무 관점에서 아주 유용한 방식이다.  
상속 포기 냄새는 서브클래스가 부모의 동작은 필요로하지만 인터페이스는 따르고 싶지 않을 때 특히 심하게 난다. 이럴 때는 [서브클래스를 위임으로 바꾸기][12.10]나 [슈퍼클래스를 위임으로 바꾸기][12.11]를 활용해서 아예 상속 메커니즘에서 벗어나보자.

## 3.24 주석(Comments)

주석은 악취가 아닌 향기를 입힌다. 문제는 주석을 탈취제처럼 사용하는데 있다. 주석이 장황하게 달린 원인이 코드를 잘못 작성했기 때문인 경우가 의외로 많다.  
특정 코드 블록이 하는 일에 주석을 남기고 싶다면 [함수 추출하기][6.1]를 적용해본다. 이미 추출되어 있는 함수임에도 여전히 설명이 필요하다면 [함수 선언 바꾸기][6.5]로 함수 이름을 바꿔본다. 시스템이 동작하기 위한 선행조건을 명시하고 싶다면 [어서션 추가하기][10.6]가 대기하고 있다.

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
