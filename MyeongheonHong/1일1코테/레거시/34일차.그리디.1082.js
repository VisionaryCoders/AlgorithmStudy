// https://www.acmicpc.net/problem/1082

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()
const priceArray = input.shift().split(' ').map(Number)
const price = []
const share = []
let M = +input.shift()
const maxList = []
let max = ''

for (let i = 0; i < N; i++) {
  price.push([i, priceArray[i]])
  share.push([i, Math.floor(M / priceArray[i])])
}

share.sort((a, b) => b[1] - a[1] || b[0] - a[0])
price.sort((a, b) => b[1] - a[1] || b[0] - a[0])

for (let i = 0; i < share[0][1]; i++) {
  max += share[0][0].toString()
}

if (max.length === M && max[0] === '0') {
  const cheap = [...price]
  cheap.sort((a, b) => a[1] - b[1] || b[1] - a[1])

  let cutIndex = 0

  if (cheap[0][0] === 0) {
    cutIndex = cheap[1][1]
    max = cheap[1][0].toString() + max
  } else {
    cutIndex = cheap[0][1]
    max = cheap[0][0].toString() + max
  }

  max = max.slice(0, -cutIndex)
}

maxList.push(max)
// console.log(price)

for (let i = 0; i < N; i++) {
  max = ''
  const [key, value] = price[i]
  let index = 0
  let limit = M

  if (value > limit) continue

  while (limit > 0 && index < N) {
    const value = price[index][1]

    // console.log('value : ', value, limit)

    limit -= value

    // console.log('after limit : ', limit)

    if (limit < 0) {
      limit += value
      index++
    } else {
      max += price[index++][0].toString()
    }
  }

  if (limit >= price[price.length - 1][1]) {
    max += '0'
  }

  maxList.push(max)
}

maxList.push(max)

const answer = maxList.map(BigInt)
console.log(answer.reduce((a, b) => (a > b ? a : b)).toString())

// 1. 낮은 가격으로 정렬
// 2. 같은 가격이라면 숫자가 높은 순으로 정렬
