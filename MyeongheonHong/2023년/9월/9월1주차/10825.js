// URL : https://www.acmicpc.net/problem/10825

function getTestCase() {
  const fs = require('fs');

  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs.readFileSync(filePath).toString().trim();
  input = input.split('\n');

  const inputLength = input.shift();

  const inputTestCase = input.map((array) => {
    return array.split(' ').map((element, index) => {
      if (index > 0) element = Number(element);
      return element;
    });
  });

  return inputTestCase;
}

function solution() {
  const inputTestCase = getTestCase();

  function sortAlphabetically(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  inputTestCase.sort(
    (a, b) =>
      b[1] - a[1] ||
      a[2] - b[2] ||
      b[3] - a[3] ||
      sortAlphabetically(a[0], b[0])
  );

  // inputTestCase.sort((a, b) => {
  //   if (a[1] === b[1]) {
  //     if (a[2] === b[2]) {
  //       if (a[3] === b[3]) {
  //         return sortAlphabetically(a[0], b[0]);
  //       }
  //       return b[3] - a[3];
  //     }
  //     return a[2] - b[2];
  //   }
  //   return b[1] - a[1];
  // });

  const answer = [];

  inputTestCase.forEach((array) => {
    answer.push(array[0]);
  });

  console.log(answer.join('\n'));
}

solution();

// 12
// Junkyu 50 60 100
// Sangkeun 80 60 50
// Sunyoung 80 70 100
// Soong 50 60 90
// Haebin 50 60 100
// Kangsoo 60 80 100
// Donghyuk 80 60 100
// Sei 70 70 70
// Wonseob 70 70 90
// Sanghyun 70 70 80
// nsj 80 80 80
// Taewhan 50 60 90
