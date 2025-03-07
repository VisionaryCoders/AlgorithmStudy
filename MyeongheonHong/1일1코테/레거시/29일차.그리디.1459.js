const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [X, Y, W, S] = input[0].split(' ').map(Number)

function solution() {
  let answer = 0

  // 1. 직선 이동만 사용하는 경우 (2 * W <= S)
  if (2 * W <= S) {
    answer = W * (X + Y)
  } else {
    let temp1 = Infinity,
      temp2 = Infinity

    // 2. 대각선 이동만 가능한 경우 (X + Y가 짝수일 때)
    if ((X + Y) % 2 === 0) {
      temp1 = S * Math.max(X, Y)
    }
    // 3. 하나는 홀수, 하나는 짝수인 경우 (마지막에 직선 1번 필요)
    else {
      temp1 = S * (Math.max(X, Y) - 1) + W
    }

    // 4. 대각선 + 직선 이동 조합
    temp2 = S * Math.min(X, Y) + W * (X + Y - 2 * Math.min(X, Y))

    answer = Math.min(temp1, temp2)
  }

  console.log(answer)
}

solution()
