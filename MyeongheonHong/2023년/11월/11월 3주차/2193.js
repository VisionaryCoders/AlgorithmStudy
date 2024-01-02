// URL : https://www.acmicpc.net/problem/2193
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = input.split('\n');

const INPUT_LENGTH = input.shift();

/**
 * 문제 조건 :
 * 1. 이친수는 0으로 시작하지 않는다.
 * 2. 이친수에서는 1이 두번 연속으로 나타나지 않는다.
 * 1 <= N <= 90
 */

// function solution() {
//   let binary = '1';
//   const result = [];

//   function findNumber(binary) {
//     if (
//       Number(binary[binary.length - 1]) + Number(binary[binary.length - 2]) ===
//         2 ||
//       Number(binary[0]) === 0
//     ) {
//       return;
//     } else if (binary.length === Number(INPUT_LENGTH)) {
//       result.push(binary);
//     } else {
//       findNumber(binary + '0');
//       findNumber(binary + '1');
//     }
//   }

//   if (Number(INPUT_LENGTH) <= 2) {
//     console.log(1);
//   } else {
//     findNumber(binary);
//     console.log(result);
//   }
// }

function solution() {
  let result = Array(INPUT_LENGTH);
  result[0] = 1;
  result[1] = 1;

  for (let i = 2; i < INPUT_LENGTH; i++) {
    result[i] = BigInt(result[i - 1]) + BigInt(result[i - 2]);
  }

  console.log(String(result[INPUT_LENGTH - 1]));
}

solution();
