// URL : https://www.acmicpc.net/problem/11057

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');

const INPUT_LENGTH = Number(input.shift());

// 수의 자리가 오름차순을 이루는 수 (인접한 수가 같아도 오름차순)
// 1 <= N <= 1000
function solution() {
  const DP = new Array(INPUT_LENGTH);

  DP[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  DP[1] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 2; i < INPUT_LENGTH; i++) {
    DP[i] = [];
    DP[i][0] = 1;
    for (let j = 1; j < 10; j++) {
      DP[i][j] = (DP[i][j - 1] + DP[i - 1][j]) % 10007;
    }
  }

  console.log(DP[INPUT_LENGTH - 1].reduce((acc, cur) => acc + cur, 0) % 10007);
}

solution();
