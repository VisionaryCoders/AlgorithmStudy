//https://www.acmicpc.net/problem/9465

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

function solution(len, arr) {
  const dp = []
  dp.push(new Array(len + 1).fill(0))
  dp.push(new Array(len + 1).fill(0))
  dp.push(new Array(len + 1).fill(0))
  dp[1][1] = arr[0][0]
  dp[2][1] = arr[1][0]
  dp[0][2] = Math.max(dp[1][1], dp[2][1])

  for (let i = 2; i < len + 1; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[2][i - 1])
    dp[1][i] = Math.max(dp[0][i - 1] + arr[0][i - 1], dp[2][i - 1] + arr[0][i - 1])
    dp[2][i] = Math.max(dp[0][i - 1] + arr[1][i - 1], dp[1][i - 1] + arr[1][i - 1])
  }

  return Math.max(dp[1][len], dp[2][len])
}

const answer = []
for (let i = 0; i < N; i++) {
  const len = +input.shift()
  const arr = []

  arr.push([...input.shift().split(' ').map(Number)])
  arr.push([...input.shift().split(' ').map(Number)])

  answer.push(solution(len, arr))
}

console.log(answer.join('\n'))
