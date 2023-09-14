// URL : https://www.acmicpc.net/problem/11652

function getTestCase() {
  const fs = require('fs');

  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs.readFileSync(filePath).toString().trim();
  input = input.split('\n');

  const inputLength = input.shift();
  const inputTestCase = [];

  for (let i = 0; i < inputLength; ++i) {
    inputTestCase.push(BigInt(input[i]));
  }

  return inputTestCase;
}

function solution() {
  const inputTestCase = getTestCase();

  let answer = 0;
  let answerKey = 0;

  const result = inputTestCase.reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});

  Object.keys(result).forEach((key) => {
    if (result[key] > answer) {
      answer = result[key];
      answerKey = key;
    } else if (result[key] === answer) {
      answerKey = Math.min(key, answerKey);
    }
  });

  const resultNumber = BigInt(answerKey);
  console.log(resultNumber.toString());
}

solution();
