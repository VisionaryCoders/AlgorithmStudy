// https://www.acmicpc.net/problem/10773

const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')
const N = +input.shift()

function solution() {
  const answer = []

  for (let i = 0; i < N; i++) {
    const num = +input[i]

    if (num === 0) {
      answer.pop()
    } else {
      answer.push(num)
    }
  }

  if (answer.length === 0) {
    console.log(0)
    return
  }

  const sum = answer.reduce((acc, calc) => {
    return (acc += calc)
  })

  console.log(sum)
}

solution()
