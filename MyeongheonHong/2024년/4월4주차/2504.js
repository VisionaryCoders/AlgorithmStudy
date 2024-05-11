// https://www.acmicpc.net/problem/2504

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0]

function checkBracketCount(str) {
  const map = new Map()
  map.set('(', 0)
  map.set(')', 0)
  map.set('[', 0)
  map.set(']', 0)

  str.split('').map((e) => {
    map.set(e, map.get(e) + 1)
  })

  if (map.get('(') === map.get(')') && map.get('[') === map.get(']')) {
    return true
  } else {
    false
  }
}

function solution() {
  if (!checkBracketCount(input)) {
    console.log('0')
    return
  }

  const stack = []
  const str = input.split('')
  let breakPoint = false

  str.forEach((e) => {
    let sum = []
    if (e === ')') {
      let top = stack.pop()
      while (top !== '(') {
        if (top === '[') {
          breakPoint = true
          break
        }
        sum.push(top)
        top = stack.pop()
      }

      if (sum.length === 0) {
        const total = 2

        stack.push(total)
      } else {
        const total = sum.reduce((acc, curr) => {
          return (acc += Number(curr))
        })
        stack.push(total * 2)
      }
    } else if (e === ']') {
      let top = stack.pop()
      while (top !== '[') {
        if (top === '(') {
          breakPoint = true
          break
        }
        sum.push(top)
        top = stack.pop()
      }

      if (sum.length === 0) {
        const total = 3

        stack.push(total)
      } else {
        const total = sum.reduce((acc, curr) => {
          return (acc += Number(curr))
        })
        stack.push(total * 3)
      }
    } else {
      stack.push(e)
    }

    if (breakPoint) {
      return
    }
  })

  if (breakPoint) {
    console.log(0)
  } else {
    const total = stack.reduce((acc, curr) => {
      return (acc += curr)
    })
    console.log(total)
  }
}

solution()
