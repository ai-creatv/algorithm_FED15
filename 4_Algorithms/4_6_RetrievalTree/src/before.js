class Node {
    constructor(value) {
        this.value = value;
        this.child = new Map();
        this.sub_count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
    }
    
    insert(word) {
        
    }
    
    countMatch(query) {
        return 0;
    }
}

function solution(words, queries) {
    const answer = [];
    return answer;
}

words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
queries = ["fro??", "????o", "fr???", "fro???", "pro?"];
console.log(solution(words, queries));
