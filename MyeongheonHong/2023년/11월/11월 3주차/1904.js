// URL : https://www.acmicpc.net/problem/1904

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');

const N = Number(input.shift());

// 1 ≤ N ≤ 1,000,000
// 00연속으로 사용되어야됨

function solution() {
  const DP = new Array(N + 1);
  DP[1] = 1;
  DP[2] = 2;
  for (let i = 3; i <= N; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2]) % 15746;
  }
  console.log(DP[N] % 15746);
}

solution();
