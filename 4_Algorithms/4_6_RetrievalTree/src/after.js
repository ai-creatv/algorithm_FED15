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
        let curr = this.root;
        
        for (let c of word) {
            if (curr.child.has(c) === false) {
                curr.child.set(c, new Node(c));
            }
            curr.sub_count++;
            curr = curr.child.get(c);
        }
        
        curr.child['*'] = null;
    }
    
    countMatch(query) {
        let curr = this.root;
        
        for (let c of query) {
            if (c === '?') {
                return curr.sub_count;
            }
            
            if (curr.child.has(c) === false) {
                return 0;
            }
            
            curr = curr.child.get(c);
        }
        
        return 1;
    }
}

function solution(words, queries) {
    const tries = new Map();
    const invTries = new Map();
    
    for (let word of words) {
        const n = word.length;
        const invWord = word.split('').reverse().join('');
        
        if (tries.has(n) === false) {
            tries.set(n, new Trie());
            invTries.set(n, new Trie()); 
        }
        tries.get(n).insert(word);
        invTries.get(n).insert(invWord);
    }
    
    const answer = new Array();
    for (let query of queries) {
        const n = query.length;
        
        if (tries.has(n) === false) {
            answer.push(0);
        }
        else if (query[0] !== '?') {
            answer.push(tries.get(n).countMatch(query));
        }
        else {
            const invQuery = query.split('').reverse().join('');
            answer.push(invTries.get(n).countMatch(invQuery))
        }
    }
    
    return answer;
}

words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
queries = ["fro??", "????o", "fr???", "fro???", "pro?"];
console.log(solution(words, queries));
