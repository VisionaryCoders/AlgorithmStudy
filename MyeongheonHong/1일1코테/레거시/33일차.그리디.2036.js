// https://www.acmicpc.net/problem/2036

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()
const positive = []
const negative = []
let zeroCount = 0
let oneCount = 0

for (let i = 0; i < N; i++) {
  const n = BigInt(+input[i])
  if (n < 0) {
    negative.push(n)
  } else if (n === 0n) {
    zeroCount++
  } else {
    if (n === 1) oneCount++
    positive.push(n)
  }
}

positive.sort((a, b) => (a > b ? 1 : -1))
negative.sort((a, b) => (a < b ? 1 : -11))

function solution() {
  let sum = 0n

  while (positive.length > 0) {
    if (positive[positive.length - 1] === 1) {
      sum += oneCount
      break
    }

    if (positive.length === 1) {
      sum += positive.pop()
      break
    }

    const [n1, n2] = [positive.pop(), positive.pop()]

    if (n1 + n2 > n1 * n2) {
      sum += n1 + n2
    } else {
      sum += n1 * n2
    }
  }

  while (negative.length > 0) {
    if (negative.length === 1) {
      if (zeroCount === 0) {
        sum += negative.pop()
      }
      break
    }
    const [n1, n2] = [negative.pop(), negative.pop()]
    sum += n1 * n2
  }
  console.log(sum.toString())
}

solution()
