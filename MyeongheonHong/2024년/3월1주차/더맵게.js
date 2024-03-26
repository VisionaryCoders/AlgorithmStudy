//https://school.programmers.co.kr/learn/courses/30/lessons/42626

class MinHeap {
  constructor() {
    this.heap = []
  }

  size() {
    return this.heap.length
  }

  peek() {
    return this.heap[0]
  }

  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  add(value) {
    this.heap.push(value)
    this.heapifyUp()
  }

  pop() {
    const lastIndex = this.heap.length - 1
    const firstItem = this.heap[0]
    this.swap(0, lastIndex)
    this.heap.pop()
    this.heapifyDown()

    return firstItem
  }

  heapifyDown() {
    let index = 0
    let leftChild = index * 2 + 1
    let rightChild = index * 2 + 2

    if (this.size() === 0) return null
    if (this.size() === 1) return

    while ((index < this.size() && this.heap[leftChild] < this.heap[index]) || this.heap[rightChild] < this.heap[index]) {
      if (this.heap[rightChild]) {
        if (this.heap[leftChild] < this.heap[rightChild]) {
          this.swap(index, leftChild)
          index = leftChild
        } else {
          this.swap(index, rightChild)
          index = rightChild
        }
      } else {
        this.swap(index, leftChild)
        index = leftChild
      }

      leftChild = index * 2 + 1
      rightChild = index * 2 + 2
    }
  }

  heapifyUp() {
    let lastIndex = this.heap.length - 1
    let parentIndex = Math.floor((lastIndex - 1) / 2)

    while (this.heap[parentIndex] && this.heap[parentIndex] > this.heap[lastIndex]) {
      this.swap(lastIndex, parentIndex)
      lastIndex = parentIndex
      parentIndex = Math.floor((parentIndex - 1) / 2)
    }
  }

  print() {
    console.log(this.heap)
  }
}

function solution(scoville, K) {
  let answer = 0

  const minHeap = new MinHeap()

  scoville.map((num) => {
    minHeap.add(num)
  })

  while (minHeap.size() >= 2) {
    if (minHeap.peek() >= K) return answer
    const first = minHeap.pop()
    const second = minHeap.pop()
    const mixed = first + second * 2
    minHeap.add(mixed)
    answer++

    if (minHeap.peek() >= K) {
      break
    }
  }

  return minHeap.peek() >= K ? answer : -1
}

const arr = [5, 8]
const K = 7
console.log(solution(arr, K))
