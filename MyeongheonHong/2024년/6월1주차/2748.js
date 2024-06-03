//https://www.acmicpc.net/problem/2748

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
  const dp = new Array(N + 1).fill(BigInt(0))

  dp[1] = BigInt(1)

  for (let i = 2; i < N+1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  console.log(dp[N ].toString())
}

solution()
