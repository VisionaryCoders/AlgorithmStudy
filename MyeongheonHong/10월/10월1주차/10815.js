// URL : https://www.acmicpc.net/problem/10815

function getTestCase() {
  const fs = require('fs');

  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs.readFileSync(filePath).toString().trim();
  input = input.split('\n');

  const firstArrayLength = input.shift();
  let firstTemp = input.shift();
  firstTemp = firstTemp.split(' ');
  const firstArray = [];

  for (let i = 0; i < firstArrayLength; i++) {
    firstArray.push(Number(firstTemp[i]));
  }

  const secondArrayLength = input.shift();
  let secondTemp = input.shift();
  secondTemp = secondTemp.split(' ');
  const secondArray = [];
  for (let i = 0; i < secondArrayLength; i++) {
    secondArray.push(Number(secondTemp[i]));
  }

  return { firstArray, secondArray };
}

function solution() {
  const { firstArray, secondArray } = getTestCase();
  const answer = [];

  firstArray.sort((a, b) => a - b);

  const left = 0;
  const right = firstArray.length - 1;

  function binarySearch(target, list, left, right) {
    const mid = Math.floor((left + right) / 2);

    if (left > right) {
      answer.push(0);
      return;
    }

    if (list[mid] > target) {
      right = mid - 1;
    } else if (list[mid] < target) {
      left = mid + 1;
    } else {
      answer.push(1);
      return;
    }
    binarySearch(target, list, left, right);
  }

  secondArray.forEach((num) => {
    binarySearch(num, firstArray, left, right);
  });
  console.log(answer.join(' '));
}

solution();
