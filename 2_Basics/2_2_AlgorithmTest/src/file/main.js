const fs = require('fs');
const path = require('path');

const pathDir = __dirname;

function readTestFile(fileName) {
    return fs.readFileSync(fileName).toString();
}

function runTest(fileName) {
    const input = readTestFile(fileName).split(' ');
    var a = parseInt(input[0]);
    var b = parseInt(input[1]);
    console.log(a+b);
}

fs.readdir(pathDir, (err, files) => {
    files.forEach(file => {
        if (file.split('.')[1] !== 'txt') {
            return;
        }

        console.log(`Testing ${file}...`);
        console.log('====================================');
        console.log('Test Ouput:');
        
        const tStart = new Date().getTime();
        runTest(path.join(pathDir, file));
        const tDiff = new Date().getTime() - tStart;
        
        console.log(`${tDiff}ms ellapsed.`);
        console.log('====================================\n');
    });
});
