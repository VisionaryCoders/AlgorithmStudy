const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, L] = input.shift().split(' ').map(Number)
const arr = []

for (const e of input) {
  arr.push(e.split(' ').map(Number))
}

arr.sort((a, b) => a[0] - b[0])

let position = 0
let sum = 0

for (const [start, end] of arr) {
  if (position < start) {
    position = start
  }

  let gap = end - position
  let bridge = Math.ceil(gap / L)
  let bridgeLen = bridge * L

  // //다리가 다음 웅덩이에 이미 걸쳐져 있는경우
  // if (position >= start && position <= end) {
  // } else {
  //   position = start
  // }
  // =>이 논리가 틀렸음
  // position이 이미 웅덩이의 끝 end보다 크다면?
  // 이미 해당 웅덩이를 지나쳤으므로 다리를 놓을 필요 없음.
  // 하지만 네 코드에서는 이걸 제대로 처리하지 못함.

  sum += bridge
  position += bridgeLen
}

console.log(sum)

// for (const [start, end] of puddles) {
//   if (position < start) {
//     position = start // 다리 시작 위치 보정
//   }

//   let gap = end - position // 아직 덮지 않은 구간 길이 계산
//   let bridge = Math.ceil(gap / L) // 필요한 다리 개수
//   sum += bridge

//   position += bridge * L // 다리 놓은 후, 현재 위치 갱신
// }

// console.log(sum)
