//URL : https://www.acmicpc.net/problem/11399

function getTestCase() {
  const fs = require('fs');

  // let input = fs.readFileSync('/dev/stdin').toString().trim(); // 백준 입출력테스트 코드
  let input = fs.readFileSync('./input.txt').toString().trim(); //vscode 입출력테스트 코드

  input = input.split('\n');

  const inputLength = input[0];
  const inputTestCase = input[1].split(' ').map((number) => Number(number));

  return inputTestCase;
}

function solution() {
  let inputTestCase = getTestCase();
  let [answer, sum] = [0, 0];

  inputTestCase.sort((a, b) => a - b);

  for (let i = 0; i < inputTestCase.length; i++) {
    sum += inputTestCase[i];
    answer += sum;
  }

  return answer;
}

console.log(solution());

//입출력 테스트

// 5
// 3 1 4 3 2
