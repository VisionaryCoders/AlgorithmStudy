// https://www.acmicpc.net/problem/1890
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()
const BOARD = input.map((el) => el.split(' ').map(Number))

/**
 * 문제
 * N×N 게임판에 수가 적혀져 있다. 이 게임의 목표는 가장 왼쪽 위 칸에서 가장 오른쪽 아래 칸으로 규칙에 맞게 점프를 해서 가는 것이다.
 * 각 칸에 적혀있는 수는 현재 칸에서 갈 수 있는 거리를 의미한다. 반드시 오른쪽이나 아래쪽으로만 이동해야 한다. 0은 더 이상 진행을 막는 종착점이며, 항상 현재 칸에 적혀있는 수만큼 오른쪽이나 아래로 가야 한다. 한 번 점프를 할 때, 방향을 바꾸면 안 된다. 즉, 한 칸에서 오른쪽으로 점프를 하거나, 아래로 점프를 하는 두 경우만 존재한다.
 *가장 왼쪽 위 칸에서 가장 오른쪽 아래 칸으로 규칙에 맞게 이동할 수 있는 경로의 개수를 구하는 프로그램을 작성하시오.
 */

/**
 * 해결방법
 * 1. 시작하는 부분에서 재귀적 호출로 원하는 위치까지 계속해서 이동
 */

/**
 * 결과 : 시간초과
 * 1. 중복 계산이 너무 많다
 * DFS로 탐색할 경우, 동일한 좌표 (x, y)를 여러 경로를 통해 방문할 수 있습니다. 문제는, 그때마다 해당 위치에서 가능한 경로를 다시 전부 계산한다는 점입니다.
 * 예를 들어 (1, 1)이라는 칸에 두 개의 경로로 도달할 수 있다면, DFS는 그 두 번 각각에 대해 또다시 재귀 호출을 합니다. 이는 지수적인 시간 복잡도를 유발합니다.
 */

const solution = (len, board) => {
  let sum = 0

  const findRoute = (x, y) => {
    if (x >= len || y >= len) return
    if (board[x][y] === 0) {
      sum += 1
      return
    }
    const next = board[x][y]

    findRoute(x, y + next)
    findRoute(x + next, y)
  }

  findRoute(0, board[0][0]) // 아래로 이동
  findRoute(board[0][0], 0) // 오른쪽으로 이동

  return sum
}

const solution2 = (len, board) => {
  const dp = Array.from({ length: len }, () => Array(len).fill(BigInt(0)))
  dp[0][0] = 1

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const jump = board[i][j]
      if (jump === 0) continue // 도착지에서는 더 이상 점프하지 않음

      if (i + jump < len) dp[i + jump][j] += BigInt(dp[i][j])
      if (j + jump < len) dp[i][j + jump] += BigInt(dp[i][j])
    }
  }

  return dp[len - 1][len - 1].toString()
}

const result = solution2(N, BOARD)
console.log(result)
