// https://www.acmicpc.net/problem/1049

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')
let [line, brand] = input.shift().split(' ')
let packages = []
let each = []
for (let i = 0; i < input.length; i++) {
  const array = input[i].split(' ')

  packages.push(Number(array[0]))
  each.push(Number(array[1]))
}

/**
 * 문제접근 방식
 * 1. 패키지들로 배열을 만들고, 낱개들로 배열을 만들어서 정렬한다.
 * 2. 패키지의 최소값과 낱개에서 최솟값에 6을 곱한 값을 비교한다.
 * 3. 패키지가 더 작다면 패키지로 구매를하고, 낱개로 구매시에는 가격 비교후 최소값을 정한다.
 */

function solution() {
  packages.sort((a, b) => a - b)
  each.sort((a, b) => a - b)
  let sum = 0

  const spare = line % 6 === 0 ? 6 : line % 6

  if (each[0] * spare > packages[0]) {
    sum = spare === 6 ? (packages[0] * line) / 6 : (Math.floor(line / 6) + 1) * packages[0]
  } else {
    if (each[0] * 6 < packages[0]) {
      sum = line * each[0]
    } else {
      sum = Math.floor(line / 6) * packages[0] + spare * each[0]
    }
  }

  console.log(sum)
}

solution()
