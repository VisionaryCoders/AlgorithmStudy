//https://www.acmicpc.net/problem/1946

const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')
let idx = 0
const N = +input[idx++]

function solution(len, rank) {
  const score = rank.sort((a, b) => a[0] - b[0])
  let count = 1
  let max = score[0]

  for (let i = 1; i < len; i++) {
    const interviewRank = score[i][1]

    if (max[1] >= interviewRank) {
      count++
      max = score[i]
    }
  }

  return count
}

const answer = []

for (let i = 0; i < N; i++) {
  const len = +input[idx++]
  const rank = []

  for (let j = 0; j < len; j++) {
    rank.push(input[idx++].split(' ').map(Number))
  }

  answer.push(solution(len, rank))
}

console.log(answer.join('\n'))
