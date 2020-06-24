function solution(n) {
    const hash = new Map();
    hash.set(1, 1);
    hash.set(2, 2);

    for (let i = 3; i < n + 1; i++) {
        const val = (hash.get(i - 1) + hash.get(i - 2)) % 1000000007
        hash.set(i, val);
    }

    answer = hash.get(n);
    return answer;
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(10));
console.log(solution(1000));
console.log(solution(6000));