//https://www.acmicpc.net/problem/11051

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, K] = input.shift().split(' ').map(Number)

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  // n! / (n-k)!k!
  //54321
  //32121

  //21
  //

  const dp = {}

  dp[0] = BigInt(1)
  dp[1] = BigInt(1)

  for (let i = 2; i <= 1000; i++) {
    dp[i] = BigInt(i) * dp[i - 1]
  }

  function findNum(n, k) {
    if (k < 0 || k > n) return 0
    return dp[n] / (dp[k] * dp[n - k])
  }

  const result = findNum(N, K) % BigInt(10007)
  console.log(Number(result))
}

solution()
