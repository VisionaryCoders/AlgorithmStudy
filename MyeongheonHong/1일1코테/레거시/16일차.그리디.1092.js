//https://www.acmicpc.net/problem/1092

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const craneLen = +input[0]
const crane = input[1].split(' ').map(Number)
const boxLen = +input[2]
let box = input[3].split(' ').map(Number)
crane.sort((a, b) => b - a)
box.sort((a, b) => a - b)

function solution() {
  const count = []

  for (let i = 0; i < craneLen; i++) {
    count.push([])
  }

  const map = new Map()

  for (let i = 0; i < boxLen; i++) {
    map.set(i, false)
  }

  if (box[box.length - 1] > crane[0]) {
    console.log(-1)
    return
  }

  while (box.length > 0) {
    const rest = []
    for (let i = 0; i < craneLen && box.length > 0; i++) {
      const weight = box.pop()
      if (crane[i] >= weight) {
        count[i].push(weight)
      } else {
        rest.push(weight)
      }
    }

    box = [...box, ...rest.reverse()]
  }

  console.log(count)
  console.log(count[0].length)
}
solution()

/**
 * 문제설계(20분)

 */

/**
 * 구현(20분)
 */
