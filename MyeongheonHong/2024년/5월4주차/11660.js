//https://www.acmicpc.net/problem/11660

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, M] = input
  .shift()
  .split(' ')
  .map((e) => {
    return Number(e)
  })
const arr = []
for (let i = 0; i < N; i++) {
  const temp = input
    .shift()
    .split(' ')
    .map((n) => {
      return Number(n)
    })
  arr.push(temp)
}

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

const dp = []
const rowSum = []
const columnSum = []
for (let i = 0; i < N + 1; i++) {
  const temp = new Array(N + 1).fill(0)
  dp.push([...temp])
  rowSum.push([...temp])
  columnSum.push([...temp])
}

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) {
    dp[i][j] = arr[i - 1][j - 1] + dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1]
  }
}

const output = []
function solution(x1, y1, x2, y2) {
  output.push(dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1])
}

input.forEach((e) => {
  const [x1, y1, x2, y2] = e.split(' ')
  solution(Number(x1), Number(y1), Number(x2), Number(y2))
})

console.log(output.join('\n'))
