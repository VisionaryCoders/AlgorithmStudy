//https://www.acmicpc.net/problem/11047

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')

let [N, K] = input.shift().split(' ').map(Number)
const coins = input.map(Number)

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  let sum = 0

  for (let i = N - 1; i >= 0; i--) {
    const coinValue = coins[i]

    if (K < coinValue) {
      continue
    } else {
      const n = Math.floor(K / coinValue)
      sum += n
      K -= n * coinValue
    }
  }
  console.log(sum)
}

solution()
