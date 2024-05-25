//https://www.acmicpc.net/problem/1520

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [M, N] = input
  .shift()
  .split(' ')
  .map((n) => {
    return Number(n)
  })

const table = []

table.push(new Array(N + 2).fill(0))

input.map((arr) => {
  const temp = arr.split(' ').map((n) => {
    return Number(n)
  })
  temp.unshift(0)
  temp.push(0)
  table.push(temp)
})
table.push(new Array(N + 2).fill(0))

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  const dp = []
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  for (let i = 0; i < M + 2; i++) {
    dp.push(new Array(N + 2).fill(-1))
  }

  dp[1][1] = 1

  function dfs(ci, cj) {
    console.log(ci,cj,'--------------')
    console.log(dp)
    //첫방문
    if (dp[ci][cj] === -1) {
      dp[ci][cj] = 0

      direction.map((e) => {
        const [pi, pj] = [ci + e[0], cj + e[1]]

        if (table[pi][pj] > table[ci][cj]) {
          dp[ci][cj] += dfs(pi, pj)
        }
      })
    }
    return dp[ci][cj]
  }

  console.log(dfs(M, N))
}

solution()
