//https://www.acmicpc.net/problem/12865

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const range = input.shift()
const N = Number(range.split(' ')[0])
const K = Number(range.split(' ')[1])

const itemList = []
const V = []
const W = []

for (let i = 0; i < N; i++) {
  const item = input[i].split(' ')
  itemList.push([Number(item[0]), Number(item[1])])
}

/**
 * 문제설계(20분)
 *
 * 가치가 최대가 되어야한다!
 * 1. N+2*N+2의 DP테이블을 만든다
 * 2. 무게가 넘는지 체크
 * 3. DP[ci][cj] = Max()
 *
 */

function solution() {
  const weightTable = new Array(K + 1).fill(0)

  itemList.map((item) => {
    const weight = item[0]
    const value = item[1]

    if (weight > K) {
      return
    }

    for (let i = K; i > 0; i--) {
      if (i + weight <= K && weightTable[i] !== 0) {
        weightTable[i + weight] = Math.max(weightTable[i + weight], weightTable[i] + value)
      }
    }
    weightTable[weight] = Math.max(weightTable[weight], value)
  })

  console.log(Math.max(...weightTable))
}

solution()
