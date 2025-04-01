// https://www.acmicpc.net/problem/1427

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const num = input[0].split('').map(Number)
num.sort((a, b) => b - a)
console.log(num.join(''))
