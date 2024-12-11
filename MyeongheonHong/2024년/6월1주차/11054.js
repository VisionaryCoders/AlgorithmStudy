//https://www.acmicpc.net/problem/11054

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()

const arr = input[0].split(' ').map((e) => {
  return Number(e)
})

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  if (N === 1) {
    console.log(1)
    return
  }

  const dp = new Array(N).fill(1)

  for (let i = 0; i < N; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  const dp2 = new Array(N).fill(1)

  for (let i = N - 1; i >= 0; i--) {
    dp2[i] = 1
    for (let j = i + 1; j < N; j++) {
      if (arr[j] < arr[i]) {
        dp2[i] = Math.max(dp2[i], dp2[j] + 1)
      }
    }
  }

  console.log(Math.max(...dp.map((n, index) => n + dp2[index])) - 1)
}

solution()
