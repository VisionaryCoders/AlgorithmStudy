// https://www.acmicpc.net/problem/1309

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
  const dp = [0, 3, 7]

  for (let i = 3; i < N + 1; i++) {
    dp.push((dp[i - 1] * 2 + dp[i - 2]) % 9901)
  }

  console.log(dp[N])
}

solution()
