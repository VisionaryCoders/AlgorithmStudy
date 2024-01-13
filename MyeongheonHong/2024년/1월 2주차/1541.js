// URL : https://www.acmicpc.net/problem/1541

const fs = require('fs')

const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

/**
 * 문제접근방식
 * 1. 최소의 숫자가 되기 위해서는 빼기를 할때에 앞에숫자는 최소가 되어야하고, 뒤에있는 숫자는 최대가 되어야한다.(가정)
 * 2. -가 등장하는 순간 최대한 많은 수를 더해야한다고 생각
 * 3. '-'단위로 묶는 개념으로 접근
 *
 */

function solution() {
  const str = input[0].split('-')

  let sum = str[0]
    .split('+')
    .map((e) => {
      return Number(e)
    })
    .reduce((acc, curr) => (acc += curr))

  if (str.length > 1) {
    str.shift()

    const plusSum = str.map((num) =>
      num
        .split('+')
        .map((e) => {
          return Number(e)
        })
        .reduce((acc, curr) => (acc += curr)),
    )
    plusSum.map((num) => (sum -= num))
  }

  console.log(sum)
}

solution()
