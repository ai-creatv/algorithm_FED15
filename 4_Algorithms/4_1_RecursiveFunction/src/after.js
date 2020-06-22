function solution(p) {
    return correctParenthesis(p);
}

function isCorrect(s){
    let balance = 0;
    
    for(let c of s){
        switch(c) {
            case '(':
                balance++;
                break;
            default:
                balance--;
        }
        
        if(balance < 0) {
            return false;
        }
    }
    
    if(balance == 0) {
        return true;
    } else {
        return false;
    }
}

function correctParenthesis(s){
    if(s === '' || isCorrect(s) === true) {
        return s;
    }
    
    let balance = 0;
    let u, v;
    for(let i = 0; i < s.length; i++) {
        let c = s[i];
        switch(c) {
            case '(':
                balance++;
                break;
            default:
                balance--;
        }
        if(i !== 0 && balance === 0) {
            u = s.slice(0, i + 1);
            v = s.slice(i + 1, s.length);
            break;
        }
    }
    
    if(isCorrect(u) === true) {
        return u + correctParenthesis(v);
    } else {
        let v_ = '(' + correctParenthesis(v) + ')';
        let u_ = u.slice(1, u.length - 1);
        for(let c of u_) {
            switch(c) {
                case '(':
                    v_ += ')';
                    break;
                default:
                    v_ += '(';
            }
        }
        return v_;
    }
}

console.log(solution("(()())()"));
console.log(solution(")("));
console.log(solution("()))((()"));