//https://www.acmicpc.net/problem/2812

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, K] = input[0].split(' ').map(Number)
const arr = input[1].split('').map(Number)

/**
 * 문제설계(20분)

 */

/**
 * 구현(20분)
 */

function solution() {
  const stack = [arr[0]]
  let deleteCount = 0

  for (let i = 1; i < N; i++) {
    const num = arr[i]

    if (deleteCount < K) {
      while (stack.length > 0 && deleteCount < K) {
        const top = stack[stack.length - 1]

        if (num > top) {
          stack.pop()
          deleteCount++
        } else {
          stack.push(num)
          break
        }

        if (stack.length === 0) {
          stack.push(num)
          break
        }
      }

      deleteCount === K && stack.push(num)
    } else {
      stack.push(num)
    }
  }

  for (let i = 0; i < K - deleteCount; i++) {
    stack.pop()
  }

  console.log(stack.join(''))
}

function betterSolution() {
  const stack = []
  let deleteCount = 0

  for (let i = 0; i < N; i++) {
    const num = arr[i]

    while (stack.length > 0 && deleteCount < K && num > stack[stack.length - 1]) {
      stack.pop()
      deleteCount++
    }

    stack.push(num)
  }

  for (let i = 0; i < K - deleteCount; i++) {
    stack.pop()
  }

  console.log(stack.join(''))
}

betterSolution()
