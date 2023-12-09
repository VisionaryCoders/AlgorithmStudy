// URL : https://www.acmicpc.net/problem/1439

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n')[0];

function solution() {
  const answer = [];
  for (let i = 1; i < input.length; i++) {
    if (Number(input[i]) !== Number(input[i - 1])) {
      answer.push(Number(input[i - 1]));
    }
  }
  console.log(Math.round(answer.length / 2));
}

solution();
