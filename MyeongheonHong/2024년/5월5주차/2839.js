//https://www.acmicpc.net/problem/2839

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];

/**
 * 문제설계(20분)
 * 1. N+1 만큼 dp 테이블생성
 * 2. 5로 나눠질때, 3으로 나눠질때로 나누어서 dp에 저장
 */

/**
 * 구현(20분)
 */

function solution() {
  const dp = new Array(N + 1).fill(5002);
  dp[3] = dp[5] = 1;

  for (let i = 6; i < N + 1; i++) {
    dp[i] = Math.min(dp[i - 3] + 1, dp[i - 5] + 1);

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], i / 3);
    }

    if (i % 5 === 0) {
      dp[i] = Math.min(dp[i], i / 5);
    }
  }

  if (dp[N] > 2000) {
    console.log(-1);
  } else {
    console.log(dp[N]);
  }
}

// for (let i = 4000; i < 5001; i++) {
//   solution(i);
// }

solution();
