// https://www.acmicpc.net/problem/17298
// 참고 영상 : https://www.youtube.com/watch?v=rK8lUhjKWvc

const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')
const N = input.shift()
const arr = input[0].split(' ').map(Number)

/**
 * 1. answer에 [-1] 채운다.
 * 2. maxr에 처음 꺼낸것을 할당한다.
 * 3. 그 다음 수부터 max에 할당된 값과 비교하여 꺼낸수가 작으면 answer에 max값을 추가해주고 / 꺼낸수가 max보다 크다면 answer에 -1을 추가해주고 max를 꺼낸수로 바꿔준다.
 */

function solution() {
  let answer = Array.from({ length: N }, () => -1)
  let stack = []

  for (let i = 0; i < N; i++) {
    const curr = arr[i]

    while (stack.length && arr[stack[stack.length - 1]] < curr) {
      const stackIndex = stack.pop()
      answer[stackIndex] = curr
    }

    stack.push(i) // 현재 인덱스를 넣어줘야한다.
  }

  console.log(answer.join(' '))
}

solution()
