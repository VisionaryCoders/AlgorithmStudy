//https://www.acmicpc.net/problem/1699

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
  const dp = new Array(N + 1)
  for (let i = 0; i < N + 1; i++) {
    dp[i] = i
  }

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1)
    }
  }

  console.log(dp[N])
}

solution()
