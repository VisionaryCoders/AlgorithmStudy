const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = Number(input[0])
const dice = input[1].split(' ').map(Number)

// 최소값을 찾는 함수
const getMin = (arr) => arr.reduce((min, val) => (val < min ? val : min))

const oneMin = getMin(dice)
const twoMin = getMin([
  dice[0] + dice[1],
  dice[0] + dice[2],
  dice[0] + dice[3],
  dice[0] + dice[4],
  dice[1] + dice[2],
  dice[1] + dice[3],
  dice[1] + dice[5],
  dice[2] + dice[4],
  dice[2] + dice[5],
  dice[3] + dice[4],
  dice[3] + dice[5],
  dice[4] + dice[5],
])
const threeMin = getMin([
  dice[0] + dice[1] + dice[2],
  dice[0] + dice[1] + dice[3],
  dice[0] + dice[2] + dice[4],
  dice[0] + dice[3] + dice[4],
  dice[1] + dice[2] + dice[5],
  dice[1] + dice[3] + dice[5],
  dice[2] + dice[4] + dice[5],
  dice[3] + dice[4] + dice[5],
])

let total = 0

if (N === 1) {
  total = dice.reduce((acc, val) => acc + val, 0) - Math.max(...dice)
} else {
  const threeFaceCount = 4
  const twoFaceCount = (N - 2) * 8 + 4
  const oneFaceCount = (N - 2) * (N - 2) * 5 + (N - 2) * 4

  total = threeMin * threeFaceCount + twoMin * twoFaceCount + oneMin * oneFaceCount
}

console.log(total)
