//https://www.acmicpc.net/problem/

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

function solution() {
  const dp = {}
  dp[0] = dp[1] = 0
  dp[2] = dp[3] = 1

  const answer = {}
  answer[0] = dp[1] = 0
  answer[2]

  for (let i = 4; i < N + 1; i++) {
    dp[i] = dp[i - 1] + 1

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i])
    }
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i / 3] + 1, dp[i])
    }
  }
}

solution()
