// https://www.acmicpc.net/problem/1082

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()
const priceArray = input.shift().split(' ').map(Number)
const price = []
const share = []
let limit = +input.shift()
const maxList = []
let max = ''

for (let i = 0; i < N; i++) {
  price.push([i, priceArray[i]])
  share.push([i, Math.floor(limit / priceArray[i])])
}

share.sort((a, b) => b[1] - a[1] || b[0] - a[0])
price.sort((a, b) => b[1] - a[1] || b[0] - a[0])

for (let i = 0; i < share[0][1]; i++) {
  max += share[0][0].toString()
}

maxList.push(max)

let sum = 0
max = ''

for (let i = 0; i < N; i++) {
  const [key, value] = price[i]
  if (value > limit) continue

  limit -= value

  if (limit < 0) {
    limit += value
    break
  }

  max += key.toString()
}

if (limit >= price[price.length - 1][1]) {
  max += '0'
}

maxList.push(max)
const answer = maxList.map(Number)

console.log(Math.max(...answer).toString())

// 1. 낮은 가격으로 정렬
// 2. 같은 가격이라면 숫자가 높은 순으로 정렬
