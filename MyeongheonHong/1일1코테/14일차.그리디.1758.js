//https://www.acmicpc.net/problem/

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
let index = 0
let N = +input[index++]
const arr = input[index++].split(' ').map(Number)

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  arr.sort((a, b) => a - b)

  let sum = 0 // 현재까지 측정 가능한 최대 누적합
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > sum + 1) {
      console.log(sum + 1)
      return
    }
    sum += arr[i] // 누적합 갱신
  }

  console.log(sum + 1) // 모든 추로 측정 가능한 최대값 + 1이 정답
}

solution()

function myWrongSolution() {
  arr.sort((a, b) => b - a)

  const map = new Map()
  arr.forEach((e) => {
    map.set(e, (map.get(e) || 0) + 1)
  })

  let count = 1

  while (true) {
    let total = count // 현재 측정하려는 무게
    let tempMap = new Map(map) // map을 복사해 현재 탐색에 사용

    for (const [key, value] of tempMap) {
      while (total >= key && tempMap.get(key) > 0) {
        total -= key // 무게를 뺀다
        tempMap.set(key, tempMap.get(key) - 1) // 사용한 개수를 줄인다
      }

      if (total === 0) break // 무게를 정확히 측정할 수 있으면 종료
    }

    if (total > 0) {
      // 만약 total이 0이 되지 않으면 해당 무게는 측정 불가능
      console.log(count)
      return
    }

    count++ // 다음 무게를 확인
  }
}
