function solution(skill, skill_trees) {
    let answer = 0;

    loop:
    for (let tree of skill_trees) {
        let lastIndex = -1;
        let noMoreFlag = false;
        
        for (let a of skill) {
            let currIndex = tree.indexOf(a);
            
            if (currIndex === -1) {
                noMoreFlag = true;
                continue;
            }
            
            if (noMoreFlag === true) {
                continue loop;
            }
            
            if (currIndex < lastIndex) {
                continue loop;
            }
            lastIndex = currIndex;
        }
        
        answer++;
    }
    
    return answer;
}

skill = 'CBD';
skill_trees = ['BACDE', 'CBADF', 'AECB', 'BDA'];
console.log(solution(skill, skill_trees));