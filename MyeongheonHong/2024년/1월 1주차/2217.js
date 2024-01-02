// URL : https://www.acmicpc.net/problem/2217

const fs = require('fs');

const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());

const array = input.map((e) => {
  return Number(e);
});

function solution() {
  array.sort((a, b) => a - b);

  const weightSum = array.map((e, index) => {
    return e * (N - index);
  });

  console.log(Math.max(...weightSum));
}

solution();
