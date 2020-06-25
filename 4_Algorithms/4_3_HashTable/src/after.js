function solution(clothes) {
    const map = new Map();
    for (let [item, category] of clothes) {
        if (map.has(category) === false) {
             map.set(category, 0);
        }
        map.set(category, map.get(category) + 1);
    }
    
    let answer = 1;
    for (let el of map.values()) {
        answer *= (el + 1);
    }
    answer--;
    return answer;
}

console.log([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']]);
console.log([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']]);