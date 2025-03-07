// https://www.acmicpc.net/problem/4796

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

function solution(L, P, V) {
  const 휴가동안캠핑장갈수있는횟수 = Math.floor(V / P)
  const 나머지캠핑가는기간1 = V % P

  const 나머지캠핑가는기간 = Math.min(V % P, L) // L보다 클 경우 L일만 사용 가능
  const 최대거주기간 = L * 휴가동안캠핑장갈수있는횟수

  return 최대거주기간 + 나머지캠핑가는기간
}

const answer = []
for (let i = 0; i < input.length - 1; i++) {
  const [L, P, V] = input[i].split(' ').map(Number)

  answer.push(`Case ${i + 1}: ${solution(L, P, V)}`)
}

console.log(answer.join('\n'))
