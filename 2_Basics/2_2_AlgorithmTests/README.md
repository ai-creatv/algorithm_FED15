# 알고리즘 테스트 입출력

## 테스트 입출력 프로그램을 따로 구현해서 쓰면 좋은 이유

- 코딩테스트 페이지에서 직접 구현할 경우, 테스트/디버깅에 불리하다.
- 종종 페이지 오류로 소스코드를 날려버리는 경우도 생긴다...
- IDE를 사용하여 프로그래밍 속도를 향상하고, 실수를 줄일 수 있다.

## Node.js를 이용한 입출력 구현

- Node.js로 코드를 실행할 경우 웹 브라우저를 사용하지 않아도 됨
- IDE 내에서 모든 작업이 가능해지므로 손쉽게 결과를 확인 가능
- 디버깅 기능을 활용할 수 있어, 중간 결과를 확인하기 편리함

## 추천 IDE

- JetBrains IDEA, Webstrom
  - IDEA
    - 현업에서 가장 많이 사용되는 JVM 개발 툴
    - Community 버전은 무료이지만, 기능 제한이 많음 (Framework, JavaScript 미지원)
    - Ultimate 버전은 1년 구독에 $499으로... 꽤 비싼 단점이 있음
    - 프론트엔드 개발자가 굳이 구매할 필요는 없다고 생각합니다.
  - Webstorm
    - JavaScript 개발을 위한 IDE. React, Vue, Angular를 지원
    - Community 버전이 없으며, 1년 구독에 $129으로, 비교적 저렴함
      - Fallback License로, 구매한 시기에 따라 특정 버전 영구 이용
    - 30일 무료 체험
- Visual Studio Code
  - 무료로 사용할 수 있는 오픈소스 Text Editor
  - 다양한 플러그인이 제공되어, 거의 모든 언어에 대한 IDE를 구성할 수 있음
  - 다양한 언어의 Linting, Build, Test 등 다양하게 활용 가능
