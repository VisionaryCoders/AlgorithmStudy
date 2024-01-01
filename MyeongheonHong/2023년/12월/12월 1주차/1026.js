// URL : https://www.acmicpc.net/problem/1026

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');
const INPUT_LENGTH = Number(input.shift());
const A = [];
const B = [];

const arrayA = input[0].split(' ');
const arrayB = input[1].split(' ');

for (let i = 0; i < INPUT_LENGTH; i++) {
  A.push(Number(arrayA[i]));
  B.push(Number(arrayB[i]));
}

function solution() {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < INPUT_LENGTH; i++) {
    sum += A[i] * B[i];
  }

  console.log(sum);
}

solution();
