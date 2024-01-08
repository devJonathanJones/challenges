const sequenceSum = (begin, end, step) => {
    let count = 0
    for (i = begin; i <= end; i = i + step) {
      count = count + i
    }
    return count
  }
  