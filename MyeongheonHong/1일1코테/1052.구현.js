// https://www.acmicpc.net/problem/1052

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

// 첫째 줄에 N과 K가 주어진다. N은 107보다 작거나 같은 자연수이고, K는 1,000보다 작거나 같은 자연수이다.

const [N, K] = input[0].split(' ').map(Number)

function solution() {
  function minBottlesToBuy(N, K) {
    let count = 0

    while (countOnes(N) > K) {
      let lowestOne = N & -N // N에서 가장 낮은 자리의 1 찾기
      N += lowestOne // 해당 자리의 1을 없애기 위해 더함

      count += lowestOne // 추가한 물병 개수 증가
    }

    return count
  }

  function countOnes(num) {
    return num.toString(2).split('1').length - 1
  }

  console.log(minBottlesToBuy(N, K))
}

solution()
