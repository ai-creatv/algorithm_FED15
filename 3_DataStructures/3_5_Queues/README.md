# 큐 (Queue)

## 큐란

- 큐는 선입선출(First In First Out; FIFO)의 특성을 가지는 **추상 자료형**이다.
- 입력된 데이터가 순서대로 처리되어야 할 때 사용한다.

## 큐의 연산자

![큐의 연산자](img/1.png)

1. 자료를 Rear로 삽입하는 연산자 (Put, Enqueue)
  더 이상 삽입할 수 없는 경우 *오버플로우* 발생
1. 자료를 Front에서 꺼내는 연산자 (Get, Dequeue)
  더 이상 꺼낼 수 없는 경우 *언더플로우* 발생
1. Front에 있는 자료를 반환하지만, 삭제하지는 않는 연산자 (Peek)

## 큐의 구현

- 선형 큐 (Linear Queue)
![선형 큐](img/2.png)
- 환형 큐 (Circular Queue)
![환영 큐](img/3.png)
- 연결리스트 큐 (Linked Queue)
![연결리스트 큐](img/4.png)

## [실습] 선형 큐, 환형 큐, 연결리스트 큐 구현하기

- JavaScript의 Array와 앞에서 연결 리스트를 이용해 직접 구현하기
- 구현 조건
  - `class`와 `Array`, 그리고 `LinkedList`를 이용하여 선형 큐, 환형 큐, 연결리스트 큐를 구현한다.
  - `Array`의 용량(capacity)은 고정되어 있다고 가정한다.
    - 배열의 크기가 부족하면 *오버플로우*가 발생한다.
    - 연결리스트 큐는 오버플로우가 발생하지 않는다.
  - 다음과 같은 큐 ADT의 연산자를 구현해야 한다.
    1. 자료를 Rear로 삽입하는 연산자 (Put, Enqueue)
      더 이상 삽입할 수 없는 경우 *오버플로우* 발생
    1. 자료를 Front에서 꺼내는 연산자 (Get, Dequeue)
      더 이상 꺼낼 수 없는 경우 *언더플로우* 발생
    1. Front에 있는 자료를 반환하지만, 삭제하지는 않는 연산자 (Peek)

- 참조 코드
  - 선형 큐
    - [기반 소스 코드](src/linearQ/before.js)
    - [솔루션 코드](src/linearQ/after.js)
  - 환형 큐
    - [기반 소스 코드](src/circularQ/before.js)
    - [솔루션 코드](src/circularQ/after.js)
  - 연결리스트 큐
    - [기반 소스 코드](src/linkedQ/before.js)
    - [솔루션 코드](src/linkedQ/after.js)
