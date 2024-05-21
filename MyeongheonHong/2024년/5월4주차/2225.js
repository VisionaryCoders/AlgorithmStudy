//https://www.acmicpc.net/problem/2225

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, K] = input[0].split(' ').map((x) => {
  return Number(x)
})

/**
 * 문제설계(20분)
 *
 * 1. table[]
 */

/**
 * 구현(20분)
 */

function solution() {
  const dp = []
  dp.push(new Array(N + 1).fill(1))
  for (let i = 0; i < K - 1; i++) {
    dp.push(new Array(N + 1).fill(1))
  }

  for (let i = 1; i < K; i++) {
    for (let j = 1; j < N + 1; j++) {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000
    }
  }

  console.log(dp[K - 1][N])
}

solution()
