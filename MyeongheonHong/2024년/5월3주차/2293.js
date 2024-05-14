//https://www.acmicpc.net/problem/2293

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
 *
 * 1. 배열을 정렬한다.
 * 2. 제일 작은 수에서 K까지 차례로 넣었을 경우의 테이블을 만들어준다.
 * 3. 나머지 배열도 K까지 차례로 넣었을 경우를 배열로 만들어준다.
 * 4. 순회하면서 더했을 때 나오는 경우의 수를 배열에 담아준다.
 * 5. 제일 작은 수의 배열을 순회하면서 map에 있는 해당 숫자의 value값을 더해준다.
 */

/**
 * 구현(20분)
 */

function solution() {
  // * 2. 제일 작은 수에서 K까지 차례로 넣었을 경우의 테이블을 만들어준다.
  // * 3. 나머지 배열도 K까지 차례로 넣었을 경우를 배열로 만들어준다.

  const dp = new Array(K + 1).fill(0)
  dp[0] = 1

  for(let i = 0 ; i < N; i++){
    for(let j = arr[i] ; j <=K ;j++){
      dp[j] = dp[j] + dp[j-arr[i]]
    }
  }
  console.log(dp[K])
}

solution()
