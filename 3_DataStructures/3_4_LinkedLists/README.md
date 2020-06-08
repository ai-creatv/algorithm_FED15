# 연결 리스트 (Linked List)

## 연결 리스트란

- 연결 리스트는 순서가 메모리 상의 물리적인 위치로 정의되지 않는 자료의 선형적 모임을 나타내는 **자료 구조**이다.
- 자료의 순서는 정해져 있으나, Array List와 달리 메모리상 연속성이 보장되지 않는다.

## 리스트의 연산자

![리스트의 연산자](img/1.png)

1. 비어있는 리스트를 생성하는 생성자
1. 리스트가 비어있는지 확인하는 연산자
1. 리스트의 앞에 개체를 삽입(prepending)하는 연산자
1. 리스트의 뒤에 개체를 삽입(appending)하는 연산자
1. 리스트의 첫 머리(head)를 결정하는 연산자
1. 주어진 인덱스에 해당하는 요소에 접근하는 연산자
1. 주어진 인덱스에 새로운 요소를 삽입하는 연산자
1. 주어진 인덱스에 해당하는 요소를 제거하는 연산자

## 연결 리스트의 구현

- 연결 리스트 (Linked List)
![Linked List](img/2.png)
  - 단방향(Singly Linked List) 또는 양방향(Doubly Linked List)
  - 각 요소는 값(Value)과 다음 요소를 *가르키는* 연결(Link)로 구성
  - 연결 리스트에서 각 연산의 복잡도
    - `isEmpty()`: O(n)
    - `prepend()`: O(1)
    - `append()`: O(n)
    - `setHead(index)`: O(n)
    - `getItem(index)`: O(n)
    - `insert(item)`: O(1)
    - `remove(index)`: O(1)

## [실습] Linked List 직접 구현하기

- JavaScript의 `class`를 이용해 Linked List 직접 구현하기
- 구현 조건
  - `value`와 `next` property를 지닌 `Node` 클래스를 구현한다.
  - `Node`를 이용하여 Linked List를 구현한다.
  - 다음과 같은 리스트 ADT의 연산자를 구현해야 한다.
    1. 비어있는 리스트를 생성하는 생성자
    1. 리스트가 비어있는지 확인하는 연산자
    1. 리스트의 앞에 개체를 삽입(prepending)하는 연산자
    1. 리스트의 뒤에 개체를 삽입(appending)하는 연산자
    1. 리스트의 첫 머리(head)를 결정하는 연산자
    1. 주어진 인덱스에 해당하는 요소에 접근하는 연산자
    1. 주어진 인덱스에 새로운 요소를 삽입하는 연산자
    1. 주어진 인덱스에 해당하는 요소를 제거하는 연산자
- 참조 코드
  - [기반 소스 코드](src/before.js)
  - [솔루션 코드](src/after.js)
