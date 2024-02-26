const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = Number(input.shift())

/**
 * 문제접근방식
 * 1. 오름차순으로 정렬
 * 2. 짝수인덱스에 해당하는 수들은 왼쪽에서부터 홀수 인덱스에 해당하는 수들은 오른쪽부터 채운다.
 * 3. 순회하면서 각 수의 차에서 최대값을 고른다.
 */
function solution(n, array) {
  array.sort((a, b) => b - a)

  const asignArray = []

  asignArray.push(array.shift())

  for (let i = 0; i < n - 1; i++) {
    if (i % 2 === 0) {
      asignArray.push(array[i])
    } else {
      asignArray.unshift(array[i])
    }
  }

  const minus = []

  minus.push(Math.abs(asignArray[0] - asignArray[n - 1]))
  for (let i = 1; i < asignArray.length; i++) {
    minus.push(Math.abs(asignArray[i] - asignArray[i - 1]))
  }
  console.log(Math.max(...minus))
}

for (let i = 0; i < N; i++) {
  const n = Number(input.shift())
  const array = input
    .shift()
    .split(' ')
    .map((e) => {
      return Number(e)
    })

  solution(n, array)
}
