// https://www.acmicpc.net/problem/1543

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const str = input[0].split('').reverse()
const word = input[1]

let string = ''
let count = 0

while (str.length > 0) {
  string += str.pop()

  if (string.includes(word)) {
    string = ''
    count++
  }
}

console.log(count)
