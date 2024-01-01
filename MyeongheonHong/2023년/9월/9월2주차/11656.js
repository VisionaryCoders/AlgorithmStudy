// URL : https://www.acmicpc.net/problem/11656

function getTestCase() {
  const fs = require('fs');

  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs.readFileSync(filePath).toString().trim();
  input = input.split('\n');

  return input[0];
}

function solution() {
  const inputTestCase = getTestCase();
  const result = [];

  for (let i = 0; i < inputTestCase.length; i++) {
    const word = inputTestCase.substring(i, inputTestCase.length);
    result.push(word);
  }

  result.sort((a, b) => a.localeCompare(b));
  console.log(result.join('\n'));
}

solution();
