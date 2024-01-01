// URL : https://www.acmicpc.net/problem/1940

function getTestCase() {
  const fs = require('fs');

  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs.readFileSync(filePath).toString().trim();
  input = input.split('\n');

  const inputLength = input.shift();
  const sum = input.shift();
  const inputTestCase = [];

  input = input[0].split(' ');

  for (let i = 0; i < inputLength; i++) {
    inputTestCase.push(Number(input[i]));
  }

  return { inputTestCase, sum };
}

function solution() {
  const { inputTestCase, sum } = getTestCase();

  inputTestCase.sort((a, b) => a - b);

  let answer = new Set();

  for (let i = 0; i < inputTestCase.length; i++) {
    let [start, end] = [i, inputTestCase.length - 1];

    while (start !== end) {
      const total = inputTestCase[start] + inputTestCase[end];

      if (total < sum) {
        start++;
      } else if (total > sum) {
        end--;
      } else {
        answer.add(start);
        answer.add(end);
        break;
      }
    }
  }
  console.log(answer.size / 2);
}

solution();
