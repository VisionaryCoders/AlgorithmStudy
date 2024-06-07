//https://www.acmicpc.net/problem/14002

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
  const dp = new Array(N).fill(0)
  const answer = []
  dp[0] = 1

  for (let i = 0; i < N; i++) {
    dp[i] = 1
    let max = 0
    let maxIndex = -1
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] > max) {
        max = dp[j]
        maxIndex = j
      }
    }
    dp[i] = max + 1

    answer[i] = maxIndex !== -1 ? answer[maxIndex].concat(arr[i]) : [arr[i]]
  }

  const max = Math.max(...dp)
  console.log(max)
  console.log(answer[dp.indexOf(max)].join(' '))
}

solution()
