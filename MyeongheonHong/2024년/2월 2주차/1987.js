//https://www.acmicpc.net/problem/1987

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [R, C] = input
  .shift()
  .split(' ')
  .map((e) => {
    return Number(e)
  })

const map = []
for (let i = 0; i < R; i++) {
  map.push(
    input[i].split('').map((e) => {
      return e
    }),
  )
}
/**
 * 문제접근방식
 * 1. 상하좌우에 해당하는 배열을 선언
 */

function solution() {
  let answer = 1
  const visited = new Array(128).fill(false)

  const ds = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  const dfs = (x, y, count) => {
    answer = Math.max(count, answer)

    for (let i = 0; i < 4; i++) {
      const nx = x + ds[i][0]
      const ny = y + ds[i][1]

      if (nx >= 0 && nx < C && ny >= 0 && ny < R && !visited[map[ny][nx].charCodeAt()]) {
        visited[map[ny][nx].charCodeAt()] = true
        dfs(nx, ny, count + 1)
        visited[map[ny][nx].charCodeAt()] = false
      }
    }
  }

  visited[map[0][0].charCodeAt()] = true
  dfs(0, 0, 1)
  console.log(answer)
}

solution()
