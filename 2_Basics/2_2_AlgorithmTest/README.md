# 알고리즘 구현/테스트

## 테스트 입출력 프로그램을 따로 구현해서 쓰면 좋은 이유

- 코딩테스트 페이지에서 직접 구현할 경우, 테스트/디버깅에 불리하다.
- 종종 페이지 오류로 소스코드를 날려버리는 경우도 생긴다...
- IDE를 사용하여 프로그래밍 속도를 향상하고, 실수를 줄일 수 있다.

## Node.js를 이용한 입출력 구현

<img src="img/1.png" height="300"></img>

- 구글 크롬 자바스크립트 엔진 (V8 Engine) 기반으로 만들어진 서버사이드 플랫폼
  - Node.js로 코드를 실행할 경우 웹 브라우저를 사용하지 않아도 됨
- IDE 내에서 모든 작업이 가능해지므로 손쉽게 결과를 확인 가능
- 디버깅 기능을 활용할 수 있어, 중간 결과를 확인하기 편리함
- Function을 구현하는 과제의 경우, Parsing을 추가 구현해야 하는 부담은 있음
- 참조 소스코드
  - [파일 입출력 버전](src/file/main.js)
  - [함수 입출력 버전](src/function/main.js)

## 추천 IDE

- JetBrains IDEs
  - IntelliJ IDEA
<br><img src="img/2.png" height="300"></img>
    - 현업에서 가장 많이 사용되는 JVM 개발 툴
    - Community 버전은 무료이지만, 기능 제한이 많음 (Framework, JavaScript 미지원)
    - Ultimate 버전은 1년 구독에 $499으로... 꽤 비싼 단점이 있음
      - 이미 구매한 경우 쓰면 좋지만.. 프론트엔드 개발자가 굳이 구매할 필요는 없음
  - WebStorm
<br><img src="img/3.png" height="300"></img>
    - JavaScript 개발을 위한 IDE. React, Vue, Angular를 지원
    - Community 버전이 없으며, 1년 구독에 $129으로, 비교적 저렴함
      - Fallback License로, 구매한 시기에 따라 특정 버전 영구 이용
    - 30일 무료 체험
- VisualStudio Code
<br><img src="img/4.png" height="300"></img>
  - 무료로 사용할 수 있는 오픈소스 Text Editor
  - 다양한 플러그인이 제공되어, 거의 모든 언어에 대한 IDE를 구성할 수 있음
  - 다양한 언어의 Linting, Build, Test 등 다양하게 활용 가능
    - 공식/비공식 Extension으로 지속적으로 개선 중
