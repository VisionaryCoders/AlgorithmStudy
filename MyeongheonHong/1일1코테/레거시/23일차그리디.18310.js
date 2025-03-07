// https://www.acmicpc.net/problem/18310

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input[0]
const house = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)

function solution() {
  let sum = 0
  let total = 0
  const distance = []
  let answerIndex = 0

  if (N === 1) {
    console.log(house[0])
    return
  }

  for (let i = 1; i < N; i++) {
    total = total + house[i] - house[i - 1]
    distance.push(house[i] - house[i - 1])
    sum += total
  }

  let min = sum

  for (let i = 0; i < distance.length; i++) {
    const minus = distance[i] * (N - 2 - i)
    const plus = distance[i] * i

    sum = sum - minus + plus

    if (sum < min) {
      min = sum
      answerIndex = i
    }
  }
  console.log(house[answerIndex + 1])
}

solution()
