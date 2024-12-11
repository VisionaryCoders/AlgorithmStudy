//https://www.acmicpc.net/problem/11722

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()
const arr = input[0].split(' ').map(Number)

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  const dp = new Array(N).fill(1)
  dp[0] = 1

  for (let i = 1; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  console.log(Math.max(...dp))
}

solution()
