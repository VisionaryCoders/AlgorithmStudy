// URL : https://www.acmicpc.net/problem/1931

function getTestCase() {
  const fs = require('fs');

  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs.readFileSync(filePath).toString().trim();
  input = input.split('\n');

  const inputLength = input[0];
  const inputTestCase = [];

  for (let i = 1; i <= inputLength; ++i) {
    const arr = input[i].split(' ').map((item) => Number(item));
    inputTestCase.push(arr);
  }

  return inputTestCase;
}

function solution() {
  let inputTestCase = getTestCase();
  let answer = 0;

  inputTestCase.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  let result = 1;
  let firstEndTime = inputTestCase[0][1];

  for (let i = 1; i < inputTestCase.length; i++) {
    if (firstEndTime <= inputTestCase[i][0]) {
      firstEndTime = inputTestCase[i][1];
      result += 1;
    }
  }
  console.log(result);
}

solution();

//입출력 테스트

// 11
// 1 4
// 3 5
// 0 6
// 5 7
// 3 8
// 5 9
// 6 10
// 8 11
// 8 12
// 2 13
// 12 14
