//https://www.acmicpc.net/problem/9935

const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')

const str = input[0].split('')
const bomb = input[1]
const bombLen = bomb.length

// 1. 앞에서부터 bomb의 문자열 길이만큼 str에 비교를 한다.
// 2. 같지 않는 경우 str의 문자열을 하나씩 채운다

function solution() {
  const stack = str.slice(0, bomb.length)
  let index = bombLen

  while (index <= str.length) {
    const stackStr = stack.slice(stack.length - bomb.length, stack.length).join('')

    if (bomb === stackStr) {
      for (let i = 0; i < bombLen; i++) {
        stack.pop()
      }
      index -= 1
    } else {
      if (index < str.length) stack.push(str[index])
    }

    index += 1
  }

  if (stack.length === 0) {
    console.log('FRULA')
  } else {
    console.log(stack.join(''))
  }
}

// solution()

function solutionB() {
  const str = input[0]
  const stack = []

  for (let char of str) {
    stack.push(char)

    if (stack.length >= bombLen && stack.slice(stack.length - bombLen).join('') === bomb) {
      for (let i = 0; i < bombLen; i++) {
        stack.pop()
      }
    }
  }
  console.log(stack.length === 0 ? 'FRULA' : stack.join(''))
}

solutionB()
