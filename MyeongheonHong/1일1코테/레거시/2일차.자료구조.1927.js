// https://www.acmicpc.net/problem/1927

const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../input.txt'

const input = fs.readFileSync(path).toString().trim().split('\n')
const N = +input.shift()

class MinHeap {
  constructor() {
    this.heap = []
    this.answer = []
  }

  printMin() {
    if (this.heap.length === 0) {
      this.answer.push(0)
    } else {
      this.answer.push(this.heap[0])
      this.deleteMin()
    }
  }

  deleteMin() {
    this.swap(0, this.heap.length - 1)
    this.heap.pop()
    this.bubbleDown(0)
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

  add(num) {
    if (num === 0) {
      this.printMin()
      return
    }

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
    console.log(this.answer.join('\n'))
  }
}

function solution() {
  const minHeap = new MinHeap()

  for (let i = 0; i < N; i++) {
    minHeap.add(+input[i])
  }

  minHeap.printAnswer()
}

solution()
