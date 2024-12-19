//https://www.acmicpc.net/problem/1213

const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(path).toString().trim().split('\n')

function solution() {
  const arr = input[0].split('').sort()
  const answer = Array.from({ length: arr.length })

  const countMap = new Map()
  let index = 0
  let errorFlag = false

  arr.forEach((item) => {
    countMap.set(item, (countMap.get(item) || 0) + 1)
  })

  if (arr.length === 1) {
    console.log(arr.join(''))
    return
  }

  // 팰린드롬 불가능한 조건 확인
  let oddCount = 0 // 홀수 개수를 세기 위한 변수
  countMap.forEach((value) => {
    if (value % 2 === 1) oddCount++
  })

  if (oddCount > 1) {
    console.log(`I'm Sorry Hansoo`)
    return
  }

  countMap.forEach((value, key) => {
    if (value % 2 === 0) {
      for (let i = 0; i < value / 2; i++) {
        answer[index] = answer[answer.length - index - 1] = key
        index++
      }
    } else {
      for (let i = 0; i < Math.floor(value / 2); i++) {
        answer[index] = answer[answer.length - index - 1] = key
        index++
      }

      if (answer[Math.floor(answer.length / 2)] !== undefined) {
        errorFlag = true
        return
      } else {
        answer[Math.floor(answer.length / 2)] = key
      }
    }
  })

  if (errorFlag) {
    console.log(`I'm Sorry Hansoo`)
  } else {
    console.log(answer.join(''))
  }
}

solution()
