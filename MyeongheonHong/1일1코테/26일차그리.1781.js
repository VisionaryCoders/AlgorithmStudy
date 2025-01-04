// https://www.acmicpc.net/problem/10775

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input[0] // 문제 개수
const problems = input.slice(1).map((line) => line.split(' ').map(Number))

// 1. 마감일 기준 정렬 (마감일 오름차순, 같으면 컵라면 내림차순)
problems.sort((a, b) => a[0] - b[0] || b[1] - a[1])

class MinHeap {
  constructor() {
    this.heap = []
  }

  push(value) {
    this.heap.push(value)
    this._heapifyUp()
  }

  pop() {
    if (this.size() === 1) return this.heap.pop()
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this._heapifyDown()
    return min
  }

  _heapifyUp() {
    let idx = this.heap.length - 1
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      if (this.heap[parentIdx] <= this.heap[idx]) break
      ;[this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]]
      idx = parentIdx
    }
  }

  _heapifyDown() {
    let idx = 0
    while (2 * idx + 1 < this.heap.length) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let smallerChildIdx = leftChildIdx
      if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] < this.heap[leftChildIdx]) {
        smallerChildIdx = rightChildIdx
      }
      if (this.heap[idx] <= this.heap[smallerChildIdx]) break
      ;[this.heap[idx], this.heap[smallerChildIdx]] = [this.heap[smallerChildIdx], this.heap[idx]]
      idx = smallerChildIdx
    }
  }

  size() {
    return this.heap.length
  }

  top() {
    return this.heap[0]
  }
}

function solution() {
  const minHeap = new MinHeap()

  for (const [deadline, cupRamen] of problems) {
    minHeap.push(cupRamen)

    // 현재까지 선택한 문제 개수가 마감일 초과하면 최소값 제거
    if (minHeap.size() > deadline) {
      minHeap.pop()
    }
  }

  console.log(minHeap.heap.reduce((acc, curr) => (acc += curr)))
}

solution()
