//https://www.acmicpc.net/problem/

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution(n) {
  const dp = new Array(n + 1)
  dp[0] = dp[1] = dp[2] = dp[3] = 1
  dp[4] = 2

  for (let i = 5; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 3]
  }

  return dp[n]
}

const answer = []
input.map((n) => {
  answer.push(solution(+n))
})

console.log(answer.join('\n'))
