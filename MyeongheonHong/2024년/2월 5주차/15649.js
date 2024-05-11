// https://www.acmicpc.net/problem/15649

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ')
const [N, M] = [Number(input[0]), Number(input[1])]

/**
 * 문제접근방식
 * 1.
 */

function solution() {
  const answer = []

  const visited = Array(N).fill(false)

  function dfs(n, arr) {
    //종료조건 처리 + 정답처리
    if (n === M) {
      answer.push(arr)
      return
    }

    for (let j = 1; j <= N; j++) {
      if (!visited[j - 1]) {
        visited[j - 1] = true
        dfs(n + 1, [...arr, j])
        visited[j - 1] = false
      }
    }
  }

  dfs(0, [])

  answer.map((e) => {
    let result = ''
    e.map((num) => {
      result += num + ' '
    })
    console.log(result)
  })
}

solution()
