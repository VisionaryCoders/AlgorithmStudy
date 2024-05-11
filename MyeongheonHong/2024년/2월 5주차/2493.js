//https://www.acmicpc.net/problem/2493

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = Number(input.shift())

const arr = input[0].split(' ').map((num) => {
  return Number(num)
})

/**
 * 문제접근방식
 * 1. 가장 오른쪽 인덱스부터 차례대로 줄어들면서 큰 값이 나오는지를 파악(시간초과)
 * --
 * 1. 왼쪽의 숫자부터 차례대로 숫자를 순회한다.
 * 2. 이전의 숫자보다 클 경우 stack에 있는 값을 차례로 순회하며 더 큰 값이 있는지 확인한다.
 */

const solution = () => {
  const stack = [
    {
      index: 0,
      item: arr[0],
    },
  ]
  const answer = []

  for (let i = 0; i < N; i++) {
    const current = {
      index: i + 1,
      item: arr[i],
    }

    if (stack[stack.length - 1].item <= arr[i]) {
      while (stack.length) {
        const num = stack[stack.length - 1].item

        if (current.item < num) {
          break
        } else {
          stack.pop()
        }
      }
      answer.push(stack.length === 0 ? 0 : stack[stack.length - 1].index)
      stack.push(current)
    } else {
      answer.push(stack.length === 0 ? 0 : stack[stack.length - 1].index)
      stack.push(current)
    }
  }

  console.log(answer.join(' '))
}

solution()
