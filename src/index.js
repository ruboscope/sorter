class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.comparator = function (a, b) {
      return a - b;
    };
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
    indices.sort();
    var tempArray=[];
    for (var i = 0; i < indices.length; i++){
      tempArray.push(this.array[indices[i]]);
    }
    tempArray.sort(this.comparator);
    for (var i = 0; i < indices.length; i++) {
      this.array[indices[i]] = tempArray.shift();
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;