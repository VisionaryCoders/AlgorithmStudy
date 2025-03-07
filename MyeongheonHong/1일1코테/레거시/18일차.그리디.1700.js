//https://www.acmicpc.net/problem/1700

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, K] = input[0].split(' ').map(Number)
const itemList = input[1].split(' ').map(Number)

function solution() {
  const currentMultitap = []
  let count = 0
  let index = 0

  for (index; index < K; index++) {
    const item = itemList[index]

    //이미 멀티탭에 꽂혀있는경우
    if (currentMultitap.indexOf(item) !== -1) {
      continue
    }

    // 멀티탭에 자리가 남아 있는 경우, 새로운 아이템을 추가
    if (currentMultitap.length < N) {
      currentMultitap.push(item)
      continue
    }

    let farthestIndex = -1 // 가장 늦게 사용되거나 사용되지 않는 아이템의 인덱스
    let itemToReplaceIndex = -1 // 교체할 아이템의 멀티탭 내 위치

    for (let i = 0; i < N; i++) {
      const multitapItem = currentMultitap[i]
      const nextUsageIndex = itemList.slice(index + 1).indexOf(multitapItem)

      if (nextUsageIndex === -1) {
        itemToReplaceIndex = i
        break
      }

      // 가장 늦게 사용되는 아이템을 찾아야 함
      if (nextUsageIndex > farthestIndex) {
        farthestIndex = nextUsageIndex
        itemToReplaceIndex = i
      }
    }

    currentMultitap[itemToReplaceIndex] = item
    count++
  }

  console.log(count)
}

solution()
