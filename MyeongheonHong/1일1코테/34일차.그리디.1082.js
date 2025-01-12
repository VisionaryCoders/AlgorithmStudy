// https://www.acmicpc.net/problem/1082

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()
const priceArray = input.shift().split(' ').map(Number)
let limit = +input.shift()
const map = new Map()

for (let i = 0; i < N; i++) {
  map.set(i, priceArray[i])
}

function solution() {
  const answer = []

  for (let i = N; i > 0; i--) {
    const priceN = []

    map.forEach((value, key) => {
      if (N - i + 1 === value) {
        priceN.push(key)
      }
    })

    priceN.sort((a, b) => b - a)

    if (priceN.length > 0 && priceN[0] !== 0) {
      answer.push(priceN.toString() * Math.floor(limit / (N - i + 1)))
    }
  }
}

solution()
