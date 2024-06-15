//https://www.acmicpc.net/problem/15990

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

// 1. 변수 초기화
const MOD = 1000000009
const MAX_N = 100000
const dp = Array.from({ length: MAX_N + 1 }, () => new Array(4).fill(0))

dp[1][1] = dp[2][2] = dp[3][1] = dp[3][2] = dp[3][3] = 1

for (let i = 4; i < MAX_N + 1; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD
  dp[i][0] = dp[i][1] + dp[i][2] + dp[i][3]
}

let answer = ''

input.map((n) => {
  n = +n
  answer += `${(dp[n][1] + dp[n][2] + dp[n][3]) % MOD}\n`
})
console.log(answer)
