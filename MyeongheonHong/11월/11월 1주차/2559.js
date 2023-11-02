// URL : https://www.acmicpc.net/problem/2559

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');

const firstArray = input[0].split(' ');
const LENGTH = firstArray[0];
const DATE = Number(firstArray[1]);

const inputTestCase = [];

input = input[1].split(' ');

const testInput = input.map((num) => {
  return Number(num);
});

function solution() {
  let [start, end] = [0, 0];

  const tempSum = [];
  let dayCount = 0;
  let sum = 0;

  while (end <= LENGTH) {
    if (dayCount < DATE) {
      sum += testInput[end++];
      dayCount++;
    } else {
      tempSum.push(sum);
      sum -= testInput[start++];
      dayCount--;
    }
  }

  console.log(Math.max(...tempSum));
}

solution();
