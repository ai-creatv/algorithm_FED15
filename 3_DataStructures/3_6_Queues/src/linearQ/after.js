class LinearQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.front = 0;
        this.rear = 0;
        this.array = new Array(capacity);
    }

    put(value) {
        if (this.rear === this.capacity) {
            console.error('queue overflow');
            return false;
        }
        
        this.array[this.rear++] = value;
        return true;
    }

    get() {
        if (this.front === this.rear) {
            console.error('queue underflow');
            return undefined;
        }
        return this.array[this.front++];
    }

    peek() {
        if (this.front === this.rear) {
            return undefined;
        }
        return this.array[this.front];
    }

    print() {
        let s = '';
        for (let i = this.front; i < this.rear; i++) {
            s += `${this.array[i]} `;
        }
        console.log(`[${s}]`);
    }
}

queue = new LinearQueue(5);
queue.print();

queue.put(1);
queue.put(2);
queue.put(3);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();

queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();