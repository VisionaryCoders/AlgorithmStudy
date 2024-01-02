// URL : https://www.acmicpc.net/problem/9095

function getTestCase() {
  const fs = require('fs');

  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs.readFileSync(filePath).toString().trim();
  input = input.split('\n');

  const inputLength = input.shift();
  const testCase = [];

  for (let i = 0; i < inputLength; i++) {
    testCase.push(Number(input[i]));
  }

  return { testCase };
}

function solution() {
  const { testCase } = getTestCase();

  const result = [];

  function dp(target, sum, index) {
    if (sum < target) {
      dp(target, sum + 1, index);
      dp(target, sum + 2, index);
      dp(target, sum + 3, index);
    } else if (sum > target) {
      return;
    } else {
      result[index]++;
    }
  }

  for (let i = 0; i < testCase.length; i++) {
    const sum = 0;
    const target = testCase[i];
    result.push(0);

    dp(target, sum + 1, i);
    dp(target, sum + 2, i);
    dp(target, sum + 3, i);
  }



  console.log(result.join('\n'))
}

solution();
