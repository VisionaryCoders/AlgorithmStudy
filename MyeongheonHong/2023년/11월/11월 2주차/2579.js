// URL : https://www.acmicpc.net/problem/2579

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');
const INPUT_LENGTH = input.shift();
const testCase = [];
for (let i = 0; i < INPUT_LENGTH; i++) {
  testCase.push(Number(input[i]));
}

//1차시도
// function solution() {
//   const queue = [];

//   function DP(stepSum, stepSize, score) {
//     stepSum += stepSize;
//     score += testCase[stepSum];
//     queue.push(stepSize);

//     if (queue.length > 3) {
//       queue.shift();
//     }

//     if ((queue.length === 3 && stepSum === 3) || stepSum > INPUT_LENGTH - 1) {
//       return -1;
//     } else if (stepSum === INPUT_LENGTH - 1) {
//       return score;
//     } else {
//       return Math.max(DP(stepSum, 1, score), DP(stepSum, 2, score));
//     }
//   }

//   console.log(Math.max(DP(0, 0, 0), DP(0, 1, 0)));
// }

function solution() {
  const DP = new Array(INPUT_LENGTH).fill(0);

  let step = INPUT_LENGTH - 1;
  DP[0] = testCase[0];
  DP[1] = testCase[0] + testCase[1];
  DP[2] = Math.max(testCase[0], testCase[1]) + testCase[2];

  for (let i = 3; i < INPUT_LENGTH ; i++) {
    DP[i] = Math.max(
      DP[i - 3] + testCase[i - 1] + testCase[i],
      DP[i - 2] + testCase[i]
    );
  }

  console.log(DP[INPUT_LENGTH-1]);
}

solution();
