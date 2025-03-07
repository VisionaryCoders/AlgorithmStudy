// // https://www.acmicpc.net/problem/1717

// const fs = require('fs')
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

// const input = fs.readFileSync(filePath).toString().trim().split('\n')
// const [N, M] = input.shift().split(' ').map(Number)

// const map = new Map()

// function solution() {
//   const answer = []

//   //초기화
//   for (let i = 0; i <= N; i++) {
//     map.set(i, i)
//   }

//   for (let i = 0; i < M; i++) {
//     const [calc, a, b] = input[i].split(' ').map(Number)

//     if (calc === 0) {
//       //합집합연산
//       union(a, b)
//     } else {
//       //찾는 연산
//       const resultA = find(a)
//       const resultB = find(b)

//       if (resultA === resultB) {
//         answer.push('YES')
//       } else {
//         answer.push('NO')
//       }
//     }
//   }
//   console.log(answer.join('\n'))
// }

// function union(a, b) {
//   const [min, max] = [Math.min(a, b), Math.max(a, b)]

//   const findMin = find(min)
//   const findMax = find(max)
//   map.set(findMax, findMin)
// }

// function find(x) {
//   if (map.get(x) === x) return x

//   map.set(x, find(map.get(x)))
//   return map.get(x)
// }

// solution()


const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []
let N, M
const map = new Map()

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  ;[N, M] = input.shift().split(' ').map(Number)

  solution()
  process.exit()
})

function solution() {
  const answer = []

  // 초기화
  for (let i = 0; i <= N; i++) {
    map.set(i, i)
  }

  for (let i = 0; i < M; i++) {
    const [calc, a, b] = input[i].split(' ').map(Number)

    if (calc === 0) {
      // 합집합 연산
      union(a, b)
    } else {
      // 찾는 연산
      const resultA = find(a)
      const resultB = find(b)

      answer.push(resultA === resultB ? 'YES' : 'NO')
    }
  }
  console.log(answer.join('\n'))
}

function union(a, b) {
  const [min, max] = [Math.min(a, b), Math.max(a, b)]

  const findMin = find(min)
  const findMax = find(max)
  map.set(findMax, findMin)
}

function find(x) {
  if (map.get(x) === x) return x

  map.set(x, find(map.get(x)))
  return map.get(x)
}
