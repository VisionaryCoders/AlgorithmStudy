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

const dp = new Array(1000000 + 1)
dp[1] = 1
dp[2] = 2
dp[3] = 4

for (let i = 4; i < 1000000 + 1; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009
}

const answer = []

for (let i = 0; i < N; i += 1) {
  answer.push(dp[+input[i]])
}

console.log(answer.join('\n'))
