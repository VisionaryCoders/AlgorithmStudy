// URL : https://www.acmicpc.net/problem/1946

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = Number(input.shift())

function solution(testCase) {
  console.log(testCase)
}

for (let i = 0; i < N; i++) {
  const length = Number(input.shift())
  const testCase = input.slice(0, length).map((e) => {
    return e.split(' ')
  })

  solution(testCase)
  input = input.slice(length, -1)
}
