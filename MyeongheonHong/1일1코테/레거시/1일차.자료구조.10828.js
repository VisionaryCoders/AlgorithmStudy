// https://www.acmicpc.net/problem/10828

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()

class Stack {
  constructor() {
    this.stack = []
    this.answer = []
  }

  push(num) {
    this.stack.push(num)
  }

  top() {
    const lastIdx = this.stack.length

    if (lastIdx === 0) {
      this.answer.push(-1)
      return
    }

    this.answer.push(this.stack[lastIdx - 1])
  }

  pop() {
    if (this.stack.length === 0) {
      this.answer.push(-1)
      return
    }

    this.answer.push(this.stack.pop())
  }

  size() {
    this.answer.push(this.stack.length)
  }

  empty() {
    this.stack.length === 0 ? this.answer.push(1) : this.answer.push(0)
  }

  result() {
    console.log(this.answer.join('\n'))
  }
}

function solution() {
  const stack = new Stack()

  for (let i = 0; i < N; i++) {
    const command = input[i].split(' ')

    if (command.length === 1) {
      stack[command]()
    } else {
      const [push, num] = command
      stack[push](+num)
    }
  }

  stack.result()
}

solution()
