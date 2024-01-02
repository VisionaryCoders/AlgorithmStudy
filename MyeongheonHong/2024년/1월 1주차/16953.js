// URL : https://www.acmicpc.net/problem/16953

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split(' ')

const inputs = input.map((e) => {
  return Number(e)
})

//재귀함수??
// 해당 수를 만족할만한 조건이 무엇일지 생각해봄
// 2에서 시작하는 경우 4or21  이렇게 가지형식으로 뻗쳐나가다보니 dfs임을 파악

function solution() {
  if (inputs[0] === inputs[1]) return 0

  let min = 99999999999

  function dfs(num, target, depth) {
    if (num > target) return

    if (num === target) {
      min = Math.min(min, depth)
      return
    } else {
      dfs(Number(String(num) + '1'), target, depth + 1)
      dfs(num * 2, target, depth + 1)
    }
  }

  dfs(inputs[0], inputs[1], 1)

  return min === 99999999999 ? -1 : min
}

console.log(solution())
