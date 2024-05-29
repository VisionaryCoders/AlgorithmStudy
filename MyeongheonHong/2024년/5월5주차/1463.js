//https://www.acmicpc.net/problem/1463

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];

/**
 * 문제설계(20분)
 * if(i%2 === 0){
 *  dp[i] = Math.min(dp[i/2],dp[i-1]+1)
 * }else if(i%3 ===0){
 *  dp[i] = Math.min(dp[i/3],dp[i-1]+1)
 * }else{
 *  dp[i] = dp[i-1+1
 * }
 */

/**
 * 구현(20분)
 */

function solution() {
  const dp = new Array(N + 1);
  dp[0] = dp[1] = 0;
  dp[2] = dp[3] = 1;

  for (let i = 4; i < N + 1; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
    }
  }
  // console.log(dp);
  console.log(dp[N]);
}

solution();
