// URL : https://www.acmicpc.net/problem/1965

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');

const INPUT_LENGTH = Number(input.shift());
const testCase = [];
input = input[0].split(' ');

for (let i = 0; i < INPUT_LENGTH; i++) {
  testCase.push(Number(input[i]));
}

function solution() {
  const dp = [];

  for (let i = 0; i < INPUT_LENGTH; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (testCase[j] < testCase[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(Math.max(...dp));
}

solution();
