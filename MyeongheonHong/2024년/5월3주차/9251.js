//https://www.acmicpc.net/problem/1450

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const strArr1 = input[0].split('')
const strArr2 = input[1].split('')

/**
 * 1. 각 문자열의 길이의 dp테이블을 만들어준다.
 * 2. 각 문자열을 순회하면서 맞는 문자열에는 dp테이블에 카운팅을 해준다.
 * 3. 테이블의 최대값을 출력해준다.
 */

function solution() {
  // 1. 각 문자열의 길이의 dp테이블을 만들어준다.
  const [N, M] = [strArr1.length, strArr2.length]
  const dp = []
  for (let i = 0; i < N + 1; i++) {
    const arr = new Array(M + 1).fill(0)
    dp.push(arr)
  }

  //2. 각 문자열을 순회하면서 맞는 문자열에는 dp테이블에 카운팅을 해준다.

  for (let i = 1; i < N + 1; i++) {
    const item1 = strArr1[i - 1]
    for (let j = 1; j < M + 1; j++) {
      const item2 = strArr2[j - 1]

      // console.log(item1, item2)
      //문자열이 같을 경우
      if (item1 === item2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }

      // console.log(dp)
    }
  }

  // 3. 테이블의 최대값을 출력해준다.
  console.log(Math.max(...dp[N]))
}

solution()
