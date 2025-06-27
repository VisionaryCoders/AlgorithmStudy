const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

// 0으로 시작하면 해석 불가
if (input[0] === '0') {
  console.log(0)
  return
}

const MOD = 1000000
const dp = new Array(input.length + 1).fill(0)

dp[0] = 1 // 빈 문자열
dp[1] = 1 // 첫 자리

for (let i = 2; i <= input.length; i++) {
  const one = +input[i - 1] // 현재 자리 한 글자
  const two = +input.slice(i - 2, i) // 두 글자

  // 한 글자가 1~9일 경우 (0은 단독 불가)
  if (one >= 1 && one <= 9) {
    dp[i] += dp[i - 1]
  }

  // 두 글자가 10~26일 경우
  if (two >= 10 && two <= 26) {
    dp[i] += dp[i - 2]
  }

  dp[i] %= MOD
}

console.log(dp[input.length])
