//https://www.acmicpc.net/problem/12904

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let [str, target] = input

/**
 * 문제접근방식
 * 1. 문자열이 추가되는것은 마지막에 추가 된다.
 * 2. 재귀함수로 문자열이 같을때까지 비교한다.
 * 3. dfs로 접근
 * ==> 시간 초과
 * 4. BFS로 접근
 * ==> 시간 초과
 * 5. 주어진 문자열을 하나씩 지워가면서 그전의 상태를 추측하여 원래의 값과 비교
 * ==> 성공!!!
 *
 */

function solution() {
  while (str.length < target.length) {
    const lastIndex = target.length - 1
    const lastStr = target[lastIndex]

    target = target.substring(0, lastIndex)

    if (lastStr === 'B') {
      target = target.split('').reverse().join('')
    }
  }

  console.log(target === str ? 1 : 0)
}

solution()
