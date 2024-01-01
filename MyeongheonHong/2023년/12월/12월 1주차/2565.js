// URL : https://www.acmicpc.net/problem/2565

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');
const INPUT_LENGTH = Number(input.shift());
const testCase = [];

for (let i = 0; i < INPUT_LENGTH; i++) {
  const temp = input[i].split(' ');
  testCase.push([Number(temp[0]), Number(temp[1])]);
}

function solution() {
  testCase.sort((a, b) => a[0] - b[0]);
  const dp = [];

  for (let i = 0; i < INPUT_LENGTH; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (testCase[j][1] < testCase[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(INPUT_LENGTH - Math.max(...dp));
}

solution();
