// https://www.acmicpc.net/problem/11727

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = Number(input[0])

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  const dp = new Array(N + 1)
  dp[0] = dp[1] = 1
  dp[2] = 3
  for (let i = 3; i < N + 1; i++) {
    dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007
  }
  console.log(dp[N])
}

solution()
