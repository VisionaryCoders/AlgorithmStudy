// https://www.acmicpc.net/problem/1758

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
let index = 0
const N = +input[index++]
const rank = []

for (let i = 0; i < N; i++) {
  rank.push(+input[index++])
}

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  rank.sort((a, b) => b - a)
  let sum = 0

  for (let i = 0; i < rank.length; i++) {
    const total = rank[i] - i

    if (total > 0) {
      sum += total
    }
  }

  console.log(sum)
}

solution()
