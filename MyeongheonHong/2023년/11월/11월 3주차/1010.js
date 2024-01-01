// URL : https://www.acmicpc.net/problem/1010

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');

const INPUT_LENGTH = Number(input.shift());
const testCase = [];

for (let i = 0; i < INPUT_LENGTH; i++) {
  testCase.push(input[i].split(' '));
}

function solution(testCase) {
  const N = Number(testCase[0]);
  const M = Number(testCase[1]);

  function factorial(n) {
    if (n === 1 || n === 0) return 1;
    return n * factorial(n - 1);
  }

  if (N === M) {
    console.log(1);
  } else {
    console.log(
      String(Math.round(factorial(M) / (factorial(N) * factorial(M - N))))
    );
  }
}

for (let i = 0; i < INPUT_LENGTH; i++) {
  solution(testCase[i]);
}
