const fs = require('fs');
const path = require('path');

const pathDir = __dirname;

function readTestFile(fileName) {
    function parseIntArray(s) {
        return [s.slice(1, s.length-1).split(',').map(el => parseInt(el))];
    }
    function parseScalars(s) {
        return s.split(' ').map(el => parseInt(el));
    }

    const inputs = fs.readFileSync(fileName).toString();
    const parsedInputs = parseIntArray(inputs);
    return parsedInputs
}

function solution(a) {
    let answer = a[0] + a[1]
    return answer
}

fs.readdir(pathDir, (err, files) => {
    files.forEach(file => {
        if (file.split('.')[1] !== 'txt') {
            return;
        }

        console.log(`Testing ${file}...`);
        console.log('====================================');
        console.log('Test Ouput:');
        
        const parsedInputs = readTestFile(path.join(pathDir, file));

        const tStart = new Date().getTime();
        answer = solution(...parsedInputs);
        console.log(answer);
        const tDiff = new Date().getTime() - tStart;
        
        console.log(`${tDiff} ms ellapsed.`);
        console.log('====================================\n');
    });
});
