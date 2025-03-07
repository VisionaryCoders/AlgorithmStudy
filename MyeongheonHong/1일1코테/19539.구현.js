// https://www.acmicpc.net/problem/19539

const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')
const N = input.shift()
const items = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)

const sum = items.reduce((acc, curr) => (acc += curr))

sum % 3 !== 0 ? console.log('NO') : solution()

function solution() {
  let ones = 0
  let twos = 0

  for (let h of items) {
    ones += h % 2 // 1을 만들 수 있는 횟수
    twos += Math.floor(h / 2) // 2를 만들 수 있는 횟수
  }

  console.log(twos >= ones ? 'YES' : 'NO')
}
