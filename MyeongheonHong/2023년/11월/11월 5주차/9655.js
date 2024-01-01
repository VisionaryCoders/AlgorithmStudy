// URL : https://www.acmicpc.net/problem/9655

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');

const INPUT_LENGTH = Number(input.shift());

function solution() {
  INPUT_LENGTH % 2 === 0 ? console.log('CY') : console.log('SK');
}

solution();
