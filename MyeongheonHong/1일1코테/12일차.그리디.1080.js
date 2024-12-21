//https://www.acmicpc.net/problem/2212

const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number)

let a = ''
let b = ''

for (let i = 0; i < N; i++) {
  a += input[i + 1]
  b += input[i + 1 + N]
}

function solution() {
  let y = 0
  let x = 0
  let indexArr = [y, y + 1, y + 2, y + M, y + M + 1, y + M + 2, y + M * 2, y + M * 2 + 1, y + M * 2 + 2]
  let count = 0

  while (indexArr[indexArr.length - 1] < b.length) {
    let flipped = false // 뒤집기가 발생했는지 체크

    for (let idx of indexArr) {
      if (a[idx] !== b[idx]) {
        // 현재 인덱스에서 뒤집기
        indexArr = getIndexArr(idx, M)
        a = filpBit(a, indexArr)
        count++
        flipped = true
        break // 뒤집기를 실행했으므로 반복문 종료
      }
    }

    if (!flipped) {
      // 한 행에서 더 이상 뒤집을 필요가 없는 경우
      if (M - 3 > x) {
        indexArr = indexArr.map((e) => e + 1)
        x += 1
      } else {
        y += M
        x = 0
        indexArr = [y, y + 1, y + 2, y + M, y + M + 1, y + M + 2, y + M * 2, y + M * 2 + 1, y + M * 2 + 2]
      }
    }

    // if (M - 3 > x) {
    //   indexArr = indexArr.map((e) => e + 1)
    //   x += 1
    // } else {
    //   y += M
    //   indexArr = [y, y + 1, y + 2, y + M, y + M + 1, y + M + 2, y + M * 2, y + M * 2 + 1, y + M * 2 + 2]
    // }
  }

  a === b ? console.log(count) : console.log(-1)
}

solution()

function getIndexArr(y, M) {
  return [y, y + 1, y + 2, y + M, y + M + 1, y + M + 2, y + M * 2, y + M * 2 + 1, y + M * 2 + 2]
}

function filpBit(number, indexArr) {
  let binaryArray = number.split('')

  indexArr.forEach((index) => {
    if (index < binaryArray.length) {
      binaryArray[index] = binaryArray[index] === '0' ? '1' : '0'
    }
  })

  return binaryArray.join('')
}
