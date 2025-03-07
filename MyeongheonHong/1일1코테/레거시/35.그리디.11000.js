// https://www.acmicpc.net/problem/11000

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()
const lectures = []
for (let i = 0; i < N; i++) {
  const e = input[i].split(' ').map(Number)
  lectures.push(e)
}

function assignClassrooms(lectures) {
  const n = lectures.length

  // 1. 시작 시간과 종료 시간을 각각 분리하여 배열에 저장
  const start = []
  const end = []
  for (const [s, e] of lectures) {
    start.push(s)
    end.push(e)
  }

  // 2. 시작 시간과 종료 시간 배열을 각각 오름차순으로 정렬
  start.sort((a, b) => a - b)
  end.sort((a, b) => a - b)

  // 3. 투 포인터 방식으로 강의실을 관리
  let result = 0 // 필요한 강의실의 최소 개수
  let endPointer = 0 // 종료 시간 배열을 가리킬 포인터

  // 4. 시작 시간을 기준으로 강의를 하나씩 확인
  for (let startPointer = 0; startPointer < n; startPointer++) {
    // 만약 현재 시작 시간이 종료 시간이 더 빠른 강의와 겹치지 않으면
    if (start[startPointer] >= end[endPointer]) {
      // 종료 시간을 갱신
      endPointer++
    } else {
      // 새 강의실이 필요한 경우
      result++
    }
  }

  // 최종적으로 필요한 강의실 개수 반환
  return result
}

console.log(assignClassrooms(lectures)) // 출력: 2
