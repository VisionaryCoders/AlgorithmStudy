// URL : https://www.acmicpc.net/problem/2512

function getTestCase() {
  const fs = require('fs');

  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs.readFileSync(filePath).toString().trim();
  input = input.split('\n');
  const len = input.shift();
  input[0] = input[0].split(' ');
  const array = [];

  for (let i = 0; i < len; i++) {
    array.push(Number(input[0][i]));
  }

  const BUDGET = input[1];

  return { array, BUDGET };
}

// 1차시도 접근

function solution() {
  const { array, BUDGET } = getTestCase();

  const maxNumber = Math.max(...array);

  if (array.reduce((sum, num) => sum + num, 0) <= BUDGET) {
    console.log(maxNumber);
  } else {
    console.log(binarySearch(0, maxNumber - 1));
  }

  function binarySearch(left, right) {
    let maxBudget = 0;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      let budgetSum = array.reduce(
        (acc, cur) => (cur > mid ? acc + mid : acc + cur),
        0
      );
      if (budgetSum <= Number(BUDGET)) {
        maxBudget = mid;
        left = mid + 1;
      } else if (budgetSum > Number(BUDGET)) {
        right = mid - 1;
      }
    }
    return maxBudget;
  }
}

solution();
