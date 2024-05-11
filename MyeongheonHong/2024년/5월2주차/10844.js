//https://www.acmicpc.net/problem/10844

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

let input = Number(fs.readFileSync(filePath).toString().trim())

/**
 * 문제설계
  1. 규칙성을 발견하여 점화식으로 해결
  2. 해당 수는 위에 있는 양쪽의 숫자만큼 더한 값이라는 식을 발견하여서 해결
 */

function solution() {
  //dp table 초기화

  const num = 1000000000
  const dp = []
  const init = new Array(12).fill(1)

  init[0] = init[1] = init[11] = 0

  dp.push(init)

  for (let i = 1; i < input; i++) {
    dp.push(new Array(12).fill(0))
  }

  for (let i = 1; i < input; i++) {
    for (let j = 0; j < 12; j++) {
      if (j === 0 || j === 11) {
        dp[i][j] = 0
      } else {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % num
      }
    }
  }

  const sum = dp[input - 1].reduce((acc, curr) => {
    return (acc += curr)
  })

  console.log(sum % num)
}

solution()
