# JavaScript

## 학습 목표

- 자주 사용되는 JavaScript 문법을 Review한다.
- JavaScript로 프로그래밍할 때, 좋은 습관/나쁜 습관들을 알아본다.
- JavaScript Reference를 활용하는 방법을 이해한다.

## JavaScript 주요 문법 Review

### Variables

- var (ES5)

  ```javascript
  var a = 1;
  a = 3;
  console.log(a);
  ```

- let, const (ES6)

  ```javascript
  let a = 1;
  const b = 2;
  a = 3;
  // b = 3;  // Error
  console.log(a);  // 3
  console.log(b);  // 2
  ```

- Variable scopes

  ```javascript
  // ES5 (Function scope)
  var a = 1;
  (function() { // IIFE (Immediately Invoked Function Expressions)
      var a = 2;
      console.log(a);
  })();
  console.log(a);
  ```

  ```javascript
  // ES6 (Block scope)
  let a = 1;
  const b = 1;
  {
      let a = 2;
      const b = 2;
      console.log(a + ', ' + b);
  }
  console.log(a + ', ' + b);
  ```

### Loops and Iterations

- for

  ```javascript
  for(let i = 0; i < 10; i++) {
      console.log(i);
  }
  ```

- for ... in (ES5)

  ```javascript
  const array = [1, 2, 3];
  for(let i in array) {
      console.log('array[' + i + ']: ' + array[i]);
  }
  ```

- for ... of (ES6)

  ```javascript
  const array = [1, 2, 3];
  for(let el of array) {
      console.log(el);
  }
  console.log()

  for(let [index, val] of array.entries()) {
      console.log('array[' + index + ']:' + val);
  }
  ```

- forEach

  ```javascript
  const array = [1, 2, 3];
  array.forEach(el => {
    console.log(el);
  });
  ```

- while, do ... while

  ```javascript
  const array = [1, 2, 3];
  let i = 0;
  while (i < array.length) {
      console.log(i);
      i++;
  }
  console.log()

  i = 0;
  do {
      console.log(i);
      i++;
  } while (i < array.length)
  ```

### Loop Control

- break, continue

  ```javascript
  const array = [1, 2, 3, 4];
  for(let val of array) {
      if(val == 2) {
          break;
      }
      console.log(val);
  }
  console.log()

  for(let val of array) {
      if(val == 2) {
          continue;
      }
      console.log(val);
  }
  ```

- label

  ```javascript
  const array = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
  for(let subArray of array) {
      for(let val of subArray) {
          if(val == 6) {
              break;
          }
          console.log(val);
      }
  }
  console.log()

  loop1:
  for(let subArray of array) {
      loop2:
      for(let val of subArray) {
          if(val == 6) {
              break loop1;
          }
          console.log(val);
      }
  }
  ```

### Functions

- Function statements

  ```javascript
  foo(); // foo is defined by hoisting
  function foo() {
      console.log('foo');
  }
  ```

- Function expressions

  ```javascript
  // foo();  // foo is 'undefined'
  const foo = function() {
      console.log('foo');
  };
  foo();
  ```

- Arrow functions

  ```javascript
  const foo = () => {
      console.log('foo');
  };
  foo();
  ```

### Object-Oriented Programming

- Function constructors (ES5)

  ```javascript
  function Person(name, age) {
      this.name = name;
      this.age = age;
      this.speak = function () {
          console.log('My name is ' + this.name);
      }
  }
  var person = new Person('Jane', 22);
  person.speak();
  ```

- Classes (ES6)

  ```javascript
  class Person {
      constructor (name, age) {
          this.name = name;
          this.age = age;
      }
      speak = function() {
          console.log('My name is ' + this.name);
      }
  }
  const person = new Person('Jane', 22);
  person.speak();
  ```

- Subclasses (ES6)

  ```javascript
  class Person {
      constructor (name, age) {
          this.name = name;
          this.age = age;
      }
      speak = function() {
          console.log('My name is ' + this.name);
      }
  }
  class Student extends Person {
      constructor (name, age, major) {
          super(name, age);
          this.major = major;
      }
      speak = function() {
          console.log('My name is ' + this.name + ' and my major is ' + this.major);
      }
  }
  const student = new Student('Jane', 22, 'English');
  student.speak();
  ```

### Others

- Ternary operator
  
  ```javascript
  const array = [4, 1, 3, 6];
  array.sort((a, b) => (a > b) ? 1 : -1);
  console.log(array);
  ```

- Spread operator

  ```javascript
  function funcWithThreeInputs(a, b, c) {
      return a + b + c;
  }
  
  const array = [1, 2, 3];
  const result = funcWithThreeInputs(...array);
  console.log(result);
  ```

- Destructuring

  ```javascript
  function funcWithTwoLenArray() {
      return [1, 2]
  }
  const array = funcWithTwoLenArray();
  const [a, b] = array;
  console.log(a + ', ' + b);
  
  const [c, d] = funcWithTwoLenArray();
  console.log(c + ', ' + d);
  ```
  
- Template literal

  ```javascript
  const a = 10;
  const s = 'Dollars';
  console.log('I have ' + a + ' ' + s + '.');  // ES5
  console.log(`I have ${a} ${s}.`);  // ES6
  ```

## 좋은 습관/나쁜 습관

- var, let, const
  - var와 let, const를 섞어 쓰는 습관이 있다면 없애도록 하자.
  - 모두 var를 쓰거나, let, const를 사용하도록 하자.
- Semi colons
  - 세미콜론은 기본적으로 항상 사용하도록 하자.
  - Python 등으로 세미콜론을 사용하지 않는 습관이 들어 있다면, 아예 사용하지 말자.
- Equal operators
  - 일반적으로 == 대신 ===를 쓰는 것이 좋다.
  - 엄밀하게 동작하는 ===를 사용하는 것이 미검출 오류가 발생할 확률을 줄여준다.
  - 반드시 ==를 써야 할 경우가 있다면, 주석으로 이유를 적어두자.

## JavaScript References

- <https://devdocs.programmers.co.kr/javascript/>
- <https://developer.mozilla.org/ko/docs/Web/JavaScript>
