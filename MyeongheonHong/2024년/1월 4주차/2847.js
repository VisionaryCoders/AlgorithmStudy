// https://www.acmicpc.net/problem/2847

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')
let N = input.shift()
let score = []

for (let i = 0; i < N; i++) {
  score.push(Number(input[i]))
}

/**
 * 문제접근방식
 * 1. 뒤에서부터 이전 레벨의 점수를 비교하여 해당 점수보다 작을 때까지 감소시킨다.
 */

function solution() {
  let count = 0

  for (let i = N - 1; i > 0; i--) {
    const currentScore = score[i]
    let prevScore = score[i - 1]

    if (currentScore <= prevScore) {
      while (currentScore <= score[i - 1]) {
        score[i - 1] = score[i - 1] - 1
        count += 1
      }
    } else {
      continue
    }
  }

  console.log(count)
}

solution()
