//https://www.acmicpc.net/problem/1202

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, K] = input.shift().split(' ')
let jewel = []
let bagWeight = []

for (let i = 0; i < Number(N); i++) {
  const [jewelWeight, jewelPrice] = input.shift().split(' ')
  jewel.push([Number(jewelWeight), Number(jewelPrice)])
}

for (let i = 0; i < Number(K); i++) {
  bagWeight.push(Number(input[i]))
}

/**
 * 문제접근방식
 * 1. 가격을 기준으로 내림차순 정렬
 * 2. 가방의 무게를 나타내는 배열은 오름차순으로 정렬.
 * ==> 시간초과
 * 1. 동일한 방법이지만 비슷한 깔끔한 코드로 도전.
 * ==> 시간초과
 * * 왜 시간초과가 날까?
 *
 * 아마도 30만 * 30만이라서 시간 초과가 난거 같다. 제한시간이 1초인데(1억) 900억 ㅋㅋㅋㅋ;;
 *
 * 1. 담을 수 있는 무게를 찾을 때 이분탐색으로 서칭
 * ==> 여전히 시간초과
 *
 */

function solution() {
  let sum = 0

  jewel.sort((a, b) => b[1] - a[1])
  bagWeight.sort((a, b) => a - b)

  for (let i = 0; i < jewel.length; i++) {
    if (bagWeight.length > 0) {
      const item = jewel[i]
      let [left, right] = [0, bagWeight.length - 1]
      const targetWeight = item[0]
      let mid = 0

      while (left <= right) {
        mid = Math.round((left + right) / 2)
        const maxWeight = bagWeight[mid]

        if (maxWeight < targetWeight) {
          left = mid + 1
        } else if (maxWeight > targetWeight) {
          right = mid - 1
        } else if (maxWeight === targetWeight) {
          break
        }
      }

      if (targetWeight <= bagWeight[mid]) {
        sum += item[1]
        bagWeight.splice(mid, 1)
      }
    } else {
      break
    }
  }

  // jewel.map((item) => {
  //   if (bagWeight.length > 0) {
  //     let [left, right] = [0, bagWeight.length - 1]
  //     const targetWeight = item[0]
  //     let mid = 0

  //     while (left <= right) {
  //       mid = Math.round((left + right) / 2)
  //       const maxWeight = bagWeight[mid]

  //       if (maxWeight < targetWeight) {
  //         left = mid + 1
  //       } else if (maxWeight > targetWeight) {
  //         right = mid - 1
  //       } else if (maxWeight === targetWeight) {
  //         break
  //       }
  //     }

  //     if (targetWeight <= bagWeight[mid]) {
  //       sum += item[1]
  //       bagWeight.splice(mid, 1)
  //     }
  //   } else {
  //     console.log('end')
  //     return
  //   }
  // })

  console.log(sum)
}

solution()
