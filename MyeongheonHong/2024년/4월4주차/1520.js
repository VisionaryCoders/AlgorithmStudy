// https://www.acmicpc.net/problem/1520

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')
let [N, M] = input.shift().split(' ')
N = Number(N - 1)
M = Number(M - 1)

const MAP = input.map((n) => {
  return n.split(' ').map((m) => {
    return Number(m)
  })
})

/**
 * 문제접근방식
 * 1. 오른쪽으로 가는건 괜찮다!
 * 2. 좌,우,하 를 비교하며 다음 값을 설정
 */

function solution() {}
