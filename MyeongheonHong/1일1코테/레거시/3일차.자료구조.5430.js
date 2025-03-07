//https://www.acmicpc.net/problem/5430
const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')
const N = +input.shift()

function solution(p, len, arr) {
  const rArr = []
  const split = p.split('')
  let errorFlag = false

  for (let i = 0; i < split.length; i++) {
    if (split[i] === 'R') {
      rArr.length === 1 ? rArr.shift() : rArr.push('R')
      continue
    }

    if (arr.length === 0) {
      errorFlag = true
      break
    }

    if (rArr.length === 0) {
      arr.shift()
    } else {
      arr.pop()
    }
  }

  if (errorFlag) {
    console.log('error')
  } else {
    if (rArr.length === 0) {
      console.log(JSON.stringify(arr))
    } else {
      console.log(JSON.stringify(arr.reverse()))
    }
  }
}

for (let i = 0; i < N; i++) {
  const p = input.shift()
  const len = +input.shift()
  const arr = JSON.parse(input.shift())

  solution(p, len, arr)
}
