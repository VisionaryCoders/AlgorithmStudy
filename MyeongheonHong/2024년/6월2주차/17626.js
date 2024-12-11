//https://www.acmicpc.net/problem/17626

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
  const dp = new Array(N + 1).fill(1)

  for (let i = 1; i < N + 1; i++) {
    dp[i] = i
  }

  for (let i = 2; i <= N; i++) {
    let min = 4

    for (let j = 1; j <= Math.sqrt(i); j++) {
      min = Math.min(min, dp[i - j ** 2])
    }
    dp[i] = min + 1
  }

  console.log(dp[N])
}

solution()
