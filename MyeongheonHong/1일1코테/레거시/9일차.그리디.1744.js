//https://www.acmicpc.net/problem/1744

const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')
const [N, ...arr] = input.map(Number)

function solution() {
  const positives = arr.filter((x) => x > 1).sort((a, b) => b - a)
  const negatives = arr.filter((x) => x <= 0).sort((a, b) => a - b)
  const ones = arr.filter((x) => x === 1)

  let sum = 0

  for (let i = 0; i < positives.length; i += 2) {
    if (i + 1 < positives.length) {
      sum += positives[i] * positives[i + 1]
    } else {
      sum += positives[i]
    }
  }

  for (let i = 0; i < negatives.length; i += 2) {
    if (i + 1 < negatives.length) {
      sum += negatives[i] * negatives[i + 1]
    } else {
      sum += negatives[i]
    }
  }

  sum += ones.length

  console.log(sum)
}

solution()
