//https://www.acmicpc.net/problem/1450

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const range = input.shift()
const N = Number(range.split(' ')[0])
const C = Number(range.split(' ')[1])
const itemList = input[0]
  .split(' ')
  .map((item) => {
    return Number(item)
  })
  .sort((a, b) => a - b)

/**
 * 문제설계(20분)
 *
 * 1. 하나씩 판단하기에는 2^30의 시간복잡도라서 시간초과
 */

function solution() {
  const arr1 = itemList.slice(0, parseInt(N / 2))
  const arr2 = itemList.slice(parseInt(N / 2))
  const sum1 = []
  const sum2 = []

  function dfs(index, sum, weight, answer) {
    if (sum > C) return
    if (index === weight.length) {
      answer.push(sum)
      return
    }

    //물건을 넣는경우
    dfs(index + 1, sum + weight[index], weight, answer)
    //물건을 넣지 않는 경우
    dfs(index + 1, sum, weight, answer)
  }

  function binarySearch(arr, target, start, end) {
    while (start < end) {
      let mid = parseInt((start + end) / 2)
      if (arr[mid] <= target) {
        start = mid + 1
      } else {
        end = mid
      }
    }
    return end
  }

  dfs(0, 0, arr1, sum1)
  dfs(0, 0, arr2, sum2)

  let answer = 0
  sum2.sort((a, b) => a - b)

  for (let i = 0; i < sum1.length; i++) {
    if (C - sum1[i] < 0) {
      continue
    }

    let searchValue = C - sum1[i]
    answer += binarySearch(sum2, searchValue, 0, sum2.length)
  }

  console.log(answer)
}

solution()
