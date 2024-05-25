//https://www.acmicpc.net/problem/2096

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = +input.shift()
const arr = input.map((e) => {
  return e.split(' ').map(Number)
})

function solution() {
  let [mx1, mx2, mx3] = arr[0]
  let [mn1, mn2, mn3] = arr[0]

  for (let i = 1; i < N; i += 1) {
    const [a, b, c] = arr[i]
    const [pmx1, pmx2, pmx3, pmn1, pmn2, pmn3] = [mx1, mx2, mx3, mn1, mn2, mn3]
    mx1 = a + Math.max(pmx1, pmx2)
    mx2 = b + Math.max(pmx1, pmx2, pmx3)
    mx3 = c + Math.max(pmx2, pmx3)
    mn1 = a + Math.min(pmn1, pmn2)
    mn2 = b + Math.min(pmn1, pmn2, pmn3)
    mn3 = c + Math.min(pmn2, pmn3)
  }
  return [Math.max(mx1, mx2, mx3), Math.min(mn1, mn2, mn3)]
}

const answer = solution()
console.log(answer[0], answer[1])
