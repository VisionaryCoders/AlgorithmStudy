// https://www.acmicpc.net/problem/5585

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const money = +input[0]

let rest = 1000 - money
let count = 0

while (rest > 0) {
  if (rest >= 500) {
    rest -= 500
  } else if (rest >= 100) {
    rest -= 100
  } else if (rest >= 50) {
    rest -= 50
  } else if (rest >= 10) {
    rest -= 10
  } else if (rest >= 5) {
    rest -= 5
  } else if (rest >= 1) {
    rest -= 1
  }
  count++

}

console.log(count)
