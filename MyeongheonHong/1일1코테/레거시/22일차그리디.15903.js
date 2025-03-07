// https://www.acmicpc.net/problem/15903

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(BigInt)

class MinHeap {
  constructor() {
    this.heap = []
    this.answer = []
  }

  deleteMin() {
    this.swap(0, this.heap.length - 1)
    const minValue = this.heap.pop() // 최소값 제거
    this.bubbleDown(0)
    return minValue // 제거한 최소값 반환
  }

  bubbleDown(index) {
    const leftChildIndex = 2 * index + 1
    const rightChildIndex = 2 * index + 2
    let smallest = index

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex
    }
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex
    }
    if (smallest !== index) {
      this.swap(index, smallest)
      this.bubbleDown(smallest)
    }
  }

  minSum() {
    return this.heap[0] + this.heap[1]
  }

  add(num) {
    this.heap.push(num)

    if (this.heap.length > 1) {
      this.bubbleUp(this.heap.length - 1)
    }
  }

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  bubbleUp(childIndex) {
    const parentIndex = Math.floor((childIndex - 1) / 2)

    const parent = this.heap[parentIndex]
    const child = this.heap[childIndex]

    if (parent > child) {
      this.swap(childIndex, parentIndex)
      this.bubbleUp(parentIndex)
    }
  }

  printAnswer() {
    console.log(this.heap.reduce((acc, curr) => (acc += curr)))
  }
}

function solution() {
  if (M === 0) {
    console.log(arr.reduce((acc, curr) => acc + curr, BigInt(0)).toString())
    return
  }

  const minHeap = new MinHeap()

  for (let num of arr) {
    minHeap.add(num)
  }

  for (let i = 0; i < M; i++) {
    const min1 = minHeap.deleteMin()
    const min2 = minHeap.deleteMin()
    const sum = min1 + min2
    minHeap.add(sum)
    minHeap.add(sum)
  }

  const result = minHeap.heap.reduce((acc, curr) => acc + curr, BigInt(0))
  console.log(result.toString()) // 결과를 문자열로 변환해서 출력
}

solution()
