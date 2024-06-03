//https://www.acmicpc.net/problem/1149

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()
const arr = input.map((e) => {
  return e.split(' ').map(Number)
})

/**
 * 문제설계(20분)
 * dp-> memo
 */

/**
 * 구현(20분)
 */

function solution() {
  const dp = []
  for (let i = 0; i < N; i++) {
    dp.push(new Array(3).fill(0))
  }

  dp[0][0] = arr[0][0]
  dp[0][1] = arr[0][1]
  dp[0][2] = arr[0][2]

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < 3; j++) {
      const x1 = (j + 1) % 3
      const x2 = (j + 2) % 3
      dp[i][j] += Math.min(dp[i-1][x1], dp[i-1][x2]) + arr[i][j]
    }
  }
  console.log(Math.min(...dp[N-1]))
}

solution()
