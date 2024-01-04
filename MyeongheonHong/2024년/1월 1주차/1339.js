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

  const map = new Map()

  inputs.map((input) => {
    input.split('').map((char) => {
      map.set(char, 0)
    })
  })

  let sum = ''
  let count = 9

  for (let i = inputs[0].length; i > 0; i--) {
    sum = sum + '0'
    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j].length === i) {
        map.get(inputs[j][0]) === 0 && map.set(inputs[j][0], count--)
        sum = String(Number(sum) + Number(map.get(inputs[j][0])))

        inputs[j] = inputs[j].substring(1)
      }
    }
  }
  return Number(sum.substring())
}

console.log(solution())
