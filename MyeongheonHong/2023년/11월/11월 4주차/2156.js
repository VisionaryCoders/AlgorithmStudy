// URL : https://www.acmicpc.net/problem/2156

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');

const INPUT_LENGTH = Number(input.shift());

const testCase = [];
for (let i = 0; i < INPUT_LENGTH; i++) {
  testCase.push(Number(input[i]));
}

// 연속 3잔 금지
// 최대한 많은 양
//1 ≤ n ≤ 10,000
function solution() {
  const DP = [...testCase];

  if (INPUT_LENGTH === 1) {
    console.log(DP[0]);
  } else if (INPUT_LENGTH === 2) {
    console.log(DP[0] + DP[1]);
  } else {
    DP[1] = DP[0] + DP[1];
    DP[2] = Math.max(DP[1], testCase[0] + DP[2], testCase[1] + testCase[2]);

    for (let i = 3; i < INPUT_LENGTH; i++) {
      DP[i] = Math.max(
        DP[i - 3] + testCase[i - 1] + testCase[i],
        testCase[i] + DP[i - 2],
        DP[i - 1]
      );
    }

    console.log(Math.max(...DP));
  }
}

solution();
