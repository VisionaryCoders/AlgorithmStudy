//https://www.acmicpc.net/problem/1915

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = Number(input[0].split(' ')[0])
const M = Number(input[0].split(' ')[1])

input.shift()
const arr = input.map((e) => {
  return e.split('')
})

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  const table = []

  for (let i = 0; i < N; i++) {
    const tempArr = []
    for (let j = 0; j < M; j++) {
      tempArr.push(Number(arr[i][j]))
    }

    table.push(tempArr)
  }

  const dp = table.map((x) => [...x])

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      if (table[i][j]) {
        if (table[i - 1][j - 1] && table[i - 1][j] && table[i][j - 1]) {
          dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j], dp[i][j-1]) +1
        } else {
          dp[i][j] = 1
        }
      } else {
        if (table[i - 1][j - 1] || table[i - 1][j] || table[i][j - 1]) {
          dp[i][j] = 1
        } else {
          dp[i][j] = 0
        }
      }
      // if (table[i][j]) dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
    }
  }

  // console.log(dp)
  const flatDp = dp.flat()
  const max = Math.max(...flatDp)

  console.log(max * max)
}

solution()
