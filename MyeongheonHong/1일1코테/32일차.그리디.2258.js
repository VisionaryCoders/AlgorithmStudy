// https://www.acmicpc.net/problem/2258

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const meats = []
const map = new Map()
let totalWeight = 0

// 고기 정보 입력
for (let i = 0; i < N; i++) {
  const [weight, price] = input[i].split(' ').map(Number)
  meats.push({ weight, price })
  totalWeight += weight
}

// for (let i = 0; i < N; i++) {
//   const meat = input[i].split(' ').map(Number)
//   const [weight, price] = meat
//   totalWeight += weight
//   const test = map.get(weight) || []
//   test.push(price)

//   map.set(
//     weight,
//     [...test].sort((a, b) => b - a),
//   )
//   meats.push(meat)
// }

if (totalWeight < M) {
  console.log(-1)
  return
}

// ✅ 가격 오름차순 정렬, 가격이 같다면 무게 내림차순
meats.sort((a, b) => a.price - b.price || b.weight - a.weight)

let prevPrice = 0
let weightSum = 0
let priceSum = 0
let minCost = Infinity

for (const meat of meats) {
  weightSum += meat.weight

  if (prevPrice !== meat.price) {
    priceSum = prevPrice = meat.price
  } else {
    priceSum += meat.price
  }

  if (weightSum >= M) {
    minCost = Math.min(minCost, priceSum)
  }
}

console.log(minCost)

// meats.sort((a, b) => b[0] - a[0] || b[1] - a[1])

// function solution() {
//   totalWeight = 0
//   let totalPrice = 0
//   const answer = []

//   for (let i = 0; i < N; i++) {
//     let [currentWeight, currentPrice] = meats[i]
//     totalWeight += currentWeight
//     totalPrice += currentPrice

//     currentWeight--

//     while (currentWeight > 0) {
//       const priceList = map.get(currentWeight)

//       if (priceList) {
//         const filterPrice = priceList.filter((price) => price < currentPrice)

//         totalWeight += currentWeight * filterPrice.length
//       }

//       currentWeight -= 1
//     }

//     if (totalWeight >= M) {
//       answer.push(totalPrice)
//       totalWeight = 0
//       totalPrice = 0
//     }
//   }

//   console.log(Math.min(...answer))
// }

// solution()
