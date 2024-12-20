//https://www.acmicpc.net/problem/2212

const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')

const [N, K] = [+input[0], +input[1]]
const arr = input.slice(2)[0].split(' ').map(Number)

function solution() {
  const sort = arr.sort((a, b) => a - b)
  const numbers = sort.filter((element, index) => {
    return sort.indexOf(element) === index
  })

  const gap = new Map()
  let numbersLen = numbers.length
  let sum = 0

  if (N === K) {
    console.log(0)
    return
  }

  for (let i = 1; i < numbers.length; i++) {
    const key = numbers[i] - numbers[i - 1]
    gap.set(key, (gap.get(key) | 0) + 1)
  }

  while (numbersLen > K) {
    const minKey = Math.min(...gap.keys())
    while (numbersLen > K) {
      const minValue = gap.get(minKey)
      if (minValue === 0) {
        gap.delete(minKey)
        break
      } else {
        gap.set(minKey, minValue - 1)
        sum += minKey
      }
      numbersLen--
    }
  }

  console.log(sum)
}

solution()
