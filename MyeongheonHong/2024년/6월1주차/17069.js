//https://www.acmicpc.net/problem/17070

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()
const arr = input.map((e) => {
  const temp = e.split(' ').map(Number)
  temp.unshift(1)
  temp.push(1)
  return temp
})
arr.unshift(new Array(N + 1).fill(1))
arr.push(new Array(N + 1).fill(1))

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function create3DArray(N) {
  // 3차원 배열 생성
  let array = new Array(N)

  for (let i = 0; i < N; i++) {
    array[i] = new Array(N)
    for (let j = 0; j < N; j++) {
      array[i][j] = new Array(3).fill(0) // 3차원 배열의 각 요소를 0으로 초기화
    }
  }

  return array
}

const [HOR, VER, DIA] = [0, 1, 2]

function solution() {
  const dp = create3DArray(N + 1)
  dp[1][2][HOR] = 1

  for (let i = 1; i < N + 1; i++) {
    for (let j = 3; j < N + 1; j++) {
      if (arr[i][j] === 1) {
        continue
      }

      dp[i][j][HOR] = dp[i][j - 1][HOR] + dp[i][j - 1][DIA]
      dp[i][j][VER] = dp[i - 1][j][VER] + dp[i - 1][j][DIA]

      if (arr[i - 1][j] === 0 && arr[i][j - 1] === 0) {
        dp[i][j][DIA] = dp[i - 1][j - 1][HOR] + dp[i - 1][j - 1][VER] + dp[i - 1][j - 1][DIA]
      }
    }
  }

  console.log(dp[N][N][VER] + dp[N][N][HOR] + dp[N][N][DIA])
}

solution()
