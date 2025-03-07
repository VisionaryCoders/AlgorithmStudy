// https://www.acmicpc.net/problem/10775

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [G, P] = [+input[0], +input[1]]
const gateMap = new Map()

function solution() {
  let count = 0
  for (let i = 1; i <= G; i++) {
    gateMap.set(i, i)
  }

  for (let i = 2; i < P + 2; i++) {
    const gate = +input[i]

    const availableGate = find(gate) // 도킹 가능한 게이트 찾기
    // console.log(gate, availableGate)

    if (!availableGate) break // 도킹 불가능하면 종료
    union(availableGate, availableGate - 1) // 게이트 사용 후, 바로 아래 게이트와 연결
    count++
  }

  console.log(count)
}

solution()

function union(x, y) {
  const px = find(x)
  const py = find(y)
  gateMap.set(px, py)
}

function find(x) {
  if (gateMap.get(x) === x) return x
  gateMap.set(x, find(gateMap.get(x)))
  return gateMap.get(x)
}
