//https://www.acmicpc.net/problem/1092

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const craneLen = +input[0]
const crane = input[1].split(' ').map(Number)
const boxLen = +input[2]
let box = input[3].split(' ').map(Number)
crane.sort((a, b) => b - a)
box.sort((a, b) => b - a)

function solution() {
  if (crane[0] < box[0]) {
    console.log(-1)
    return
  }

  const count = []

  for (let i = 0; i < craneLen; i++) {
    count.push([])
  }

  while (box.length > 0) {
    let index = 0
    const restWeight = []

    for (let i = 0; i < box.length; i++) {
      const weight = box[i]

      if (index < craneLen && crane[index] >= weight) {
        count[index++].push(weight)
      } else {
        restWeight.push(weight)
        continue
      }
    }

    box = [...restWeight]
  }

  console.log(count[0].length)
}
solution()
