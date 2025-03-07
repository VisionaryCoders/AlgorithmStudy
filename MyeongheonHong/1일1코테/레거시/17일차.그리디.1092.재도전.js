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

  let time = 0
  let boxCount = box.length

  while (boxCount > 0) {
    let index = 0
    const restWeight = []
    time++

    for (let i = 0; i < box.length && index < craneLen; i++) {
      if (box[i] === -1) continue

      if (index < craneLen && crane[index] >= box[i]) {
        box[i] = -1
        boxCount--
        index++
      }
    }
  }

  console.log(time)
}
solution()

// 시간복잡도는 비효율적이나 메모리 측면에서는 좋은 방법

function betterMemory() {
  let answer = 0

  // 불가능 할 때
  if (Math.max(...box) > crane[0]) return -1

  while (box.length) {
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < m; j += 1) {
        if (crane[i] >= box[j]) {
          box.splice(j, 1)
          break
        }
      }
    }
    answer += 1
  }

  return answer
}

function bestSolution() {
  if (crane[0] < box[0]) {
    console.log(-1)
    return
  }

  let time = 0
  let boxCount = box.length // 남은 박스 수를 추적

  // 크레인으로 모든 박스를 처리할 때까지 반복
  while (boxCount > 0) {
    let index = 0 // 크레인 인덱스
    for (let i = 0; i < box.length; i++) {
      if (box[i] === -1) continue // 이미 처리된 박스는 건너뛰기

      // 현재 크레인이 박스를 들 수 있으면 처리
      if (index < craneLen && crane[index] >= box[i]) {
        box[i] = -1 // 박스를 처리했음을 표시
        boxCount-- // 남은 박스 수 감소
        index++ // 다음 크레인으로 이동
      }

      // 모든 크레인이 할당된 경우 종료
      if (index >= craneLen) break
    }
    time++ // 1분 경과
  }

  console.log(time)
}
