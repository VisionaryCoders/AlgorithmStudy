//https://www.acmicpc.net/problem/17070

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()
const arr = input.map((e) => {
  const temp = e.split(' ').map(Number)
  temp.push(1)
  return temp
})
arr.push(new Array(N + 1).fill(1))

/**
 * 문제설계(20분)
 */

/**
 * 구현(20분)
 */

function solution() {
  const dp = []
  for (let i = 0; i < N; i++) {
    dp.push(new Array(N).fill(new Array()))
  }

  const range = [
    [0, 1],
    [1, 0],
    [1, 1],
  ] //오른쪽, 아래, 대각선
  const [right, down, cross] = [0, 1, 2]

  let answer = 0

  function dfs(row, column, dir) {
    if (row >= N || column >= N) {
      return
    }

    if (row === N - 1 && column === N - 1) {
      answer++
      return
    }

    if (dir === right) {
      if (!arr[row][column + 1]) {
        dfs(row, column + 1, right)
      }

      if (!arr[row][column + 1] && !arr[row + 1][column + 1] && !arr[row + 1][column]) {
        dfs(row + 1, column + 1, cross)
      }
    }

    if (dir === down) {
      if (!arr[row + 1][column]) {
        dfs(row + 1, column, down)
      }

      if (!arr[row][column + 1] && !arr[row + 1][column + 1] && !arr[row + 1][column]) {
        dfs(row + 1, column + 1, cross)
      }
    }

    if (dir === cross) {
      if (!arr[row][column + 1]) {
        dfs(row, column + 1, right)
      }

      if (!arr[row][column + 1] && !arr[row + 1][column + 1] && !arr[row + 1][column]) {
        dfs(row + 1, column + 1, cross)
      }

      if (!arr[row + 1][column]) {
        dfs(row + 1, column, down)
      }
    }
  }

  dfs(0, 1, right)

  console.log(answer)
}

solution()
