# 알고리즘의 복잡도

- 알고리즘이 복잡한 정도 (Complexity)는 크게 두 가지로 나누어 볼 수 있다.
  - 공간 복잡도 vs. 시간 복잡도 -> 일반적으로 두 복잡도는 Trade-off 관계가 있다.
- 알고리즘의 Complexity가 높을 수록 알고리즘을 구동하는 데에 더 많은 Cost가 소비된다.

## 공간 복잡도

- Space Complexity
- 알고리즘이 동작하기 위해 필요한 공간(메모리)의 크기
- 많은 경우, 연산의 중간 결과를 저장하기 위해 메모리를 소비한다.
  - 중간 결과를 저장하여 중복 연산을 줄일 수 있다.

## 시간 복잡도

- Time Complexity (계산 복잡도; Computational Complexity)
- 알고리즘이 동작하는 데에 걸리는 시간 또는 연산의 횟수

## 복잡도의 계산 방법

- 측정: 알고리즘을 구동하면서 Elementary Operation의 횟수를 카운팅하여 측정할 수 있다.

```javascript
let count = 0;
const array = [1, 6, 2, 5, 4, 2, 5, 2, 3, 6, 3];

let sum = 0;
for (let i = 0; i < array.length; i++) {
    count++; // 루프 조건 확인
    sum += el;
    count++; // 덧셈 연산
    count++; // 대입 연산
}
count++; // Branch
console.log(sum);

console.log(count);
```

- 분석: 반복문과 조건문을 고려하여 분기별로 실행 횟수를 분석을 통해 알아낼 수 있다.
|
----


## 복잡도의 표현 방법

- '최악의 경우', '최선의 경우', 그리고 '평균적인 경우'가 있다.
- 일반적으로 '최악의 경우'에 대해 알고리즘 복잡도를 정의한다.
  - 예를 들어, Array의 Insertion 알고리즘의 경우 마지막 Element일 경우 연산이 필요 없으나, 첫 위치에 삽입할 경우 N번의 Element 이동이 필요하다.




# Big-O Notation

- 

# 