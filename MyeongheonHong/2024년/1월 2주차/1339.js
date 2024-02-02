// URL : https://www.acmicpc.net/problem/1339

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, inputs] = [
  input.shift(),
  input.map((e) => {
    return e
  }),
]

/**
 * 문제 접근 방식
  1. 길이가 긴 순서대로 배열을 정렬.
  2. 정렬된 배열의 요소 순서대로 첫번째 요소에 가장 큰 숫자를 할당(9,8,7...)
  3. BFS같은 느낌이 든다!
 */

function solution() {
  inputs.sort((a, b) => b.length - a.length)

  let map = new Map()

  inputs.map((input) => {
    input.split('').map((char) => {
      map.set(char, 0)
    })
  })

  for (let i = inputs[0].length; i > 0; i--) {
    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j].length === i) {
        const alphaSum = map.get(inputs[j][0])
        alphaSum === 0 ? map.set(inputs[j][0], Math.pow(10, i - 1)) : map.set(inputs[j][0], alphaSum + Math.pow(10, i - 1))
        inputs[j] = inputs[j].substring(1)
      }
    }
  }

  const sortedMap = Array.from(map.entries()).sort((a, b) => b[1] - a[1])

  let sum = 0
  let count = 9
  sortedMap.forEach((num) => {
    sum += num[1] * count--
  })

  return sum
}

console.log(solution())
