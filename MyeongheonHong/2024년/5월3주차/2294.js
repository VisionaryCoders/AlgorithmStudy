//https://www.acmicpc.net/problem/2294

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = Number(input[0].split(' ')[0])
const K = Number(input[0].split(' ')[1])
input.shift()

// 1. 배열을 정렬한다.
const arr = input
  .map((e) => {
    return Number(e)
  })
  .sort((a, b) => a - b)

/**
 * 문제설계(20분)
 * 1. answer = -1로 초기화
 * 2. dp[K+1] 을 생셩
 * 3. 순회하며 넣을때 해당 가치가 되었을 경우에는 위에있는 경우와 비교하였을 때 작은 경우를 넣어준다.
 */

/**
 * 구현(20분)
 */

function solution() {
  // * 1. answer = -1로 초기화

  // * 2. dp[N][K+1] 을 생셩

  const dp = []

  for (let i = 0; i < N + 1; i++) {
    const arr = new Array(K + 1).fill(0)
    dp.push(arr)
  }

  const table = new Array(K + 1).fill(Infinity)
  table[0] = 0

  // * 3. 순회하며 넣을때 해당 가치가 되었을 경우에는 위에있는 경우와 비교하였을 때 작은 경우를 넣어준다.
  for (let i = 0; i < N; i++) {
    const coin = arr[i]
    // console.log('coin : ', coin)
    for (let j = coin; j < K + 1; j++) {
      if (j % coin === 0) {
        table[j] = j / coin
      } else {
        table[j] = Math.min(table[j - coin] + 1, table[j])
      }
    }
  }
  console.log(table[K] == Infinity ? -1 : table[K])
}

solution()
