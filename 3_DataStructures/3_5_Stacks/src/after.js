class Stack {
    constructor(capacity) {
        this.capacity = capacity
        this.top = 0;
        this.array = new Array(capacity);
    }

    push(value) {
        if (this.top === this.capacity) {
            console.error('stack overflow');
            return false;
        }
        this.array[this.top++] = value;
        return true;
    }

    pop() {
        if (this.top === 0) {
            console.error('stack underflow');
            return undefined;
        }
        return this.array[--this.top];
    }

    peek() {
        if (this.top === 0) {
            return undefined;
        }
        return this.array[this.top - 1];
    }

    isEmpty() {
        if (this.top === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    print() {
        let s = '';
        for (let i = 0; i < this.top; i++) {
            s += `${this.array[i]} `;
        }
        console.log(`[${s}]`);
    }
}

stack = new Stack(4);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();

stack.push(5);
stack.print();

console.log(stack.pop());
console.log(stack.pop());
stack.print();

console.log(stack.peek());
stack.print();

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.print();