//https://www.acmicpc.net/problem/2012

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = Number(input.shift())
const rank = []
for (let i = 0; i < N; i++) {
  rank.push(Number(input[i]))
}


/**
 * 문제접근방식
 * 1. rank를 오름차순으로 정렬한다.
 * 2. 1등부터 N등까지 순회하며 예상했던 등수롤 마이너스해준다.
 */
function solution() {
  let sum = 0
  rank.sort((a, b) => a - b)

  for (let i = 0; i < N; i++) {
    sum += Math.abs(i + 1 - rank[i])
  }
  console.log(sum)
}

solution()
