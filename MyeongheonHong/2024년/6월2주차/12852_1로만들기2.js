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

function solution() {
  const dp = {}
  dp[0] = dp[1] = 0
  dp[2] = dp[3] = 1

  for (let i = 4; i < N + 1; i++) {
    dp[i] = dp[i - 1] + 1

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i])
    }
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i / 3] + 1, dp[i])
    }
  }

  console.log(dp[N])

  let num = N
  let answer = [N]

  while (num !== 1) {
    let x, y, z
    y = 99999
    z = 99999

    x = dp[num - 1]
    if (num % 2 === 0) y = dp[num / 2]
    if (num % 3 === 0) z = dp[num / 3]

    let m = Math.min(x, Math.min(y, z))
    if (m === x) num = num - 1
    else if (m === y) num = num / 2
    else num = num / 3

    answer.push(num)
  }

  console.log(answer.join(' '))
}

solution()
