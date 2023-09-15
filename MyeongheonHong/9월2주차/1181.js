// URL : https://www.acmicpc.net/problem/1181

function getTestCase() {
  const fs = require('fs');

  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs.readFileSync(filePath).toString().trim();
  input = input.split('\n');

  const inputLength = input.shift();
  const inputTestCase = new Set();

  for (let i = 0; i < inputLength; ++i) {
    inputTestCase.add(input[i]);
  }

  return [...inputTestCase];
}

function solution() {
  const inputTestCase = getTestCase();

  inputTestCase.sort((a, b) =>
    a.length < b.length
      ? -1
      : a.length > b.length
      ? 1
      : a < b
      ? -1
      : a > b
      ? 1
      : 0
  );

  console.log(inputTestCase.join('\n'));
}

solution();
