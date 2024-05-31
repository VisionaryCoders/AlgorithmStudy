//https://www.acmicpc.net/problem/1932

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()
const arr = input.map((e) => {
  const temp = e.split(' ').map(Number)
  // temp.push(0)
  // temp.unshift(-1)
  return temp
})

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  if (N === 1) {
    console.log(arr[0][0])
    return
  }

  for (let i = N - 2; i > 0; i--) {
    for (let j = 0; j < i + 1; j++) {
      arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1])
    }
  }

  console.log(arr[0][0] + Math.max(...arr[1]))
}

solution()
