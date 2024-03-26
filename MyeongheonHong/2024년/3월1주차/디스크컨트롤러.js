//https://school.programmers.co.kr/learn/courses/30/lessons/42627

const solution = (jobs) => {
  const count = jobs.length
  const minHeap = new MinHeap()
  jobs.sort((a, b) => a[0] - b[0])

  let time = 0
  let complete = 0
  let total = 0

  while (jobs.length || minHeap.size()) {
    //디스크 컨트롤러 시간이 계속 흘렀을 때, 들어온 작업의 요청시간과 같으면 minHeap에 추가.
    while (jobs.length) {
      if (jobs[0][0] === time) {
        minHeap.add(jobs.shift())
      } else break
    }

    if (minHeap.size() && time >= complete) {
      const task = minHeap.pop()
      complete = task[1] + time
      total += complete - task[0]
    }
    time++
  }

  return Math.floor(total / count)
}

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

  swap(a, b) {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }

  add(value) {
    this.heap.push(value)
    this.heapifyUp()
  }

  pop() {
    return this.heapifyDown()
  }

  heapifyDown() {
    const min = this.heap[0]
    if (this.heap.length <= 1) this.heap = []
    else this.heap[0] = this.heap.pop()

    let index = 0
    let leftChild = index * 2 + 1
    let rightChild = index * 2 + 2

    if (!this.heap[leftChild]) return min
    if (!this.heap[rightChild]) {
      if (this.heap[leftChild][1] < this.heap[index][1]) {
        this.swap(leftChild, index)
      }

      return min
    }

    while (
      (index < this.size() && this.heap[leftChild] && this.heap[leftChild][1] < this.heap[index][1]) ||
      (this.heap[rightChild] && this.heap[rightChild][1] < this.heap[index][1])
    ) {
      if (!this.heap[rightChild]) return min
      if (!this.heap[leftChild]) return min

      if (this.heap[rightChild][1]) {
        if (this.heap[leftChild][1] < this.heap[rightChild][1]) {
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

    return min
  }

  heapifyUp() {
    let lastIndex = this.heap.length - 1
    let parentIndex = Math.floor((lastIndex - 1) / 2)

    while (this.heap[parentIndex] && this.heap[parentIndex][1] > this.heap[lastIndex][1]) {
      this.swap(lastIndex, parentIndex)
      lastIndex = parentIndex
      parentIndex = Math.floor((parentIndex - 1) / 2)
    }
  }

  print() {
    console.log(this.heap)
  }
}

const jobs = [
  [24, 10],
  [28, 39],
  [43, 20],
  [37, 5],
  [47, 22],
  [20, 47],
  [15, 34],
  [15, 2],
  [35, 43],
  [26, 1],
]

console.log(solution(jobs))
