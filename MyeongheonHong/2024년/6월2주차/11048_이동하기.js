//https://www.acmicpc.net/problem/11048

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const arr = []
arr.push(new Array(M + 1).fill(0))
input.map((n) => {
  const temp = n.split(' ').map(Number)
  temp.unshift(0)
  arr.push(temp)
})

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  const dp = []

  for (let i = 0; i < N + 1; i++) {
    dp.push(new Array(M + 1).fill(0))
  }

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < M + 1; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + arr[i][j]
    }
  }

  console.log(dp[N][M])
}

solution()
