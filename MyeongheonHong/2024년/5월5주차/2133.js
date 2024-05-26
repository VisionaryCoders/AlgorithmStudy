//https://www.acmicpc.net/problem/2133

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input[0]

/**
 * 문제설계(20분)
 * 1.dp[i] = dp[i-2] * 3 - 3
 */

/**
 * 구현(20분)
 */

function solution() {
  const dp = new Array(N + 1).fill(0)
  dp[0] = 1
  dp[2] = 3

  for (let i = 4; i < N + 1; i += 2) {
    dp[i] = dp[i - 2] * 3
    for (let j = i - 4; j >= 0; j-=2) {
      dp[i] += dp[j] * 2
    }
  }

  console.log(dp[N])
}

solution()
