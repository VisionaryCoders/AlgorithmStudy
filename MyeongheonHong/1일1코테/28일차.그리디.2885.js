const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const K = +input[0]

let min = 1
const answer = []

// K보다 크거나 같은 최소한의 2의 거듭제곱 찾기
while (min < K) {
  min *= 2
}

if (min === K) {
  answer.push(min)
  answer.push(0)
  console.log(answer.join(' '))
  return
}
answer.push(min)

let sum = 0
let count = 0

while (sum !== K) {
  min = min / 2
  if (sum + min <= K) {
    sum += min
  }
  count++
}

answer.push(count)

console.log(answer.join(' '))
