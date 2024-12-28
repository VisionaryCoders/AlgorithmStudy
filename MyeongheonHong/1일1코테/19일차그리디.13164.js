//https://www.acmicpc.net/problem/1700

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, K] = input[0].split(' ').map(Number)
const kids = input[1].split(' ').map(Number)

function solution() {
  if (K === 1) {
    console.log(kids[N - 1] - kids[0])
    return
  }

  const gap = []

  for (let i = 1; i < N; i++) {
    gap.push(kids[i] - kids[i - 1])
  }

  // 간격 배열을 내림차순 정렬
  gap.sort((a, b) => b - a)

  let sum = 0

  for (let i = K - 1; i < gap.length; i++) {
    sum += gap[i]
  }
}

solution()
