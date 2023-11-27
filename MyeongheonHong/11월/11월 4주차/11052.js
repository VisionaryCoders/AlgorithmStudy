// URL : https://www.acmicpc.net/problem/11052

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
  const DP = [-1, ...testCase];

  DP[2] = Math.max(DP[2], DP[1] * 2);

  for (let i = 3; i <= INPUT_LENGTH; i++) {
    const maxArray = [];
    for (let j = 1; j < i / 2; j++) {
      maxArray.push(DP[j] + DP[i - j]);
    }
    if (i % 2 === 0) maxArray.push(DP[i / 2] * 2);

    DP[i] = Math.max(DP[i], Math.max(...maxArray));
  }
  console.log(Math.max(...DP));
}

solution();
