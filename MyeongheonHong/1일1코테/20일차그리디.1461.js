// https://www.acmicpc.net/problem/1461

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)

const books = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)

function solution() {
  const positive = []
  const negative = []
  const [min, max] = [Math.abs(Math.min(...books)), Math.abs(Math.max(...books))]
  let sum = 0
  let i = 0

  for (let i = 0; i < N; i++) {
    const distance = books[i]
    if (distance < 0) {
      negative.push(distance)
    } else {
      positive.push(distance)
    }
  }
  positive.sort((a, b) => b - a)

  //양수에 있는 책의 거리가 더 멀 경우 음수책부터
  if (max < min) {
    for (i = 0; i < positive.length; i += M) {
      sum += Math.abs(positive[i] * 2)
    }

    for (i = M; i < negative.length; i += M) {
      sum += Math.abs(negative[i] * 2)
    }
  } else {
    //음수에 있는 책의 거리가 더 멀 경우 양수책부터
    for (i = 0; i < negative.length; i += M) {
      sum += Math.abs(negative[i] * 2)
    }

    for (i = M; i < positive.length; i += M) {
      sum += Math.abs(positive[i] * 2)
    }
  }

  console.log(sum + Math.max(min, max))
}

solution()
