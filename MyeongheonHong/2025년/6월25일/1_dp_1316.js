//https://www.acmicpc.net/problem/1316
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

/**
 * 문제
 * 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면,
 * ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만,
 * aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

 * 입력
 * 첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다. 단어는 알파벳
 * 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.
 */

const N = +input[0]
const WORDS = input.slice(1)

/**
 * 해결방법
 * 1. 단어를 하나씩 확인한다.
 * 2. 연속으로 이루어진 후 다시 등장하는 단어를 체크하는것
 *
 */

function solution(words) {
  let sum = 0

  words.map((word) => {
    const wordSet = new Set()
    const wordSplit = word.split('')
    let isSuccess = true

    wordSet.add(wordSplit[0])

    for (let i = 1; i < wordSplit.length; i++) {
      const current = wordSplit[i]
      const prev = wordSplit[i - 1]

      if (!wordSet.has(current)) {
        wordSet.add(current)
        continue
      }

      if (current !== prev && wordSet.has(current)) {
        isSuccess = false
      }
    }
    if (isSuccess) {
      sum += 1
    }
  })
  return sum
}

const result = solution(WORDS)
console.log(result)
