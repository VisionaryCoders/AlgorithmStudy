// URL : https://www.acmicpc.net/problem/2775

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');

const INPUT_LENGTH = input.shift();

const testCase = [];

for (let i = 0; i < INPUT_LENGTH; i++) {
  testCase.push([Number(input.shift()), Number(input.shift())]);
}

function solution(testCase) {
  // a >= 0 / b >=1; a === 0 && b = i;
  // N[a][b] = N[a-1][1] + N[a-1][2] + ... + N[a-1][b];

  const [floor, unit] = [testCase[0], testCase[1]];

  //주어진 b호까지 a = 0층을 초기화
  const apt = [];

  for (let a = 0; a <= floor; a++) {
    const array = new Array(unit);
    if (a === 0) apt.push(Array.from(new Array(unit), (x, i) => i + 1));
    else apt.push(array.fill(0));
  }

  if (floor === 0) {
    console.log(apt[floor][unit - 1]);
  } else {
    for (let a = 1; a <= floor; a++) {
      let sum = 0;
      for (let b = 0; b < unit; b++) {
        sum += apt[a - 1][b];
        apt[a][b] = sum;
      }
    }

    console.log(apt[floor][unit - 1]);
  }
}

for (let i = 0; i < INPUT_LENGTH; i++) {
  solution(testCase[i]);
}
