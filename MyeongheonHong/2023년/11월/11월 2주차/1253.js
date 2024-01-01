// URL : https://www.acmicpc.net/problem/1253

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

input = input.split('\n');

const INPUT_LENGTH = input.shift();

input = input[0].split(' ');

const testCase = [];

for (let i = 0; i < INPUT_LENGTH; i++) {
  testCase.push(Number(input[i]));
}

function solution() {
  testCase.sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i < INPUT_LENGTH; i++) {
    const target = testCase[i];

    console.log(testCase);
    answer += twoPointer(target, i);
  }

  function twoPointer(target, index) {
    let [start, end] = [0, INPUT_LENGTH - 1];
    let sum = 0;

    while (start < end) {
      sum = testCase[start] + testCase[end];

      if (sum < target) {
        start++;
      } else if (sum === target) {
        if (start === index) {
          start++;
        } else if (end === index) {
          end--;
        } else {
          return 1;
        }
      } else {
        end--;
      }
    }

    return 0;
  }

  console.log(answer);
}

solution();
