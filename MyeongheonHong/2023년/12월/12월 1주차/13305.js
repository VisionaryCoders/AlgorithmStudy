// URL : https://www.acmicpc.net/problem/13305

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');
const INPUT_LENGTH = Number(input.shift());

const distance = input[0].split(' ').map((e) => BigInt(e));
const price = input[1].split(' ').map((e) => BigInt(e));

function solution() {
  let length = distance.reduce((acc, curr) => BigInt(acc) + curr, 0);
  let answer = price[0] * length;
  let sum = 0n;

  for (let i = 0; i < price.length - 1; i++) {
    answer = Math.min(String(answer), String(sum + length * price[i]));
    length -= distance[i];
    sum += price[i] * distance[i];
  }
  console.log(String(answer));
}

solution();
