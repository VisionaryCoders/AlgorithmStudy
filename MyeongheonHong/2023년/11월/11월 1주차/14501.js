// URL : https://www.acmicpc.net/problem/14501

const getTestCase = () => {
  const fs = require('fs');

  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs.readFileSync(filePath).toString().trim();
  input = input.split('\n');

  const inputLength = input.shift();
  const testCase = [];

  for (let i = 0; i < inputLength; i++) {
    const array = input[i].split(' ');
    testCase.push([Number(array[0]), Number(array[1])]);
  }

  return { testCase };
};

//1차시도

// const solution = () => {
//   const { testCase } = getTestCase();
//   const dDay = testCase.length;
//   const result = [];

//   for (let i = 0; i < dDay; i++) {
//     const startDay = i;
//     const [date, pay] = testCase[i];

//     if (startDay + date > dDay) continue;

//     result.push(getMaxPay(startDay));
//   }

//   function getMaxPay(startDay) {
//     if (startDay > dDay) return -987654321;
//     if (startDay === dDay) return 0;

//     const [date, pay] = testCase[startDay];

//     return Math.max(getMaxPay(startDay + 1), getMaxPay(startDay + date) + pay);
//   }

//   console.log(Math.max.apply(null, result))
// };

//2차시도 (블로그 참고)
const solution = () => {
  const { testCase } = getTestCase();
  const dDay = testCase.length;
  const DP = Array(dDay).fill(0);

  for (let i = 0; i < dDay; i++) {
    const [date, pay] = testCase[i];
    if (i + date > dDay) continue;

    DP[i] = DP[i] + pay;

    for (let j = i + date; j < dDay; j++) {
      DP[j] = Math.max(DP[i], DP[j]);
    }
  }
  console.log(Math.max(...DP));
};

solution();
