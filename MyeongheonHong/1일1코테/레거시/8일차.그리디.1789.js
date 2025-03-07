//https://www.acmicpc.net/problem/1789

const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')

let total = +input[0]
let map = new Map()
let n = 1

while (total > 0) {
  total -= n
  if (total >= 0 && !map.has(n)) {
    map.set(n++, true)
  }
}

console.log(map.size)
