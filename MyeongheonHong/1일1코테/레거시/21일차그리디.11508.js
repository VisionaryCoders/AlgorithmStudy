// https://www.acmicpc.net/problem/11508

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

//권한이 없을경우 런타임에러가 발생했는데 제출할때는 이 방식으로 하는것을 적극권장
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n')

const N = +input.shift()
const price = []

for (let i = 0; i < N; i++) {
  price.push(+input[i])
}

price.sort((a, b) => b - a)

let sum = 0

for (let i = 0; i < N; i++) {
  if ((i + 1) % 3 === 0) continue

  sum += price[i]
}
console.log(sum)
