function solution(genres, plays) {
    const map1 = new Map();
    const map2 = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        const [g, p] = [genres[i], plays[i]];
        if (map1.has(g) === false) {
            map1.set(g, 0);
            map2.set(g, new Array());
        }
        map1.set(g, map1.get(g) + p);
        map2.get(g).push([i, p]);
    }
    
    const sortMap1 = Array.from(map1.entries()).sort((a, b) => a[1] < b[1] ? 1 : -1);
   
    let answer = new Array();
    sortMap1.map(el => el[0]).forEach(el => {
        const array = map2.get(el)
        array.sort((a, b) => a[1] < b[1] ? 1 : -1);
        answer = answer.concat(array.map(e => e[0]).slice(0, 2));
    });
    
    return answer;
}

genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));