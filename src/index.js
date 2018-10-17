class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    const sortedArr = [];
    const sortedIndices = indices.sort((a, b) => a - b);

    for (let i = 0, len = sortedIndices.length; i < len; i++) {
      sortedArr.push(this.array[sortedIndices[i]]);
    }

    sortedArr.sort(this.comparator);

    for (let i = 0, length = sortedIndices.length; i < length; i++) {
      this.array[sortedIndices[i]] = sortedArr.shift();
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;