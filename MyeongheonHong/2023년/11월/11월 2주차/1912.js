// URL : https://www.acmicpc.net/problem/1912
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');

const INPUT_LENGTH = input.shift();
const testCase = [];

input = input[0].split(' ');

for (let i = 0; i < INPUT_LENGTH; i++) {
  testCase.push(Number(input[i]));
}

// n은 정수
// 연속된 몇개의 수
// 가장 큰 합
// 한개 이상 선택

function solution() {
  const DP = [...testCase];

  let sum = 0;

  for (let i = 1; i < INPUT_LENGTH; i++) {
    DP[i] = Math.max(DP[i], DP[i] + DP[i - 1]);
  }



  console.log(Math.max(...DP));
}

solution();
